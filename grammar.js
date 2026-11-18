// ══════════════════════════════════════════════════════
// 중학 영문법 — 개념 설명 + 문제 (하준)
// 각 단원: concept(개념), points(핵심), bank(문제 은행)
// 문제 type: 'mc'(4지선다) | 'fill'(빈칸 입력)
// ══════════════════════════════════════════════════════

const GRAMMAR = [
{
  unit:1, title:'문장의 형식', subtitle:'5 Sentence Patterns',
  concept:'영어 문장은 동사의 성격에 따라 다섯 가지 틀로 나뉩니다. 어떤 자리가 비어 있는지 보면 문장 구조가 보여요.',
  points:[
    '1형식: 주어 + 동사 — <b>The baby cried.</b>',
    '2형식: 주어 + 동사 + 보어 — <b>She is a doctor.</b> / <b>He looks tired.</b>',
    '3형식: 주어 + 동사 + 목적어 — <b>I like music.</b>',
    '4형식: 주어 + 동사 + 간접목적어 + 직접목적어 — <b>He gave me a book.</b>',
    '5형식: 주어 + 동사 + 목적어 + 목적격보어 — <b>They call him Tom.</b>',
    '2형식 보어는 주어를 설명하고, 5형식 보어는 목적어를 설명합니다.',
  ],
  bank:[
    {type:'mc', q:'다음 중 <b>2형식</b> 문장은?',
     options:['She wrote a letter.','The soup tastes salty.','He gave her a ring.','They made him captain.'],
     answer:1, explain:'taste는 감각동사로 뒤에 형용사 보어를 씁니다. salty가 주어 The soup를 설명하므로 2형식이에요.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The news made everyone ___.</b>',
     options:['happily','happy','happiness','to happy'],
     answer:1, explain:'5형식에서 목적격보어 자리에는 형용사가 옵니다. everyone의 상태를 설명하므로 happy예요.'},
    {type:'mc', q:'다음 중 문장 형식이 <b>다른</b> 하나는?',
     options:['He became a teacher.','She felt nervous.','I sent him a card.','The sky turned dark.'],
     answer:2, explain:'나머지는 모두 2형식(주어+동사+보어)이고, I sent him a card.만 4형식입니다.'},
    {type:'mc', q:'밑줄 친 부분의 역할은?<br><b>They elected her <u>president</u>.</b>',
     options:['주어','직접목적어','목적격보어','부사'],
     answer:2, explain:'president는 목적어 her가 무엇이 되었는지 설명하는 목적격보어입니다. 5형식 문장이에요.'},
    {type:'fill', q:'4형식을 3형식으로 바꾸세요.<br><b>He showed me the photo.</b><br>→ He showed the photo ___ me.',
     answer:['to'], explain:'show, give, send, tell은 3형식으로 바꿀 때 전치사 to를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>My mother bought a bag ___ me.</b><br>(4형식: bought me a bag)',
     answer:['for'], explain:'buy, make, cook, get은 3형식으로 바꿀 때 전치사 for를 씁니다.'},
    {type:'mc', q:'어법상 <b>어색한</b> 문장은?',
     options:['The flower smells sweet.','He looks sadly today.','She kept the room clean.','I found the book easy.'],
     answer:1, explain:'look은 감각동사라 뒤에 형용사가 와야 합니다. sadly(부사)가 아니라 sad가 맞아요.'},
    {type:'fill', q:'빈칸에 알맞은 형태를 쓰세요.<br><b>Her voice sounds ___.</b> (beautiful)',
     answer:['beautiful'], explain:'sound는 감각동사이므로 형용사 beautiful을 그대로 씁니다. beautifully(부사)는 쓸 수 없어요.'},
  ]
},
{
  unit:2, title:'현재완료', subtitle:'Present Perfect',
  concept:'현재완료(have/has + 과거분사)는 과거에 일어난 일이 지금과 이어져 있을 때 씁니다. 과거시제가 "그때 있었던 일"이라면, 현재완료는 "그래서 지금 어떤지"에 초점이 있어요.',
  points:[
    '경험: <b>I have been to Japan.</b> (가 본 적이 있다)',
    '계속: <b>She has lived here for 5 years.</b> (계속 살고 있다)',
    '완료: <b>He has just finished it.</b> (막 끝냈다)',
    '결과: <b>I have lost my key.</b> (잃어버려서 지금 없다)',
    '함께 쓰는 말: ever, never, already, yet, just, since, for',
    '명백한 과거 표시(yesterday, last year, ago, When ~?)와는 함께 쓸 수 없어요.',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I ___ my homework yet.</b>',
     options:["didn't finish","haven't finished","don't finish","hadn't finished"],
     answer:1, explain:'yet은 현재완료와 함께 쓰여 "아직 ~하지 않았다"를 나타냅니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['She has lived in Seoul since 2020.','I have seen that movie twice.','He has gone to Paris last week.','They have just arrived.'],
     answer:2, explain:'last week은 명백한 과거를 나타내므로 현재완료와 함께 쓸 수 없습니다. went가 맞아요.'},
    {type:'mc', q:'다음 문장의 현재완료 용법은?<br><b>He has lost his wallet.</b>',
     options:['경험','계속','완료','결과'],
     answer:3, explain:'잃어버린 결과로 지금 지갑이 없다는 뜻이므로 결과 용법입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I have known her ___ ten years.</b>',
     answer:['for'], explain:'기간(ten years) 앞에는 for, 시작 시점 앞에는 since를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>We have been friends ___ elementary school.</b>',
     answer:['since'], explain:'elementary school은 시작 시점이므로 since를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ you ever ridden a horse?</b>',
     options:['Do','Did','Have','Are'],
     answer:2, explain:'ever와 과거분사 ridden이 있으므로 현재완료 의문문 Have you ~?가 맞습니다.'},
    {type:'mc', q:'두 문장의 뜻이 <b>다른</b> 것은?',
     options:['He has gone to Busan. / 그는 부산에 가고 없다.','I have been to Busan. / 부산에 가 본 적이 있다.','She has just left. / 그녀는 막 떠났다.','They have gone to Busan. / 그들은 부산에 가 본 적이 있다.'],
     answer:3, explain:'have gone to는 "가서 지금 없다"(결과), have been to는 "가 본 적이 있다"(경험)입니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>She has ___ this book three times.</b> (read)',
     answer:['read'], explain:'read의 과거분사는 형태가 같은 read입니다. (발음만 [red]로 달라져요.)'},
  ]
},
{
  unit:3, title:'to부정사', subtitle:'To-infinitive',
  concept:'to + 동사원형은 문장에서 명사, 형용사, 부사 역할을 합니다. 어떤 자리에 놓였는지 보면 어떤 용법인지 알 수 있어요.',
  points:[
    '명사적: 주어·목적어·보어 — <b>To read books is fun.</b> / <b>I want to go.</b>',
    '형용사적: 앞의 명사를 꾸밈 — <b>I have something to eat.</b>',
    '부사적: 목적·감정의 원인·결과 — <b>He came to see me.</b> (~하기 위해)',
    '가주어 it: <b>It is hard to swim.</b> (To swim is hard.와 같음)',
    '의미상 주어: <b>It is easy <u>for him</u> to do it.</b> / 사람 성격 형용사는 <b>of</b>',
    '부정형은 <b>not to</b> — <b>I told him not to go.</b>',
  ],
  bank:[
    {type:'mc', q:'밑줄 친 부분의 용법은?<br><b>I need a chair <u>to sit on</u>.</b>',
     options:['명사적 용법','형용사적 용법','부사적 용법','감탄문'],
     answer:1, explain:'앞의 명사 a chair를 꾸며 주므로 형용사적 용법입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>It is kind ___ you to help me.</b>',
     options:['for','of','to','with'],
     answer:1, explain:'kind, nice, polite 같은 사람의 성격을 나타내는 형용사 뒤에는 of를 씁니다.'},
    {type:'mc', q:'밑줄 친 부분의 용법이 <b>나머지와 다른</b> 것은?',
     options:['He studied hard <u>to pass</u> the exam.','She was glad <u>to hear</u> the news.','My dream is <u>to be</u> a pilot.','I went out <u>to buy</u> milk.'],
     answer:2, explain:'3번은 보어 자리의 명사적 용법이고, 나머지는 부사적 용법입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>My mom told me ___ ___ late.</b> (늦지 말라고)',
     answer:['not to'], explain:'to부정사의 부정은 to 앞에 not을 붙여 not to로 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>It is difficult ___ me to understand this.</b>',
     options:['of','for','to','at'],
     answer:1, explain:'difficult는 성격 형용사가 아니므로 의미상 주어에 for를 씁니다.'},
    {type:'fill', q:'다음 문장을 가주어 it으로 시작하도록 고치세요.<br><b>To learn English is useful.</b><br>→ ___ is useful to learn English.',
     answer:['It'], explain:'긴 주어를 뒤로 보내고 앞자리에 가주어 It을 씁니다.'},
    {type:'mc', q:'어법상 <b>어색한</b> 문장은?',
     options:['I hope to see you again.','She decided to study abroad.','He enjoyed to play soccer.','They promised to come early.'],
     answer:2, explain:'enjoy는 목적어로 to부정사를 쓸 수 없고 동명사를 씁니다. enjoyed playing이 맞아요.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He grew up ___ ___ a famous singer.</b> (자라서 유명 가수가 되었다)',
     answer:['to be','to become'], explain:'결과를 나타내는 부사적 용법입니다. grew up to be/become ~ 형태로 씁니다.'},
  ]
},
{
  unit:4, title:'동명사', subtitle:'Gerund',
  concept:'동사원형 + -ing가 명사처럼 쓰이는 것이 동명사입니다. 주어, 목적어, 보어, 전치사의 목적어 자리에 올 수 있어요.',
  points:[
    '주어: <b>Swimming is good for health.</b>',
    '목적어: <b>I enjoy reading.</b>',
    '전치사 뒤: <b>He is good at singing.</b> (전치사 뒤에는 반드시 동명사)',
    '관용 표현: <b>be busy -ing</b>, <b>feel like -ing</b>, <b>be worth -ing</b>',
    '<b>look forward to -ing</b>, <b>be used to -ing</b>의 to는 전치사라 동명사가 와요.',
    '부정형은 동명사 앞에 not — <b>I regret not telling her.</b>',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>She is interested in ___ photos.</b>',
     options:['take','takes','taking','to take'],
     answer:2, explain:'전치사 in 뒤에는 동명사가 와야 합니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['I look forward to seeing you.','He is used to get up early.','They kept talking loudly.','Reading comics is fun.'],
     answer:1, explain:'be used to -ing(~하는 데 익숙하다)의 to는 전치사이므로 getting이 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I feel like ___ a walk.</b> (take)',
     answer:['taking'], explain:'feel like -ing는 "~하고 싶다"는 뜻의 관용 표현입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>My hobby is ___ model cars.</b>',
     options:['collect','collecting','collected','collects'],
     answer:1, explain:'보어 자리에 동명사가 와서 "~하는 것"이라는 뜻을 나타냅니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>She is busy ___ for the test.</b> (study)',
     answer:['studying'], explain:'be busy -ing는 "~하느라 바쁘다"는 관용 표현입니다.'},
    {type:'mc', q:'밑줄 친 -ing의 성격이 <b>다른</b> 것은?',
     options:['<u>Cooking</u> is my hobby.','He is good at <u>drawing</u>.','The <u>sleeping</u> baby is cute.','I finished <u>cleaning</u> my room.'],
     answer:2, explain:'3번은 명사를 꾸미는 현재분사이고, 나머지는 모두 동명사입니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This book is worth ___.</b>',
     options:['read','to read','reading','readed'],
     answer:2, explain:'be worth -ing는 "~할 가치가 있다"는 관용 표현입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Thank you for ___ me.</b> (help)',
     answer:['helping'], explain:'전치사 for 뒤에는 동명사가 옵니다.'},
  ]
},
{
  unit:5, title:'부정사와 동명사', subtitle:'To-infinitive vs Gerund',
  concept:'동사에 따라 뒤에 오는 형태가 정해져 있습니다. to부정사는 주로 앞으로의 일, 동명사는 이미 한 일이나 일반적인 행위와 어울려요.',
  points:[
    'to부정사만: want, hope, plan, decide, promise, expect, agree, refuse',
    '동명사만: enjoy, finish, mind, avoid, keep, give up, practice, suggest',
    '둘 다 가능(뜻 같음): like, love, hate, begin, start, continue',
    '뜻이 달라지는 동사:',
    '<b>remember to do</b> (할 일을 기억) / <b>remember doing</b> (한 일을 기억)',
    '<b>stop to do</b> (~하려고 멈추다) / <b>stop doing</b> (~하기를 그만두다)',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He avoided ___ eye contact.</b>',
     options:['make','to make','making','made'],
     answer:2, explain:'avoid는 동명사만 목적어로 취합니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>They decided ___ abroad.</b>',
     options:['going','to go','gone','goes'],
     answer:1, explain:'decide는 to부정사만 목적어로 취합니다.'},
    {type:'mc', q:'우리말과 같도록 할 때 알맞은 것은?<br><b>문을 잠그는 것을 잊지 마라.</b><br>Don\'t forget ___ the door.',
     options:['locking','to lock','locked','lock'],
     answer:1, explain:'forget to do는 "앞으로 할 일을 잊다"는 뜻입니다. forget doing은 "한 일을 잊다"예요.'},
    {type:'mc', q:'다음 두 문장의 뜻 차이로 알맞은 것은?<br><b>(A) He stopped to smoke.</b><br><b>(B) He stopped smoking.</b>',
     options:['둘 다 담배를 끊었다','(A) 피우려고 멈췄다 / (B) 끊었다','(A) 끊었다 / (B) 피우려고 멈췄다','뜻이 같다'],
     answer:1, explain:'stop to do는 "~하기 위해 하던 일을 멈추다", stop doing은 "~하기를 그만두다"입니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>I finished ___ the report.</b> (write)',
     answer:['writing'], explain:'finish는 동명사만 목적어로 취합니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>She promised ___ on time.</b> (come)',
     answer:['to come'], explain:'promise는 to부정사만 목적어로 취합니다.'},
    {type:'mc', q:'어법상 <b>어색한</b> 문장은?',
     options:['I mind waiting here.','We hope to win the game.','He gave up to smoke.','She kept running.'],
     answer:2, explain:'give up은 동명사만 취하므로 gave up smoking이 맞습니다.'},
    {type:'mc', q:'빈칸에 들어갈 말이 <b>나머지와 다른</b> 것은?',
     options:['I enjoy ___ music. (listen to)','He practiced ___ the piano. (play)','They agreed ___ us. (help)','Would you mind ___ the window? (open)'],
     answer:2, explain:'agree는 to부정사를 취하고(to help), 나머지는 모두 동명사를 취합니다.'},
  ]
},
{
  unit:6, title:'분사', subtitle:'Participles',
  concept:'현재분사(-ing)와 과거분사(p.p.)는 형용사처럼 명사를 꾸미거나 보어로 쓰입니다. 능동이면 -ing, 수동이면 과거분사예요.',
  points:[
    '현재분사(능동·진행): <b>a crying baby</b> (우는 아기)',
    '과거분사(수동·완료): <b>a broken window</b> (깨진 창문)',
    '뒤에서 꾸미기: <b>the boy <u>playing</u> soccer</b> / <b>a letter <u>written</u> in English</b>',
    '감정 동사: 사물·원인은 -ing, 사람의 느낌은 p.p.',
    '<b>The movie was exciting.</b> / <b>I was excited.</b>',
    'interesting/interested, boring/bored, surprising/surprised도 같은 원리',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Look at the ___ leaves.</b> (떨어지는 나뭇잎)',
     options:['fall','fallen','falling','fell'],
     answer:2, explain:'잎이 스스로 떨어지는 능동·진행의 의미이므로 현재분사 falling을 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The movie was so ___ that I fell asleep.</b>',
     options:['bored','boring','bore','to bore'],
     answer:1, explain:'영화가 지루함을 주는 원인이므로 -ing 형태인 boring을 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I was ___ at the news.</b>',
     options:['surprising','surprise','surprised','to surprise'],
     answer:2, explain:'사람이 놀라움을 느낀 것이므로 과거분사 surprised를 씁니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>This is a book ___ by Hemingway.</b> (write)',
     answer:['written'], explain:'책은 쓰여진 것이므로 수동의 과거분사 written을 씁니다.'},
    {type:'fill', q:'괄호 안의 동사를 알맞은 형태로 쓰세요.<br><b>Do you know the girl ___ over there?</b> (stand)',
     answer:['standing'], explain:'소녀가 스스로 서 있는 능동이므로 현재분사 standing을 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['The exciting game ended late.','I am interesting in science.','He showed me a used car.','The sleeping cat looks peaceful.'],
     answer:1, explain:'사람이 흥미를 느끼는 것이므로 interested가 맞습니다.'},
    {type:'mc', q:'밑줄 친 부분의 쓰임이 <b>다른</b> 것은?',
     options:['the <u>barking</u> dog','a <u>surprising</u> result','He is <u>reading</u> a book.','<u>running</u> water'],
     answer:2, explain:'3번은 현재진행형의 일부이고, 나머지는 명사를 꾸미는 현재분사입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The window ___ by the boy was expensive.</b> (break)',
     answer:['broken'], explain:'창문이 깨진 것이므로 수동의 과거분사 broken을 씁니다.'},
  ]
},
{
  unit:7, title:'수동태', subtitle:'Passive Voice',
  concept:'동작을 받는 쪽을 주어로 삼는 표현입니다. be동사 + 과거분사 형태로 쓰고, 행위자는 by ~로 나타내요.',
  points:[
    '기본형: <b>be동사 + p.p. (+ by 행위자)</b>',
    '능동: <b>Tom broke the vase.</b> → 수동: <b>The vase was broken by Tom.</b>',
    '시제는 be동사로 나타냅니다: is written / was written / will be written',
    '조동사: <b>can be done</b>, <b>must be finished</b>',
    '완료: <b>has been built</b>',
    '행위자가 일반인이거나 불분명하면 by ~는 생략해요.',
  ],
  bank:[
    {type:'mc', q:'다음 문장을 수동태로 바꿀 때 알맞은 것은?<br><b>They built this bridge in 1990.</b>',
     options:['This bridge built in 1990.','This bridge was built in 1990.','This bridge is built in 1990.','This bridge has built in 1990.'],
     answer:1, explain:'과거시제 능동문이므로 was + p.p. 형태의 수동태가 됩니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>English ___ in many countries.</b>',
     options:['speaks','is speaking','is spoken','spoke'],
     answer:2, explain:'영어는 말해지는 대상이므로 수동태 is spoken이 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The work must ___ ___ by Friday.</b> (finish)',
     answer:['be finished'], explain:'조동사가 있는 수동태는 조동사 + be + p.p. 형태입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['The letter was sent yesterday.','This song is loved by many people.','The room cleaned every day.','A new school will be built here.'],
     answer:2, explain:'be동사가 빠졌습니다. The room is cleaned every day.가 맞아요.'},
    {type:'fill', q:'다음 문장을 수동태로 고칠 때 빈칸을 채우세요.<br><b>Someone stole my bike.</b><br>→ My bike ___ ___.',
     answer:['was stolen'], explain:'행위자가 불분명한 someone이므로 by someone은 생략합니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>The novel ___ by many students.</b>',
     options:['has read','has been read','have read','is reading'],
     answer:1, explain:'현재완료 수동태는 has/have been + p.p. 형태입니다.'},
    {type:'mc', q:'능동태로 바르게 바꾼 것은?<br><b>The cake was made by my sister.</b>',
     options:['My sister makes the cake.','My sister made the cake.','My sister is made the cake.','The cake made my sister.'],
     answer:1, explain:'was made는 과거시제 수동이므로 능동으로 바꾸면 made가 됩니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>These flowers ___ ___ every morning.</b> (water, 현재시제 수동)',
     answer:['are watered'], explain:'주어가 복수이고 현재시제이므로 are + p.p.를 씁니다.'},
  ]
},
{
  unit:8, title:'관계대명사', subtitle:'Relative Pronouns',
  concept:'두 문장을 하나로 이으면서 앞의 명사(선행사)를 설명해 주는 말입니다. 선행사가 사람인지 사물인지, 문장에서 어떤 자리인지에 따라 형태가 달라져요.',
  points:[
    '사람 — 주격 <b>who</b>, 목적격 <b>who(m)</b>, 소유격 <b>whose</b>',
    '사물 — 주격·목적격 <b>which</b>, 소유격 <b>whose</b>',
    'that은 사람·사물 모두 가능 (소유격은 불가)',
    '목적격 관계대명사는 생략할 수 있어요: <b>the book (which) I read</b>',
    '<b>what</b>은 선행사를 포함해 "~하는 것"이라는 뜻입니다.',
    '<b>what = the thing(s) which</b>',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I know a girl ___ speaks five languages.</b>',
     options:['which','who','whose','what'],
     answer:1, explain:'선행사가 사람(a girl)이고 뒤에 동사가 바로 오므로 주격 who를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This is the house ___ roof is red.</b>',
     options:['which','who','whose','that'],
     answer:2, explain:'지붕이 집의 소유이므로 소유격 관계대명사 whose를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ he said was not true.</b>',
     options:['That','What','Which','Who'],
     answer:1, explain:'선행사가 없고 "그가 말한 것"이라는 뜻이므로 what을 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The movie ___ we watched was boring.</b> (사물, 목적격)',
     answer:['which','that'], explain:'선행사가 사물이고 watched의 목적어 자리이므로 which 또는 that을 씁니다.'},
    {type:'mc', q:'관계대명사를 <b>생략할 수 있는</b> 문장은?',
     options:['I have a friend who lives in Busan.','The man who called me was angry.','This is the pen which I bought.','The dog which is barking is mine.'],
     answer:2, explain:'목적격 관계대명사만 생략 가능합니다. 3번의 which는 bought의 목적어예요.'},
    {type:'fill', q:'두 문장을 관계대명사로 이을 때 빈칸을 채우세요.<br><b>I met a man. He is a famous writer.</b><br>→ I met a man ___ is a famous writer.',
     answer:['who','that'], explain:'선행사가 사람이고 주어 자리이므로 who 또는 that을 씁니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['She is the girl whom I like.','The book that I read was great.','I know the boy which won the prize.','Tell me what you want.'],
     answer:2, explain:'선행사가 사람(the boy)이므로 which가 아니라 who 또는 that을 써야 합니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>This is ___ I wanted to say.</b> (내가 말하고 싶었던 것)',
     answer:['what'], explain:'선행사가 없고 "~하는 것"이라는 뜻이므로 what을 씁니다.'},
  ]
},
{
  unit:9, title:'접속사', subtitle:'Conjunctions',
  concept:'단어와 단어, 문장과 문장을 이어 주는 말입니다. 대등하게 잇는 등위접속사와, 한쪽을 종속시키는 종속접속사가 있어요.',
  points:[
    '등위: and, but, or, so — 대등한 것끼리 연결',
    '시간: when, while, before, after, until, as soon as',
    '이유: because, since, as / 조건: if, unless',
    '양보: although, though, even though (~이지만)',
    '짝을 이루는 접속사: <b>both A and B</b>, <b>either A or B</b>, <b>neither A nor B</b>, <b>not only A but also B</b>',
    '시간·조건의 부사절에서는 미래의 일도 현재시제로 씁니다.',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ it was raining, we went out.</b>',
     options:['Because','Although','If','So'],
     answer:1, explain:'비가 왔지만 나갔다는 양보의 뜻이므로 Although가 맞습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I will call you when I ___ home.</b>',
     options:['will get','gets','get','got'],
     answer:2, explain:'시간의 부사절에서는 미래의 일도 현재시제로 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ you hurry, you will miss the bus.</b>',
     options:['If','Unless','Although','Because'],
     answer:1, explain:'Unless는 "~하지 않으면"이라는 뜻으로 if ~ not과 같습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Neither Tom ___ Jane came to the party.</b>',
     answer:['nor'], explain:'neither A nor B는 "A도 B도 아니다"라는 짝 접속사입니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Not only she but also I ___ tired.</b> (be동사)',
     answer:['am'], explain:'not only A but also B에서는 B(I)에 동사를 맞추므로 am이 맞습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He is good at ___ singing and dancing.</b>',
     options:['either','neither','both','not only'],
     answer:2, explain:'and와 짝을 이루는 것은 both A and B입니다.'},
    {type:'mc', q:'어법상 <b>어색한</b> 문장은?',
     options:['I stayed home because it was cold.','She will leave after she finishes work.','If it will rain, we will cancel.','Although he is young, he is wise.'],
     answer:2, explain:'조건의 부사절에서는 미래를 현재시제로 쓰므로 If it rains가 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>You can have ___ tea or coffee.</b>',
     answer:['either'], explain:'or와 짝을 이루는 것은 either A or B입니다.'},
  ]
},
{
  unit:10, title:'비교 구문', subtitle:'Comparison',
  concept:'둘 이상을 견주어 말하는 표현입니다. 원급, 비교급, 최상급 세 가지 틀을 기억하세요.',
  points:[
    '원급: <b>as + 형용사/부사 원급 + as</b> — <b>He is as tall as I.</b>',
    '비교급: <b>비교급 + than</b> — <b>She is taller than me.</b>',
    '최상급: <b>the + 최상급 (+ in/of ~)</b> — <b>the tallest in my class</b>',
    '비교급 강조: much, far, a lot, even (very는 쓸 수 없어요)',
    '<b>the 비교급, the 비교급</b> — ~하면 할수록 더 ~하다',
    '불규칙: good/well-better-best, bad-worse-worst, many/much-more-most',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>This bag is ___ expensive than that one.</b>',
     options:['very','much','so','too'],
     answer:1, explain:'비교급을 강조할 때는 much, far, a lot, even을 씁니다. very는 쓸 수 없어요.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Health is ___ important than money.</b>',
     options:['very','more','most','as'],
     answer:1, explain:'than이 있으므로 비교급 more important가 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>He runs as ___ as a cheetah.</b> (fast)',
     answer:['fast'], explain:'as ~ as 사이에는 원급을 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Seoul is one of the ___ cities in Asia.</b>',
     options:['big','bigger','biggest','more big'],
     answer:2, explain:'one of the + 최상급 + 복수명사 형태이므로 biggest가 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>The more you practice, the ___ you become.</b> (good)',
     answer:['better'], explain:'the 비교급, the 비교급 구문이고 good의 비교급은 better입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['She is the smartest student in our class.','This is worse than I thought.','He is more taller than me.','Today is as hot as yesterday.'],
     answer:2, explain:'tall의 비교급은 taller이므로 more를 함께 쓸 수 없습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>My score is ___ than yours.</b> (bad)',
     answer:['worse'], explain:'bad의 비교급은 불규칙 변화로 worse입니다.'},
    {type:'mc', q:'두 문장의 뜻이 같도록 할 때 빈칸에 알맞은 것은?<br><b>No one is taller than Mike.</b><br>= Mike is the ___ student.',
     options:['tall','taller','tallest','more tall'],
     answer:2, explain:'"아무도 더 크지 않다"는 최상급과 같은 뜻이므로 the tallest가 맞습니다.'},
  ]
},
{
  unit:11, title:'조동사', subtitle:'Modal Verbs',
  concept:'동사 앞에서 가능·의무·추측 등의 뜻을 더해 주는 말입니다. 뒤에는 반드시 동사원형이 와요.',
  points:[
    'can (능력·허가) = be able to / could (과거·공손)',
    'may (허가·약한 추측) / might (더 약한 추측)',
    'must (강한 의무·강한 추측) = have to',
    'should (충고·당연) = ought to',
    '<b>must not</b> (~하면 안 된다) ≠ <b>don\'t have to</b> (~할 필요 없다)',
    '과거 추측: <b>must have p.p.</b> (~했음에 틀림없다) / <b>should have p.p.</b> (~했어야 했는데)',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>You ___ touch that. It\'s dangerous.</b>',
     options:["don't have to",'must not','may not have','need not'],
     answer:1, explain:'위험하니 금지하는 뜻이므로 must not(~하면 안 된다)이 맞습니다.'},
    {type:'mc', q:'밑줄 친 부분과 뜻이 같은 것은?<br><b>You <u>don\'t have to</u> come early.</b>',
     options:['must not come','should not come','need not come','cannot come'],
     answer:2, explain:"don't have to는 \"~할 필요 없다\"는 뜻으로 need not과 같습니다."},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>He ___ be tired. He worked all night.</b>',
     options:['must','can','may not','should'],
     answer:0, explain:'밤새 일했으니 피곤함에 틀림없다는 강한 추측이므로 must를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I ___ ___ studied harder.</b> (더 열심히 공부했어야 했는데)',
     answer:['should have'], explain:'should have p.p.는 "~했어야 했는데 안 했다"는 후회를 나타냅니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>When I was young, I ___ swim very well.</b>',
     options:['can','could','will','must'],
     answer:1, explain:'과거의 능력을 나타내므로 can의 과거형 could를 씁니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>She ___ ___ left already. Her car is gone.</b> (이미 떠났음에 틀림없다)',
     answer:['must have'], explain:'must have p.p.는 과거 일에 대한 강한 추측입니다.'},
    {type:'mc', q:'어법상 <b>틀린</b> 문장은?',
     options:['You should to see a doctor.','He can speak Chinese.','We may go out tonight.','You must wear a helmet.'],
     answer:0, explain:'조동사 뒤에는 동사원형이 오므로 should see가 맞습니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I was ___ ___ finish the work on time.</b> (끝낼 수 있었다)',
     answer:['able to'], explain:'be able to는 can과 같은 뜻이며, was able to로 과거를 나타냅니다.'},
  ]
},
{
  unit:12, title:'간접의문문', subtitle:'Indirect Questions',
  concept:'의문문이 다른 문장의 일부로 들어가는 형태입니다. 이때 어순이 "의문사 + 주어 + 동사"로 바뀌는 것이 핵심이에요.',
  points:[
    '직접: <b>Where is he?</b> → 간접: <b>I don\'t know where he is.</b>',
    '어순이 평서문처럼 <b>의문사 + 주어 + 동사</b>로 바뀝니다.',
    '의문사가 없으면 <b>if</b> 또는 <b>whether</b>를 씁니다.',
    '<b>Do you know if he is coming?</b>',
    'do/does/did는 사라지고 시제만 동사에 반영돼요.',
    '<b>Where does he live?</b> → <b>I wonder where he lives.</b>',
    'think, believe, guess가 주절이면 의문사가 맨 앞으로: <b>What do you think it is?</b>',
  ],
  bank:[
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>Do you know where ___?</b>',
     options:['does she live','she lives','lives she','is she live'],
     answer:1, explain:'간접의문문의 어순은 의문사 + 주어 + 동사이므로 she lives가 맞습니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>I wonder ___ he will come.</b>',
     options:['what','who','if','which'],
     answer:2, explain:'의문사가 없는 의문문이 들어갈 때는 if 또는 whether를 씁니다.'},
    {type:'fill', q:'두 문장을 하나로 이을 때 빈칸을 채우세요.<br><b>Tell me. + What time is it?</b><br>→ Tell me what time ___ ___.',
     answer:['it is'], explain:'간접의문문이므로 주어 + 동사 어순인 it is가 됩니다.'},
    {type:'mc', q:'어법상 <b>옳은</b> 문장은?',
     options:['I don\'t know what is his name.','Do you know when does the show start?','Can you tell me how old he is?','I wonder where did she go.'],
     answer:2, explain:'간접의문문의 어순은 의문사 + 주어 + 동사입니다. how old he is가 올바른 형태예요.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>I asked her ___ she liked the movie.</b> (좋아하는지 아닌지)',
     answer:['if','whether'], explain:'의문사가 없는 의문문을 넣을 때는 if 또는 whether를 씁니다.'},
    {type:'mc', q:'빈칸에 알맞은 것은?<br><b>___ do you think he is?</b>',
     options:['Do you know who','Who','That who','If who'],
     answer:1, explain:'think가 주절일 때는 의문사가 문장 맨 앞으로 나옵니다.'},
    {type:'fill', q:'빈칸을 채우세요.<br><b>Nobody knows why he ___.</b> (left)',
     answer:['left'], explain:'간접의문문에서는 did가 사라지고 시제가 동사에 반영되어 left가 됩니다.'},
    {type:'mc', q:'다음 문장을 간접의문문으로 바르게 바꾼 것은?<br><b>Where did you buy it?</b> + <b>Please tell me.</b>',
     options:['Please tell me where did you buy it.','Please tell me where you bought it.','Please tell me where you did buy it.','Please tell me did you buy it where.'],
     answer:1, explain:'did가 사라지고 시제가 동사에 반영되며, 어순은 주어 + 동사가 됩니다.'},
  ]
},
];

// 단원 수
const GRAMMAR_UNITS = GRAMMAR.length;

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

// ── 오늘의 단원 (학습일 기준 순환) ──────────────────────
function gTodayUnit() {
  const d = getTodayDay();
  if (d < 1) return 1;
  return ((d - 1) % GRAMMAR_UNITS) + 1;
}

// ── 문제 뽑기 (은행에서 5개 랜덤) ──────────────────────
function gPickProblems(unit) {
  const u = GRAMMAR.find(x => x.unit === unit);
  const pool = u.bank.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 5);
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
  gState.unit = gTodayUnit();

  const u = GRAMMAR.find(x => x.unit === gState.unit);
  const hist = gState.history;

  const recent = hist.length === 0
    ? '<p class="empty">아직 기록이 없어요</p>'
    : hist.slice(-6).reverse().map(h => {
        const c = h.rate >= 80 ? '#4caf6e' : h.rate >= 60 ? G_COLOR : '#d94f4f';
        return `<div class="g-hist">
          <span class="gh-date">${h.date}</span>
          <span class="gh-unit">${h.title}</span>
          <span class="gh-score" style="color:${c}">${h.correct}/${h.total}</span>
        </div>`;
      }).join('');

  el.innerHTML = `
    <div class="g-header">
      <h2>오늘의 문법</h2>
      <p>하준 · 중학 영문법</p>
    </div>
    <div class="g-card center">
      <div class="g-unit-badge">${u.unit}단원</div>
      <div class="g-unit-title">${u.title}</div>
      <div class="g-unit-sub">${u.subtitle}</div>
      <button class="g-btn" onclick="gStartConcept()">개념 보기 →</button>
    </div>
    <div class="g-card">
      <div class="clabel">전체 단원</div>
      ${GRAMMAR.map(g => `
        <div class="g-unit-row ${g.unit === gState.unit ? 'on' : ''}" onclick="gSelectUnit(${g.unit})">
          <span class="gur-num">${g.unit}</span>
          <span class="gur-name">${g.title}</span>
        </div>`).join('')}
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
      <p>${u.unit}단원 · ${u.subtitle}</p>
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
    <button class="g-btn" onclick="gStartQuiz()">문제 풀기 (5문제) →</button>
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
      <p>${gState.idx + 1} / 5</p>
    </div>
    <div class="g-progress"><div class="g-bar" style="width:${gState.idx / 5 * 100}%"></div></div>
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
  const rate = gState.correct * 20;
  const t = new Date();
  const date = `${t.getMonth() + 1}/${t.getDate()}`;

  const saved = await gLoad();
  const hist = saved.history || [];
  hist.push({ date, unit: gState.unit, title: u.title, correct: gState.correct, total: 5, rate });
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
      <div class="g-score">${gState.correct}<span>/5</span></div>
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
