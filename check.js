// ══════════════════════════════════════════════════════
// 단어 채점 — 종이에 쓴 답을 보고 10문제를 한 화면에서 ○ / ✗ 표시
// 저장하면 오답이 오답노트에 자동으로 쌓임
// ══════════════════════════════════════════════════════

let ckState = {
  kid: 1,
  words: [],      // [[en, pron, kr], ...] 순서 섞인 상태
  marks: [],      // null | true(맞음) | false(틀림)
  info: null,
  saving: false,
};

// ── 채점 시작 ─────────────────────────────────────────
function ckStart(kid) {
  const info = getTodayWords(kid);
  if (!info.ok) {
    alert(info.reason === 'rest' ? '오늘은 쉬는 날이에요 🎉' : '오늘 단어가 아직 준비 중이에요');
    return;
  }
  const shuffled = info.words.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  ckState = {
    kid, words: shuffled,
    marks: new Array(shuffled.length).fill(null),
    info, saving: false,
  };
  ckRender();
}

// ── 채점 목록 화면 ────────────────────────────────────
function ckRender() {
  const s = ckState;
  const color = KIDS[s.kid].color;
  const total = s.words.length;
  const marked = s.marks.filter(m => m !== null).length;
  const wrongCnt = s.marks.filter(m => m === false).length;
  const left = total - marked;
  const ready = left === 0;

  const rows = s.words.map((w, i) => {
    const m = s.marks[i];
    const dim = m === null ? ' dim' : '';
    return `<div class="ck-row${dim}">
      <span class="ck-no">${i + 1}</span>
      <div class="ck-word">
        <div class="ck-row-en" style="color:${color}" onclick="speak('${w[0]}',event)">${w[0]}</div>
        <div class="ck-row-kr">${w[2]}</div>
      </div>
      <div class="ck-marks">
        <button class="ck-mk x${m === false ? ' on' : ''}" onclick="ckMark(${i},false)" aria-label="${i+1}번 틀림">✗</button>
        <button class="ck-mk o${m === true ? ' on' : ''}" onclick="ckMark(${i},true)" aria-label="${i+1}번 맞음">○</button>
      </div>
    </div>`;
  }).join('');

  document.getElementById('page-word').innerHTML = `
    <div class="ck-top">
      <button class="ck-back" onclick="ckExit()">← 나가기</button>
      <button class="ck-allo" onclick="ckAllRight()">전부 ○</button>
    </div>

    <div class="ck-head">
      <h2>채점하기</h2>
      <p>${KIDS[s.kid].name} · Day ${s.info.day}${s.info.part ? (s.info.part === 1 ? ' ①' : ' ②') : ''} · ${total}문제</p>
    </div>

    <div class="ck-list">${rows}</div>

    <p class="ck-status">
      표시한 문제 ${marked} / ${total} · 틀린 개수 <b>${wrongCnt}개</b>
    </p>

    <button class="ck-save ${ready ? '' : 'off'}" style="${ready ? 'background:' + color : ''}"
      onclick="ckSubmit()" ${ready ? '' : 'disabled'}>
      ${ready ? '저장하기' : `저장하기 (${left}개 남음)`}
    </button>
  `;
}

// ── 한 문제 표시 (화면 다시 그리지 않고 버튼만 갱신) ─────
function ckMark(i, ok) {
  ckState.marks[i] = ok;
  ckUpdateRow(i);
  ckUpdateFooter();
}

function ckUpdateRow(i) {
  const rows = document.querySelectorAll('.ck-row');
  const row = rows[i];
  if (!row) return;
  const m = ckState.marks[i];
  row.classList.toggle('dim', m === null);
  const [xBtn, oBtn] = row.querySelectorAll('.ck-mk');
  xBtn.classList.toggle('on', m === false);
  oBtn.classList.toggle('on', m === true);
}

function ckUpdateFooter() {
  const s = ckState;
  const total = s.words.length;
  const marked = s.marks.filter(m => m !== null).length;
  const wrongCnt = s.marks.filter(m => m === false).length;
  const left = total - marked;
  const ready = left === 0;

  const st = document.querySelector('.ck-status');
  if (st) st.innerHTML = `표시한 문제 ${marked} / ${total} · 틀린 개수 <b>${wrongCnt}개</b>`;

  const btn = document.querySelector('.ck-save');
  if (btn) {
    btn.classList.toggle('off', !ready);
    btn.disabled = !ready;
    btn.style.background = ready ? KIDS[s.kid].color : '';
    btn.textContent = ready ? '저장하기' : `저장하기 (${left}개 남음)`;
  }
}

function ckAllRight() {
  ckState.marks = ckState.marks.map(() => true);
  ckState.words.forEach((_, i) => ckUpdateRow(i));
  ckUpdateFooter();
}

function ckExit() {
  const marked = ckState.marks.filter(m => m !== null).length;
  if (marked > 0 && !confirm('채점을 그만둘까요? 표시한 건 저장되지 않아요.')) return;
  renderWordContent();
}

// ── 저장 + 결과 ───────────────────────────────────────
async function ckSubmit() {
  const s = ckState;
  if (s.saving) return;
  s.saving = true;

  const btn = document.querySelector('.ck-save');
  if (btn) { btn.disabled = true; btn.textContent = '저장 중...'; }

  const wrongList = s.words.filter((_, i) => s.marks[i] === false);
  const total = s.words.length;
  const ok = await ckSave(s.kid, wrongList.map(w => w[0].toLowerCase()), total);
  ckResult(wrongList, total, ok);
}

function ckResult(wrongList, total, saved) {
  const s = ckState;
  const kid = s.kid;
  const correct = total - wrongList.length;
  const rate = Math.round(correct / total * 100);
  const color = KIDS[kid].color;

  let msg, emoji;
  if (rate === 100) { msg = '하나도 안 틀렸어요!'; emoji = '🎉'; }
  else if (rate >= 80) { msg = '아주 잘했어요'; emoji = '👍'; }
  else if (rate >= 60) { msg = '잘하고 있어요'; emoji = '💪'; }
  else { msg = '오답을 한 번 더 볼까요?'; emoji = '📚'; }

  document.getElementById('page-word').innerHTML = `
    <div class="ck-head">
      <h2>${emoji} ${msg}</h2>
      <p>${KIDS[kid].name} · Day ${s.info.day}${s.info.part ? (s.info.part === 1 ? ' ①' : ' ②') : ''}</p>
    </div>
    <div class="ck-result">
      <div class="ck-score" style="color:${color}">${correct}<span>/${total}</span></div>
      <div class="ck-rate">정답률 ${rate}%</div>
    </div>
    ${wrongList.length ? `
      <div class="ck-card">
        <div class="clabel">틀린 단어 ${wrongList.length}개</div>
        ${wrongList.map(w => `
          <div class="ck-wrong-row">
            <span class="ck-wrong-en" style="color:${color}">${w[0]}</span>
            <span class="ck-wrong-pron">${w[1]}</span>
            <span class="ck-wrong-kr">${w[2]}</span>
            <button class="spk" onclick="speak('${w[0]}',event)">🔊</button>
          </div>`).join('')}
      </div>` : ''}
    <div class="ck-save-msg ${saved ? 'ok' : 'no'}">
      ${saved ? '오답노트에 저장됐어요 ✓' : '저장에 실패했어요. 오답 탭에서 직접 입력해 주세요.'}
    </div>
    <button class="g-btn" style="background:${color}" onclick="ckStart(${kid})">다시 채점하기</button>
    <button class="g-btn ghost" onclick="renderWordContent()">단어로 돌아가기</button>
  `;
  window.scrollTo(0, 0);
}

// ── 오답노트에 저장 (오답 탭과 같은 구조) ───────────────
async function ckSave(kid, wrongWords, total) {
  try {
    const date = formatDateFull();
    let data = await apiLoad(kid);
    if (!data || !data.records) data = { records: [], wrongs: {} };

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
