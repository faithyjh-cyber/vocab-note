// ══════════════════════════════════════════════════════
// 단어 채점 — 종이에 쓴 답을 보고 ○ / ✗ 만 누르기
// 끝나면 오답이 오답노트에 자동 저장됨
// ══════════════════════════════════════════════════════

let ckState = {
  kid: 1,
  words: [],      // [[en, pron, kr], ...]
  idx: 0,
  results: [],    // [{ w:[en,pron,kr], ok:true/false }]
  info: null,     // getTodayWords 결과
  saving: false,
};

// ── 채점 시작 ─────────────────────────────────────────
function ckStart(kid) {
  const info = getTodayWords(kid);
  if (!info.ok) {
    alert(info.reason === 'rest' ? '오늘은 쉬는 날이에요 🎉' : '오늘 단어가 아직 준비 중이에요');
    return;
  }
  // 순서 섞기
  const shuffled = info.words.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  ckState = { kid, words: shuffled, idx: 0, results: [], info, saving: false };
  ckRender();
}

// ── 채점 화면 ─────────────────────────────────────────
function ckRender() {
  const s = ckState;
  const w = s.words[s.idx];
  const color = KIDS[s.kid].color;
  const total = s.words.length;
  const wrongSoFar = s.results.filter(r => !r.ok).length;

  document.getElementById('page-word').innerHTML = `
    <div class="ck-top">
      <button class="ck-back" onclick="ckExit()">← 나가기</button>
      <span class="ck-count">${s.idx + 1} / ${total}</span>
    </div>
    <div class="g-progress"><div class="g-bar" style="width:${s.idx / total * 100}%;background:${color}"></div></div>

    <div class="ck-card">
      <div class="ck-label">이 뜻의 단어를 맞게 썼나요?</div>
      <div class="ck-kr">${w[2]}</div>
      <div class="ck-answer">
        <span class="ck-en" style="color:${color}">${w[0]}</span>
        <button class="spk ck-spk" onclick="speak('${w[0]}',event)">🔊</button>
      </div>
      <div class="ck-pron">${w[1]}</div>
    </div>

    <div class="ck-btns">
      <button class="ck-btn wrong" onclick="ckMark(false)"><span>✗</span>틀렸어요</button>
      <button class="ck-btn right" onclick="ckMark(true)"><span>○</span>맞았어요</button>
    </div>

    <div class="ck-status">
      맞은 개수 ${s.results.filter(r => r.ok).length}개 · 틀린 개수 <b>${wrongSoFar}개</b>
      ${s.idx > 0 ? '<button class="ck-undo" onclick="ckUndo()">← 방금 것 고치기</button>' : ''}
    </div>
  `;
  window.scrollTo(0, 0);
}

// ── ○ / ✗ 표시 ───────────────────────────────────────
function ckMark(ok) {
  ckState.results.push({ w: ckState.words[ckState.idx], ok });
  ckState.idx++;
  if (ckState.idx >= ckState.words.length) ckFinish();
  else ckRender();
}

function ckUndo() {
  if (ckState.idx === 0) return;
  ckState.idx--;
  ckState.results.pop();
  ckRender();
}

function ckExit() {
  if (ckState.idx > 0 && !confirm('채점을 그만둘까요? 지금까지 표시한 건 저장되지 않아요.')) return;
  renderWordContent();
}

// ── 결과 + 자동 저장 ──────────────────────────────────
async function ckFinish() {
  const s = ckState;
  const kid = s.kid;
  const total = s.words.length;
  const wrongList = s.results.filter(r => !r.ok).map(r => r.w);
  const correct = total - wrongList.length;
  const rate = Math.round(correct / total * 100);
  const color = KIDS[kid].color;

  let msg, emoji;
  if (rate === 100) { msg = '하나도 안 틀렸어요!'; emoji = '🎉'; }
  else if (rate >= 80) { msg = '아주 잘했어요'; emoji = '👍'; }
  else if (rate >= 60) { msg = '잘하고 있어요'; emoji = '💪'; }
  else { msg = '오답을 한 번 더 볼까요?'; emoji = '📚'; }

  document.getElementById('page-word').innerHTML = `
    <div class="ck-result-head">
      <h2>${emoji} ${msg}</h2>
      <p>${KIDS[kid].name} · Day ${s.info.day}${s.info.part ? (s.info.part === 1 ? ' ①' : ' ②') : ''}</p>
    </div>
    <div class="ck-result">
      <div class="ck-score" style="color:${color}">${correct}<span>/${total}</span></div>
      <div class="ck-rate">정답률 ${rate}%</div>
    </div>
    ${wrongList.length ? `
      <div class="ck-card plain">
        <div class="clabel">틀린 단어 ${wrongList.length}개</div>
        ${wrongList.map(w => `
          <div class="ck-wrong-row">
            <span class="ck-wrong-en" style="color:${color}">${w[0]}</span>
            <span class="ck-wrong-pron">${w[1]}</span>
            <span class="ck-wrong-kr">${w[2]}</span>
            <button class="spk" onclick="speak('${w[0]}',event)">🔊</button>
          </div>`).join('')}
      </div>` : ''}
    <div id="ck-save-msg" class="ck-save-msg">오답노트에 저장 중...</div>
    <button class="g-btn" style="background:${color}" onclick="ckStart(${kid})">다시 채점하기</button>
    <button class="g-btn ghost" onclick="renderWordContent()">단어로 돌아가기</button>
  `;
  window.scrollTo(0, 0);

  // 오답노트에 자동 저장
  const saved = await ckSave(kid, wrongList.map(w => w[0].toLowerCase()), total);
  const el = document.getElementById('ck-save-msg');
  if (el) {
    if (saved) {
      el.textContent = '오답노트에 저장됐어요 ✓';
      el.className = 'ck-save-msg ok';
    } else {
      el.textContent = '저장에 실패했어요. 오답 탭에서 직접 입력해 주세요.';
      el.className = 'ck-save-msg no';
    }
  }
}

// ── 오답노트 저장 (오답 탭과 같은 구조) ─────────────────
async function ckSave(kid, wrongWords, total) {
  try {
    const date = formatDateFull();
    // 최신 데이터 불러오기
    let data = await apiLoad(kid);
    if (!data || !data.records) data = { records: [], wrongs: {} };

    // 같은 날짜 기록이 있으면 먼저 되돌리기
    const idx = data.records.findIndex(r => r.date === date);
    if (idx >= 0) {
      data.records[idx].wrong.forEach(w => {
        if (data.wrongs[w]) {
          data.wrongs[w].count--;
          data.wrongs[w].dates = data.wrongs[w].dates.filter(d => d !== date);
          if (data.wrongs[w].count <= 0) delete data.wrongs[w];
        }
      });
      data.records[idx] = { date, total, wrong: wrongWords };
    } else {
      data.records.push({ date, total, wrong: wrongWords });
    }

    wrongWords.forEach(w => {
      if (!data.wrongs[w]) data.wrongs[w] = { count: 0, dates: [] };
      data.wrongs[w].count++;
      if (!data.wrongs[w].dates.includes(date)) data.wrongs[w].dates.push(date);
    });

    await apiSave(kid, data);
    dataMap[kid] = data;
    renderNote(kid);
    return true;
  } catch (e) {
    return false;
  }
}
