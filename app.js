// ── 발음 기능 (미국식) ─────────────────────────────────
function speak(word, e) {
  if (e) e.stopPropagation();
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'en-US';
    u.rate = 0.85;
    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(v => v.lang === 'en-US' && /Samantha|Alex|Google US|Microsoft Zira|Microsoft David/i.test(v.name))
                 || voices.find(v => v.lang === 'en-US');
    if (usVoice) u.voice = usVoice;
    window.speechSynthesis.speak(u);
  } catch (err) {}
}

function openDict(word, e) {
  if (e) e.stopPropagation();
  const url = 'https://en.dict.naver.com/#/search?query=' + encodeURIComponent(word);
  window.open(url, '_blank');
}

// 음성 목록 미리 로드
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// ── 날짜 계산 ──────────────────────────────────────────
function getTodayDay() {
  const today = new Date(); today.setHours(0,0,0,0);
  if (today.getDay()===0 || today.getDay()===6) return -1;
  const start = new Date(START_DATE); start.setHours(0,0,0,0);
  let count=0, d=new Date(start);
  while (d<=today) {
    if (d.getDay()!==0 && d.getDay()!==6) count++;
    if (d.getTime()===today.getTime()) break;
    d.setDate(d.getDate()+1);
  }
  return count;
}
function formatDate() { const d=new Date(); return `${d.getMonth()+1}/${d.getDate()}`; }

// ── 상태 ───────────────────────────────────────────────
let currentKidWord=1, currentKidNote=1;
let dataMap={1:null,2:null};

// ── 메인 탭 ───────────────────────────────────────────
function switchMain(tab) {
  document.querySelectorAll('.main-tab').forEach((t,i)=>t.classList.toggle('on',(i===0&&tab==='word')||(i===1&&tab==='note')));
  document.getElementById('page-word').classList.toggle('active',tab==='word');
  document.getElementById('page-note').classList.toggle('active',tab==='note');
}

// ── 단어 탭 ───────────────────────────────────────────
function switchKidWord(k) {
  currentKidWord=k;
  document.querySelectorAll('#page-word .kid-tab').forEach((t,i)=>{ t.className='kid-tab'+(i+1===k?` on${k}`:''); });
  renderWordContent();
}

function renderWordContent() {
  const dayNum=getTodayDay();
  const titleEl=document.getElementById('word-day-title');
  const subEl=document.getElementById('word-day-sub');
  const contentEl=document.getElementById('word-content');
  const k=currentKidWord;
  const color=KIDS[k].color;

  if (dayNum===-1) {
    titleEl.textContent='오늘은 주말 🎉';
    subEl.textContent='푹 쉬고 월요일에 또 만나요';
    contentEl.innerHTML=`<div class="weekend-msg">지난 단어를 복습해보는 건 어떨까요? 📚</div>`;
    return;
  }

  if (k===2) {
    // 하민: 하준의 절반 속도, 하루 10개
    const halfDay=Math.ceil(dayNum/2);
    const halfDayData=DAYS.find(d=>d.day===halfDay);
    titleEl.textContent=`하민 · Day ${halfDay} ${dayNum%2===1?'①':'②'}`;
    subEl.textContent=`${formatDate()} · 오늘 10개`;
    if (!halfDayData) { contentEl.innerHTML=`<div class="no-day">준비 중이에요 📝</div>`; return; }
    const allWords=halfDayData.sections.flatMap(s=>s.words);
    const kidWords=dayNum%2===1?allWords.slice(0,10):allWords.slice(10,20);
    const label=dayNum%2===1?halfDayData.sections[0]?.label:halfDayData.sections[1]?.label||'';
    contentEl.innerHTML=`<div class="word-card">
      <div class="word-card-header">
        <span class="word-card-title">${halfDayData.title} · ${halfDayData.subtitle}</span>
        <span class="word-badge" style="background:${color}">10 words</span>
      </div>
      <div class="word-section-label">${label}</div>
      ${kidWords.map((w,i)=>`<div class="word-row"><span class="word-num">${i+1}</span><span class="word-en" style="color:${color}" onclick="openDict('${w[0]}',event)">${w[0]}</span><span class="word-pron">${w[1]}</span><span class="word-kr">${w[2]}</span><button class="spk" onclick="speak('${w[0]}',event)">🔊</button></div>`).join('')}
    </div>`;
    return;
  }

  // 하준
  titleEl.textContent=`하준 · Day ${dayNum}`;
  subEl.textContent=`${formatDate()} · 오늘 20개`;
  const dayData=DAYS.find(d=>d.day===dayNum);
  if (!dayData) { contentEl.innerHTML=`<div class="no-day">Day ${dayNum} 단어가 아직 준비 중이에요 📝<br>곧 추가될 예정이에요!</div>`; return; }
  contentEl.innerHTML=dayData.sections.map((sec,si)=>`
    <div class="word-card">
      <div class="word-card-header">
        <span class="word-card-title">${dayData.title} · ${dayData.subtitle}</span>
        ${si===0?`<span class="word-badge" style="background:${color}">20 words</span>`:''}
      </div>
      <div class="word-section-label">${sec.label}</div>
      ${sec.words.map((w,i)=>`<div class="word-row"><span class="word-num">${si*10+i+1}</span><span class="word-en" style="color:${color}" onclick="openDict('${w[0]}',event)">${w[0]}</span><span class="word-pron">${w[1]}</span><span class="word-kr">${w[2]}</span><button class="spk" onclick="speak('${w[0]}',event)">🔊</button></div>`).join('')}
    </div>`).join('');
}

// ── 오답노트 탭 ───────────────────────────────────────
function switchKidNote(k) {
  currentKidNote=k;
  document.querySelectorAll('#page-note .kid-tab').forEach((t,i)=>{ t.className='kid-tab'+(i+1===k?` on${k}`:''); });
  document.getElementById('note-sec1').classList.toggle('active',k===1);
  document.getElementById('note-sec2').classList.toggle('active',k===2);
}

// ── API ───────────────────────────────────────────────
function apiLoad(kid) {
  return new Promise((resolve)=>{
    const cbName='cb_'+Date.now();
    const script=document.createElement('script');
    window[cbName]=(data)=>{ delete window[cbName]; if(script.parentNode)script.parentNode.removeChild(script); resolve((data&&data.records)?data:{records:[],wrongs:{}}); };
    script.onerror=()=>resolve({records:[],wrongs:{}});
    script.src=API+'?kid=kid'+kid+'&callback='+cbName;
    document.body.appendChild(script);
    setTimeout(()=>resolve({records:[],wrongs:{}}),10000);
  });
}
async function apiSave(kid,data) {
  try { await fetch(API,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify({kid:'kid'+kid,data})}); } catch {}
}

// ── 오답 추가 ─────────────────────────────────────────
async function addRecord(kid) {
  const date=document.getElementById(`d${kid}-date`).value.trim();
  const total=parseInt(document.getElementById(`d${kid}-total`).value)||KIDS[kid].total;
  const wordsRaw=document.getElementById(`d${kid}-words`).value.trim();
  const msgEl=document.getElementById(`d${kid}-msg`);
  if (!date){msgEl.style.color='#d94f4f';msgEl.textContent='날짜를 입력해 주세요';return;}
  msgEl.style.color='#a0927c';msgEl.textContent='저장 중...';
  document.getElementById(`d${kid}-btn`).disabled=true;
  const wrong=wordsRaw?wordsRaw.split(',').map(w=>w.trim().toLowerCase()).filter(Boolean):[];
  const data=JSON.parse(JSON.stringify(dataMap[kid]));
  const idx=data.records.findIndex(r=>r.date===date);
  if (idx>=0){
    data.records[idx].wrong.forEach(w=>{if(data.wrongs[w]){data.wrongs[w].count--;data.wrongs[w].dates=data.wrongs[w].dates.filter(d=>d!==date);if(data.wrongs[w].count<=0)delete data.wrongs[w];}});
    data.records[idx]={date,total,wrong};
  } else { data.records.push({date,total,wrong}); }
  wrong.forEach(w=>{if(!data.wrongs[w])data.wrongs[w]={count:0,dates:[]};data.wrongs[w].count++;if(!data.wrongs[w].dates.includes(date))data.wrongs[w].dates.push(date);});
  await apiSave(kid,data);
  dataMap[kid]=data; renderNote(kid);
  document.getElementById(`d${kid}-date`).value='';
  document.getElementById(`d${kid}-words`).value='';
  msgEl.style.color='#4caf6e';msgEl.textContent='저장됐어요 ✓';
  setTimeout(()=>{msgEl.textContent='';},2500);
  document.getElementById(`d${kid}-btn`).disabled=false;
}

// ── 오답노트 렌더 ──────────────────────────────────────
function renderNote(kid) {
  const data=dataMap[kid]; if(!data)return;
  const {color,cls,total:def}=KIDS[kid];
  const records=data.records||[],wrongs=data.wrongs||{};
  const totalW=records.reduce((s,r)=>s+r.wrong.length,0);
  const days=records.length;
  const avg=days>0?Math.round(records.reduce((s,r)=>s+((r.total-r.wrong.length)/r.total*100),0)/days):null;
  const wrongEntries=Object.entries(wrongs).sort((a,b)=>b[1].count-a[1].count);
  const chartHTML=records.length===0?`<p class="empty">아직 기록이 없어요</p>`:records.slice(-8).map(r=>{
    const pct=Math.round(((r.total-r.wrong.length)/r.total)*100);
    const bc=pct>=90?'#4caf6e':pct>=70?color:'#d94f4f';
    return`<div class="bar-row"><span class="bar-date">${r.date}</span><div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${bc}"><span class="bar-pct">${pct}%</span></div></div><span class="bar-cnt">${r.wrong.length>0?'-'+r.wrong.length:'✓'}</span></div>`;
  }).join('');
  const wrongHTML=wrongEntries.length===0?`<p class="empty">오답이 없어요 🎉</p>`:wrongEntries.map(([w,info])=>`
    <div class="wrong-item">
      <div><div class="wi-word" style="color:${color}">${w}</div><div class="wi-mean">${DICT[w.toLowerCase()]||''}</div><div class="wi-dates">${info.dates.join(', ')}</div></div>
      <div class="badge">${info.count}회</div>
    </div>`).join('');
  document.getElementById(`note-sec${kid}`).innerHTML=`
    <div class="summary">
      <div class="scard"><div class="sval" style="color:#d94f4f">${totalW}</div><div class="slabel">누적 오답</div></div>
      <div class="scard"><div class="sval" style="color:#4caf6e">${avg!==null?avg+'%':'-'}</div><div class="slabel">평균 정답률</div></div>
      <div class="scard"><div class="sval" style="color:${color}">${days}</div><div class="slabel">진행 일수</div></div>
    </div>
    <div class="card"><div class="clabel">일별 정답률</div>${chartHTML}</div>
    <div class="card">
      <div class="clabel">오답 입력</div>
      <div class="inp-row"><input id="d${kid}-date" placeholder="${formatDate()}(월)"><input id="d${kid}-total" class="inp-num" type="number" value="${def}"></div>
      <input id="d${kid}-words" placeholder="틀린 단어 (쉼표 구분, 없으면 비워두세요)" style="margin-bottom:10px">
      <button id="d${kid}-btn" class="btn ${cls}" onclick="addRecord(${kid})">기록 추가</button>
      <div id="d${kid}-msg" class="msg"></div>
    </div>
    <div class="card">
      <div class="wrong-header"><span class="clabel" style="margin:0">오답 모음</span>${wrongEntries.length>0?`<span class="wrong-cnt">${wrongEntries.length}개</span>`:''}</div>
      ${wrongHTML}
    </div>`;
}

// ── 초기화 ────────────────────────────────────────────
async function init() {
  renderWordContent();
  document.getElementById('note-sec1').innerHTML=`<div class="loading">불러오는 중...</div>`;
  document.getElementById('note-sec2').innerHTML=`<div class="loading">불러오는 중...</div>`;
  const [d1,d2]=await Promise.all([apiLoad(1),apiLoad(2)]);
  if (!d1.records.length) {
    d1.records.push({date:'8/31(월)',total:20,wrong:['find']});
    d1.wrongs['find']={count:1,dates:['8/31(월)']};
    await apiSave(1,d1);
  }
  if (!d2.records.length) {
    d2.records.push({date:'8/31(월)',total:10,wrong:['sofa','mirror']});
    d2.wrongs['sofa']={count:1,dates:['8/31(월)']};
    d2.wrongs['mirror']={count:1,dates:['8/31(월)']};
    await apiSave(2,d2);
  }
  dataMap={1:d1,2:d2};
  renderNote(1); renderNote(2);
}

init();
