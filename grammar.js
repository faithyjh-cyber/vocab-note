// ══════════════════════════════════════════════════════
// 중학 영문법 — 40차시 (중2 과정, 내신 대비)
// 각 차시: concept(개념), points(핵심), traps(함정), bank(문제 은행)
// 문제 type: 'mc'(4지선다) | 'fill'(빈칸 입력)
// ══════════════════════════════════════════════════════

const GRAMMAR = [
{
  unit:1, title:'1·2형식', subtitle:'보어가 필요한 동사', chapter:'문장의 형식',
  concept:'영어 문장은 동사가 무엇을 요구하느냐에 따라 틀이 정해집니다. <b>1형식</b>은 주어와 동사만으로 뜻이 완성되고, <b>2형식</b>은 주어가 어떤 상태인지 설명해 주는 <b>보어</b>가 반드시 필요해요.<br><br>2형식에서 가장 많이 틀리는 지점은 <b>보어 자리에 부사를 쓰는 것</b>입니다. 보어는 주어를 설명하는 말이라 명사나 형용사만 올 수 있고, 부사는 동사를 꾸미는 말이라 보어가 될 수 없어요. 특히 감각동사(look, sound, smell, taste, feel) 뒤에는 반드시 형용사를 씁니다.',
  points:[
    '1형식: 주어 + 동사 — <b>Birds fly.</b> / <b>The baby cried.</b>',
    '1형식에 부사구가 붙어도 여전히 1형식 — <b>She smiled brightly.</b>',
    '2형식: 주어 + 동사 + 보어 — <b>He is a student.</b> / <b>She looks happy.</b>',
    '상태 변화 2형식 동사: become, get, turn, grow, go, come',
    '<b>get angry</b>(화나다), <b>turn red</b>(빨개지다), <b>go bad</b>(상하다)',
    '감각동사: look(~해 보이다), sound(~하게 들리다), smell, taste, feel',
    '감각동사 + <b>형용사</b> — <b>It tastes sweet.</b> (sweetly ✗)',
    '감각동사 + <b>like + 명사</b> — <b>It tastes like candy.</b>',
    '2형식 판별법: 동사 자리에 be동사를 넣어 말이 되면 2형식',
  ],
  traps:[
    '<b>He looks sadly.</b> (✗) → <b>He looks sad.</b> (○) — 감각동사 뒤는 형용사',
    '<b>It smells like sweet.</b> (✗) → like 뒤에는 <b>명사</b>가 와야 합니다',
    'lovely, friendly, lonely는 -ly로 끝나지만 <b>형용사</b>입니다',
    '<b>The flower smells well.</b> (✗) — well은 부사, <b>good</b>이 맞아요',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The soup tastes ___.</b>',
     options:['deliciously','delicious','deliciousness','to delicious'],
     answer:1, explain:'taste는 감각동사이므로 보어 자리에 형용사 delicious가 옵니다.'},
    {type:'mc', q:'다음 중 <b>1형식</b> 문장은?',
     options:['She became a nurse.','The baby cried loudly.','He feels cold.','They are students.'],
     answer:1, explain:'loudly는 부사라 보어가 아닙니다. 주어 + 동사만으로 완성된 1형식이에요.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['You look tired today.','The music sounds beautifully.','The milk went bad.','He grew angry.'],
     answer:1, explain:'sound는 감각동사이므로 형용사 beautiful을 써야 합니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>This cloth feels ___.</b> (soft)',
     answer:['soft'], explain:'feel은 감각동사라 형용사 soft를 그대로 씁니다. softly는 쓸 수 없어요.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>It smells ___ roses.</b>',
     options:['as','like','of same','to'],
     answer:1, explain:'감각동사 뒤에 명사가 올 때는 like를 붙여 "~같은 냄새가 나다"를 나타냅니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The leaves ___ red in autumn.</b> (turn, 현재시제)',
     answer:['turn'], explain:'turn은 "~한 상태가 되다"는 2형식 동사이고, 주어가 복수이므로 turn을 씁니다.'},
    {type:'mc', q:'밑줄 친 부분의 역할은?<br><b>My dream came <u>true</u>.</b>',
     options:['목적어','주격보어','부사','목적격보어'],
     answer:1, explain:'true가 주어 My dream의 상태를 설명하므로 주격보어입니다.'},
    {type:'mc', q:'문장 형식이 <b>나머지와 다른</b> 것은?',
     options:['He is kind.','She looks sad.','The sun rises.','It became dark.'],
     answer:2, explain:'The sun rises.는 보어가 없는 1형식이고, 나머지는 모두 2형식입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것끼리 짝지은 것은?<br><b>She sings ___. Her voice sounds ___.</b> (beautiful)',
     options:['beautiful / beautiful','beautifully / beautiful','beautiful / beautifully','beautifully / beautifully'],
     answer:1, explain:'sings는 일반동사라 부사 beautifully, sounds는 감각동사라 형용사 beautiful이 옵니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The cake smells ___.</b> (good / well 중 알맞은 것)',
     answer:['good'], explain:'감각동사 뒤에는 형용사가 오므로 good입니다. well은 부사예요.'},
    {type:'mc', q:'어법상 <b>옳은</b> 문장은?',
     options:['He appeared nervously at the door.','She remained silently during the class.','The story sounds strangely.','Her new dress looks lovely.'],
     answer:3, explain:'lovely는 -ly로 끝나지만 형용사이므로 look 뒤에 올 수 있습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He got ___ when he heard the news.</b> (angry)',
     answer:['angry'], explain:'get은 "~한 상태가 되다"는 2형식 동사로 형용사 보어를 취합니다.'},
  ]
},
{
  unit:2, title:'3·4형식', subtitle:'목적어가 둘인 문장', chapter:'문장의 형식',
  concept:'<b>3형식</b>은 "무엇을"에 해당하는 목적어가 하나, <b>4형식</b>은 "누구에게 무엇을"처럼 목적어가 둘인 문장입니다. 4형식의 첫 번째 목적어를 <b>간접목적어</b>(~에게), 두 번째를 <b>직접목적어</b>(~을)라고 불러요.<br><br>4형식은 순서를 바꿔 3형식으로 만들 수 있는데, 이때 간접목적어 앞에 <b>전치사</b>를 붙입니다. 어떤 전치사를 쓰는지는 동사마다 정해져 있어서 외워 두어야 해요. 시험에서는 바로 이 전치사를 묻는 문제가 자주 나옵니다.',
  points:[
    '3형식: 주어 + 동사 + 목적어 — <b>I bought a book.</b>',
    '4형식: 주어 + 동사 + 간접목적어 + 직접목적어',
    '<b>He gave me a gift.</b> → <b>He gave a gift to me.</b>',
    '<b>to</b> 동사: give, send, show, teach, tell, lend, write, pass, bring',
    '<b>for</b> 동사: buy, make, cook, get, find, choose, build',
    '<b>of</b> 동사: ask (질문·부탁) — <b>He asked a favor of me.</b>',
    '직접목적어가 대명사면 보통 3형식으로 씁니다',
    '<b>He gave it to me.</b> (He gave me it. 은 어색)',
    '4형식으로 쓸 수 없는 동사: explain, introduce, suggest, say',
  ],
  traps:[
    '<b>He bought a ring to her.</b> (✗) → buy는 <b>for</b>를 씁니다',
    '<b>She explained me the rule.</b> (✗) → <b>explained the rule to me.</b>',
    '<b>Cook me it.</b> (✗) → <b>Cook it for me.</b> — 대명사는 3형식으로',
    'to/for 구분: 상대가 있어야 가능한 일은 to, 혼자 해 줄 수 있는 일은 for',
  ],
  bank:[
    {type:'fill', q:'빈칸을 채우세요.<br><b>She sent a letter ___ her friend.</b>',
     answer:['to'], explain:'send는 3형식으로 바꿀 때 전치사 to를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>My dad made a kite ___ me.</b>',
     answer:['for'], explain:'make는 3형식으로 바꿀 때 전치사 for를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He asked a favor ___ me.</b>',
     options:['to','for','of','with'],
     answer:2, explain:'ask는 3형식으로 바꿀 때 전치사 of를 씁니다.'},
    {type:'mc', q:'4형식을 3형식으로 바르게 바꾼 것은?<br><b>She cooked me dinner.</b>',
     options:['She cooked dinner to me.','She cooked dinner for me.','She cooked dinner of me.','She cooked to me dinner.'],
     answer:1, explain:'cook은 for를 쓰는 동사입니다.'},
    {type:'mc', q:'다음 중 <b>4형식</b> 문장은?',
     options:['I told him the truth.','She looks pretty.','They arrived late.','He made her happy.'],
     answer:0, explain:'him(간접목적어)과 the truth(직접목적어)가 있는 4형식입니다. 4번은 5형식이에요.'},
    {type:'fill', q:'다음 문장을 4형식으로 바꾸세요.<br><b>He showed the photo to me.</b><br>→ He showed ___ the photo.',
     answer:['me'], explain:'4형식은 간접목적어(me)를 동사 바로 뒤에 둡니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['She taught us English.','He bought a ring to her.','I lent him my bike.','They gave me advice.'],
     answer:1, explain:'buy는 for를 쓰는 동사이므로 bought a ring for her가 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Can you lend your pen ___ me?</b>',
     answer:['to'], explain:'lend는 to를 쓰는 동사입니다.'},
    {type:'mc', q:'어법상 <b>어색한</b> 문장은?',
     options:['He explained the rule to us.','She introduced her friend to me.','He suggested me a good idea.','They passed the ball to him.'],
     answer:2, explain:'suggest는 4형식으로 쓸 수 없습니다. suggested a good idea to me가 맞아요.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Please pass the salt ___ me.</b>',
     options:['for','of','to','with'],
     answer:2, explain:'pass는 to를 쓰는 동사입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>My mom found a nice jacket ___ me.</b>',
     answer:['for'], explain:'find는 for를 쓰는 동사입니다.'},
    {type:'mc', q:'다음 문장을 3형식으로 바르게 바꾼 것은?<br><b>He gave me it.</b>',
     options:['He gave it to me.','He gave it for me.','He gave me to it.','He gave to me it.'],
     answer:0, explain:'직접목적어가 대명사 it이므로 3형식으로 쓰고, give는 to를 씁니다.'},
  ]
},
{
  unit:3, title:'5형식', subtitle:'목적격보어', chapter:'문장의 형식',
  concept:'<b>5형식</b>은 목적어 뒤에 그 목적어가 어떤 상태인지, 무엇을 하는지 설명하는 <b>목적격보어</b>가 오는 문장입니다. 4형식과 헷갈리기 쉬운데, 두 목적어 사이에 "~은 ~이다"가 성립하면 5형식이에요.<br><br>5형식에서 가장 중요한 것은 <b>동사에 따라 보어 자리의 형태가 달라진다</b>는 점입니다. want·tell·ask는 to부정사, 사역동사 make·have·let은 동사원형, 지각동사 see·hear는 동사원형이나 -ing를 씁니다. 이 세 그룹을 구분하는 문제가 시험에 자주 나와요.',
  points:[
    '5형식: 주어 + 동사 + 목적어 + 목적격보어',
    '명사 보어: <b>They call him Tom.</b> (him = Tom)',
    '형용사 보어: <b>She kept the room clean.</b>',
    '<b>to부정사</b> 보어: want, tell, ask, allow, expect, advise, order',
    '<b>I want you to stay.</b> / <b>She told me to wait.</b>',
    '<b>사역동사</b>(~하게 시키다) make, have, let → <b>동사원형</b>',
    '<b>He made me laugh.</b> / <b>Let me go.</b>',
    'help는 예외: <b>동사원형과 to부정사 둘 다</b> 가능',
    '<b>지각동사</b> see, hear, feel, watch, notice → <b>동사원형 또는 -ing</b>',
    '수동 관계면 보어 자리에 <b>과거분사</b>: <b>I had my hair cut.</b>',
  ],
  traps:[
    '<b>I want you go.</b> (✗) → want는 <b>to go</b>',
    '<b>He made me to clean.</b> (✗) → 사역동사는 <b>동사원형</b>',
    '<b>I saw him to run.</b> (✗) → 지각동사는 <b>run 또는 running</b>',
    '4형식/5형식 구분: <b>He gave me a book.</b>(4형식, me≠book) vs <b>He called me a liar.</b>(5형식, me=liar)',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>My mom let me ___ out.</b>',
     options:['to go','going','go','went'],
     answer:2, explain:'let은 사역동사이므로 목적격보어로 동사원형 go가 옵니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I want you ___ honest.</b>',
     options:['be','to be','being','are'],
     answer:1, explain:'want는 목적격보어로 to부정사를 취합니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I saw him ___ the street.</b>',
     options:['to cross','crossed','cross','crosses'],
     answer:2, explain:'see는 지각동사이므로 동사원형 cross 또는 crossing이 옵니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The news made us ___.</b> (sad)',
     answer:['sad'], explain:'목적격보어 자리에 형용사가 와서 us의 상태를 설명합니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['He had me clean the room.','She told me to wait.','I heard her to sing.','They named the baby Mia.'],
     answer:2, explain:'hear는 지각동사이므로 sing 또는 singing이 와야 합니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>My teacher asked me ___ ___ the answer.</b> (설명하라고)',
     answer:['to explain'], explain:'ask는 목적격보어로 to부정사를 취합니다.'},
    {type:'mc', q:'밑줄 친 부분의 역할이 <b>다른</b> 것은?',
     options:['They elected him <u>captain</u>.','She found the book <u>easy</u>.','He gave me <u>a book</u>.','We call the dog <u>Max</u>.'],
     answer:2, explain:'3번은 4형식의 직접목적어이고, 나머지는 모두 5형식의 목적격보어입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Don\'t keep the door ___.</b>',
     options:['to open','opened','openly','opens'],
     answer:1, explain:'문이 열려 있는 상태를 뜻하므로 과거분사 opened가 목적격보어로 옵니다.'},
    {type:'mc', q:'빈칸에 들어갈 형태가 <b>나머지와 다른</b> 것은?',
     options:['He made me ___ it. (do)','She let him ___. (leave)','I had the boy ___ the box. (carry)','They allowed us ___. (enter)'],
     answer:3, explain:'allow는 to부정사(to enter)를 취하고, 나머지는 사역동사라 동사원형입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I had my bike ___ yesterday.</b> (repair, 수리받았다)',
     answer:['repaired'], explain:'자전거가 수리되는 수동 관계이므로 과거분사 repaired를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>She helped me ___ the problem.</b>',
     options:['solving','solved','solve','solves'],
     answer:2, explain:'help는 동사원형과 to부정사 둘 다 가능하므로 solve 또는 to solve입니다.'},
    {type:'mc', q:'다음 중 문장 형식이 <b>다른</b> 하나는?',
     options:['I found the movie boring.','She sent him a card.','They painted the wall white.','We consider him a genius.'],
     answer:1, explain:'2번만 4형식이고 나머지는 5형식입니다. him과 a card는 같은 대상이 아니에요.'},
  ]
},
{
  unit:4, title:'현재완료의 형태', subtitle:'have/has + p.p.', chapter:'현재완료',
  concept:'현재완료는 <b>have/has + 과거분사</b> 형태로, 과거에 일어난 일이 <b>지금까지 영향을 미치고 있음</b>을 나타냅니다. 우리말에는 없는 시제라서 과거시제와 구분하기 어려운데, "그래서 지금 어떤데?"라는 질문이 자연스러우면 현재완료라고 생각하면 쉬워요.<br><br>먼저 <b>과거분사(p.p.)</b> 형태를 정확히 외우는 것이 출발점입니다. 규칙 동사는 과거형과 같지만, 불규칙 동사는 따로 익혀야 해요. 특히 go-went-<b>gone</b>, see-saw-<b>seen</b>, eat-ate-<b>eaten</b>처럼 과거형과 과거분사가 다른 동사가 자주 출제됩니다.',
  points:[
    '형태: <b>have/has + 과거분사(p.p.)</b>',
    '주어가 3인칭 단수(he, she, it)면 <b>has</b>, 나머지는 <b>have</b>',
    '부정: <b>have not(haven\'t) + p.p.</b> / <b>has not(hasn\'t) + p.p.</b>',
    '의문: <b>Have/Has + 주어 + p.p. ~?</b>',
    '대답: <b>Yes, I have. / No, I haven\'t.</b>',
    '불규칙 p.p. ①: go-<b>gone</b>, see-<b>seen</b>, eat-<b>eaten</b>, take-<b>taken</b>',
    '불규칙 p.p. ②: write-<b>written</b>, speak-<b>spoken</b>, break-<b>broken</b>',
    '불규칙 p.p. ③: read-<b>read</b>, cut-<b>cut</b>, put-<b>put</b> (형태 동일)',
    '불규칙 p.p. ④: be-<b>been</b>, do-<b>done</b>, come-<b>come</b>',
  ],
  traps:[
    '<b>I have ate lunch.</b> (✗) → <b>have eaten</b> — 과거형이 아니라 과거분사',
    '<b>She have finished.</b> (✗) → 3인칭 단수는 <b>has</b>',
    '<b>Did you have finished?</b> (✗) → <b>Have you finished?</b>',
    '과거분사와 과거형이 같은 동사(had, made, said)에 방심하지 마세요',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>She ___ finished her work.</b>',
     options:['have','has','had','having'],
     answer:1, explain:'주어가 3인칭 단수 She이므로 has를 씁니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>I have ___ that movie.</b> (see)',
     answer:['seen'], explain:'see의 과거분사는 seen입니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>They have ___ a letter.</b> (write)',
     answer:['written'], explain:'write의 과거분사는 written입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ you finished your homework?</b>',
     options:['Do','Did','Have','Are'],
     answer:2, explain:'과거분사 finished가 있으므로 현재완료 의문문 Have you ~?가 맞습니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['He has gone home.','We have ate lunch.','She has taken the bus.','I have read the book.'],
     answer:1, explain:'eat의 과거분사는 eaten이므로 have eaten이 맞습니다.'},
    {type:'fill', q:'다음 문장을 부정문으로 바꾸세요.<br><b>He has arrived.</b><br>→ He ___ ___ arrived.',
     answer:['has not',"hasn't"], explain:'현재완료의 부정은 have/has 뒤에 not을 붙입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>My parents ___ already left.</b>',
     options:['has','have','is','was'],
     answer:1, explain:'주어가 복수 My parents이므로 have를 씁니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>She has ___ to Paris twice.</b> (be)',
     answer:['been'], explain:'be의 과거분사는 been입니다. have been to는 "가 본 적이 있다"예요.'},
    {type:'mc', q:'과거분사 형태가 <b>잘못된</b> 것은?',
     options:['speak - spoken','break - broken','drink - drank','choose - chosen'],
     answer:2, explain:'drink의 과거분사는 drunk입니다. drank는 과거형이에요.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>Someone has ___ my pen.</b> (take)',
     answer:['taken'], explain:'take의 과거분사는 taken입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>A: Have you ever been to Japan?<br>B: ___</b>',
     options:['Yes, I did.','Yes, I have.','Yes, I was.','Yes, I do.'],
     answer:1, explain:'현재완료 의문문에는 Yes, I have. / No, I haven\'t.로 답합니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>He has ___ his homework already.</b> (do)',
     answer:['done'], explain:'do의 과거분사는 done입니다.'},
  ]
},
{
  unit:5, title:'경험·계속 용법', subtitle:'Experience & Continuation', chapter:'현재완료',
  concept:'현재완료는 문맥에 따라 네 가지 뜻으로 쓰이는데, 이번에는 <b>경험</b>과 <b>계속</b>을 배웁니다. 경험은 "지금까지 ~해 본 적이 있다", 계속은 "지금까지 계속 ~해 오고 있다"는 뜻이에요.<br><br>두 용법은 <b>함께 쓰는 말</b>로 구분할 수 있습니다. ever, never, once, twice, before가 보이면 경험, for와 since가 보이면 계속입니다. 특히 <b>for는 기간</b>(for three years), <b>since는 시작 시점</b>(since 2020) 앞에 쓴다는 구분이 시험 단골 문제예요.',
  points:[
    '<b>경험</b>: ~해 본 적이 있다',
    '경험과 쓰는 말: ever, never, once, twice, ~times, before',
    '<b>I have never seen snow.</b> (본 적이 없다)',
    '<b>계속</b>: (지금까지) 계속 ~해 오고 있다',
    '계속과 쓰는 말: for, since, how long, all day',
    '<b>for + 기간</b>: for three years, for a week, for a long time',
    '<b>since + 시점</b>: since 2020, since last May, since I was young',
    '<b>have been to</b> (가 본 적 있다) ↔ <b>have gone to</b> (가서 지금 없다)',
    '계속은 현재완료진행형으로도: <b>have been -ing</b>',
  ],
  traps:[
    '<b>since three years</b> (✗) → <b>for three years</b> — since 뒤는 시점',
    '<b>for 2020</b> (✗) → <b>since 2020</b>',
    '<b>I have gone to Japan.</b> → "나는 일본에 가서 없다"는 이상한 뜻이 됩니다',
    '1인칭·2인칭에 have gone to는 쓰지 않아요 (말하는 사람이 여기 있으니까)',
  ],
  bank:[
    {type:'mc', q:'다음 문장의 용법은?<br><b>I have never seen a lion.</b>',
     options:['경험','계속','완료','결과'],
     answer:0, explain:'never와 함께 쓰여 "본 적이 없다"는 경험을 나타냅니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>We have been friends ___ 2015.</b>',
     answer:['since'], explain:'2015는 시작 시점이므로 since를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He has studied Chinese ___ three years.</b>',
     answer:['for'], explain:'three years는 기간이므로 for를 씁니다.'},
    {type:'mc', q:'두 문장의 뜻 차이로 알맞은 것은?<br><b>(A) She has been to London.</b><br><b>(B) She has gone to London.</b>',
     options:['뜻이 같다','(A) 가 본 적 있다 / (B) 가서 없다','(A) 가서 없다 / (B) 가 본 적 있다','둘 다 지금 런던에 있다'],
     answer:1, explain:'have been to는 경험, have gone to는 결과(가서 지금 없음)를 나타냅니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Have you ___ tried Indian food?</b>',
     options:['never','ever','already','yet'],
     answer:1, explain:'의문문에서 "한 번이라도 ~해 본 적 있니?"는 ever를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>How long ___ you known him?</b>',
     answer:['have'], explain:'How long과 함께 쓰여 계속 용법을 나타내므로 have를 씁니다.'},
    {type:'mc', q:'다음 중 <b>계속</b> 용법인 것은?',
     options:['I have just arrived.','He has lost his key.','They have worked here since May.','Have you ever met her?'],
     answer:2, explain:'since May와 함께 쓰여 "계속 일해 오고 있다"는 계속 용법입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I have visited Jeju ___.</b> (두 번)',
     answer:['twice'], explain:'횟수를 나타내는 twice는 경험 용법과 함께 쓰입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['She has lived here since she was born.','I have known him for ten years.','We have waited since two hours.','He has never been late.'],
     answer:2, explain:'two hours는 기간이므로 for two hours가 맞습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I ___ to Busan. I\'m going there next week.</b>',
     options:['have been','have gone','have never been','have ever been'],
     answer:2, explain:'다음 주에 처음 간다는 뜻이므로 "가 본 적이 없다"는 have never been입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>It has rained ___ this morning.</b> (아침부터)',
     answer:['since'], explain:'this morning은 시작 시점이므로 since를 씁니다.'},
    {type:'mc', q:'우리말과 같도록 할 때 알맞은 것은?<br><b>그는 중국에 가서 지금 없다.</b>',
     options:['He has been to China.','He has gone to China.','He has never been to China.','He went to China.'],
     answer:1, explain:'have gone to는 "가서 지금 여기 없다"는 결과를 나타냅니다.'},
  ]
},
{
  unit:6, title:'완료·결과 용법', subtitle:'Completion & Result', chapter:'현재완료',
  concept:'<b>완료</b>는 방금 끝난 일을, <b>결과</b>는 과거에 일어난 일 때문에 생긴 <b>지금의 상태</b>를 나타냅니다. 완료는 "막 ~했다", 결과는 "~해 버려서 지금 …하다"로 해석하면 자연스러워요.<br><br>완료 용법에서는 just(막), already(벌써), yet(아직)을 함께 씁니다. 여기서 중요한 구분이 있는데, <b>already는 긍정문</b>에, <b>yet은 부정문과 의문문</b>에 쓴다는 점이에요. 이 둘을 바꿔 쓰는 실수가 시험에 자주 출제됩니다.',
  points:[
    '<b>완료</b>: (막) ~했다 — 방금 끝난 일',
    '<b>I have just finished it.</b>',
    'just(막), already(벌써) → <b>긍정문</b>',
    'yet(아직, 벌써) → <b>부정문·의문문</b>',
    '<b>I haven\'t finished yet.</b> (아직 안 끝냈다)',
    '<b>Have you finished yet?</b> (벌써 끝냈니?)',
    '<b>결과</b>: ~해 버려서 지금 …하다',
    '<b>I have lost my key.</b> (잃어버려서 지금 없다)',
    '결과 표현: have lost, have gone to, have broken, have forgotten',
    'already는 의문문에서 놀람을 나타내기도 함: <b>Have you already done it?</b>',
  ],
  traps:[
    '<b>He has yet come.</b> (✗) → 긍정문에는 <b>already</b>',
    '<b>I haven\'t already eaten.</b> (✗) → 부정문에는 <b>yet</b>',
    'just는 보통 have와 p.p. <b>사이</b>에 놓습니다',
    'yet은 보통 <b>문장 끝</b>에 놓습니다',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I haven\'t eaten lunch ___.</b>',
     options:['already','just','yet','ever'],
     answer:2, explain:'부정문에서 "아직"이라는 뜻은 yet을 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>She has ___ left the office.</b> (벌써)',
     options:['yet','already','never','since'],
     answer:1, explain:'긍정문에서 "벌써"라는 뜻은 already를 씁니다.'},
    {type:'mc', q:'다음 문장의 용법은?<br><b>He has broken his leg.</b>',
     options:['경험','계속','완료','결과'],
     answer:3, explain:'다리가 부러져서 지금도 그 상태라는 결과 용법입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The train has ___ arrived.</b> (막)',
     answer:['just'], explain:'just는 "막, 방금"이라는 뜻으로 완료 용법과 함께 쓰입니다.'},
    {type:'mc', q:'어법상 <b>어색한</b> 문장은?',
     options:['Have you finished yet?','I have already done it.','He has yet come home.','She hasn\'t called me yet.'],
     answer:2, explain:'yet은 부정문·의문문에 쓰입니다. 긍정문에는 already를 써야 해요.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I have ___ my umbrella. I can\'t find it.</b> (lose)',
     answer:['lost'], explain:'lose의 과거분사는 lost이며, 잃어버린 결과 지금 없다는 뜻입니다.'},
    {type:'mc', q:'우리말과 같도록 할 때 빈칸에 알맞은 것은?<br><b>그들은 이미 떠났다.</b><br>They ___ already left.',
     options:['are','have','did','were'],
     answer:1, explain:'현재완료이므로 have를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Tom has ___ to Canada. He is not here now.</b> (go)',
     answer:['gone'], explain:'have gone to는 "가서 지금 없다"는 결과를 나타냅니다.'},
    {type:'mc', q:'다음 문장에서 알 수 있는 것은?<br><b>She has forgotten his name.</b>',
     options:['이름을 기억하고 있다','지금 이름이 기억나지 않는다','이름을 잊으려 한다','이름을 들은 적이 없다'],
     answer:1, explain:'결과 용법으로 "잊어버려서 지금 기억 못 한다"는 뜻입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Has the movie started ___?</b> (벌써)',
     answer:['yet'], explain:'의문문에서는 yet을 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>My brother ___ my bike, so I can\'t ride it.</b>',
     options:['has broken','broke','is breaking','breaks'],
     answer:0, explain:'망가뜨린 결과 지금 탈 수 없다는 뜻이므로 현재완료 결과 용법입니다.'},
    {type:'mc', q:'밑줄 친 부분의 위치가 <b>어색한</b> 것은?',
     options:['I have <u>just</u> arrived.','She has <u>already</u> eaten.','He hasn\'t called <u>yet</u>.','They have finished <u>already</u> it.'],
     answer:3, explain:'already는 보통 have와 p.p. 사이 또는 문장 끝에 놓습니다. 목적어 앞은 어색해요.'},
  ]
},
{
  unit:7, title:'과거시제와의 구분', subtitle:'Present Perfect vs Past', chapter:'현재완료',
  concept:'현재완료와 과거시제를 구분하는 것은 중학 영문법의 핵심 중 하나입니다. 가장 확실한 기준은 <b>명백한 과거를 나타내는 말과 함께 쓸 수 있는가</b>예요.<br><br>yesterday, last week, ~ago, in 2020, When ~? 같은 말은 "그때"라는 특정 시점을 못 박기 때문에, 지금과 연결된 현재완료와는 함께 쓸 수 없습니다. 반대로 for, since, just, already, yet, ever, never는 현재완료와 어울려요. 시험에서는 이 짝을 바꿔 놓고 틀린 문장을 고르게 합니다.',
  points:[
    '현재완료와 <b>쓸 수 없는</b> 말:',
    'yesterday, last ~, ~ago, in + 연도, just now, When ~?',
    '<b>I have seen him yesterday.</b> (✗) → <b>I saw him yesterday.</b> (○)',
    '<b>When have you arrived?</b> (✗) → <b>When did you arrive?</b> (○)',
    '현재완료와 <b>쓰는</b> 말:',
    'for, since, just, already, yet, ever, never, so far, recently, lately',
    '과거: 끝난 일 — <b>He lived in Busan in 2019.</b> (지금은 아님)',
    '현재완료: 이어진 일 — <b>He has lived in Busan since 2019.</b> (지금도)',
    'just now는 과거시제와 씁니다: <b>He left just now.</b>',
  ],
  traps:[
    '<b>When have you finished?</b> (✗) → When은 특정 시점을 묻기에 과거시제',
    '<b>I have bought it last month.</b> (✗) → <b>bought it last month</b>',
    'just(현재완료)와 just now(과거)를 혼동하지 마세요',
    'recently·lately는 현재완료와 과거 둘 다 가능하지만, 보통 현재완료와 씁니다',
  ],
  bank:[
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['I have met him before.','She has arrived last night.','They have just left.','We have known each other for years.'],
     answer:1, explain:'last night은 명백한 과거이므로 arrived(과거시제)를 써야 합니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>When ___ you buy this bag?</b>',
     options:['have','has','did','do'],
     answer:2, explain:'When으로 시작하는 의문문은 현재완료와 함께 쓸 수 없으므로 did를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He ___ to Japan three years ago.</b>',
     options:['has gone','went','has been','goes'],
     answer:1, explain:'three years ago는 명백한 과거이므로 과거시제 went를 씁니다.'},
    {type:'fill', q:'빈칸에 알맞은 형태를 쓰세요.<br><b>I ___ my homework an hour ago.</b> (finish)',
     answer:['finished'], explain:'an hour ago는 명백한 과거이므로 과거시제 finished를 씁니다.'},
    {type:'mc', q:'두 문장의 뜻 차이로 알맞은 것은?<br><b>(A) He lived here for 10 years.</b><br><b>(B) He has lived here for 10 years.</b>',
     options:['뜻이 같다','(A) 지금도 산다 / (B) 지금은 안 산다','(A) 지금은 안 산다 / (B) 지금도 산다','둘 다 지금 안 산다'],
     answer:2, explain:'과거시제는 끝난 일, 현재완료는 지금까지 이어지는 일을 나타냅니다.'},
    {type:'fill', q:'빈칸에 알맞은 형태를 쓰세요.<br><b>She ___ ___ in Seoul since 2020.</b> (live)',
     answer:['has lived'], explain:'since가 있으므로 현재완료 has lived를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I ___ this movie last weekend.</b>',
     options:['have watched','watched','has watched','watch'],
     answer:1, explain:'last weekend는 명백한 과거이므로 watched를 씁니다.'},
    {type:'mc', q:'어법상 <b>옳은</b> 문장은?',
     options:['I have called her yesterday.','When have you finished it?','She has worked here since March.','He has bought a car last month.'],
     answer:2, explain:'since March는 현재완료와 함께 쓰는 표현입니다. 나머지는 모두 과거시제를 써야 해요.'},
    {type:'mc', q:'빈칸에 알맞은 것끼리 짝지은 것은?<br><b>He ___ to Paris in 2020, and he ___ there since then.</b>',
     options:['moved / lived','has moved / has lived','moved / has lived','has moved / lived'],
     answer:2, explain:'in 2020은 과거이므로 moved, since then은 현재완료이므로 has lived입니다.'},
    {type:'fill', q:'빈칸에 알맞은 형태를 쓰세요.<br><b>I ___ her just now.</b> (see)',
     answer:['saw'], explain:'just now는 과거시제와 함께 씁니다.'},
    {type:'mc', q:'빈칸에 들어갈 말이 <b>다른</b> 하나는?',
     options:['I ___ seen it before. (have/did)','She ___ not come yesterday. (has/did)','They ___ already gone. (have/did)','We ___ lived here for years. (have/did)'],
     answer:1, explain:'yesterday가 있으므로 did를 쓰고, 나머지는 모두 have입니다.'},
    {type:'fill', q:'잘못된 부분을 고쳐 쓰세요.<br><b>I have visited Jeju two years ago.</b><br>→ I ___ Jeju two years ago.',
     answer:['visited'], explain:'two years ago는 명백한 과거이므로 과거시제로 고쳐야 합니다.'},
  ]
},
{
  unit:8, title:'to부정사 — 명사적 용법', subtitle:'Nominal Use', chapter:'to부정사',
  concept:'to부정사가 "~하는 것, ~하기"라는 뜻으로 <b>명사처럼</b> 쓰이는 경우입니다. 명사가 들어갈 수 있는 자리, 즉 주어·목적어·보어 자리에 모두 올 수 있어요.<br><br>주어로 쓰일 때는 문장이 머리가 무거워지기 때문에 보통 <b>가주어 It</b>을 앞에 두고 뒤로 보냅니다. 또 의문사와 결합해 <b>what to do</b>(무엇을 할지), <b>how to swim</b>(수영하는 법)처럼 쓰이는 형태도 자주 출제되니 함께 익혀 두세요.',
  points:[
    '<b>주어</b>: <b>To read books is fun.</b> → <b>It is fun to read books.</b>',
    'to부정사 주어는 <b>단수 취급</b>: <b>To learn English is</b> (are ✗)',
    '<b>목적어</b>: <b>I want to go home.</b>',
    'to부정사를 목적어로 쓰는 동사: want, hope, wish, plan, decide, promise, expect, agree, refuse, learn, need',
    '<b>보어</b>: <b>My dream is to be a pilot.</b>',
    '<b>의문사 + to부정사</b>:',
    '<b>what to do</b>(무엇을 할지), <b>how to swim</b>(수영하는 법)',
    '<b>where to go</b>(어디로 갈지), <b>when to start</b>(언제 시작할지)',
    'why to는 쓰지 않습니다',
    '의문사 + to부정사 = 의문사 + 주어 + should + 동사원형',
  ],
  traps:[
    '<b>To swim are fun.</b> (✗) → to부정사 주어는 <b>단수</b>',
    '<b>He enjoys to read.</b> (✗) → enjoy는 <b>동명사</b>를 취합니다',
    '<b>I don\'t know why to go.</b> (✗) → why to는 쓰지 않아요',
    '<b>It is fun reading books.</b> (✗) → 가주어 It의 진주어는 <b>to부정사</b>',
  ],
  bank:[
    {type:'mc', q:'밑줄 친 부분의 용법은?<br><b>My plan is <u>to travel</u> abroad.</b>',
     options:['주어','목적어','보어','수식어'],
     answer:2, explain:'be동사 뒤에서 주어 My plan을 설명하는 보어입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I don\'t know ___ to start.</b>',
     options:['what','how','which','why'],
     answer:1, explain:'"어떻게 시작할지"라는 뜻이므로 how to를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>She decided ___ ___ a doctor.</b> (의사가 되기로)',
     answer:['to be','to become'], explain:'decide는 to부정사를 목적어로 취합니다.'},
    {type:'mc', q:'밑줄 친 to부정사의 역할이 <b>다른</b> 것은?',
     options:['<u>To swim</u> is good exercise.','I hope <u>to see</u> you soon.','He went out <u>to buy</u> bread.','Her job is <u>to teach</u> math.'],
     answer:2, explain:'3번은 목적을 나타내는 부사적 용법이고, 나머지는 명사적 용법입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Please tell me ___ ___ go.</b> (어디로 갈지)',
     answer:['where to'], explain:'where to + 동사원형은 "어디로 ~할지"라는 뜻입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ learn a language takes time.</b>',
     options:['Too','To','For','So'],
     answer:1, explain:'주어 자리의 명사적 용법이므로 To learn이 맞습니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['I want to go there.','She refused to answer.','He enjoys to read books.','They agreed to help us.'],
     answer:2, explain:'enjoy는 동명사를 목적어로 취하므로 enjoys reading이 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I need ___ ___ what to wear.</b> (결정할 필요가 있다)',
     answer:['to decide'], explain:'need는 to부정사를 목적어로 취합니다.'},
    {type:'mc', q:'빈칸에 알맞은 동사 형태는?<br><b>To keep a diary ___ a good habit.</b>',
     options:['are','is','were','be'],
     answer:1, explain:'to부정사 주어는 단수 취급하므로 is를 씁니다.'},
    {type:'mc', q:'다음 문장과 뜻이 같은 것은?<br><b>I don\'t know what to say.</b>',
     options:['I don\'t know what I said.','I don\'t know what I should say.','I don\'t know what saying.','I don\'t know to say what.'],
     answer:1, explain:'의문사 + to부정사는 의문사 + 주어 + should + 동사원형으로 바꿔 쓸 수 있습니다.'},
    {type:'fill', q:'가주어를 써서 고치세요.<br><b>To exercise every day is important.</b><br>→ ___ is important ___ exercise every day.',
     answer:['It to'], explain:'가주어 It을 앞에 두고 진주어 to부정사를 뒤로 보냅니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He promised ___ on time.</b>',
     options:['coming','to come','come','came'],
     answer:1, explain:'promise는 to부정사만 목적어로 취합니다.'},
  ]
},
{
  unit:9, title:'to부정사 — 형용사적 용법', subtitle:'Adjectival Use', chapter:'to부정사',
  concept:'to부정사가 앞에 있는 <b>명사나 대명사를 꾸며</b> "~할, ~하는"이라는 뜻을 나타냅니다. 우리말과 달리 꾸밈받는 말 <b>뒤에</b> 놓인다는 점이 핵심이에요.<br><br>이 용법에서 가장 자주 틀리는 것은 <b>전치사를 빠뜨리는 것</b>입니다. "앉을 의자"는 sit on a chair에서 왔으므로 <b>a chair to sit on</b>처럼 on이 남아야 해요. 또 something, anything처럼 -thing으로 끝나는 말은 <b>형용사가 뒤에 오고</b> 그 뒤에 to부정사가 붙는 어순도 함께 외워 두세요.',
  points:[
    '<b>I have a lot of work to do.</b> (할 일)',
    '<b>Give me something to drink.</b> (마실 것)',
    '어순: <b>-thing/-body/-one + 형용사 + to부정사</b>',
    '<b>something cold to drink</b> (차가운 마실 것)',
    '<b>전치사가 남는 경우</b>:',
    '<b>a chair to sit on</b> (sit on a chair)',
    '<b>a pen to write with</b> (write with a pen)',
    '<b>a house to live in</b> (live in a house)',
    '<b>a friend to talk with/to</b> (talk with a friend)',
    '<b>be동사 + to부정사</b>: 예정(~할 예정이다), 의무, 가능',
  ],
  traps:[
    '<b>a chair to sit</b> (✗) → <b>a chair to sit on</b> — 전치사 필수',
    '<b>something to eat hot</b> (✗) → <b>something hot to eat</b>',
    '<b>cold something to drink</b> (✗) → -thing 뒤에 형용사',
    'to부정사가 명사 앞에 오지 않도록 주의: <b>to read books</b>(✗ 형용사적 용법일 때)',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I need a friend ___ to.</b>',
     options:['talk','to talk','to talk with','talking'],
     answer:2, explain:'"이야기할 친구"는 talk with a friend이므로 전치사 with가 필요합니다.'},
    {type:'mc', q:'어순이 올바른 것은?',
     options:['something to eat hot','hot something to eat','something hot to eat','to eat something hot'],
     answer:2, explain:'-thing으로 끝나는 말은 형용사가 뒤에 오고, 그 뒤에 to부정사가 옵니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He has no house ___ ___ in.</b> (살 집이 없다)',
     answer:['to live'], explain:'live in a house이므로 to live in 형태가 됩니다.'},
    {type:'mc', q:'밑줄 친 부분이 꾸미는 말은?<br><b>She has many books <u>to read</u>.</b>',
     options:['She','has','many books','문장 전체'],
     answer:2, explain:'to read가 앞의 명사 many books를 꾸미는 형용사적 용법입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Would you like something cold ___ ___?</b> (마실)',
     answer:['to drink'], explain:'something cold 뒤에 to drink가 와서 "차가운 마실 것"이 됩니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I\'m looking for a pen ___.</b>',
     options:['to write','to write with','writing','to writing'],
     answer:1, explain:'write with a pen이므로 전치사 with가 필요합니다.'},
    {type:'mc', q:'밑줄 친 to부정사의 용법이 <b>다른</b> 것은?',
     options:['I have a letter <u>to send</u>.','There is nothing <u>to worry</u> about.','He studied hard <u>to pass</u>.','She needs a chair <u>to sit on</u>.'],
     answer:2, explain:'3번은 목적을 나타내는 부사적 용법이고, 나머지는 형용사적 용법입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>It\'s time ___ ___ to bed.</b> (잠자리에 들 시간)',
     answer:['to go'], explain:'time을 꾸미는 형용사적 용법으로 to go가 옵니다.'},
    {type:'mc', q:'전치사가 <b>필요한</b> 문장은?',
     options:['I have homework to do.','She wants a book to read.','He needs paper to write.','They have food to eat.'],
     answer:2, explain:'write on paper이므로 to write on이 되어야 합니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Is there anything ___ ___?</b> (먹을 것)',
     answer:['to eat'], explain:'anything을 꾸미는 형용사적 용법입니다.'},
    {type:'mc', q:'다음 문장의 뜻으로 알맞은 것은?<br><b>We are to meet at six.</b>',
     options:['우리는 6시에 만나고 싶다','우리는 6시에 만날 예정이다','우리는 6시에 만났다','우리는 6시에 만날 수 있다'],
     answer:1, explain:'be동사 + to부정사는 예정을 나타낼 수 있습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He is the first man ___ the moon.</b>',
     options:['walk on','to walk on','walking on','walked on'],
     answer:1, explain:'the first man을 꾸미는 형용사적 용법이므로 to walk on입니다.'},
  ]
},
{
  unit:10, title:'to부정사 — 부사적 용법', subtitle:'Adverbial Use', chapter:'to부정사',
  concept:'to부정사가 동사나 형용사를 꾸며 <b>목적·감정의 원인·결과·판단의 근거</b>를 나타냅니다. 가장 흔한 것은 "~하기 위해"라는 목적이에요.<br><br>용법을 구분하는 요령이 있습니다. 앞에 <b>감정 형용사</b>(glad, sad, happy, surprised)가 있으면 감정의 원인, <b>must/cannot</b> 같은 추측 표현이 있으면 판단의 근거, <b>grew up / lived / woke up</b>처럼 시간의 흐름이 있으면 결과입니다. 나머지는 대개 목적이에요.',
  points:[
    '<b>목적</b>(~하기 위해): <b>He came to see me.</b>',
    '목적을 분명히: <b>in order to</b>, <b>so as to</b>',
    '<b>감정의 원인</b>(~해서): <b>I\'m glad to meet you.</b>',
    '감정 형용사: glad, happy, sad, sorry, surprised, pleased, disappointed',
    '<b>결과</b>(~해서 결국): <b>He grew up to be a singer.</b>',
    '결과 표현: grew up to be, lived to be, woke up to find',
    '<b>판단의 근거</b>(~하다니): <b>He must be smart to solve it.</b>',
    '<b>형용사 수식</b>: <b>This book is easy to read.</b>',
    '부정형: <b>not to</b> — <b>Be careful not to fall.</b>',
    '목적 강조: <b>so that + 주어 + can</b>으로 바꿔 쓸 수 있음',
  ],
  traps:[
    '<b>Be careful to not fall.</b> (✗) → <b>not to fall</b> — not이 to 앞',
    '목적인지 결과인지는 <b>문맥</b>으로 판단해야 합니다',
    '<b>I\'m glad meeting you.</b> (✗) → 감정의 원인은 <b>to부정사</b>',
    '<b>This book is easy to read it.</b> (✗) → it을 또 쓰지 않아요',
  ],
  bank:[
    {type:'mc', q:'밑줄 친 부분의 뜻으로 알맞은 것은?<br><b>She was surprised <u>to hear</u> the news.</b>',
     options:['듣기 위해','들어서','들을','듣는 것'],
     answer:1, explain:'감정 형용사 surprised의 원인을 나타내므로 "들어서"입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I went to the library ___ books.</b>',
     options:['borrow','to borrow','borrowing','borrowed'],
     answer:1, explain:'"빌리기 위해"라는 목적을 나타내므로 to borrow를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Be careful ___ ___ break it.</b> (깨뜨리지 않도록)',
     answer:['not to'], explain:'to부정사의 부정은 to 앞에 not을 붙입니다.'},
    {type:'mc', q:'밑줄 친 부분과 바꿔 쓸 수 있는 것은?<br><b>He studied hard <u>to pass</u> the exam.</b>',
     options:['in order to pass','so that pass','for passing','to passing'],
     answer:0, explain:'목적을 나타내는 to부정사는 in order to로 바꿔 쓸 수 있습니다.'},
    {type:'mc', q:'다음 문장의 용법은?<br><b>He must be rich to buy that car.</b>',
     options:['목적','감정의 원인','결과','판단의 근거'],
     answer:3, explain:'"저 차를 사다니 부자임에 틀림없다"는 판단의 근거입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>This question is difficult ___ ___.</b> (풀기에)',
     answer:['to solve'], explain:'형용사 difficult를 꾸미는 부사적 용법입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>She lived ___ be ninety.</b>',
     options:['for','to','so','of'],
     answer:1, explain:'"살아서 90세가 되었다"는 결과를 나타내는 to부정사입니다.'},
    {type:'mc', q:'밑줄 친 to부정사의 용법이 <b>같은</b> 것끼리 짝지은 것은?<br>(A) I\'m happy <u>to see</u> you.<br>(B) He ran <u>to catch</u> the bus.<br>(C) She was sad <u>to leave</u>.',
     options:['A-B','A-C','B-C','없음'],
     answer:1, explain:'A와 C는 감정의 원인, B는 목적입니다.'},
    {type:'mc', q:'다음 문장과 뜻이 같은 것은?<br><b>He left early to catch the train.</b>',
     options:['He left early so that he could catch the train.','He left early because he caught the train.','He left early although he caught the train.','He left early and caught the train.'],
     answer:0, explain:'목적의 to부정사는 so that + 주어 + can/could로 바꿔 쓸 수 있습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He woke up ___ ___ the house empty.</b> (일어나 보니 집이 비어 있었다)',
     answer:['to find'], explain:'결과를 나타내는 부사적 용법으로 woke up to find 형태입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['I was glad to help you.','This water is safe to drink.','He is too tired to work it.','She came to say goodbye.'],
     answer:2, explain:'to부정사의 목적어가 주어와 같으므로 it을 또 쓸 수 없습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>She studied hard ___ ___ ___ pass the test.</b> (시험에 통과하기 위해서)',
     options:['so as to','in order that','so that to','for to'],
     answer:0, explain:'so as to + 동사원형은 목적을 나타내는 표현입니다.'},
  ]
},
{
  unit:11, title:'가주어 it / 의미상 주어', subtitle:'It & Meaning Subject', chapter:'to부정사',
  concept:'to부정사가 주어로 쓰이면 문장이 길어지므로, 앞에 <b>가주어 It</b>을 두고 진짜 주어를 뒤로 보냅니다. 행동하는 사람을 밝힐 때는 <b>의미상 주어</b>를 씁니다.',
  points:[
    '<b>To read books is fun.</b> → <b>It is fun to read books.</b>',
    'It은 해석하지 않습니다. (가주어)',
    '의미상 주어: <b>for + 목적격</b> — <b>It is hard for me to swim.</b>',
    '사람의 성격을 나타내는 형용사 뒤에는 <b>of + 목적격</b>',
    'of를 쓰는 형용사: kind, nice, polite, wise, foolish, careless',
    '<b>It is kind of you to help me.</b>',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>It is important ___ us to exercise.</b>',
     options:['of','for','to','with'],
     answer:1, explain:'important는 성격 형용사가 아니므로 for를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>It was foolish ___ him to say that.</b>',
     options:['for','of','to','at'],
     answer:1, explain:'foolish는 사람의 성격을 나타내므로 of를 씁니다.'},
    {type:'fill', q:'가주어를 써서 고치세요.<br><b>To get up early is good.</b><br>→ ___ is good to get up early.',
     answer:['It'], explain:'긴 주어를 뒤로 보내고 가주어 It을 앞에 둡니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['It is easy for me to cook.','It was nice of you to come.','It is difficult of him to run.','It is necessary for us to sleep.'],
     answer:2, explain:'difficult는 성격 형용사가 아니므로 for him이 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>It is dangerous ___ children to swim here.</b>',
     answer:['for'], explain:'dangerous는 성격 형용사가 아니므로 for를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>It was very ___ of her to share her lunch.</b>',
     options:['hard','possible','kind','difficult'],
     answer:2, explain:'of가 쓰였으므로 사람의 성격을 나타내는 kind가 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>It is impossible ___ me ___ finish it today.</b>',
     answer:['for me to','for'], explain:'impossible은 for를 쓰고, 뒤에 to부정사가 옵니다.'},
    {type:'mc', q:'다음 문장에서 <b>진주어</b>는?<br><b>It is fun to play soccer.</b>',
     options:['It','is fun','to play soccer','soccer'],
     answer:2, explain:'It은 가주어이고 to play soccer가 진짜 주어입니다.'},
  ]
},
{
  unit:12, title:'too~to / enough to', subtitle:'Special Patterns', chapter:'to부정사',
  concept:'to부정사가 들어가는 두 가지 중요한 구문입니다. <b>too ~ to</b>는 "너무 ~해서 …할 수 없다", <b>enough to</b>는 "…할 만큼 충분히 ~하다"예요.',
  points:[
    '<b>too + 형용사/부사 + to부정사</b>: 너무 ~해서 …할 수 없다',
    '<b>He is too young to drive.</b> (너무 어려서 운전할 수 없다)',
    '= <b>so + 형/부 + that + 주어 + can\'t</b>',
    '<b>형용사/부사 + enough + to부정사</b>: …할 만큼 충분히 ~하다',
    '<b>She is tall enough to reach it.</b>',
    'enough는 형용사 <b>뒤</b>에 온다는 점에 주의하세요.',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This box is ___ heavy to carry.</b>',
     options:['so','too','very','enough'],
     answer:1, explain:'"너무 무거워서 들 수 없다"는 too ~ to 구문입니다.'},
    {type:'mc', q:'어순이 올바른 것은?',
     options:['enough old to vote','old enough to vote','to vote enough old','enough to old vote'],
     answer:1, explain:'enough는 형용사 뒤에 옵니다.'},
    {type:'mc', q:'다음 문장과 뜻이 같은 것은?<br><b>He is too tired to work.</b>',
     options:['He is so tired that he can work.','He is so tired that he can\'t work.','He is tired enough to work.','He is not tired to work.'],
     answer:1, explain:'too ~ to는 so ~ that + can\'t로 바꿔 쓸 수 있습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>She is rich ___ ___ buy a house.</b> (집을 살 만큼 충분히)',
     answer:['enough to'], explain:'형용사 뒤에 enough to가 옵니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>It is ___ cold ___ go out.</b> (너무 추워서 나갈 수 없다)',
     answer:['too cold to','too'], explain:'too + 형용사 + to부정사 구문입니다.'},
    {type:'mc', q:'다음 문장과 뜻이 같은 것은?<br><b>He is strong enough to lift it.</b>',
     options:['He is so strong that he can lift it.','He is too strong to lift it.','He is not strong to lift it.','He is as strong as it.'],
     answer:0, explain:'enough to는 so ~ that + can으로 바꿔 쓸 수 있습니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['The coffee is too hot to drink.','She runs fast enough to win.','He is enough smart to solve it.','I was too busy to call you.'],
     answer:2, explain:'enough는 형용사 뒤에 오므로 smart enough가 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The water was too dirty ___ ___.</b> (마시기에)',
     answer:['to drink'], explain:'too ~ to 구문으로 "너무 더러워서 마실 수 없었다"는 뜻입니다.'},
  ]
},
{
  unit:13, title:'동명사의 쓰임', subtitle:'Gerund Basics', chapter:'동명사',
  concept:'동사원형에 -ing를 붙여 명사처럼 쓰는 것이 동명사입니다. "~하는 것, ~하기"라는 뜻으로 주어, 목적어, 보어 자리에 옵니다.',
  points:[
    '주어: <b>Swimming is fun.</b> (주어일 때는 단수 취급)',
    '목적어: <b>I enjoy reading.</b>',
    '보어: <b>My hobby is collecting stamps.</b>',
    '동명사만 목적어로 쓰는 동사: enjoy, finish, mind, avoid, keep, give up, practice, suggest, quit',
    '부정형: 동명사 앞에 not — <b>not going</b>',
    '주어로 쓰이면 단수 동사: <b>Reading books is fun.</b>',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He finished ___ his homework.</b>',
     options:['do','to do','doing','done'],
     answer:2, explain:'finish는 동명사만 목적어로 취합니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Playing computer games ___ fun.</b>',
     options:['are','is','were','be'],
     answer:1, explain:'동명사 주어는 단수 취급하므로 is를 씁니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>Would you mind ___ the door?</b> (close)',
     answer:['closing'], explain:'mind는 동명사만 목적어로 취합니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['I avoid eating late.','She practiced to play the violin.','They gave up smoking.','He kept walking.'],
     answer:1, explain:'practice는 동명사를 취하므로 practiced playing이 맞습니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>My hobby is ___ pictures.</b> (take)',
     answer:['taking'], explain:'보어 자리의 동명사로 "사진 찍는 것"을 나타냅니다.'},
    {type:'mc', q:'밑줄 친 -ing의 성격이 <b>다른</b> 것은?',
     options:['<u>Running</u> is good for you.','I enjoy <u>cooking</u>.','He is <u>sleeping</u> now.','Her job is <u>teaching</u>.'],
     answer:2, explain:'3번은 현재진행형의 일부이고, 나머지는 동명사입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He suggested ___ a break.</b> (take)',
     answer:['taking'], explain:'suggest는 동명사만 목적어로 취합니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I regret ___ her the truth.</b> (말하지 않은 것)',
     options:['not telling','not to tell','telling not','to not tell'],
     answer:0, explain:'동명사의 부정은 동명사 앞에 not을 붙입니다.'},
  ]
},
{
  unit:14, title:'전치사 + 동명사', subtitle:'Preposition + Gerund', chapter:'동명사',
  concept:'전치사 뒤에는 반드시 명사나 동명사가 옵니다. to부정사는 올 수 없어요. 특히 <b>to가 전치사인 경우</b>를 조심해야 합니다.',
  points:[
    '전치사 + 동명사: <b>She is good at singing.</b>',
    '자주 쓰는 짝: be good at, be interested in, be afraid of',
    'thank you for -ing, be proud of -ing, instead of -ing',
    '<b>to가 전치사인 표현</b>(뒤에 동명사가 옴):',
    '<b>look forward to -ing</b> (~하기를 고대하다)',
    '<b>be used to -ing</b> (~에 익숙하다) ↔ <b>used to + 동사원형</b> (~하곤 했다)',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Thank you for ___ me.</b>',
     options:['help','to help','helping','helped'],
     answer:2, explain:'전치사 for 뒤에는 동명사가 옵니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I look forward to ___ you again.</b>',
     options:['see','seeing','saw','be seen'],
     answer:1, explain:'look forward to의 to는 전치사이므로 동명사 seeing이 옵니다.'},
    {type:'mc', q:'두 문장의 뜻 차이로 알맞은 것은?<br><b>(A) He is used to getting up early.</b><br><b>(B) He used to get up early.</b>',
     options:['뜻이 같다','(A) 익숙하다 / (B) 하곤 했다','(A) 하곤 했다 / (B) 익숙하다','둘 다 지금도 한다'],
     answer:1, explain:'be used to -ing는 "익숙하다", used to + 동사원형은 "~하곤 했다"입니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>She is afraid of ___ alone.</b> (be)',
     answer:['being'], explain:'전치사 of 뒤에는 동명사가 옵니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['He is interested in learning Korean.','I am used to live in the city.','She is good at drawing.','They are proud of winning.'],
     answer:1, explain:'be used to -ing의 to는 전치사이므로 living이 맞습니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>Instead of ___, he took a taxi.</b> (walk)',
     answer:['walking'], explain:'instead of의 of는 전치사이므로 동명사가 옵니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>How about ___ out tonight?</b>',
     options:['go','to go','going','went'],
     answer:2, explain:'How about 뒤에는 동명사가 옵니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>She apologized ___ being late.</b>',
     answer:['for'], explain:'apologize for -ing는 "~한 것에 대해 사과하다"입니다.'},
  ]
},
{
  unit:15, title:'동명사 관용 표현', subtitle:'Gerund Idioms', chapter:'동명사',
  concept:'동명사가 들어가는 굳어진 표현들입니다. 통째로 외워 두면 문장을 바로 알아볼 수 있어요.',
  points:[
    '<b>be busy -ing</b>: ~하느라 바쁘다',
    '<b>feel like -ing</b>: ~하고 싶다',
    '<b>be worth -ing</b>: ~할 가치가 있다',
    '<b>cannot help -ing</b>: ~하지 않을 수 없다',
    '<b>go -ing</b>: ~하러 가다 (go fishing, go shopping)',
    '<b>spend 시간/돈 -ing</b>: ~하는 데 쓰다 / <b>have trouble -ing</b>: ~하는 데 어려움을 겪다',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I feel like ___ some pizza.</b>',
     options:['eat','to eat','eating','ate'],
     answer:2, explain:'feel like -ing는 "~하고 싶다"는 관용 표현입니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>She is busy ___ for the exam.</b> (prepare)',
     answer:['preparing'], explain:'be busy -ing는 "~하느라 바쁘다"입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This museum is worth ___.</b>',
     options:['visit','to visit','visiting','visited'],
     answer:2, explain:'be worth -ing는 "~할 가치가 있다"입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>We went ___ last Sunday.</b>',
     options:['to fish','fishing','fish','fished'],
     answer:1, explain:'go -ing는 "~하러 가다"라는 관용 표현입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I couldn\'t help ___ at his joke.</b> (laugh)',
     answer:['laughing'], explain:'cannot help -ing는 "~하지 않을 수 없다"입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He spent two hours ___ the report.</b> (write)',
     answer:['writing'], explain:'spend 시간 -ing는 "~하는 데 시간을 쓰다"입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['I have trouble sleeping.','She went shopping yesterday.','This book is worth to read.','They are busy cleaning.'],
     answer:2, explain:'be worth -ing이므로 worth reading이 맞습니다.'},
    {type:'mc', q:'우리말과 같도록 할 때 빈칸에 알맞은 것은?<br><b>나는 울지 않을 수 없었다.</b><br>I couldn\'t help ___.',
     options:['cry','to cry','crying','cried'],
     answer:2, explain:'cannot help -ing 구문이므로 crying이 맞습니다.'},
  ]
},
{
  unit:16, title:'부정사 vs 동명사', subtitle:'To-infinitive or Gerund', chapter:'동명사',
  concept:'동사에 따라 뒤에 오는 형태가 정해져 있고, 어떤 동사는 둘 다 쓸 수 있지만 <b>뜻이 달라집니다</b>. 이 구분이 시험에 자주 나와요.',
  points:[
    'to부정사만: want, hope, plan, decide, promise, expect, agree, refuse, wish',
    '동명사만: enjoy, finish, mind, avoid, keep, give up, practice, suggest',
    '둘 다 가능(뜻 같음): like, love, hate, begin, start, continue',
    '<b>remember/forget to do</b>: 앞으로 할 일',
    '<b>remember/forget doing</b>: 이미 한 일',
    '<b>stop to do</b>: ~하려고 멈추다 / <b>stop doing</b>: ~하기를 그만두다',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Remember ___ the door when you leave.</b>',
     options:['locking','to lock','locked','lock'],
     answer:1, explain:'앞으로 할 일을 기억하라는 뜻이므로 remember to do를 씁니다.'},
    {type:'mc', q:'다음 두 문장의 뜻 차이는?<br><b>(A) He stopped to talk.</b><br><b>(B) He stopped talking.</b>',
     options:['뜻이 같다','(A) 말하려고 멈췄다 / (B) 말을 그만뒀다','(A) 말을 그만뒀다 / (B) 말하려고 멈췄다','둘 다 말을 그만뒀다'],
     answer:1, explain:'stop to do는 "~하기 위해 멈추다", stop doing은 "~하기를 그만두다"입니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>They decided ___ early.</b> (leave)',
     answer:['to leave'], explain:'decide는 to부정사만 목적어로 취합니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>I avoided ___ him.</b> (meet)',
     answer:['meeting'], explain:'avoid는 동명사만 목적어로 취합니다.'},
    {type:'mc', q:'빈칸에 들어갈 형태가 <b>나머지와 다른</b> 것은?',
     options:['I hope ___ you. (see)','She refused ___. (answer)','He enjoys ___. (swim)','We agreed ___. (help)'],
     answer:2, explain:'enjoy는 동명사(swimming)를 취하고, 나머지는 to부정사를 취합니다.'},
    {type:'mc', q:'우리말과 같도록 할 때 알맞은 것은?<br><b>그를 만났던 것이 기억난다.</b><br>I remember ___ him.',
     options:['to meet','meeting','met','to meeting'],
     answer:1, explain:'이미 한 일을 기억할 때는 remember doing을 씁니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>Don\'t forget ___ the milk.</b> (buy, 앞으로 할 일)',
     answer:['to buy'], explain:'앞으로 할 일을 잊지 말라는 뜻이므로 forget to do를 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['She promised to come.','He minded waiting.','They wished going there.','I kept running.'],
     answer:2, explain:'wish는 to부정사를 취하므로 wished to go가 맞습니다.'},
  ]
},
{
  unit:17, title:'현재분사', subtitle:'Present Participle', chapter:'분사',
  concept:'동사원형 + -ing가 형용사처럼 쓰여 <b>능동·진행</b>의 뜻을 나타냅니다. "~하는, ~하고 있는"으로 해석해요.',
  points:[
    '명사 앞에서 꾸밈: <b>a crying baby</b> (우는 아기)',
    '명사 뒤에서 꾸밈(뒤에 말이 붙을 때): <b>the boy playing soccer</b>',
    '보어로 쓰임: <b>He sat reading a book.</b>',
    '진행형: <b>be동사 + -ing</b> — <b>She is singing.</b>',
    '지각동사 + 목적어 + -ing: <b>I saw him running.</b>',
    '동명사와 형태는 같지만, 동명사는 "~하는 것"(명사), 현재분사는 "~하는"(형용사)입니다.',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Look at the ___ star.</b> (빛나는 별)',
     options:['shine','shone','shining','to shine'],
     answer:2, explain:'별이 스스로 빛나는 능동이므로 현재분사 shining을 씁니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>Do you know the man ___ at the door?</b> (stand)',
     answer:['standing'], explain:'뒤에 at the door가 붙어 명사를 뒤에서 꾸미는 현재분사입니다.'},
    {type:'mc', q:'밑줄 친 부분의 성격이 <b>다른</b> 것은?',
     options:['the <u>barking</u> dog','a <u>sleeping</u> cat','<u>Reading</u> is fun.','the <u>falling</u> snow'],
     answer:2, explain:'3번은 주어 자리의 동명사이고, 나머지는 명사를 꾸미는 현재분사입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I heard someone ___ my name.</b>',
     options:['call','called','to call','calls'],
     answer:0, explain:'지각동사 hear 뒤에는 동사원형 call 또는 현재분사 calling이 옵니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>The baby kept ___ all night.</b> (cry)',
     answer:['crying'], explain:'keep -ing는 "계속 ~하다"는 뜻입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The girl ___ the piano is my sister.</b>',
     options:['play','played','playing','to play'],
     answer:2, explain:'소녀가 피아노를 치는 능동이므로 현재분사 playing을 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>There is a ___ river near my house.</b> (flow, 흐르는)',
     answer:['flowing'], explain:'강이 스스로 흐르는 능동이므로 현재분사를 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['The man sitting there is my uncle.','I saw her dancing.','Look at the smiled baby.','The running water is cold.'],
     answer:2, explain:'아기가 웃는 능동이므로 smiling이 맞습니다.'},
  ]
},
{
  unit:18, title:'과거분사', subtitle:'Past Participle', chapter:'분사',
  concept:'과거분사(p.p.)가 형용사처럼 쓰여 <b>수동·완료</b>의 뜻을 나타냅니다. "~된, ~당한"으로 해석해요.',
  points:[
    '명사 앞에서 꾸밈: <b>a broken window</b> (깨진 창문)',
    '명사 뒤에서 꾸밈: <b>a letter written in English</b>',
    '보어로 쓰임: <b>He kept the door closed.</b>',
    '불규칙 과거분사: break-broke-<b>broken</b>, steal-stole-<b>stolen</b>',
    'make-made-<b>made</b>, use-used-<b>used</b>, lose-lost-<b>lost</b>',
    '능동이면 -ing, 수동이면 p.p. — 이 구분이 핵심입니다.',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He showed me a ___ car.</b> (중고차)',
     options:['use','using','used','to use'],
     answer:2, explain:'차가 사용된 것이므로 수동의 과거분사 used를 씁니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>This is a song ___ by BTS.</b> (sing)',
     answer:['sung'], explain:'노래는 불려지는 것이므로 과거분사 sung을 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The police found the ___ bike.</b> (도난당한)',
     options:['steal','stealing','stolen','stole'],
     answer:2, explain:'자전거는 도난당한 것이므로 과거분사 stolen을 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Look at the ___ leaves on the ground.</b> (떨어진)',
     options:['fall','falling','fallen','fell'],
     answer:2, explain:'이미 떨어져 있는 완료 상태이므로 과거분사 fallen을 씁니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>I want my hair ___.</b> (cut)',
     answer:['cut'], explain:'머리는 잘리는 것이므로 과거분사 cut을 씁니다. (cut-cut-cut)'},
    {type:'mc', q:'빈칸에 들어갈 형태가 <b>다른</b> 것은?',
     options:['a ___ window (break)','a ___ wallet (lose)','a ___ baby (cry)','a ___ letter (write)'],
     answer:2, explain:'3번만 능동의 현재분사 crying이고, 나머지는 수동의 과거분사입니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>The house ___ in 1900 is still standing.</b> (build)',
     answer:['built'], explain:'집은 지어진 것이므로 과거분사 built를 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['I saw a boy helped by his mom.','The cooked rice smells good.','She has a car made in Korea.','The breaking glass is dangerous.'],
     answer:3, explain:'유리가 깨진 것이므로 broken glass가 맞습니다.'},
  ]
},
{
  unit:19, title:'분사의 뒤 수식', subtitle:'Participle after Noun', chapter:'분사',
  concept:'분사 뒤에 다른 말이 따라붙으면 <b>명사 뒤에서</b> 꾸밉니다. 관계대명사를 줄인 형태로 보면 이해하기 쉬워요.',
  points:[
    '분사 혼자면 앞에서: <b>the sleeping baby</b>',
    '분사 + 다른 말이면 뒤에서: <b>the baby sleeping in bed</b>',
    '<b>the man who is standing there</b> = <b>the man standing there</b>',
    '<b>the book which was written by him</b> = <b>the book written by him</b>',
    '즉, <b>주격 관계대명사 + be동사</b>를 생략한 형태입니다.',
    '능동이면 -ing, 수동이면 p.p.를 쓰는 원칙은 그대로예요.',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The boy ___ with the dog is my brother.</b>',
     options:['play','plays','playing','played'],
     answer:2, explain:'소년이 노는 능동이고 뒤에 with the dog가 붙으므로 playing이 옵니다.'},
    {type:'fill', q:'관계대명사를 분사로 바꾸세요.<br><b>The girl who is singing is Mia.</b><br>→ The girl ___ is Mia.',
     answer:['singing'], explain:'주격 관계대명사 + be동사를 생략하면 분사만 남습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I like the picture ___ on the wall.</b>',
     options:['hang','hanging','to hang','hangs'],
     answer:1, explain:'그림이 걸려 있는 상태를 나타내는 현재분사 hanging이 자연스럽습니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>The questions ___ by students were difficult.</b> (ask)',
     answer:['asked'], explain:'질문은 물어진 것이므로 수동의 과거분사 asked를 씁니다.'},
    {type:'mc', q:'다음 문장을 관계대명사로 바르게 풀어 쓴 것은?<br><b>The man wearing a hat is my teacher.</b>',
     options:['The man who wearing a hat','The man who is wearing a hat','The man which wears a hat','The man whom wears a hat'],
     answer:1, explain:'현재분사는 주격 관계대명사 + be동사를 줄인 형태입니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>The letter ___ yesterday arrived today.</b> (send)',
     answer:['sent'], explain:'편지는 보내진 것이므로 과거분사 sent를 씁니다.'},
    {type:'mc', q:'어순이 올바른 것은?',
     options:['the in the garden playing children','the playing children in the garden','the children playing in the garden','playing the children in the garden'],
     answer:2, explain:'분사에 다른 말이 붙으면 명사 뒤에서 꾸밉니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['The people invited to the party came.','I know the girl waiting outside.','The window broken by him was fixed.','The man sat on the bench reading was old.'],
     answer:3, explain:'어순이 어색합니다. The man reading on the bench 또는 The man sitting on the bench가 맞아요.'},
  ]
},
{
  unit:20, title:'감정 분사', subtitle:'-ing or -ed', chapter:'분사',
  concept:'감정을 나타내는 동사는 <b>감정을 주는 쪽</b>에 -ing, <b>감정을 느끼는 쪽</b>에 -ed를 씁니다. 사람이 느끼면 대개 -ed예요.',
  points:[
    '감정을 주는 것(사물·상황) → <b>-ing</b>: <b>The movie was exciting.</b>',
    '감정을 느끼는 것(사람) → <b>-ed</b>: <b>I was excited.</b>',
    'interesting / interested — 흥미로운 / 흥미를 느끼는',
    'boring / bored — 지루하게 하는 / 지루함을 느끼는',
    'surprising / surprised, shocking / shocked',
    'tiring / tired, confusing / confused, disappointing / disappointed',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I was ___ in the story.</b>',
     options:['interesting','interested','interest','to interest'],
     answer:1, explain:'사람이 흥미를 느낀 것이므로 interested를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The game was really ___.</b>',
     options:['excited','exciting','excite','excitement'],
     answer:1, explain:'게임이 흥분을 주는 것이므로 exciting을 씁니다.'},
    {type:'fill', q:'괄호 안의 단어를 알맞은 형태로 쓰세요.<br><b>The class was so ___ that I slept.</b> (bore)',
     answer:['boring'], explain:'수업이 지루함을 주는 것이므로 boring을 씁니다.'},
    {type:'fill', q:'괄호 안의 단어를 알맞은 형태로 쓰세요.<br><b>We were ___ at the result.</b> (surprise)',
     answer:['surprised'], explain:'사람이 놀란 것이므로 surprised를 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['The news was shocking.','I am tired of waiting.','This book is interested.','She looked confused.'],
     answer:2, explain:'책이 흥미를 주는 것이므로 interesting이 맞습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것끼리 짝지은 것은?<br><b>The trip was ___. I was very ___.</b> (tire)',
     options:['tired / tiring','tiring / tired','tired / tired','tiring / tiring'],
     answer:1, explain:'여행이 피곤하게 만들고(tiring), 사람이 피곤을 느낍니다(tired).'},
    {type:'fill', q:'괄호 안의 단어를 알맞은 형태로 쓰세요.<br><b>His speech was ___.</b> (disappoint)',
     answer:['disappointing'], explain:'연설이 실망을 주는 것이므로 disappointing을 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The ___ students asked many questions.</b> (흥미를 느낀)',
     options:['interesting','interested','interest','interests'],
     answer:1, explain:'학생들이 흥미를 느낀 것이므로 interested를 씁니다.'},
  ]
},
{
  unit:21, title:'수동태의 형태', subtitle:'Passive Basics', chapter:'수동태',
  concept:'동작을 <b>받는 쪽</b>을 주어로 삼는 표현입니다. <b>be동사 + 과거분사</b> 형태이고, 행위자는 <b>by ~</b>로 나타냅니다.',
  points:[
    '능동: <b>Tom broke the window.</b>',
    '수동: <b>The window was broken by Tom.</b>',
    '바꾸는 순서: ① 목적어를 주어로 ② 동사를 be + p.p.로 ③ 주어를 by 뒤로',
    'be동사는 새 주어의 수와 시제에 맞춥니다.',
    '행위자가 일반인(people, someone)이면 <b>by ~</b>는 생략해요.',
    '목적어가 없는 문장(1·2형식)은 수동태로 만들 수 없습니다.',
  ],
  bank:[
    {type:'mc', q:'다음 문장을 수동태로 바르게 바꾼 것은?<br><b>She wrote this letter.</b>',
     options:['This letter wrote by her.','This letter is written by her.','This letter was written by her.','This letter was wrote by her.'],
     answer:2, explain:'과거시제이고 주어가 단수이므로 was written이 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The cake ___ ___ by my mom.</b> (make, 과거)',
     answer:['was made'], explain:'단수 주어 + 과거시제이므로 was made를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>These books ___ by students.</b>',
     options:['is read','are read','was read','reads'],
     answer:1, explain:'주어가 복수 These books이고 현재시제이므로 are read를 씁니다.'},
    {type:'mc', q:'수동태로 바꿀 수 <b>없는</b> 문장은?',
     options:['He opened the door.','She sings a song.','The baby slept well.','They built a house.'],
     answer:2, explain:'sleep은 목적어가 없는 1형식 동사라 수동태로 바꿀 수 없습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Korean ___ ___ in Korea.</b> (speak, 현재)',
     answer:['is spoken'], explain:'한국어는 말해지는 대상이므로 is spoken입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['The room was cleaned yesterday.','This song is loved by many.','The window broken by him.','The letter was sent last week.'],
     answer:2, explain:'be동사가 없습니다. The window was broken by him.이 맞아요.'},
    {type:'fill', q:'수동태로 바꿀 때 빈칸을 채우세요.<br><b>Someone stole my phone.</b><br>→ My phone ___ ___.',
     answer:['was stolen'], explain:'행위자가 불분명한 someone이므로 by someone은 생략합니다.'},
    {type:'mc', q:'능동태로 바르게 바꾼 것은?<br><b>The dishes were washed by Jane.</b>',
     options:['Jane washes the dishes.','Jane washed the dishes.','Jane was washed the dishes.','The dishes washed Jane.'],
     answer:1, explain:'were washed는 과거시제 수동이므로 능동은 washed가 됩니다.'},
  ]
},
{
  unit:22, title:'시제별 수동태', subtitle:'Passive with Tenses', chapter:'수동태',
  concept:'수동태의 시제는 <b>be동사</b>로 나타냅니다. 과거분사는 그대로 두고 be동사만 바꾸면 돼요.',
  points:[
    '현재: <b>am/is/are + p.p.</b> — <b>It is made in Korea.</b>',
    '과거: <b>was/were + p.p.</b> — <b>It was made last year.</b>',
    '미래: <b>will be + p.p.</b> — <b>It will be made soon.</b>',
    '진행: <b>be being + p.p.</b> — <b>It is being made now.</b>',
    '완료: <b>have/has been + p.p.</b> — <b>It has been made.</b>',
    'be going to: <b>be going to be + p.p.</b>',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>A new bridge ___ next year.</b>',
     options:['is built','was built','will be built','has built'],
     answer:2, explain:'next year는 미래이므로 will be built를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The house ___ ___ ___ now.</b> (paint, 현재진행 수동)',
     answer:['is being painted'], explain:'현재진행 수동태는 is being + p.p. 형태입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The work ___ already.</b>',
     options:['has finished','has been finished','is finishing','was finishing'],
     answer:1, explain:'현재완료 수동태는 has been + p.p.입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['The road will be repaired.','The car is being fixed.','The letter has been sent.','The song was being sang.'],
     answer:3, explain:'sing의 과거분사는 sung이므로 was being sung이 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>English ___ ___ in this school since 1990.</b> (teach, 현재완료 수동)',
     answer:['has been taught'], explain:'since가 있으므로 현재완료 수동 has been taught를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The problem ___ tomorrow.</b>',
     options:['is solved','will be solved','has been solved','was solved'],
     answer:1, explain:'tomorrow는 미래이므로 will be solved입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Dinner ___ ___ ___ right now.</b> (cook, 현재진행 수동)',
     answer:['is being cooked'], explain:'right now이므로 현재진행 수동 is being cooked를 씁니다.'},
    {type:'mc', q:'다음 문장을 수동태로 바르게 바꾼 것은?<br><b>They will announce the result.</b>',
     options:['The result will announce.','The result will be announced.','The result is announced.','The result has announced.'],
     answer:1, explain:'미래 수동태는 will be + p.p.입니다.'},
  ]
},
{
  unit:23, title:'조동사 수동태', subtitle:'Modal Passive', chapter:'수동태',
  concept:'조동사가 있는 문장의 수동태는 <b>조동사 + be + 과거분사</b> 형태입니다. 조동사 뒤에는 늘 동사원형이 오므로 be가 됩니다.',
  points:[
    '<b>조동사 + be + p.p.</b>',
    'can: <b>It can be done.</b> (될 수 있다)',
    'must: <b>It must be finished.</b> (끝내져야 한다)',
    'should: <b>It should be cleaned.</b>',
    'will: <b>It will be sent.</b>',
    '부정: <b>조동사 + not + be + p.p.</b> — <b>It cannot be solved.</b>',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This rule must ___ by everyone.</b>',
     options:['follow','be followed','followed','following'],
     answer:1, explain:'조동사 수동태는 조동사 + be + p.p.이므로 be followed입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The homework should ___ ___ by Friday.</b> (submit)',
     answer:['be submitted'], explain:'should + be + p.p. 형태입니다.'},
    {type:'mc', q:'다음 문장을 수동태로 바르게 바꾼 것은?<br><b>You can solve this problem.</b>',
     options:['This problem can solve.','This problem can be solved.','This problem is can solved.','This problem can been solved.'],
     answer:1, explain:'조동사 can + be + p.p. 형태입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The window cannot ___ ___.</b> (open)',
     answer:['be opened'], explain:'cannot + be + p.p. 형태입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['It may be true.','The book must be returned.','The car will be washed.','The job can finished soon.'],
     answer:3, explain:'can + be + p.p.이므로 can be finished가 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>These cups must ___ ___ carefully.</b> (handle)',
     answer:['be handled'], explain:'must + be + p.p. 형태입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The meeting ___ be held tomorrow.</b>',
     options:['is','will','has','does'],
     answer:1, explain:'tomorrow이므로 미래 조동사 will이 들어갑니다.'},
    {type:'mc', q:'우리말과 같도록 할 때 알맞은 것은?<br><b>이 일은 오늘 끝내져야 한다.</b>',
     options:['This work must finish today.','This work must be finished today.','This work is must finished today.','This work must been finished today.'],
     answer:1, explain:'must + be + p.p. 형태로 써야 합니다.'},
  ]
},
{
  unit:24, title:'주의할 수동태', subtitle:'Special Passives', chapter:'수동태',
  concept:'by 대신 다른 전치사를 쓰는 수동태가 있습니다. 관용적으로 굳어진 표현이라 외워 두어야 해요.',
  points:[
    '<b>be interested in</b> ~에 흥미가 있다',
    '<b>be surprised at</b> ~에 놀라다',
    '<b>be satisfied with</b> ~에 만족하다',
    '<b>be filled with</b> ~로 가득 차다',
    '<b>be covered with</b> ~로 덮이다 / <b>be known to</b> ~에게 알려지다',
    '<b>be made of</b>(재료가 보임) / <b>be made from</b>(재료가 안 보임)',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The mountain is covered ___ snow.</b>',
     options:['by','with','of','at'],
     answer:1, explain:'be covered with는 "~로 덮이다"라는 관용 표현입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I was surprised ___ the news.</b>',
     answer:['at'], explain:'be surprised at은 "~에 놀라다"입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This table is made ___ wood.</b>',
     options:['from','of','with','by'],
     answer:1, explain:'나무가 그대로 보이는 재료이므로 be made of를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Wine is made ___ grapes.</b>',
     options:['of','from','with','at'],
     answer:1, explain:'포도가 와인이 되면서 성질이 변하므로 be made from을 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>She is satisfied ___ her job.</b>',
     answer:['with'], explain:'be satisfied with는 "~에 만족하다"입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He is known ___ everyone in town.</b>',
     options:['by','to','with','of'],
     answer:1, explain:'be known to는 "~에게 알려지다"입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The box was filled ___ toys.</b>',
     answer:['with'], explain:'be filled with는 "~로 가득 차다"입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['I am interested in music.','The floor is covered by dust.','She was pleased with the gift.','Cheese is made from milk.'],
     answer:1, explain:'be covered with가 맞습니다.'},
  ]
},
{
  unit:25, title:'주격 관계대명사', subtitle:'who / which', chapter:'관계대명사',
  concept:'두 문장을 이으면서 앞의 명사(<b>선행사</b>)를 설명합니다. 관계대명사가 뒤 문장의 <b>주어</b> 역할을 하면 주격이에요.',
  points:[
    '사람 선행사 → <b>who</b> (또는 that)',
    '사물·동물 선행사 → <b>which</b> (또는 that)',
    '주격은 바로 뒤에 <b>동사</b>가 옵니다.',
    '<b>I know a boy. + He plays the piano.</b>',
    '→ <b>I know a boy who plays the piano.</b>',
    '동사는 선행사의 수에 맞춥니다: <b>the boys who play</b>',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I have a friend ___ lives in Japan.</b>',
     options:['which','who','whose','what'],
     answer:1, explain:'선행사가 사람(a friend)이고 뒤에 동사가 오므로 주격 who입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This is the book ___ won the prize.</b>',
     options:['who','whom','which','whose'],
     answer:2, explain:'선행사가 사물(the book)이므로 which를 씁니다.'},
    {type:'fill', q:'두 문장을 이으세요.<br><b>I met a man. + He is a doctor.</b><br>→ I met a man ___ is a doctor.',
     answer:['who','that'], explain:'사람 선행사의 주격이므로 who 또는 that입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The students ___ study hard will pass.</b>',
     options:['who','which','whose','whom'],
     answer:0, explain:'선행사가 사람 복수이고 주격이므로 who입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Look at the dog ___ is running.</b>',
     answer:['which','that'], explain:'선행사가 동물이므로 which 또는 that을 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['I know a girl who sings well.','The car which is red is mine.','He has a cat who is white.','The man that came was tall.'],
     answer:2, explain:'고양이는 동물이므로 which나 that을 씁니다. (who는 보통 사람에 써요.)'},
    {type:'mc', q:'빈칸에 알맞은 동사 형태는?<br><b>The boys who ___ soccer are my friends.</b>',
     options:['plays','play','playing','to play'],
     answer:1, explain:'선행사가 복수 The boys이므로 동사도 복수형 play입니다.'},
    {type:'fill', q:'두 문장을 이으세요.<br><b>I bought a bag. + It was cheap.</b><br>→ I bought a bag ___ was cheap.',
     answer:['which','that'], explain:'사물 선행사의 주격이므로 which 또는 that입니다.'},
  ]
},
{
  unit:26, title:'목적격 관계대명사', subtitle:'Object & Omission', chapter:'관계대명사',
  concept:'관계대명사가 뒤 문장의 <b>목적어</b> 역할을 하면 목적격입니다. 목적격은 <b>생략할 수 있다</b>는 점이 중요해요.',
  points:[
    '사람 → <b>who(m)</b>, 사물 → <b>which</b>, 둘 다 <b>that</b> 가능',
    '목적격 뒤에는 <b>주어 + 동사</b>가 옵니다.',
    '<b>This is the book which I read.</b> → <b>the book I read</b> (생략 가능)',
    '주격은 생략할 수 없습니다.',
    '전치사가 앞에 오면 생략 불가: <b>the man to whom I spoke</b>',
    '전치사가 뒤에 남으면 생략 가능: <b>the man (who) I spoke to</b>',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The movie ___ we saw was great.</b>',
     options:['who','which','whose','what'],
     answer:1, explain:'선행사가 사물이고 saw의 목적어이므로 which입니다.'},
    {type:'mc', q:'관계대명사를 <b>생략할 수 있는</b> 문장은?',
     options:['I have a friend who helps me.','The book which is on the desk is mine.','This is the pen which I lost.','The man who called was angry.'],
     answer:2, explain:'3번의 which는 lost의 목적어(목적격)라 생략할 수 있습니다.'},
    {type:'fill', q:'두 문장을 이으세요.<br><b>This is the song. + I like it.</b><br>→ This is the song ___ I like.',
     answer:['which','that'], explain:'사물 선행사의 목적격이므로 which 또는 that입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The girl ___ I met yesterday is kind.</b>',
     options:['which','whom','whose','what'],
     answer:1, explain:'선행사가 사람이고 met의 목적어이므로 whom(또는 who, that)입니다.'},
    {type:'fill', q:'관계대명사를 생략해서 다시 쓰세요.<br><b>The cake which she made was good.</b><br>→ The cake ___ ___ was good.',
     answer:['she made'], explain:'목적격 관계대명사는 생략할 수 있습니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['The man I saw was tall.','The book I read it was fun.','The song she sang was nice.','The car he bought is new.'],
     answer:1, explain:'관계대명사가 이미 목적어 역할을 하므로 it을 또 쓸 수 없습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The house ___ we live in is old.</b>',
     options:['who','which','whose','what'],
     answer:1, explain:'선행사가 사물이고 in의 목적어이므로 which입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The person ___ I trust most is my mom.</b> (사람, 목적격)',
     answer:['who','whom','that'], explain:'사람 선행사의 목적격이므로 who(m) 또는 that입니다.'},
  ]
},
{
  unit:27, title:'소유격 whose', subtitle:'Possessive Relative', chapter:'관계대명사',
  concept:'선행사가 뒤 문장의 명사를 <b>소유</b>할 때 whose를 씁니다. "~의"라는 뜻이고, 사람과 사물 모두에 쓸 수 있어요.',
  points:[
    '<b>whose + 명사</b> 형태로 씁니다.',
    '<b>I know a boy. + His father is a doctor.</b>',
    '→ <b>I know a boy whose father is a doctor.</b>',
    '사물에도 쓸 수 있습니다: <b>the house whose roof is red</b>',
    'whose 뒤에는 관사(a, the)를 쓰지 않습니다.',
    'whose는 생략할 수 없어요.',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I have a friend ___ mother is a teacher.</b>',
     options:['who','which','whose','whom'],
     answer:2, explain:'친구의 어머니라는 소유 관계이므로 whose입니다.'},
    {type:'fill', q:'두 문장을 이으세요.<br><b>This is the car. + Its color is blue.</b><br>→ This is the car ___ color is blue.',
     answer:['whose'], explain:'사물에도 소유격 whose를 쓸 수 있습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The man ___ car was stolen called the police.</b>',
     options:['who','whom','whose','which'],
     answer:2, explain:'그 남자의 차라는 소유 관계이므로 whose입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['I met a girl whose name is Mia.','The book whose cover is red is mine.','He is the boy whose the father is rich.','She has a dog whose tail is long.'],
     answer:2, explain:'whose 뒤에는 관사를 쓰지 않으므로 whose father가 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I know a woman ___ son is a singer.</b>',
     answer:['whose'], explain:'그 여자의 아들이라는 소유 관계입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Do you know the student ___ bag is on the floor?</b>',
     options:['who','whose','which','what'],
     answer:1, explain:'학생의 가방이라는 소유 관계이므로 whose입니다.'},
    {type:'fill', q:'두 문장을 이으세요.<br><b>I visited a town. + Its people are kind.</b><br>→ I visited a town ___ people are kind.',
     answer:['whose'], explain:'마을의 사람들이라는 소유 관계입니다.'},
    {type:'mc', q:'빈칸에 들어갈 말이 <b>다른</b> 하나는?',
     options:['the boy ___ sings well','the girl ___ father is a pilot','the man ___ house is big','the tree ___ leaves are green'],
     answer:0, explain:'1번은 주격 who이고, 나머지는 모두 소유격 whose입니다.'},
  ]
},
{
  unit:28, title:'관계대명사 that', subtitle:'Relative that', chapter:'관계대명사',
  concept:'that은 사람·사물 모두에 쓸 수 있는 편리한 관계대명사입니다. 다만 <b>that만 써야 하는 경우</b>와 <b>that을 쓸 수 없는 경우</b>가 있어요.',
  points:[
    'that = who / whom / which 대신 사용 가능 (소유격은 불가)',
    '<b>that을 주로 쓰는 경우</b>:',
    '선행사에 최상급·서수·the only·the very·all·every가 붙을 때',
    '<b>He is the smartest boy that I know.</b>',
    '선행사가 사람 + 사물일 때: <b>the man and his dog that ~</b>',
    '<b>that을 쓸 수 없는 경우</b>: 전치사 바로 뒤, 콤마(,) 뒤',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This is the best movie ___ I\'ve ever seen.</b>',
     options:['who','which','that','whose'],
     answer:2, explain:'선행사에 최상급 the best가 붙으면 주로 that을 씁니다.'},
    {type:'mc', q:'that을 쓸 수 <b>없는</b> 문장은?',
     options:['The girl ___ I like is kind.','This is the house in ___ he lives.','The only person ___ helped me was Tom.','I know a man ___ speaks French.'],
     answer:1, explain:'전치사 바로 뒤에는 that을 쓸 수 없습니다. which가 맞아요.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He is the first student ___ arrived.</b>',
     answer:['that'], explain:'서수 the first가 붙으면 주로 that을 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Look at the man and the dog ___ are crossing the street.</b>',
     options:['who','which','that','whose'],
     answer:2, explain:'선행사가 사람 + 동물이므로 that을 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>This is all ___ I know.</b>',
     answer:['that'], explain:'선행사가 all이면 주로 that을 씁니다.'},
    {type:'mc', q:'어법상 <b>어색한</b> 문장은?',
     options:['The book that I bought is useful.','She is the only friend that I have.','My father, that is a doctor, is busy.','Everything that happened was strange.'],
     answer:2, explain:'콤마 뒤에는 that을 쓸 수 없습니다. who가 맞아요.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This is the very book ___ I wanted.</b>',
     options:['who','what','that','whose'],
     answer:2, explain:'the very가 붙으면 주로 that을 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Every student ___ attended got a prize.</b>',
     answer:['that'], explain:'선행사에 every가 붙으면 주로 that을 씁니다.'},
  ]
},
{
  unit:29, title:'관계대명사 what', subtitle:'Relative what', chapter:'관계대명사',
  concept:'what은 <b>선행사를 포함한</b> 관계대명사로, "~하는 것"이라는 뜻입니다. 앞에 꾸밀 명사가 없다는 점이 다른 관계대명사와 달라요.',
  points:[
    '<b>what = the thing(s) which/that</b>',
    '<b>What he said is true.</b> (그가 말한 것은)',
    '앞에 선행사가 <b>없습니다</b>.',
    '주어·목적어·보어 자리에 모두 올 수 있어요.',
    '<b>that</b>과 비교: that 앞에는 선행사가 있고, what 앞에는 없습니다.',
    '<b>the thing that</b>을 쓸 자리면 what으로 바꿀 수 있어요.',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ I want is a new phone.</b>',
     options:['That','Which','What','Who'],
     answer:2, explain:'선행사가 없고 "내가 원하는 것"이라는 뜻이므로 What입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This is the book ___ I bought.</b>',
     options:['what','that','whose','whom'],
     answer:1, explain:'선행사 the book이 있으므로 that(또는 which)을 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Tell me ___ you saw.</b> (네가 본 것)',
     answer:['what'], explain:'선행사가 없으므로 what을 씁니다.'},
    {type:'mc', q:'what을 쓸 수 <b>없는</b> 문장은?',
     options:['___ she did was wrong.','I believe ___ he says.','This is the pen ___ I lost.','Show me ___ you have.'],
     answer:2, explain:'the pen이라는 선행사가 있으므로 what을 쓸 수 없습니다.'},
    {type:'fill', q:'밑줄 친 부분을 what으로 바꿔 쓰세요.<br><b><u>The thing that</u> I need is time.</b><br>→ ___ I need is time.',
     answer:['What'], explain:'the thing that은 what과 같습니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['What matters is your effort.','I know what you mean.','This is what book I want.','He showed me what he made.'],
     answer:2, explain:'what 뒤에 명사를 바로 쓸 수 없습니다. the book that I want가 맞아요.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>___ he told me was a lie.</b>',
     answer:['What'], explain:'선행사가 없고 주어 자리이므로 What입니다.'},
    {type:'mc', q:'빈칸에 들어갈 말이 <b>같은</b> 것끼리 짝지은 것은?<br>(A) ___ I like is music.<br>(B) The song ___ I like is old.<br>(C) ___ she bought was expensive.',
     options:['A-B','A-C','B-C','모두 같음'],
     answer:1, explain:'A와 C는 선행사가 없어 what, B는 선행사가 있어 that/which입니다.'},
  ]
},
{
  unit:30, title:'시간 접속사', subtitle:'Time Conjunctions', chapter:'접속사',
  concept:'두 사건의 시간 관계를 이어 주는 접속사입니다. 가장 중요한 규칙은 <b>시간 부사절에서는 미래를 현재시제로 쓴다</b>는 점이에요.',
  points:[
    'when(~할 때), while(~하는 동안), as(~할 때)',
    'before(~하기 전에), after(~한 후에)',
    'until/till(~할 때까지), since(~한 이후로)',
    'as soon as(~하자마자)',
    '<b>시간 부사절에서는 미래 대신 현재시제</b>',
    '<b>I will call you when I arrive.</b> (will arrive ✗)',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I will wait until he ___.</b>',
     options:['will come','comes','came','coming'],
     answer:1, explain:'시간 부사절에서는 미래를 현재시제로 쓰므로 comes입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ I was cooking, the phone rang.</b>',
     options:['Until','While','Since','As soon as'],
     answer:1, explain:'"요리하는 동안"이라는 뜻이므로 While입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Call me ___ ___ ___ you arrive.</b> (도착하자마자)',
     answer:['as soon as'], explain:'as soon as는 "~하자마자"라는 뜻입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Wash your hands ___ you eat.</b>',
     options:['before','after','until','since'],
     answer:0, explain:'"먹기 전에 손을 씻어라"는 뜻이므로 before입니다.'},
    {type:'fill', q:'빈칸에 알맞은 동사 형태를 쓰세요.<br><b>We will go out after it ___ raining.</b> (stop)',
     answer:['stops'], explain:'시간 부사절이므로 미래 대신 현재시제 stops를 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['When you will come, call me.','I slept while he studied.','She left after I arrived.','Wait here until I return.'],
     answer:0, explain:'시간 부사절에서는 현재시제를 쓰므로 When you come이 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I have lived here ___ I was born.</b>',
     answer:['since'], explain:'"태어난 이후로"라는 뜻이므로 since입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ I opened the door, the cat ran out.</b>',
     options:['Until','Before','As soon as','Although'],
     answer:2, explain:'"문을 열자마자"라는 뜻이므로 As soon as입니다.'},
  ]
},
{
  unit:31, title:'이유·조건 접속사', subtitle:'Reason & Condition', chapter:'접속사',
  concept:'이유를 나타내는 because/since/as와 조건을 나타내는 if/unless를 배웁니다. <b>조건 부사절에서도 미래를 현재시제로</b> 씁니다.',
  points:[
    '이유: because, since, as (~때문에)',
    '<b>because + 주어 + 동사</b> ↔ <b>because of + 명사</b>',
    '<b>I was late because of the rain.</b> (명사 앞은 because of)',
    '조건: if(만약 ~라면), unless(~하지 않으면)',
    '<b>unless = if ~ not</b>',
    '<b>조건 부사절에서도 미래 대신 현재시제</b>',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>We stayed home ___ the heavy rain.</b>',
     options:['because','because of','since','as'],
     answer:1, explain:'뒤에 명사구가 오므로 because of를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>If it ___ tomorrow, we will cancel.</b>',
     options:['will rain','rains','rained','raining'],
     answer:1, explain:'조건 부사절에서는 미래를 현재시제로 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ you study, you will fail.</b>',
     options:['If','Unless','Because','Although'],
     answer:1, explain:'"공부하지 않으면 떨어진다"는 뜻이므로 Unless입니다.'},
    {type:'fill', q:'같은 뜻이 되도록 빈칸을 채우세요.<br><b>If you don\'t hurry, you\'ll be late.</b><br>→ ___ you hurry, you\'ll be late.',
     answer:['Unless'], explain:'unless는 if ~ not과 같은 뜻입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He couldn\'t come ___ he was sick.</b>',
     answer:['because','since','as'], explain:'뒤에 주어 + 동사가 오므로 because(또는 since, as)를 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['I stayed in because of the snow.','If he will call, tell me.','Unless you try, you won\'t know.','She left because she was tired.'],
     answer:1, explain:'조건 부사절이므로 If he calls가 맞습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ it was cold, I wore a coat.</b>',
     options:['Since','Unless','Although','So'],
     answer:0, explain:'"추웠기 때문에"라는 이유이므로 Since입니다.'},
    {type:'fill', q:'빈칸에 알맞은 동사 형태를 쓰세요.<br><b>If you ___ hard, you will succeed.</b> (work)',
     answer:['work'], explain:'조건 부사절이므로 현재시제 work를 씁니다.'},
  ]
},
{
  unit:32, title:'양보 접속사', subtitle:'Concession', chapter:'접속사',
  concept:'"~이지만, ~에도 불구하고"처럼 예상과 반대되는 내용을 이어 줍니다. 뒤에 <b>절</b>이 오는지 <b>명사</b>가 오는지로 구분하세요.',
  points:[
    '<b>although / though / even though</b> + 주어 + 동사',
    '<b>Although he is young, he is wise.</b>',
    '<b>in spite of / despite</b> + 명사(구)',
    '<b>In spite of the rain, we went out.</b>',
    'but은 등위접속사라 문장 중간에 옵니다: <b>He is young, but he is wise.</b>',
    'although와 but을 <b>한 문장에 함께 쓰지 않습니다</b>.',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ he was tired, he kept working.</b>',
     options:['Because','Although','So','If'],
     answer:1, explain:'"피곤했지만"이라는 양보의 뜻이므로 Although입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ his efforts, he failed.</b>',
     options:['Although','Even though','In spite of','Though'],
     answer:2, explain:'뒤에 명사구 his efforts가 오므로 In spite of를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>___ it was raining, they played soccer.</b> (비가 왔지만)',
     answer:['Although','Though','Even though'], explain:'뒤에 절이 오므로 Although 계열을 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['Although he tried, he lost.','Despite the cold, she went out.','Although he is rich, but he is unhappy.','Even though it hurt, he smiled.'],
     answer:2, explain:'although와 but을 함께 쓸 수 없습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>___ ___ the noise, I slept well.</b> (소음에도 불구하고)',
     answer:['In spite of','Despite'], explain:'뒤에 명사가 오므로 In spite of 또는 Despite를 씁니다.'},
    {type:'mc', q:'다음 문장과 뜻이 같은 것은?<br><b>Although she was sick, she came.</b>',
     options:['Because she was sick, she came.','In spite of her sickness, she came.','If she was sick, she came.','She was sick, so she came.'],
     answer:1, explain:'절을 명사구로 바꾸면 In spite of her sickness가 됩니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He is poor, ___ he is happy.</b>',
     options:['although','but','despite','even though'],
     answer:1, explain:'문장 중간에서 두 절을 대등하게 이으므로 but입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Despite ___ ___, he passed the exam.</b> (그의 실수)',
     answer:['his mistakes','his mistake'], explain:'Despite 뒤에는 명사(구)가 옵니다.'},
  ]
},
{
  unit:33, title:'짝 접속사', subtitle:'Correlative Conjunctions', chapter:'접속사',
  concept:'둘이 짝을 이루어 쓰이는 접속사입니다. <b>동사의 수를 어디에 맞추는지</b>가 자주 출제돼요.',
  points:[
    '<b>both A and B</b> (A와 B 둘 다) → 항상 <b>복수</b> 동사',
    '<b>either A or B</b> (A 또는 B)',
    '<b>neither A nor B</b> (A도 B도 아니다)',
    '<b>not only A but also B</b> (A뿐 아니라 B도) = <b>B as well as A</b>',
    'both를 뺀 나머지는 동사를 <b>B(뒤쪽)</b>에 맞춥니다.',
    '<b>Neither you nor he is right.</b> (he에 맞춤)',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Both Tom and Jane ___ students.</b>',
     options:['is','are','was','has'],
     answer:1, explain:'both A and B는 항상 복수 취급하므로 are입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Neither he nor I ___ going.</b>',
     options:['is','am','are','be'],
     answer:1, explain:'neither A nor B는 뒤쪽(I)에 맞추므로 am입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Not only she but also they ___ happy.</b> (be동사)',
     answer:['are'], explain:'not only A but also B는 뒤쪽(they)에 맞추므로 are입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>You can take ___ the bus or the subway.</b>',
     options:['both','either','neither','not only'],
     answer:1, explain:'or와 짝을 이루는 것은 either입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He speaks ___ English ___ Chinese.</b> (둘 다)',
     answer:['both and','both'], explain:'both A and B는 "둘 다"라는 뜻입니다.'},
    {type:'mc', q:'다음 문장과 뜻이 같은 것은?<br><b>Not only Tom but also Mia came.</b>',
     options:['Tom as well as Mia came.','Mia as well as Tom came.','Neither Tom nor Mia came.','Either Tom or Mia came.'],
     answer:1, explain:'not only A but also B = B as well as A이므로 순서가 바뀝니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['Both you and I are ready.','Either you or he has to go.','Neither of them is here.','Not only he but also you is late.'],
     answer:3, explain:'뒤쪽 you에 맞춰야 하므로 are late가 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>___ Tom ___ Jane came. They both stayed home.</b> (둘 다 아니다)',
     answer:['Neither nor','Neither'], explain:'neither A nor B는 "A도 B도 아니다"입니다.'},
  ]
},
{
  unit:34, title:'원급 비교', subtitle:'as ~ as', chapter:'비교 구문',
  concept:'두 대상이 <b>같은 정도</b>임을 나타낼 때 as ~ as를 씁니다. 사이에는 반드시 <b>원급</b>(형용사·부사의 원래 형태)이 들어가요.',
  points:[
    '<b>as + 원급 + as</b>: ~만큼 …한',
    '<b>He is as tall as his brother.</b>',
    '부정: <b>not as(so) + 원급 + as</b> (~만큼 …하지 않다)',
    '<b>배수 + as ~ as</b>: <b>twice as big as</b> (두 배 큰)',
    '<b>as ~ as possible</b> = <b>as ~ as 주어 can</b> (가능한 한 ~하게)',
    'as 사이에 비교급을 쓰지 않도록 주의하세요.',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>She is as ___ as her sister.</b>',
     options:['prettier','prettiest','pretty','more pretty'],
     answer:2, explain:'as ~ as 사이에는 원급을 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Run as fast as ___.</b> (가능한 한)',
     answer:['possible'], explain:'as ~ as possible은 "가능한 한 ~하게"입니다.'},
    {type:'mc', q:'다음 문장과 뜻이 같은 것은?<br><b>Tom is not as tall as Mike.</b>',
     options:['Tom is taller than Mike.','Mike is taller than Tom.','Tom and Mike are the same height.','Mike is shorter than Tom.'],
     answer:1, explain:'톰이 마이크만큼 크지 않다는 것은 마이크가 더 크다는 뜻입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>This box is ___ as heavy as that one.</b> (두 배)',
     answer:['twice'], explain:'배수는 as ~ as 앞에 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['He runs as fast as I.','She is as kind as her mom.','This is as more big as that.','It is not so cold as yesterday.'],
     answer:2, explain:'as 사이에는 원급을 쓰므로 as big as가 맞습니다.'},
    {type:'fill', q:'같은 뜻이 되도록 빈칸을 채우세요.<br><b>Come as soon as possible.</b><br>→ Come as soon as you ___.',
     answer:['can'], explain:'as ~ as possible = as ~ as 주어 can입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>My bag is three times ___ expensive as yours.</b>',
     options:['so','as','more','very'],
     answer:1, explain:'배수 + as + 원급 + as 형태입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He doesn\'t study as ___ as his brother.</b> (hard)',
     answer:['hard'], explain:'부정문에서도 as ~ as 사이에는 원급을 씁니다.'},
  ]
},
{
  unit:35, title:'비교급', subtitle:'Comparative', chapter:'비교 구문',
  concept:'두 대상을 견주어 <b>한쪽이 더 ~하다</b>고 할 때 씁니다. 형용사·부사에 -er을 붙이거나 앞에 more를 둡니다.',
  points:[
    '짧은 말: <b>-er</b> — tall-taller, big-bigger, easy-easier',
    '긴 말(3음절 이상): <b>more</b> — more beautiful, more difficult',
    '비교급 + <b>than</b>',
    '불규칙: good/well-<b>better</b>, bad-<b>worse</b>, many/much-<b>more</b>, little-<b>less</b>',
    '비교급 강조: <b>much, far, a lot, even</b> (very는 ✗)',
    '<b>the 비교급, the 비교급</b>: ~하면 할수록 더 …하다',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This book is ___ than that one.</b>',
     options:['interesting','more interesting','most interesting','interestinger'],
     answer:1, explain:'interesting은 긴 말이므로 more interesting입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Today is ___ colder than yesterday.</b>',
     options:['very','much','so','too'],
     answer:1, explain:'비교급 강조에는 much, far, a lot, even을 씁니다.'},
    {type:'fill', q:'괄호 안의 단어를 알맞은 형태로 쓰세요.<br><b>His score is ___ than mine.</b> (bad)',
     answer:['worse'], explain:'bad의 비교급은 불규칙 변화로 worse입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The more you read, the ___ you know.</b> (much)',
     answer:['more'], explain:'the 비교급, the 비교급 구문이고 much의 비교급은 more입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['She is smarter than me.','This is more better than that.','He runs faster than I.','It is much easier now.'],
     answer:1, explain:'better 자체가 비교급이므로 more를 함께 쓸 수 없습니다.'},
    {type:'fill', q:'괄호 안의 단어를 알맞은 형태로 쓰세요.<br><b>My room is ___ than yours.</b> (big)',
     answer:['bigger'], explain:'big은 자음을 한 번 더 쓰고 -er을 붙여 bigger가 됩니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Health is ___ important than money.</b>',
     options:['very','much','more','most'],
     answer:2, explain:'than이 있으므로 비교급 more important입니다.'},
    {type:'mc', q:'우리말과 같도록 할 때 알맞은 것은?<br><b>일찍 올수록 더 좋다.</b>',
     options:['The earlier you come, the better.','The early you come, the good.','Earlier you come, better.','The more early, the more good.'],
     answer:0, explain:'the 비교급, the 비교급 구문입니다.'},
  ]
},
{
  unit:36, title:'최상급', subtitle:'Superlative', chapter:'비교 구문',
  concept:'셋 이상 중에서 <b>가장 ~하다</b>고 할 때 씁니다. 앞에 보통 <b>the</b>를 붙여요.',
  points:[
    '짧은 말: <b>the -est</b> — the tallest, the biggest',
    '긴 말: <b>the most</b> — the most beautiful',
    '불규칙: good-<b>best</b>, bad-<b>worst</b>, many-<b>most</b>',
    '범위: <b>in + 장소·집단</b>, <b>of + 복수명사</b>',
    '<b>the tallest in my class</b> / <b>the tallest of the three</b>',
    '<b>one of the 최상급 + 복수명사</b>: 가장 ~한 것 중 하나',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He is the ___ student in the class.</b>',
     options:['tall','taller','tallest','more tall'],
     answer:2, explain:'in the class라는 범위가 있으므로 최상급 tallest입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This is the ___ movie I\'ve seen.</b>',
     options:['good','better','best','most good'],
     answer:2, explain:'good의 최상급은 불규칙 변화로 best입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>She is the tallest ___ the three.</b>',
     answer:['of'], explain:'복수명사 앞에는 of를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Seoul is the largest city ___ Korea.</b>',
     answer:['in'], explain:'장소나 집단 앞에는 in을 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>It is one of the ___ in the world.</b>',
     options:['tallest building','tallest buildings','taller buildings','tall buildings'],
     answer:1, explain:'one of the 최상급 + 복수명사 형태입니다.'},
    {type:'mc', q:'다음 문장과 뜻이 같은 것은?<br><b>No other student is taller than Mike.</b>',
     options:['Mike is the shortest student.','Mike is the tallest student.','Mike is as tall as others.','Mike is taller than himself.'],
     answer:1, explain:'"아무도 더 크지 않다"는 최상급과 같은 뜻입니다.'},
    {type:'fill', q:'괄호 안의 단어를 알맞은 형태로 쓰세요.<br><b>This is the ___ day of my life.</b> (bad)',
     answer:['worst'], explain:'bad의 최상급은 worst입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['She is the most popular singer.','He is the smartest of the group.','This is the most best way.','It is the oldest tree in town.'],
     answer:2, explain:'best 자체가 최상급이므로 most를 함께 쓸 수 없습니다.'},
  ]
},
{
  unit:37, title:'can · may', subtitle:'Ability & Permission', chapter:'조동사',
  concept:'can은 <b>능력·허가·가능성</b>을, may는 <b>허가·약한 추측</b>을 나타냅니다. 조동사 뒤에는 항상 <b>동사원형</b>이 와요.',
  points:[
    'can: ~할 수 있다(능력), ~해도 된다(허가)',
    '<b>can = be able to</b> — 과거는 <b>could</b> 또는 <b>was/were able to</b>',
    'may: ~해도 된다(허가), ~일지도 모른다(추측)',
    '<b>might</b>는 may보다 약한 추측',
    '공손한 부탁: <b>Could you ~?</b> / <b>May I ~?</b>',
    '부정: <b>cannot(can\'t)</b>, <b>may not</b>',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>She ___ speak three languages.</b>',
     options:['cans','can','can to','able'],
     answer:1, explain:'조동사 can 뒤에는 동사원형이 오고, 주어에 따라 변하지 않습니다.'},
    {type:'mc', q:'밑줄 친 부분과 바꿔 쓸 수 있는 것은?<br><b>He <u>can</u> swim well.</b>',
     options:['is able to','is able','can to','able to'],
     answer:0, explain:'can = be able to이며 주어에 맞춰 is를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I was ___ ___ finish it on time.</b> (끝낼 수 있었다)',
     answer:['able to'], explain:'could 대신 was able to를 쓸 수 있습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>It ___ rain this afternoon.</b> (올지도 모른다)',
     options:['can','may','must','should'],
     answer:1, explain:'약한 추측을 나타내므로 may입니다.'},
    {type:'mc', q:'가장 공손한 표현은?',
     options:['Open the window.','Can you open the window?','Could you open the window?','You open the window.'],
     answer:2, explain:'could는 can보다 공손한 부탁 표현입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>___ I use your phone?</b> (써도 될까요?)',
     answer:['May','Can','Could'], explain:'허가를 구할 때 May I ~?를 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['He can plays the guitar.','She may be at home.','I could not come.','You can go now.'],
     answer:0, explain:'조동사 뒤에는 동사원형이 오므로 can play가 맞습니다.'},
    {type:'mc', q:'밑줄 친 can의 뜻이 <b>다른</b> 것은?',
     options:['I <u>can</u> swim.','She <u>can</u> cook well.','You <u>can</u> leave now.','He <u>can</u> run fast.'],
     answer:2, explain:'3번은 허가(~해도 된다), 나머지는 능력(~할 수 있다)입니다.'},
  ]
},
{
  unit:38, title:'must · should', subtitle:'Obligation & Advice', chapter:'조동사',
  concept:'must는 <b>강한 의무·강한 추측</b>을, should는 <b>충고·당연</b>을 나타냅니다. 부정형의 뜻 차이가 특히 중요해요.',
  points:[
    'must: ~해야 한다(의무), ~임에 틀림없다(추측)',
    '<b>must = have to</b> — 과거는 <b>had to</b>',
    '<b>must not</b>: ~하면 안 된다 (금지)',
    '<b>don\'t have to</b>: ~할 필요 없다 (= need not)',
    'should: ~하는 게 좋다(충고) = <b>ought to</b>',
    '<b>had better</b>: ~하는 게 낫다 (뒤에 동사원형)',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>You ___ smoke here. It\'s forbidden.</b>',
     options:["don't have to",'must not','need not','may not have'],
     answer:1, explain:'금지를 나타내므로 must not입니다.'},
    {type:'mc', q:'밑줄 친 부분과 뜻이 같은 것은?<br><b>You <u>don\'t have to</u> wait.</b>',
     options:['must not wait','should not wait','need not wait','cannot wait'],
     answer:2, explain:"don't have to는 \"~할 필요 없다\"로 need not과 같습니다."},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He ___ be hungry. He hasn\'t eaten all day.</b>',
     options:['must','may not','should','can'],
     answer:0, explain:'강한 추측을 나타내므로 must입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I ___ ___ study hard yesterday.</b> (공부해야 했다)',
     answer:['had to'], explain:'must의 과거는 had to를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>You ___ see a doctor. You look sick.</b>',
     options:['should','must not','need not','cannot'],
     answer:0, explain:'충고를 나타내므로 should입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>You had ___ take an umbrella.</b>',
     answer:['better'], explain:'had better는 "~하는 게 낫다"는 뜻입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['You should to rest.','He must be tired.','We had to leave early.','She ought to apologize.'],
     answer:0, explain:'should 뒤에는 동사원형이 오므로 should rest가 맞습니다.'},
    {type:'mc', q:'우리말과 같도록 할 때 알맞은 것은?<br><b>너는 서두를 필요 없다.</b>',
     options:["You must not hurry.","You don't have to hurry.","You should not hurry.","You cannot hurry."],
     answer:1, explain:"\"~할 필요 없다\"는 don't have to입니다."},
  ]
},
{
  unit:39, title:'조동사 + have p.p.', subtitle:'Past Speculation', chapter:'조동사',
  concept:'과거의 일에 대한 <b>추측이나 후회</b>를 나타냅니다. 조동사 뒤에 have + 과거분사가 오는 형태예요.',
  points:[
    '<b>must have p.p.</b>: ~했음에 틀림없다',
    '<b>may/might have p.p.</b>: ~했을지도 모른다',
    '<b>cannot have p.p.</b>: ~했을 리가 없다',
    '<b>should have p.p.</b>: ~했어야 했는데 (안 했다, 후회)',
    '<b>should not have p.p.</b>: ~하지 말았어야 했는데',
    '<b>need not have p.p.</b>: ~할 필요가 없었는데 (했다)',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He ___ the bus. He arrived late.</b> (놓쳤음에 틀림없다)',
     options:['must miss','must have missed','should miss','can have missed'],
     answer:1, explain:'과거에 대한 강한 추측이므로 must have p.p.입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I ___ ___ studied harder.</b> (공부했어야 했는데)',
     answer:['should have'], explain:'should have p.p.는 하지 않은 일에 대한 후회입니다.'},
    {type:'mc', q:'다음 문장의 뜻으로 알맞은 것은?<br><b>She cannot have said that.</b>',
     options:['그녀는 그렇게 말할 수 없다','그녀가 그렇게 말했을 리가 없다','그녀는 그렇게 말해야 한다','그녀가 그렇게 말했을지도 모른다'],
     answer:1, explain:'cannot have p.p.는 "~했을 리가 없다"는 강한 부정 추측입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>You ___ ___ ___ told him the secret.</b> (말하지 말았어야 했는데)',
     answer:['should not have',"shouldn't have"], explain:'should not have p.p.는 한 일에 대한 후회입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He ___ forgotten. He is very busy.</b> (잊었을지도 모른다)',
     options:['must have','may have','cannot have','should have'],
     answer:1, explain:'약한 추측이므로 may have p.p.입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['He must have been sick.','I should have called you.','She may have left already.','You cannot have to come.'],
     answer:3, explain:'cannot have p.p. 형태여야 하므로 cannot have come이 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>It ___ ___ rained. The ground is wet.</b> (비가 왔음에 틀림없다)',
     answer:['must have'], explain:'과거에 대한 강한 추측이므로 must have p.p.입니다.'},
    {type:'mc', q:'우리말과 같도록 할 때 알맞은 것은?<br><b>그는 거기 갔을지도 모른다.</b>',
     options:['He must have gone there.','He might have gone there.','He cannot have gone there.','He should have gone there.'],
     answer:1, explain:'약한 추측이므로 might have p.p.입니다.'},
  ]
},
{
  unit:40, title:'간접의문문', subtitle:'Indirect Questions', chapter:'마무리',
  concept:'의문문이 다른 문장 안으로 들어간 형태입니다. 핵심은 어순이 <b>의문사 + 주어 + 동사</b>로 바뀐다는 점이에요.',
  points:[
    '직접: <b>Where is he?</b> → 간접: <b>I know where he is.</b>',
    '어순: <b>의문사 + 주어 + 동사</b> (평서문 어순)',
    'do/does/did는 사라지고 시제만 동사에 반영됩니다.',
    '<b>Where does he live?</b> → <b>I wonder where he lives.</b>',
    '의문사가 없으면 <b>if / whether</b>를 씁니다.',
    'think, believe, guess가 주절이면 의문사가 맨 앞으로 나옵니다.',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Do you know where ___?</b>',
     options:['does she live','she lives','lives she','is she living'],
     answer:1, explain:'간접의문문의 어순은 의문사 + 주어 + 동사입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I wonder ___ he is coming.</b>',
     options:['what','who','if','which'],
     answer:2, explain:'의문사가 없는 의문문이 들어갈 때는 if 또는 whether를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Tell me what time ___ ___.</b> (몇 시인지)',
     answer:['it is'], explain:'간접의문문이므로 주어 + 동사 어순인 it is가 됩니다.'},
    {type:'mc', q:'어법상 <b>옳은</b> 문장은?',
     options:['I don\'t know what is his name.','Do you know when does it start?','Can you tell me how old he is?','I wonder where did she go.'],
     answer:2, explain:'how old he is가 의문사 + 주어 + 동사의 올바른 어순입니다.'},
    {type:'fill', q:'빈칸에 알맞은 동사 형태를 쓰세요.<br><b>Nobody knows why he ___.</b> (leave, 과거)',
     answer:['left'], explain:'did가 사라지고 시제가 동사에 반영되어 left가 됩니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ do you think she is?</b>',
     options:['Do you know who','Who','That who','If who'],
     answer:1, explain:'think가 주절일 때는 의문사가 문장 맨 앞으로 나옵니다.'},
    {type:'mc', q:'다음 문장을 간접의문문으로 바르게 바꾼 것은?<br><b>Where did you buy it?</b> + <b>Tell me.</b>',
     options:['Tell me where did you buy it.','Tell me where you bought it.','Tell me where you did buy it.','Tell me did you buy it where.'],
     answer:1, explain:'did가 사라지고 시제가 동사에 반영되며 주어 + 동사 어순이 됩니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I asked her ___ she liked it.</b> (좋아하는지)',
     answer:['if','whether'], explain:'의문사가 없으므로 if 또는 whether를 씁니다.'},
  ]
},
];

const GRAMMAR_UNITS = GRAMMAR.length;
// 문법 시작일(이 Day부터 1차시)
const GRAMMAR_START_DAY = 82;

// ══════════════════════════════════════════════════════
// 문법 학습 화면 로직
// ══════════════════════════════════════════════════════

const GRAMMAR_KEY = 'grammar_hajun';
const G_COLOR = '#c47a2a';

let gState = {
  unit: 1,
  phase: 'home',      // home | concept | quiz | result
  problems: [],
  idx: 0,
  answers: [],
  correct: 0,
  history: [],
};

// ── 저장/불러오기 ─────────────────────────────────────
function gLoad() {
  return new Promise((resolve) => {
    const cb = 'gcb_' + Date.now();
    const s = document.createElement('script');
    window[cb] = (data) => {
      delete window[cb];
      if (s.parentNode) s.parentNode.removeChild(s);
      resolve((data && Array.isArray(data.history)) ? data : { history: [], wrongs: {} });
    };
    s.onerror = () => resolve({ history: [], wrongs: {} });
    s.src = API + '?kid=' + GRAMMAR_KEY + '&callback=' + cb;
    document.body.appendChild(s);
    setTimeout(() => resolve({ history: [], wrongs: {} }), 10000);
  });
}
async function gSave(data) {
  try {
    await fetch(API, { method:'POST', mode:'no-cors',
      headers:{'Content-Type':'text/plain'},
      body: JSON.stringify({ kid: GRAMMAR_KEY, data }) });
  } catch {}
}

// ── 오늘의 차시 (시작일부터 순차 진행) ──────────────────
function gTodayUnit() {
  const d = getTodayDay();
  if (d < GRAMMAR_START_DAY) return 1;
  const n = d - GRAMMAR_START_DAY + 1;
  return n > GRAMMAR_UNITS ? GRAMMAR_UNITS : n;   // 40차시를 마치면 마지막 차시 유지
}
function gIsFinished() {
  return getTodayDay() - GRAMMAR_START_DAY + 1 > GRAMMAR_UNITS;
}

// ── 문제 뽑기 (은행에서 5개 랜덤) ──────────────────────
function gPickProblems(unit) {
  const u = GRAMMAR.find(x => x.unit === unit);
  const pool = u.bank.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 10);
}

// ── 정답 확인 ─────────────────────────────────────────
function gCheck(p, input) {
  if (p.type === 'mc') return input === p.answer;
  const norm = s => String(s).trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.]$/, '');
  return p.answer.some(a => norm(a) === norm(input));
}

// ── 화면: 홈 ──────────────────────────────────────────
async function renderGrammarHome() {
  const el = document.getElementById('page-grammar');
  el.innerHTML = '<div class="loading">불러오는 중...</div>';
  const saved = await gLoad();
  gState.history = saved.history || [];
  const today = gTodayUnit();
  gState.unit = today;

  const u = GRAMMAR.find(x => x.unit === today);
  const hist = gState.history;
  const doneSet = new Set(hist.map(h => h.unit));

  // 차시 목록을 단원(chapter)별로 묶기
  const chapters = [];
  GRAMMAR.forEach(g => {
    let ch = chapters.find(c => c.name === g.chapter);
    if (!ch) { ch = { name: g.chapter, items: [] }; chapters.push(ch); }
    ch.items.push(g);
  });

  const listHTML = chapters.map(ch => `
    <div class="g-chapter">
      <div class="g-chapter-name">${ch.name}</div>
      ${ch.items.map(g => {
        const isToday = g.unit === today;
        const isDone = doneSet.has(g.unit) && !isToday;
        return `<div class="g-unit-row ${isToday ? 'on' : ''} ${isDone ? 'done' : ''}" onclick="gSelectUnit(${g.unit})">
          <span class="gur-num">${isDone ? '✓' : g.unit}</span>
          <span class="gur-name">${g.title}</span>
          ${isToday ? '<span class="gur-tag">오늘</span>' : ''}
        </div>`;
      }).join('')}
    </div>`).join('');

  const recent = hist.length === 0
    ? '<p class="empty">아직 기록이 없어요</p>'
    : hist.slice(-6).reverse().map(h => {
        const c2 = h.rate >= 80 ? '#4caf6e' : h.rate >= 60 ? G_COLOR : '#d94f4f';
        return `<div class="g-hist">
          <span class="gh-date">${h.date}</span>
          <span class="gh-unit">${h.title}</span>
          <span class="gh-score" style="color:${c2}">${h.correct}/${h.total}</span>
        </div>`;
      }).join('');

  const doneCount = doneSet.size;
  const pct = Math.round(doneCount / GRAMMAR_UNITS * 100);

  el.innerHTML = `
    <div class="g-header">
      <h2>오늘의 문법</h2>
      <p>하준 · 중2 영문법 ${today}/${GRAMMAR_UNITS}차시</p>
    </div>
    <div class="g-card center">
      <div class="g-unit-badge">${today}차시</div>
      <div class="g-unit-title">${u.title}</div>
      <div class="g-unit-sub">${u.chapter} · ${u.subtitle}</div>
      <button class="g-btn" onclick="gStartConcept()">개념 보기 →</button>
    </div>
    ${gIsFinished() ? '<div class="g-done-msg">40차시를 모두 마쳤어요 🎉<br>복습하거나 중3 과정으로 넘어가요</div>' : ''}
    <div class="g-card">
      <div class="g-prog-head">
        <span class="clabel" style="margin:0">진도</span>
        <span class="g-prog-num">${doneCount} / ${GRAMMAR_UNITS}차시 완료</span>
      </div>
      <div class="g-progress" style="margin-bottom:0"><div class="g-bar" style="width:${pct}%"></div></div>
    </div>
    <div class="g-card">
      <div class="clabel">전체 차시</div>
      ${listHTML}
    </div>
    <div class="g-card">
      <div class="clabel">최근 기록</div>
      ${recent}
    </div>
  `;
}

function gSelectUnit(n) {
  gState.unit = n;
  gStartConcept();
}

// ── 화면: 개념 설명 ────────────────────────────────────
function gStartConcept() {
  const u = GRAMMAR.find(x => x.unit === gState.unit);
  document.getElementById('page-grammar').innerHTML = `
    <div class="g-header">
      <h2>${u.title}</h2>
      <p>${u.chapter} · ${u.unit}차시</p>
    </div>
    <div class="g-card">
      <div class="g-concept">${u.concept}</div>
    </div>
    <div class="g-card">
      <div class="clabel">핵심 정리</div>
      <ul class="g-points">
        ${u.points.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
    ${u.traps && u.traps.length ? `
    <div class="g-card trap">
      <div class="clabel trap-label">⚠️ 자주 틀리는 함정</div>
      <ul class="g-traps">
        ${u.traps.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>` : ''}
    <button class="g-btn" onclick="gStartQuiz()">문제 풀기 (10문제) →</button>
    <button class="g-btn ghost" onclick="renderGrammarHome()">단원 목록</button>
  `;
  window.scrollTo(0, 0);
}

// ── 화면: 문제 ────────────────────────────────────────
function gStartQuiz() {
  gState.problems = gPickProblems(gState.unit);
  gState.idx = 0;
  gState.answers = [];
  gState.correct = 0;
  gRenderQuiz();
}

function gRenderQuiz() {
  const p = gState.problems[gState.idx];
  const u = GRAMMAR.find(x => x.unit === gState.unit);

  const body = p.type === 'mc'
    ? `<div class="g-options">
        ${p.options.map((o, i) => `
          <button class="g-opt" id="gopt-${i}" onclick="gAnswerMC(${i})">
            <span class="go-num">${i + 1}</span><span class="go-text">${o}</span>
          </button>`).join('')}
       </div>`
    : `<input id="g-input" class="g-input" autocomplete="off" autocapitalize="off"
             placeholder="답을 입력하세요" onkeydown="if(event.key==='Enter')gAnswerFill()">
       <button id="g-submit" class="g-btn" onclick="gAnswerFill()">확인</button>`;

  document.getElementById('page-grammar').innerHTML = `
    <div class="g-header">
      <h2>${u.title}</h2>
      <p>${gState.idx + 1} / ${gState.problems.length}</p>
    </div>
    <div class="g-progress"><div class="g-bar" style="width:${gState.idx / gState.problems.length * 100}%"></div></div>
    <div class="g-card">
      <div class="g-q">${p.q}</div>
      ${body}
      <div id="g-feedback" class="g-fb"></div>
      <div id="g-explain" class="g-explain"></div>
      <button id="g-next" class="g-btn" style="display:none" onclick="gNext()">다음 →</button>
    </div>
  `;
  if (p.type === 'fill') setTimeout(() => { const i = document.getElementById('g-input'); if (i) i.focus(); }, 100);
  window.scrollTo(0, 0);
}

function gAnswerMC(choice) {
  const p = gState.problems[gState.idx];
  const ok = gCheck(p, choice);
  // 버튼 상태 표시
  p.options.forEach((_, i) => {
    const b = document.getElementById('gopt-' + i);
    b.disabled = true;
    if (i === p.answer) b.classList.add('correct');
    else if (i === choice) b.classList.add('wrong');
  });
  gFinishOne(ok, p, p.options[choice]);
}

function gAnswerFill() {
  const inp = document.getElementById('g-input');
  const val = inp.value;
  if (!val.trim()) return;
  const p = gState.problems[gState.idx];
  const ok = gCheck(p, val);
  inp.disabled = true;
  inp.classList.add(ok ? 'correct' : 'wrong');
  document.getElementById('g-submit').style.display = 'none';
  gFinishOne(ok, p, val);
}

function gFinishOne(ok, p, given) {
  if (ok) gState.correct++;
  gState.answers.push({
    q: p.q, ok, given,
    correct: p.type === 'mc' ? p.options[p.answer] : p.answer[0],
  });
  const fb = document.getElementById('g-feedback');
  fb.textContent = ok ? '정답이에요! ⭕' : `정답은 "${p.type === 'mc' ? p.options[p.answer] : p.answer[0]}"`;
  fb.className = 'g-fb ' + (ok ? 'ok' : 'no');
  document.getElementById('g-explain').innerHTML = p.explain;
  document.getElementById('g-next').style.display = 'block';
}

function gNext() {
  gState.idx++;
  if (gState.idx >= gState.problems.length) gFinish();
  else gRenderQuiz();
}

// ── 화면: 결과 ────────────────────────────────────────
async function gFinish() {
  const u = GRAMMAR.find(x => x.unit === gState.unit);
  const rate = Math.round(gState.correct / gState.problems.length * 100);
  const t = new Date();
  const date = `${t.getMonth() + 1}/${t.getDate()}`;

  const saved = await gLoad();
  const hist = saved.history || [];
  hist.push({ date, unit: gState.unit, title: u.title, correct: gState.correct, total: gState.problems.length, rate });
  await gSave({ history: hist.slice(-40) });
  gState.history = hist;

  let msg, emoji;
  if (rate >= 80) { msg = '아주 잘했어요!'; emoji = '🎉'; }
  else if (rate >= 60) { msg = '잘하고 있어요'; emoji = '👍'; }
  else { msg = '개념을 한 번 더 볼까요?'; emoji = '📚'; }

  const wrong = gState.answers.filter(a => !a.ok);

  document.getElementById('page-grammar').innerHTML = `
    <div class="g-header">
      <h2>${emoji} ${msg}</h2>
      <p>${u.title}</p>
    </div>
    <div class="g-result">
      <div class="g-score">${gState.correct}<span>/${gState.problems.length}</span></div>
      <div class="g-rate">정답률 ${rate}%</div>
    </div>
    ${wrong.length ? `
      <div class="g-card">
        <div class="clabel">틀린 문제</div>
        ${wrong.map(a => `
          <div class="g-wrong">
            <div class="gw-q">${a.q}</div>
            <div class="gw-a">내 답: <span class="no">${a.given}</span> · 정답: <span class="ok">${a.correct}</span></div>
          </div>`).join('')}
      </div>` : ''}
    <button class="g-btn" onclick="gStartQuiz()">다시 풀기</button>
    <button class="g-btn ghost" onclick="gStartConcept()">개념 다시 보기</button>
    <button class="g-btn ghost" onclick="renderGrammarHome()">단원 목록</button>
  `;
  window.scrollTo(0, 0);
}
