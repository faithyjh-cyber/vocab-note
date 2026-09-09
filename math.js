// ══════════════════════════════════════════════════════
// 수학: 분수의 덧셈과 뺄셈 (초4-2학기)
// ══════════════════════════════════════════════════════

const MATH_KEY = 'math_hamin';

// 단계 정의
const LEVELS = [
  { lv:1, name:'같은 분모 덧셈', desc:'분모가 같은 진분수 덧셈' },
  { lv:2, name:'같은 분모 뺄셈', desc:'분모가 같은 진분수 뺄셈' },
  { lv:3, name:'대분수 덧셈', desc:'받아올림 없는 대분수 덧셈' },
  { lv:4, name:'대분수 뺄셈', desc:'받아내림 없는 대분수 뺄셈' },
  { lv:5, name:'받아올림 덧셈', desc:'합이 가분수가 되는 덧셈' },
  { lv:6, name:'받아내림 뺄셈', desc:'빌려오는 대분수 뺄셈' },
];

// ── 유틸 ─────────────────────────────────────────────
function gcd(a,b){ return b===0?a:gcd(b,a%b); }
function randInt(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }

// 기약분수로 줄이기
function simplify(n,d){
  if(n===0) return [0,1];
  const g=gcd(Math.abs(n),Math.abs(d));
  return [n/g,d/g];
}

// 대분수 표기 {정수, 분자, 분모}
function toMixed(n,d){
  if(n===0) return {w:0,n:0,d:d};
  const w=Math.floor(n/d);
  const r=n%d;
  return {w,n:r,d};
}

// 답 비교 (기약분수 & 대분수 모두 정답 처리)
function checkAnswer(input, correctN, correctD) {
  const s = input.trim().replace(/\s+/g,' ');
  if (!s) return false;

  // "2 1/3" 대분수 형태
  let m = s.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (m) {
    const w=+m[1], n=+m[2], d=+m[3];
    if (d===0) return false;
    const total = w*d + n;
    return total*correctD === correctN*d;
  }
  // "7/3" 분수 형태
  m = s.match(/^(\d+)\/(\d+)$/);
  if (m) {
    const n=+m[1], d=+m[2];
    if (d===0) return false;
    return n*correctD === correctN*d;
  }
  // "2" 정수 형태
  m = s.match(/^(\d+)$/);
  if (m) {
    const n=+m[1];
    return n*correctD === correctN;
  }
  return false;
}

// ── 문제 생성 ─────────────────────────────────────────
function genProblem(lv) {
  let d, a, b, an, bn, resN, resD, q;

  switch(lv) {
    case 1: { // 같은 분모 덧셈 (합이 1 이하)
      d = randInt(3,10);
      an = randInt(1,d-2);
      bn = randInt(1,d-1-an);
      q = `${frac(an,d)} + ${frac(bn,d)}`;
      [resN,resD] = simplify(an+bn, d);
      break;
    }
    case 2: { // 같은 분모 뺄셈
      d = randInt(3,10);
      an = randInt(2,d-1);
      bn = randInt(1,an-1);
      q = `${frac(an,d)} - ${frac(bn,d)}`;
      [resN,resD] = simplify(an-bn, d);
      break;
    }
    case 3: { // 대분수 덧셈 (받아올림 없음)
      d = randInt(3,9);
      const w1=randInt(1,4), w2=randInt(1,4);
      an = randInt(1,d-2);
      bn = randInt(1,d-1-an);
      q = `${mixedFrac(w1,an,d)} + ${mixedFrac(w2,bn,d)}`;
      [resN,resD] = simplify((w1+w2)*d + an+bn, d);
      break;
    }
    case 4: { // 대분수 뺄셈 (받아내림 없음)
      d = randInt(3,9);
      const w1=randInt(2,6);
      const w2=randInt(1,w1-1);
      an = randInt(2,d-1);
      bn = randInt(1,an-1);
      q = `${mixedFrac(w1,an,d)} - ${mixedFrac(w2,bn,d)}`;
      [resN,resD] = simplify((w1-w2)*d + an-bn, d);
      break;
    }
    case 5: { // 받아올림 덧셈 (합이 1 넘음)
      d = randInt(4,10);
      an = randInt(2,d-1);
      bn = randInt(d-an+1, d-1);
      const w1=randInt(1,4), w2=randInt(1,4);
      q = `${mixedFrac(w1,an,d)} + ${mixedFrac(w2,bn,d)}`;
      [resN,resD] = simplify((w1+w2)*d + an+bn, d);
      break;
    }
    case 6: { // 받아내림 뺄셈
      d = randInt(4,10);
      const w1=randInt(2,6);
      const w2=randInt(1,w1-1);
      an = randInt(1,d-2);
      bn = randInt(an+1, d-1);
      q = `${mixedFrac(w1,an,d)} - ${mixedFrac(w2,bn,d)}`;
      [resN,resD] = simplify((w1-w2)*d + an-bn, d);
      break;
    }
  }
  return { q, resN, resD, lv };
}

// 분수 HTML
function frac(n,d) {
  return `<span class="fr"><span class="fr-n">${n}</span><span class="fr-d">${d}</span></span>`;
}
function mixedFrac(w,n,d) {
  return `<span class="mx"><span class="mx-w">${w}</span>${frac(n,d)}</span>`;
}
// 정답 표시용 (텍스트)
function answerText(n,d) {
  if (d===1) return String(n);
  if (n<d) return `${n}/${d}`;
  const w=Math.floor(n/d), r=n%d;
  if (r===0) return String(w);
  return `${w} ${r}/${d}`;
}

// ── 상태 ──────────────────────────────────────────────
let mathState = {
  level: 1,
  problems: [],
  idx: 0,
  answers: [],
  correct: 0,
  finished: false,
  history: [],
};

// ── 저장/불러오기 ──────────────────────────────────────
function mathLoad() {
  return new Promise((resolve)=>{
    const cbName='mcb_'+Date.now();
    const script=document.createElement('script');
    window[cbName]=(data)=>{
      delete window[cbName];
      if(script.parentNode)script.parentNode.removeChild(script);
      resolve((data&&typeof data.level==='number')?data:{level:1,history:[]});
    };
    script.onerror=()=>resolve({level:1,history:[]});
    script.src=API+'?kid='+MATH_KEY+'&callback='+cbName;
    document.body.appendChild(script);
    setTimeout(()=>resolve({level:1,history:[]}),10000);
  });
}
async function mathSave(data) {
  try { await fetch(API,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify({kid:MATH_KEY,data})}); } catch {}
}

// ── 세션 시작 ──────────────────────────────────────────
function startMathSession() {
  mathState.problems = [];
  for (let i=0;i<10;i++) mathState.problems.push(genProblem(mathState.level));
  mathState.idx = 0;
  mathState.answers = [];
  mathState.correct = 0;
  mathState.finished = false;
  renderMath();
}

function submitAnswer() {
  const inp = document.getElementById('math-input');
  const val = inp.value;
  if (!val.trim()) return;
  const p = mathState.problems[mathState.idx];
  const ok = checkAnswer(val, p.resN, p.resD);
  mathState.answers.push({ q:p.q, input:val, ok, correct:answerText(p.resN,p.resD) });
  if (ok) mathState.correct++;

  // 즉시 피드백
  const fb = document.getElementById('math-feedback');
  fb.textContent = ok ? '정답이에요! ⭕' : `아쉬워요. 정답은 ${answerText(p.resN,p.resD)}`;
  fb.className = 'math-fb ' + (ok?'ok':'no');
  inp.disabled = true;
  document.getElementById('math-submit').style.display='none';
  document.getElementById('math-next').style.display='block';
}

function nextProblem() {
  mathState.idx++;
  if (mathState.idx >= mathState.problems.length) {
    finishSession();
  } else {
    renderMath();
  }
}

async function finishSession() {
  mathState.finished = true;
  const rate = Math.round(mathState.correct/mathState.problems.length*100);
  const today = new Date();
  const dateStr = `${today.getMonth()+1}/${today.getDate()}`;

  // 저장
  const saved = await mathLoad();
  const hist = saved.history || [];
  hist.push({ date:dateStr, level:mathState.level, correct:mathState.correct, total:10, rate });
  let newLevel = mathState.level;
  // 90% 이상이면 레벨업
  if (rate >= 90 && mathState.level < LEVELS.length) newLevel = mathState.level + 1;
  // 50% 미만이면 레벨 다운
  else if (rate < 50 && mathState.level > 1) newLevel = mathState.level - 1;

  await mathSave({ level:newLevel, history:hist.slice(-30) });
  mathState.history = hist;
  mathState.nextLevel = newLevel;
  renderMathResult();
}

// ── 렌더 ──────────────────────────────────────────────
function renderMath() {
  const p = mathState.problems[mathState.idx];
  const lvInfo = LEVELS.find(l=>l.lv===mathState.level);
  document.getElementById('page-math').innerHTML = `
    <div class="math-header">
      <h2>${lvInfo.name}</h2>
      <p>${mathState.idx+1} / 10 · ${lvInfo.desc}</p>
    </div>
    <div class="math-progress"><div class="math-bar" style="width:${(mathState.idx)/10*100}%"></div></div>
    <div class="math-card">
      <div class="math-q">${p.q} = ?</div>
      <input id="math-input" class="math-input" inputmode="text" autocomplete="off" placeholder="예) 3/4 또는 1 2/5" onkeydown="if(event.key==='Enter')submitAnswer()">
      <div id="math-feedback" class="math-fb"></div>
      <button id="math-submit" class="math-btn" onclick="submitAnswer()">확인</button>
      <button id="math-next" class="math-btn" style="display:none" onclick="nextProblem()">다음 문제 →</button>
    </div>
    <p class="math-hint">답은 기약분수로 써주세요<br>대분수는 "1 2/5" 처럼 띄어쓰기</p>
  `;
  setTimeout(()=>{ const i=document.getElementById('math-input'); if(i) i.focus(); }, 100);
}

function renderMathResult() {
  const rate = Math.round(mathState.correct/10*100);
  const lvInfo = LEVELS.find(l=>l.lv===mathState.level);
  const leveledUp = mathState.nextLevel > mathState.level;
  const leveledDown = mathState.nextLevel < mathState.level;
  const nextInfo = LEVELS.find(l=>l.lv===mathState.nextLevel);

  const wrongList = mathState.answers.filter(a=>!a.ok);

  let msg='', emoji='';
  if (rate>=90){ msg='아주 잘했어요!'; emoji='🎉'; }
  else if (rate>=70){ msg='잘하고 있어요!'; emoji='👍'; }
  else if (rate>=50){ msg='조금만 더 연습해요'; emoji='💪'; }
  else { msg='천천히 다시 해봐요'; emoji='📚'; }

  document.getElementById('page-math').innerHTML = `
    <div class="math-header">
      <h2>${emoji} ${msg}</h2>
      <p>${lvInfo.name}</p>
    </div>
    <div class="math-result">
      <div class="math-score">${mathState.correct}<span>/10</span></div>
      <div class="math-rate">정답률 ${rate}%</div>
    </div>
    ${leveledUp ? `<div class="math-levelup">🎊 다음 단계로 올라가요!<br><strong>${nextInfo.name}</strong></div>` : ''}
    ${leveledDown ? `<div class="math-leveldown">이전 단계를 한 번 더 연습해요<br><strong>${nextInfo.name}</strong></div>` : ''}
    ${wrongList.length ? `
      <div class="math-card">
        <div class="clabel">틀린 문제</div>
        ${wrongList.map(a=>`
          <div class="math-wrong">
            <div class="mw-q">${a.q}</div>
            <div class="mw-a">내 답: <span class="no">${a.input}</span> · 정답: <span class="ok">${a.correct}</span></div>
          </div>`).join('')}
      </div>` : ''}
    <button class="math-btn" onclick="mathState.level=${mathState.nextLevel};startMathSession()">다시 풀기</button>
    <button class="math-btn ghost" onclick="renderMathHome()">처음으로</button>
  `;
}

async function renderMathHome() {
  document.getElementById('page-math').innerHTML = `<div class="loading">불러오는 중...</div>`;
  const saved = await mathLoad();
  mathState.level = saved.level || 1;
  const hist = saved.history || [];
  const lvInfo = LEVELS.find(l=>l.lv===mathState.level);

  const recentHTML = hist.length===0
    ? `<p class="empty">아직 기록이 없어요</p>`
    : hist.slice(-6).reverse().map(h=>{
        const c = h.rate>=90?'#4caf6e':h.rate>=70?'#c47a2a':'#d94f4f';
        return `<div class="math-hist">
          <span class="mh-date">${h.date}</span>
          <span class="mh-lv">Lv.${h.level}</span>
          <span class="mh-score" style="color:${c}">${h.correct}/${h.total} (${h.rate}%)</span>
        </div>`;
      }).join('');

  document.getElementById('page-math').innerHTML = `
    <div class="math-header">
      <h2>분수의 덧셈과 뺄셈</h2>
      <p>하민이 · 초등 4학년</p>
    </div>
    <div class="math-card center">
      <div class="math-lv-badge">Lv.${mathState.level}</div>
      <div class="math-lv-name">${lvInfo.name}</div>
      <div class="math-lv-desc">${lvInfo.desc}</div>
      <button class="math-btn" onclick="startMathSession()">10문제 풀기 →</button>
    </div>
    <div class="math-card">
      <div class="clabel">단계</div>
      ${LEVELS.map(l=>`
        <div class="math-lv-row ${l.lv===mathState.level?'on':''} ${l.lv<mathState.level?'done':''}">
          <span class="mlr-num">${l.lv<mathState.level?'✓':'Lv.'+l.lv}</span>
          <span class="mlr-name">${l.name}</span>
        </div>`).join('')}
    </div>
    <div class="math-card">
      <div class="clabel">최근 기록</div>
      ${recentHTML}
    </div>
  `;
}
