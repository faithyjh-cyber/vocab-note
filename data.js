const API = 'https://script.google.com/a/macros/cgnmail.net/s/AKfycbxbwQiyQr9uSpM_Xte97hfwE4pvQQaKWFRJ9uINBaT6sq0YilvnEj0yh34EVn_DVAVDaQ/exec';
const START_DATE = new Date('2026-07-21');
const KIDS = {
  1:{name:'하준',total:20,color:'#c47a2a',cls:'btn1'},
  2:{name:'하민',total:10,color:'#2a7a9e',cls:'btn2'}
};

const DAYS = [
  {day:1,title:'숫자 & 색깔',subtitle:'Numbers & Colors',sections:[
    {label:'🔢 숫자 · Numbers',words:[['one','원','1'],['two','투','2'],['three','쓰리','3'],['four','포','4'],['five','파이브','5'],['six','씩스','6'],['seven','세븐','7'],['eight','에잇','8'],['nine','나인','9'],['ten','텐','10']]},
    {label:'🎨 색깔 · Colors',words:[['red','레드','빨간색'],['blue','블루','파란색'],['yellow','옐로우','노란색'],['green','그린','초록색'],['black','블랙','검은색'],['white','화이트','흰색'],['pink','핑크','분홍색'],['orange','오렌지','주황색'],['purple','퍼플','보라색'],['brown','브라운','갈색']]}
  ]},
  {day:2,title:'동물',subtitle:'Animals',sections:[
    {label:'🐾 동물 · Animals',words:[['dog','독','개'],['cat','캣','고양이'],['bird','버드','새'],['fish','피쉬','물고기'],['rabbit','래빗','토끼'],['bear','베어','곰'],['tiger','타이거','호랑이'],['lion','라이언','사자'],['elephant','엘리펀트','코끼리'],['monkey','멍키','원숭이']]},
    {label:'🐾 동물 계속',words:[['horse','호스','말'],['cow','카우','소'],['pig','피그','돼지'],['sheep','쉽','양'],['duck','덕','오리'],['frog','프로그','개구리'],['snake','스네이크','뱀'],['turtle','터틀','거북이'],['penguin','펭귄','펭귄'],['giraffe','지라프','기린']]}
  ]},
  {day:3,title:'신체',subtitle:'Body Parts',sections:[
    {label:'🧍 머리 · Head',words:[['head','헤드','머리'],['face','페이스','얼굴'],['eye','아이','눈'],['ear','이어','귀'],['nose','노우즈','코'],['mouth','마우스','입'],['tooth','투스','이/치아'],['hair','헤어','머리카락'],['neck','넥','목'],['cheek','칙','볼/뺨']]},
    {label:'🤲 몸 · Body',words:[['body','바디','몸'],['shoulder','숄더','어깨'],['arm','암','팔'],['hand','핸드','손'],['finger','핑거','손가락'],['chest','체스트','가슴'],['stomach','스터먹','배'],['leg','레그','다리'],['knee','니','무릎'],['foot','풋','발']]}
  ]},
  {day:4,title:'가족',subtitle:'Family',sections:[
    {label:'👨‍👩‍👧‍👦 가족 · Family',words:[['family','패밀리','가족'],['father','파더','아버지'],['mother','마더','어머니'],['dad','대드','아빠'],['mom','맘','엄마'],['brother','브라더','남자 형제'],['sister','시스터','여자 형제'],['son','선','아들'],['daughter','도터','딸'],['baby','베이비','아기']]},
    {label:'👴 친척 · Relatives',words:[['grandfather','그랜파더','할아버지'],['grandmother','그랜마더','할머니'],['grandpa','그랜파','할아버지(편한 말)'],['grandma','그랜마','할머니(편한 말)'],['uncle','엉클','삼촌/아저씨'],['aunt','앤트','고모/이모'],['cousin','커즌','사촌'],['husband','허즈번드','남편'],['wife','와이프','아내'],['parents','페런츠','부모님']]}
  ]},
  {day:5,title:'음식',subtitle:'Food',sections:[
    {label:'🍚 밥 & 빵 · Meals',words:[['rice','라이스','밥/쌀'],['bread','브레드','빵'],['egg','에그','달걀'],['meat','밋','고기'],['soup','숩','국/수프'],['noodle','누들','국수/면'],['pizza','피자','피자'],['hamburger','햄버거','햄버거'],['sandwich','샌드위치','샌드위치'],['cake','케이크','케이크']]},
    {label:'🥤 음료 & 간식',words:[['water','워터','물'],['milk','밀크','우유'],['juice','주스','주스'],['tea','티','차'],['cookie','쿠키','쿠키'],['candy','캔디','사탕'],['chocolate','초콜릿','초콜릿'],['ice cream','아이스크림','아이스크림'],['butter','버터','버터'],['cheese','치즈','치즈']]}
  ]},
  {day:6,title:'과일 & 채소',subtitle:'Fruits & Vegetables',sections:[
    {label:'🍎 과일 · Fruits',words:[['apple','애플','사과'],['banana','바나나','바나나'],['grape','그레이프','포도'],['strawberry','스트로베리','딸기'],['watermelon','워터멜론','수박'],['peach','피치','복숭아'],['pear','페어','배'],['lemon','레몬','레몬'],['mango','망고','망고'],['cherry','체리','체리']]},
    {label:'🥕 채소 · Vegetables',words:[['carrot','캐럿','당근'],['potato','포테이토','감자'],['tomato','토마토','토마토'],['onion','어니언','양파'],['cucumber','큐컴버','오이'],['corn','콘','옥수수'],['mushroom','머쉬룸','버섯'],['spinach','스피니치','시금치'],['pumpkin','펌킨','호박'],['garlic','갈릭','마늘']]}
  ]},
  {day:7,title:'학교 & 문구',subtitle:'School & Stationery',sections:[
    {label:'🏫 학교 · School',words:[['school','스쿨','학교'],['class','클래스','수업/반'],['teacher','티처','선생님'],['student','스튜던트','학생'],['friend','프렌드','친구'],['desk','데스크','책상'],['chair','체어','의자'],['board','보드','칠판'],['classroom','클래스룸','교실'],['homework','홈워크','숙제']]},
    {label:'✏️ 문구 · Stationery',words:[['book','북','책'],['pencil','펜슬','연필'],['pen','펜','펜'],['eraser','이레이저','지우개'],['ruler','룰러','자'],['notebook','노트북','공책'],['scissors','시저스','가위'],['glue','글루','풀'],['bag','백','가방'],['crayon','크레용','크레용']]}
  ]},
  {day:8,title:'날씨 & 계절',subtitle:'Weather & Seasons',sections:[
    {label:'⛅ 날씨 · Weather',words:[['weather','웨더','날씨'],['sunny','써니','맑은'],['cloudy','클라우디','흐린'],['rainy','레이니','비오는'],['snowy','스노위','눈오는'],['windy','윈디','바람부는'],['hot','핫','더운'],['cold','콜드','추운'],['warm','웜','따뜻한'],['cool','쿨','시원한']]},
    {label:'🌸 계절 · Seasons',words:[['spring','스프링','봄'],['summer','썸머','여름'],['fall','폴','가을'],['winter','윈터','겨울'],['rain','레인','비'],['snow','스노우','눈'],['wind','윈드','바람'],['cloud','클라우드','구름'],['sun','썬','태양/해'],['rainbow','레인보우','무지개']]}
  ]},
  {day:9,title:'집 & 방',subtitle:'Home & Rooms',sections:[
    {label:'🏠 집 · Home',words:[['house','하우스','집'],['home','홈','가정/집'],['door','도어','문'],['window','윈도우','창문'],['wall','월','벽'],['floor','플로어','바닥'],['roof','루프','지붕'],['stairs','스테어스','계단'],['garden','가든','정원'],['gate','게이트','대문']]},
    {label:'🛋️ 방 · Rooms',words:[['room','룸','방'],['bedroom','베드룸','침실'],['bathroom','배스룸','화장실'],['kitchen','키친','부엌'],['living room','리빙룸','거실'],['bed','베드','침대'],['sofa','소파','소파'],['table','테이블','탁자'],['lamp','램프','조명/램프'],['mirror','미러','거울']]}
  ]},
  {day:10,title:'옷',subtitle:'Clothes',sections:[
    {label:'👕 윗옷 · Tops',words:[['clothes','클로즈','옷'],['shirt','셔츠','셔츠'],['T-shirt','티셔츠','티셔츠'],['jacket','재킷','재킷'],['coat','코트','코트'],['sweater','스웨터','스웨터'],['dress','드레스','원피스/드레스'],['uniform','유니폼','교복/유니폼'],['hat','햇','모자'],['cap','캡','야구모자']]},
    {label:'👖 아래옷 & 신발',words:[['pants','팬츠','바지'],['jeans','진스','청바지'],['skirt','스커트','치마'],['shorts','쇼츠','반바지'],['socks','삭스','양말'],['shoes','슈즈','신발'],['sneakers','스니커즈','운동화'],['boots','부츠','부츠'],['gloves','글러브스','장갑'],['scarf','스카프','목도리']]}
  ]},
  {day:11,title:'교통수단',subtitle:'Transportation',sections:[
    {label:'🚗 땅 위 · On the Road',words:[['car','카','자동차'],['bus','버스','버스'],['taxi','택시','택시'],['truck','트럭','트럭'],['bike','바이크','자전거'],['motorcycle','모터사이클','오토바이'],['train','트레인','기차'],['subway','서브웨이','지하철'],['road','로드','도로/길'],['station','스테이션','역']]},
    {label:'✈️ 하늘 & 바다',words:[['airplane','에어플레인','비행기'],['helicopter','헬리콥터','헬리콥터'],['rocket','로켓','로켓'],['ship','쉽','배/선박'],['boat','보트','보트'],['airport','에어포트','공항'],['ticket','티켓','표/티켓'],['stop','스탑','정류장'],['drive','드라이브','운전하다'],['ride','라이드','타다']]}
  ]},
  {day:12,title:'직업',subtitle:'Jobs',sections:[
    {label:'👨‍⚕️ 전문직 · Professionals',words:[['teacher','티처','선생님'],['doctor','닥터','의사'],['nurse','너스','간호사'],['police','폴리스','경찰관'],['firefighter','파이어파이터','소방관'],['soldier','솔저','군인'],['pilot','파일럿','조종사'],['scientist','사이언티스트','과학자'],['engineer','엔지니어','엔지니어'],['lawyer','로이어','변호사']]},
    {label:'👨‍🍳 생활 직업',words:[['cook','쿡','요리사'],['baker','베이커','제빵사'],['farmer','파머','농부'],['driver','드라이버','운전기사'],['singer','싱어','가수'],['actor','액터','배우'],['artist','아티스트','예술가'],['writer','라이터','작가'],['athlete','애슬릿','운동선수'],['vet','벳','수의사']]}
  ]},
  {day:13,title:'장소 & 건물',subtitle:'Places',sections:[
    {label:'🏙️ 동네 · Neighborhood',words:[['hospital','호스피털','병원'],['pharmacy','파머시','약국'],['bank','뱅크','은행'],['post office','포스트오피스','우체국'],['library','라이브러리','도서관'],['museum','뮤지엄','박물관'],['church','처치','교회'],['park','파크','공원'],['zoo','주','동물원'],['market','마켓','시장']]},
    {label:'🏬 가게 & 시설',words:[['store','스토어','가게'],['supermarket','슈퍼마켓','슈퍼마켓'],['restaurant','레스토랑','식당'],['cafe','카페','카페'],['hotel','호텔','호텔'],['theater','씨어터','극장'],['gym','짐','체육관'],['pool','풀','수영장'],['playground','플레이그라운드','놀이터'],['city','시티','도시']]}
  ]},
  {day:14,title:'동작 동사',subtitle:'Action Verbs',sections:[
    {label:'🏃 움직임 · Movement',words:[['run','런','달리다'],['walk','워크','걷다'],['jump','점프','뛰다'],['swim','스윔','수영하다'],['fly','플라이','날다'],['climb','클라임','오르다'],['dance','댄스','춤추다'],['sit','싯','앉다'],['stand','스탠드','서다'],['sleep','슬립','자다']]},
    {label:'✋ 일상 동작',words:[['eat','잇','먹다'],['drink','드링크','마시다'],['read','리드','읽다'],['write','라이트','쓰다'],['draw','드로우','그리다'],['sing','씽','노래하다'],['play','플레이','놀다'],['listen','리슨','듣다'],['speak','스피크','말하다'],['think','씽크','생각하다']]}
  ]},
  {day:15,title:'자연',subtitle:'Nature',sections:[
    {label:'🌿 땅 위 자연 · Land',words:[['tree','트리','나무'],['flower','플라워','꽃'],['grass','그래스','풀/잔디'],['leaf','리프','나뭇잎'],['rock','록','바위/돌'],['mountain','마운틴','산'],['forest','포레스트','숲'],['desert','데저트','사막'],['island','아일랜드','섬'],['cave','케이브','동굴']]},
    {label:'🌊 물 & 하늘',words:[['sea','씨','바다'],['ocean','오션','대양'],['river','리버','강'],['lake','레이크','호수'],['waterfall','워터폴','폭포'],['sky','스카이','하늘'],['star','스타','별'],['moon','문','달'],['earth','어스','지구'],['nature','네이처','자연']]}
  ]},
  {day:16,title:'감정 & 기분',subtitle:'Emotions',sections:[
    {label:'😊 좋은 감정 · Positive',words:[['happy','해피','행복한'],['excited','익사이티드','신난'],['glad','글래드','기쁜'],['proud','프라우드','자랑스러운'],['calm','캄','차분한'],['surprised','서프라이즈드','놀란'],['brave','브레이브','용감한'],['kind','카인드','친절한'],['love','러브','사랑'],['hope','호프','희망']]},
    {label:'😢 힘든 감정',words:[['sad','새드','슬픈'],['angry','앵그리','화난'],['scared','스케어드','무서운'],['worried','워리드','걱정되는'],['tired','타이어드','피곤한'],['bored','보어드','지루한'],['lonely','로운리','외로운'],['nervous','너버스','긴장된'],['shy','샤이','부끄러운'],['confused','컨퓨즈드','헷갈리는']]}
  ]},
  {day:17,title:'형용사',subtitle:'Adjectives',sections:[
    {label:'📏 크기 & 모양',words:[['big','빅','큰'],['small','스몰','작은'],['tall','톨','키가 큰'],['short','숏','짧은/키 작은'],['long','롱','긴'],['wide','와이드','넓은'],['narrow','내로우','좁은'],['round','라운드','둥근'],['square','스퀘어','네모난'],['flat','플랫','평평한']]},
    {label:'✨ 상태 · Condition',words:[['new','뉴','새로운'],['old','올드','오래된'],['clean','클린','깨끗한'],['dirty','더티','더러운'],['heavy','헤비','무거운'],['light','라이트','가벼운/밝은'],['hard','하드','딱딱한/어려운'],['soft','소프트','부드러운'],['fast','패스트','빠른'],['slow','슬로우','느린']]}
  ]},
  {day:18,title:'시간 & 요일',subtitle:'Time & Days',sections:[
    {label:'📅 요일 · Days',words:[['Monday','먼데이','월요일'],['Tuesday','튜즈데이','화요일'],['Wednesday','웬즈데이','수요일'],['Thursday','떠즈데이','목요일'],['Friday','프라이데이','금요일'],['Saturday','새터데이','토요일'],['Sunday','선데이','일요일']]},
    {label:'⏰ 시간 · Time',words:[['time','타임','시간'],['morning','모닝','아침'],['afternoon','애프터눈','오후'],['evening','이브닝','저녁'],['night','나이트','밤'],['today','투데이','오늘'],['tomorrow','투모로우','내일'],['yesterday','예스터데이','어제'],['week','위크','주/일주일'],['month','먼스','달/월'],['year','이어','년/해'],['hour','아워','시간(단위)'],['minute','미닛','분(단위)']]}
  ]},
  {day:19,title:'달 & 숫자 심화',subtitle:'Months & Numbers',sections:[
    {label:'📆 달 · Months',words:[['January','재뉴어리','1월'],['February','페브러리','2월'],['March','마치','3월'],['April','에이프릴','4월'],['May','메이','5월'],['June','준','6월'],['July','줄라이','7월'],['August','오거스트','8월'],['September','셉템버','9월'],['October','옥토버','10월'],['November','노벰버','11월'],['December','디셈버','12월']]},
    {label:'🔢 숫자 심화',words:[['eleven','일레븐','11'],['twelve','트웰브','12'],['twenty','트웬티','20'],['thirty','써티','30'],['forty','포티','40'],['fifty','피프티','50'],['hundred','헌드레드','100'],['thousand','따우전드','1,000']]}
  ]},
  {day:20,title:'스포츠 & 취미',subtitle:'Sports & Hobbies',sections:[
    {label:'⚽ 스포츠 · Sports',words:[['soccer','사커','축구'],['baseball','베이스볼','야구'],['basketball','배스킷볼','농구'],['volleyball','발리볼','배구'],['tennis','테니스','테니스'],['swimming','스위밍','수영'],['running','러닝','달리기'],['skiing','스키잉','스키'],['cycling','사이클링','자전거 타기'],['taekwondo','태권도','태권도']]},
    {label:'🎨 취미 · Hobbies',words:[['painting','페인팅','그림 그리기'],['cooking','쿠킹','요리하기'],['reading','리딩','독서'],['singing','씽잉','노래하기'],['dancing','댄싱','춤추기'],['fishing','피싱','낚시'],['camping','캠핑','캠핑'],['gaming','게이밍','게임하기'],['travel','트래블','여행'],['music','뮤직','음악']]}
  ]},
  {day:21,title:'건강',subtitle:'Health',sections:[
    {label:'🤒 아픔 · Illness',words:[['sick','씩','아픈'],['pain','페인','통증/아픔'],['fever','피버','열'],['cough','코프','기침'],['cold','콜드','감기'],['headache','헤데이크','두통'],['stomachache','스터먹에이크','복통'],['allergy','알러지','알레르기'],['medicine','메디신','약'],['hospital','호스피털','병원']]},
    {label:'💪 건강 관리',words:[['health','헬스','건강'],['exercise','엑서사이즈','운동'],['rest','레스트','휴식'],['wash','워시','씻다'],['brush','브러시','닦다/빗다'],['shower','샤워','샤워'],['diet','다이어트','식단'],['vitamin','바이타민','비타민'],['strong','스트롱','강한/튼튼한'],['safe','세이프','안전한']]}
  ]},
  {day:22,title:'학교 과목',subtitle:'School Subjects',sections:[
    {label:'📚 과목 · Subjects',words:[['subject','서브젝트','과목'],['math','매스','수학'],['science','사이언스','과학'],['English','잉글리시','영어'],['history','히스토리','역사'],['art','아트','미술'],['music','뮤직','음악'],['P.E.','피이','체육'],['geography','지오그러피','지리'],['computer','컴퓨터','컴퓨터']]},
    {label:'🎓 학교생활',words:[['lesson','레슨','수업/교훈'],['test','테스트','시험'],['exam','이그잼','시험(큰 시험)'],['grade','그레이드','성적/학년'],['question','퀘스천','질문'],['answer','앤서','대답/정답'],['learn','런','배우다'],['study','스터디','공부하다'],['practice','프랙티스','연습하다'],['understand','언더스탠드','이해하다']]}
  ]},
  {day:23,title:'반대말',subtitle:'Opposites',sections:[
    {label:'↔️ 반대말 1',words:[['open','오픈','열다 ↔ 닫다'],['close','클로즈','닫다 ↔ 열다'],['push','푸시','밀다 ↔ 당기다'],['pull','풀','당기다 ↔ 밀다'],['give','기브','주다 ↔ 받다'],['take','테이크','받다/가져가다'],['start','스타트','시작하다 ↔ 끝내다'],['finish','피니시','끝내다 ↔ 시작하다'],['win','윈','이기다 ↔ 지다'],['lose','루즈','지다 ↔ 이기다']]},
    {label:'↔️ 반대말 2',words:[['buy','바이','사다 ↔ 팔다'],['sell','셀','팔다 ↔ 사다'],['love','러브','사랑하다 ↔ 미워하다'],['hate','헤이트','미워하다 ↔ 사랑하다'],['remember','리멤버','기억하다 ↔ 잊다'],['forget','포겟','잊다 ↔ 기억하다'],['find','파인드','찾다 ↔ 잃다'],['lose','루즈','잃다 ↔ 찾다'],['laugh','래프','웃다 ↔ 울다'],['cry','크라이','울다 ↔ 웃다']]}
  ]},
  {day:24,title:'위치 & 방향',subtitle:'Position & Direction',sections:[
    {label:'📍 위치 · Position',words:[['up','업','위'],['down','다운','아래'],['left','레프트','왼쪽'],['right','라이트','오른쪽'],['front','프런트','앞'],['back','백','뒤'],['inside','인사이드','안쪽'],['outside','아웃사이드','바깥쪽'],['between','비트윈','사이에'],['next to','넥스트 투','옆에']]},
    {label:'🧭 방향 · Direction',words:[['north','노스','북쪽'],['south','사우스','남쪽'],['east','이스트','동쪽'],['west','웨스트','서쪽'],['above','어보브','~위에'],['below','빌로우','~아래에'],['near','니어','가까운'],['far','파','먼'],['here','히어','여기'],['there','데어','저기/거기']]}
  ]},
  {day:25,title:'도구 & 기계',subtitle:'Tools & Machines',sections:[
    {label:'🔨 도구 · Tools',words:[['tool','툴','도구'],['hammer','해머','망치'],['nail','네일','못'],['screw','스크루','나사'],['knife','나이프','칼'],['spoon','스푼','숟가락'],['fork','포크','포크'],['plate','플레이트','접시'],['cup','컵','컵'],['bottle','보틀','병']]},
    {label:'⚙️ 기계 · Machines',words:[['machine','머신','기계'],['phone','폰','전화기'],['camera','카메라','카메라'],['clock','클락','시계'],['radio','라디오','라디오'],['fan','팬','선풍기'],['key','키','열쇠'],['battery','배터리','배터리'],['button','버튼','버튼'],['screen','스크린','화면']]}
  ]},
  {day:26,title:'집안일 & 일상',subtitle:'Chores & Daily Life',sections:[
    {label:'🧹 집안일 · Chores',words:[['clean','클린','청소하다'],['wash','워시','씻다'],['cook','쿡','요리하다'],['help','헬프','돕다'],['carry','캐리','나르다'],['move','무브','옮기다'],['fix','픽스','고치다'],['make','메이크','만들다'],['use','유즈','사용하다'],['try','트라이','시도하다']]},
    {label:'🌅 일상 · Daily Life',words:[['wake','웨이크','일어나다'],['go','고','가다'],['come','컴','오다'],['stay','스테이','머무르다'],['wait','웨이트','기다리다'],['meet','밋','만나다'],['visit','비짓','방문하다'],['call','콜','전화하다'],['send','센드','보내다'],['bring','브링','가져오다']]}
  ]},
  {day:27,title:'동물 심화',subtitle:'More Animals',sections:[
    {label:'🦁 야생동물 · Wild Animals',words:[['wolf','울프','늑대'],['fox','폭스','여우'],['deer','디어','사슴'],['squirrel','스쿼럴','다람쥐'],['mouse','마우스','쥐'],['bat','뱃','박쥐'],['owl','아울','올빼미'],['eagle','이글','독수리'],['zebra','지브라','얼룩말'],['hippo','히포','하마']]},
    {label:'🐛 곤충 & 바다생물',words:[['bee','비','벌'],['ant','앤트','개미'],['butterfly','버터플라이','나비'],['spider','스파이더','거미'],['worm','웜','벌레'],['shark','샤크','상어'],['whale','웨일','고래'],['dolphin','돌핀','돌고래'],['crab','크랩','게'],['octopus','옥토퍼스','문어']]}
  ]},
  {day:28,title:'색깔 & 모양 심화',subtitle:'Colors & Shapes',sections:[
    {label:'🎨 색깔 심화 · More Colors',words:[['gray','그레이','회색'],['gold','골드','금색'],['silver','실버','은색'],['dark','다크','어두운'],['bright','브라이트','밝은'],['color','컬러','색깔'],['rainbow','레인보우','무지개'],['shiny','샤이니','반짝이는'],['clear','클리어','투명한'],['pale','페일','옅은']]},
    {label:'⭐ 모양 · Shapes',words:[['shape','셰이프','모양'],['circle','서클','원'],['triangle','트라이앵글','삼각형'],['rectangle','렉탱글','직사각형'],['star','스타','별'],['heart','하트','하트'],['line','라인','선'],['dot','닷','점'],['corner','코너','모서리'],['side','사이드','옆면']]}
  ]},
  {day:29,title:'음식 심화',subtitle:'More Food',sections:[
    {label:'🍳 요리 · Cooking',words:[['salt','솔트','소금'],['sugar','슈거','설탕'],['pepper','페퍼','후추'],['oil','오일','기름'],['sauce','소스','소스'],['flour','플라워','밀가루'],['fry','프라이','튀기다/볶다'],['boil','보일','끓이다'],['bake','베이크','굽다'],['cut','컷','자르다']]},
    {label:'🍽️ 식사 · Meals',words:[['breakfast','브렉퍼스트','아침 식사'],['lunch','런치','점심 식사'],['dinner','디너','저녁 식사'],['snack','스낵','간식'],['menu','메뉴','메뉴'],['taste','테이스트','맛'],['sweet','스윗','달콤한'],['sour','사워','신맛의'],['salty','솔티','짠'],['spicy','스파이시','매운']]}
  ]},
  {day:30,title:'감사 & 인사',subtitle:'Greetings & Thanks',sections:[
    {label:'👋 인사 · Greetings',words:[['hello','헬로우','안녕(만날 때)'],['goodbye','굿바이','안녕(헤어질 때)'],['welcome','웰컴','환영합니다'],['please','플리즈','제발/부디'],['sorry','쏘리','미안해'],['excuse','익스큐즈','실례하다'],['name','네임','이름'],['nice','나이스','좋은/멋진'],['fine','파인','괜찮은'],['great','그레이트','훌륭한']]},
    {label:'🙏 감사 & 표현 · Thanks',words:[['thank','땡크','감사하다'],['yes','예스','네'],['no','노','아니요'],['okay','오케이','알겠어'],['sure','슈어','물론'],['maybe','메이비','아마'],['always','올웨이즈','항상'],['never','네버','절대 ~않다'],['again','어게인','다시'],['together','투게더','함께']]}
  ]},
  {day:31,title:'컴퓨터 & 인터넷',subtitle:'Computer & Internet',sections:[
    {label:'💻 기기 · Devices',words:[['computer','컴퓨터','컴퓨터'],['laptop','랩탑','노트북'],['tablet','태블릿','태블릿'],['mouse','마우스','마우스'],['keyboard','키보드','키보드'],['monitor','모니터','모니터'],['printer','프린터','프린터'],['charger','차저','충전기'],['headphone','헤드폰','헤드폰'],['speaker','스피커','스피커']]},
    {label:'🌐 인터넷 · Internet',words:[['internet','인터넷','인터넷'],['website','웹사이트','웹사이트'],['email','이메일','이메일'],['password','패스워드','비밀번호'],['download','다운로드','내려받다'],['upload','업로드','올리다'],['search','서치','검색하다'],['click','클릭','클릭하다'],['save','세이브','저장하다'],['share','셰어','공유하다']]}
  ]},
  {day:32,title:'여행 & 나라',subtitle:'Travel & Countries',sections:[
    {label:'🌏 나라 · Countries',words:[['country','컨트리','나라'],['Korea','코리아','한국'],['America','아메리카','미국'],['China','차이나','중국'],['Japan','재팬','일본'],['England','잉글랜드','영국'],['France','프랑스','프랑스'],['Canada','캐나다','캐나다'],['world','월드','세계'],['map','맵','지도']]},
    {label:'🧳 여행 · Travel',words:[['trip','트립','여행'],['passport','패스포트','여권'],['luggage','러기지','짐/수하물'],['tourist','투어리스트','관광객'],['guide','가이드','안내자'],['flag','플래그','국기'],['language','랭귀지','언어'],['culture','컬처','문화'],['abroad','어브로드','해외에'],['arrive','어라이브','도착하다']]}
  ]},
  {day:33,title:'수학 & 숫자 표현',subtitle:'Math & Numbers',sections:[
    {label:'➕ 연산 · Operations',words:[['add','애드','더하다'],['plus','플러스','더하기'],['minus','마이너스','빼기'],['times','타임즈','곱하기'],['divide','디바이드','나누다'],['equal','이퀄','같다'],['number','넘버','숫자'],['count','카운트','세다'],['total','토탈','합계'],['half','하프','절반']]},
    {label:'📊 표현 · Expressions',words:[['first','퍼스트','첫 번째'],['second','세컨드','두 번째'],['third','써드','세 번째'],['last','라스트','마지막'],['many','메니','많은(수)'],['much','머치','많은(양)'],['few','퓨','적은'],['more','모어','더 많은'],['less','레스','더 적은'],['same','세임','같은']]}
  ]},
  {day:34,title:'교회 & 신앙',subtitle:'Church & Faith',sections:[
    {label:'⛪ 교회 · Church',words:[['God','갓','하나님'],['Jesus','지저스','예수님'],['Bible','바이블','성경'],['pray','프레이','기도하다'],['prayer','프레이어','기도'],['worship','워십','예배'],['hymn','힘','찬송가'],['pastor','패스터','목사님'],['cross','크로스','십자가'],['heaven','헤븐','천국']]},
    {label:'💛 마음 · Heart',words:[['faith','페이스','믿음'],['grace','그레이스','은혜'],['bless','블레스','축복하다'],['thankful','땡크풀','감사하는'],['forgive','포기브','용서하다'],['peace','피스','평화'],['joy','조이','기쁨'],['angel','에인절','천사'],['light','라이트','빛'],['glory','글로리','영광']]}
  ]},
  {day:35,title:'우주 & 과학',subtitle:'Space & Science',sections:[
    {label:'🚀 우주 · Space',words:[['space','스페이스','우주'],['planet','플래닛','행성'],['galaxy','갤럭시','은하'],['universe','유니버스','우주 전체'],['astronaut','애스트로넛','우주비행사'],['satellite','새틀라이트','인공위성'],['telescope','텔레스코프','망원경'],['gravity','그래비티','중력'],['orbit','오빗','궤도'],['comet','코멧','혜성']]},
    {label:'🔬 과학 · Science',words:[['energy','에너지','에너지'],['power','파워','힘/전력'],['heat','히트','열'],['ice','아이스','얼음'],['steam','스팀','수증기'],['magnet','매그넛','자석'],['metal','메탈','금속'],['plastic','플라스틱','플라스틱'],['glass','글래스','유리'],['experiment','익스페리먼트','실험']]}
  ]},
  {day:36,title:'옷차림 & 꾸미기',subtitle:'Style & Accessories',sections:[
    {label:'👗 옷차림 · Outfit',words:[['wear','웨어','입다'],['dress up','드레스업','차려입다'],['fit','핏','맞다'],['size','사이즈','치수'],['style','스타일','스타일'],['pocket','포켓','주머니'],['button','버튼','단추'],['zipper','지퍼','지퍼'],['belt','벨트','벨트'],['tie','타이','넥타이']]},
    {label:'💎 장식 · Accessories',words:[['ring','링','반지'],['necklace','네클리스','목걸이'],['bracelet','브레이슬릿','팔찌'],['earring','이어링','귀걸이'],['watch','워치','손목시계'],['glasses','글래시즈','안경'],['umbrella','엄브렐라','우산'],['wallet','월릿','지갑'],['backpack','백팩','배낭'],['towel','타월','수건']]}
  ]},
  {day:37,title:'집안 물건',subtitle:'Household Items',sections:[
    {label:'🛏️ 방 안 · In the Room',words:[['pillow','필로우','베개'],['blanket','블랭킷','이불'],['curtain','커튼','커튼'],['carpet','카펫','카펫'],['shelf','셸프','선반'],['drawer','드로어','서랍'],['closet','클로짓','옷장'],['basket','배스킷','바구니'],['box','박스','상자'],['bag','백','가방']]},
    {label:'🍽️ 부엌 · In the Kitchen',words:[['fridge','프리지','냉장고'],['oven','오븐','오븐'],['pot','팟','냄비'],['pan','팬','프라이팬'],['bowl','보울','그릇'],['tray','트레이','쟁반'],['napkin','냅킨','냅킨'],['straw','스트로','빨대'],['soap','소프','비누'],['trash','트래시','쓰레기']]}
  ]},
  {day:38,title:'감각 & 느낌',subtitle:'Senses & Feelings',sections:[
    {label:'👀 감각 · Senses',words:[['see','씨','보다'],['look','룩','바라보다'],['watch','워치','지켜보다'],['hear','히어','들리다'],['smell','스멜','냄새나다'],['touch','터치','만지다'],['feel','필','느끼다'],['sound','사운드','소리'],['loud','라우드','시끄러운'],['quiet','콰이엇','조용한']]},
    {label:'✨ 느낌 · Sensations',words:[['warm','웜','따뜻한'],['cool','쿨','시원한'],['smooth','스무드','매끄러운'],['rough','러프','거친'],['sharp','샤프','날카로운'],['sticky','스티키','끈적한'],['wet','웻','젖은'],['dry','드라이','마른'],['fresh','프레시','신선한'],['dirty','더티','더러운']]}
  ]},
  {day:39,title:'시간 표현',subtitle:'Time Expressions',sections:[
    {label:'⏳ 자주 쓰는 표현 · Frequency',words:[['now','나우','지금'],['soon','순','곧'],['later','레이터','나중에'],['early','얼리','일찍'],['late','레이트','늦게'],['often','오픈','자주'],['sometimes','썸타임즈','때때로'],['usually','유주얼리','보통'],['rarely','레어리','드물게'],['daily','데일리','매일']]},
    {label:'📅 기간 · Duration',words:[['before','비포','~전에'],['after','애프터','~후에'],['during','듀링','~동안'],['until','언틸','~까지'],['while','와일','~하는 동안'],['begin','비긴','시작하다'],['end','엔드','끝나다'],['continue','컨티뉴','계속하다'],['stop','스탑','멈추다'],['finish','피니시','마치다']]}
  ]},
  {day:40,title:'생각 & 말하기',subtitle:'Thinking & Speaking',sections:[
    {label:'💭 생각 · Thinking',words:[['know','노우','알다'],['understand','언더스탠드','이해하다'],['believe','빌리브','믿다'],['guess','게스','추측하다'],['wonder','원더','궁금하다'],['decide','디사이드','결정하다'],['choose','추즈','선택하다'],['plan','플랜','계획하다'],['agree','어그리','동의하다'],['mean','민','의미하다']]},
    {label:'🗣️ 말하기 · Speaking',words:[['say','세이','말하다'],['tell','텔','알려주다'],['ask','애스크','묻다'],['answer','앤서','대답하다'],['explain','익스플레인','설명하다'],['talk','토크','이야기하다'],['discuss','디스커스','논의하다'],['repeat','리핏','반복하다'],['promise','프라미스','약속하다'],['advise','어드바이즈','조언하다']]}
  ]},
  {day:41,title:'돈 & 쇼핑',subtitle:'Money & Shopping',sections:[
    {label:'💰 돈 · Money',words:[['money','머니','돈'],['cash','캐시','현금'],['coin','코인','동전'],['bill','빌','지폐/청구서'],['price','프라이스','가격'],['cost','코스트','비용'],['cheap','칩','싼'],['expensive','익스펜시브','비싼'],['change','체인지','거스름돈'],['save','세이브','저축하다']]},
    {label:'🛒 쇼핑 · Shopping',words:[['shop','샵','가게/쇼핑하다'],['customer','커스터머','손님'],['clerk','클럭','점원'],['cart','카트','카트'],['receipt','리싯','영수증'],['discount','디스카운트','할인'],['sale','세일','판매/할인'],['order','오더','주문하다'],['pay','페이','지불하다'],['refund','리펀드','환불']]}
  ]},
  {day:42,title:'몸 상태 & 동작',subtitle:'Body Actions',sections:[
    {label:'🙆 자세 · Posture',words:[['bend','벤드','구부리다'],['stretch','스트레치','뻗다'],['turn','턴','돌다'],['lie','라이','눕다'],['kneel','닐','무릎 꿇다'],['lean','린','기대다'],['shake','셰이크','흔들다'],['nod','노드','고개 끄덕이다'],['point','포인트','가리키다'],['wave','웨이브','손 흔들다']]},
    {label:'💪 힘 · Effort',words:[['hold','홀드','잡다'],['catch','캐치','받다/잡다'],['throw','쓰로우','던지다'],['kick','킥','차다'],['lift','리프트','들어올리다'],['drop','드롭','떨어뜨리다'],['break','브레이크','부수다'],['build','빌드','짓다'],['dig','디그','파다'],['tie','타이','묶다']]}
  ]},
  {day:43,title:'날씨 심화 & 재해',subtitle:'Weather & Disasters',sections:[
    {label:'🌦️ 날씨 심화 · Weather',words:[['storm','스톰','폭풍'],['thunder','썬더','천둥'],['lightning','라이트닝','번개'],['fog','포그','안개'],['frost','프로스트','서리'],['humid','휴미드','습한'],['temperature','템퍼러처','온도'],['degree','디그리','도(온도)'],['forecast','포캐스트','일기예보'],['season','시즌','계절']]},
    {label:'⚠️ 재해 · Disasters',words:[['flood','플러드','홍수'],['drought','드라우트','가뭄'],['typhoon','타이푼','태풍'],['earthquake','어스퀘이크','지진'],['fire','파이어','불/화재'],['danger','데인저','위험'],['warning','워닝','경고'],['escape','이스케이프','탈출하다'],['rescue','레스큐','구조하다'],['protect','프로텍트','보호하다']]}
  ]},
  {day:44,title:'성격 & 태도',subtitle:'Personality',sections:[
    {label:'😊 좋은 성격 · Good Traits',words:[['friendly','프렌들리','친근한'],['honest','아니스트','정직한'],['polite','폴라이트','예의 바른'],['patient','페이션트','참을성 있는'],['generous','제너러스','너그러운'],['careful','케어풀','조심스러운'],['smart','스마트','똑똑한'],['funny','퍼니','재미있는'],['gentle','젠틀','온순한'],['humble','험블','겸손한']]},
    {label:'😐 다른 성격 · Other Traits',words:[['lazy','레이지','게으른'],['selfish','셀피시','이기적인'],['rude','루드','무례한'],['strict','스트릭트','엄격한'],['serious','시리어스','진지한'],['curious','큐리어스','호기심 많은'],['active','액티브','활발한'],['careless','케어리스','부주의한'],['stubborn','스터번','고집 센'],['cheerful','치어풀','명랑한']]}
  ]},
  {day:45,title:'학용품 & 활동',subtitle:'School Activities',sections:[
    {label:'📔 학용품 심화 · Supplies',words:[['textbook','텍스트북','교과서'],['workbook','워크북','문제집'],['diary','다이어리','일기장'],['folder','폴더','서류철'],['marker','마커','마커'],['highlighter','하이라이터','형광펜'],['stapler','스테이플러','스테이플러'],['tape','테이프','테이프'],['calculator','캘큘레이터','계산기'],['locker','라커','사물함']]},
    {label:'🎒 활동 · Activities',words:[['project','프로젝트','과제'],['report','리포트','보고서'],['presentation','프레젠테이션','발표'],['group','그룹','모둠'],['team','팀','팀'],['contest','콘테스트','대회'],['prize','프라이즈','상'],['field trip','필드트립','현장학습'],['festival','페스티벌','축제'],['club','클럽','동아리']]}
  ]},
  {day:46,title:'가족 & 관계',subtitle:'Family & Relationships',sections:[
    {label:'👪 관계 · Relationships',words:[['relative','렐러티브','친척'],['neighbor','네이버','이웃'],['guest','게스트','손님'],['partner','파트너','짝/동료'],['classmate','클래스메이트','반 친구'],['roommate','룸메이트','룸메이트'],['boss','보스','상사'],['leader','리더','지도자'],['member','멤버','구성원'],['stranger','스트레인저','낯선 사람']]},
    {label:'💬 사귐 · Getting Along',words:[['meet','밋','만나다'],['greet','그릿','인사하다'],['invite','인바이트','초대하다'],['join','조인','함께하다'],['share','셰어','나누다'],['care','케어','돌보다'],['respect','리스펙트','존중하다'],['trust','트러스트','믿다'],['argue','아규','다투다'],['apologize','어폴로자이즈','사과하다']]}
  ]},
  {day:47,title:'교통 & 안전',subtitle:'Traffic & Safety',sections:[
    {label:'🚦 교통 · Traffic',words:[['traffic','트래픽','교통'],['signal','시그널','신호'],['crosswalk','크로스워크','횡단보도'],['sidewalk','사이드워크','인도'],['bridge','브리지','다리'],['tunnel','터널','터널'],['corner','코너','모퉁이'],['speed','스피드','속도'],['parking','파킹','주차'],['seatbelt','시트벨트','안전벨트']]},
    {label:'🛡️ 안전 · Safety',words:[['careful','케어풀','조심하는'],['helmet','헬멧','헬멧'],['accident','액시던트','사고'],['emergency','이머전시','비상'],['ambulance','앰뷸런스','구급차'],['injury','인저리','부상'],['bandage','밴디지','붕대'],['rule','룰','규칙'],['obey','오베이','따르다'],['report','리포트','신고하다']]}
  ]},
  {day:48,title:'환경 & 자연 보호',subtitle:'Environment',sections:[
    {label:'🌍 환경 · Environment',words:[['environment','인바이런먼트','환경'],['pollution','폴루션','오염'],['recycle','리사이클','재활용하다'],['waste','웨이스트','낭비/쓰레기'],['plastic','플라스틱','플라스틱'],['reuse','리유즈','재사용하다'],['reduce','리듀스','줄이다'],['clean up','클린업','치우다'],['plant','플랜트','식물/심다'],['grow','그로우','자라다']]},
    {label:'🐋 생태 · Ecology',words:[['nature','네이처','자연'],['animal','애니멀','동물'],['plant','플랜트','식물'],['insect','인섹트','곤충'],['seed','시드','씨앗'],['root','루트','뿌리'],['branch','브랜치','나뭇가지'],['soil','소일','흙'],['air','에어','공기'],['climate','클라이밋','기후']]}
  ]},
  {day:49,title:'문화 & 예술',subtitle:'Culture & Arts',sections:[
    {label:'🎭 예술 · Arts',words:[['art','아트','예술'],['painting','페인팅','그림'],['drawing','드로잉','소묘'],['sculpture','스컬프처','조각'],['photo','포토','사진'],['movie','무비','영화'],['drama','드라마','드라마'],['stage','스테이지','무대'],['concert','콘서트','콘서트'],['gallery','갤러리','미술관']]},
    {label:'🎵 음악 & 문학 · Music & Books',words:[['song','송','노래'],['band','밴드','밴드'],['piano','피아노','피아노'],['guitar','기타','기타'],['drum','드럼','드럼'],['violin','바이올린','바이올린'],['story','스토리','이야기'],['poem','포엠','시'],['novel','노블','소설'],['author','오써','저자']]}
  ]},
  {day:50,title:'꿈 & 미래',subtitle:'Dreams & Future',sections:[
    {label:'🌟 꿈 · Dreams',words:[['dream','드림','꿈'],['goal','골','목표'],['future','퓨처','미래'],['wish','위시','바라다'],['want','원트','원하다'],['need','니드','필요하다'],['try','트라이','노력하다'],['succeed','석시드','성공하다'],['fail','페일','실패하다'],['keep','킵','계속하다']]},
    {label:'🚀 성장 · Growing',words:[['grow up','그로우업','자라다'],['change','체인지','변하다'],['improve','임프루브','나아지다'],['effort','에포트','노력'],['challenge','챌린지','도전'],['chance','챈스','기회'],['ready','레디','준비된'],['strong','스트롱','강한'],['proud','프라우드','자랑스러운'],['happy','해피','행복한']]}
  ]},
  {day:51,title:'요리 & 맛',subtitle:'Cooking & Taste',sections:[
    {label:'🍳 조리 · Cooking',words:[['recipe','레시피','조리법'],['mix','믹스','섞다'],['stir','스터','젓다'],['pour','포어','붓다'],['peel','필','껍질을 벗기다'],['slice','슬라이스','얇게 썰다'],['chop','찹','잘게 썰다'],['grill','그릴','굽다'],['steam','스팀','찌다'],['serve','서브','차려내다']]},
    {label:'😋 맛 · Taste',words:[['delicious','딜리셔스','맛있는'],['bitter','비터','쓴'],['soft','소프트','부드러운'],['crispy','크리스피','바삭한'],['juicy','주시','즙이 많은'],['hungry','헝그리','배고픈'],['thirsty','써스티','목마른'],['full','풀','배부른'],['favorite','페이버릿','가장 좋아하는'],['smell','스멜','냄새']]}
  ]},
  {day:52,title:'운동 & 경기',subtitle:'Sports & Games',sections:[
    {label:'🏟️ 경기 · Games',words:[['game','게임','경기'],['match','매치','시합'],['player','플레이어','선수'],['coach','코치','감독'],['referee','레퍼리','심판'],['score','스코어','점수'],['goal','골','골/득점'],['point','포인트','점'],['round','라운드','라운드'],['medal','메달','메달']]},
    {label:'🏃 운동 · Exercise',words:[['practice','프랙티스','연습'],['train','트레인','훈련하다'],['warm up','웜업','준비운동하다'],['stretch','스트레치','스트레칭하다'],['race','레이스','경주'],['win','윈','이기다'],['beat','빗','이기다/물리치다'],['tie','타이','비기다'],['champion','챔피언','챔피언'],['record','레코드','기록']]}
  ]},
  {day:53,title:'감정 표현 심화',subtitle:'More Feelings',sections:[
    {label:'💖 마음 · Heart',words:[['like','라이크','좋아하다'],['enjoy','인조이','즐기다'],['miss','미스','그리워하다'],['worry','워리','걱정하다'],['fear','피어','두려워하다'],['hurt','허트','아프게 하다'],['comfort','컴포트','위로하다'],['cheer','치어','응원하다'],['smile','스마일','미소 짓다'],['hug','허그','안다']]},
    {label:'🌈 상태 · States',words:[['glad','글래드','반가운'],['upset','업셋','속상한'],['jealous','젤러스','부러운'],['thankful','땡크풀','고마운'],['sleepy','슬리피','졸린'],['sorry','쏘리','미안한'],['excited','익사이티드','설레는'],['relaxed','릴랙스드','편안한'],['amazed','어메이즈드','놀라운'],['hopeful','호프풀','희망찬']]}
  ]},
  {day:54,title:'집 & 생활 심화',subtitle:'Home Life',sections:[
    {label:'🏡 집 안 · Around the House',words:[['living','리빙','생활'],['space','스페이스','공간'],['yard','야드','마당'],['garage','거라지','차고'],['balcony','발코니','베란다'],['attic','애틱','다락'],['basement','베이스먼트','지하실'],['hallway','홀웨이','복도'],['entrance','엔트런스','현관'],['neighborhood','네이버후드','동네']]},
    {label:'🧺 살림 · Housework',words:[['sweep','스윕','쓸다'],['mop','맙','닦다'],['laundry','론드리','빨래'],['iron','아이언','다리다'],['fold','폴드','개다'],['hang','행','걸다'],['water','워터','물을 주다'],['feed','피드','먹이를 주다'],['repair','리페어','수리하다'],['organize','오거나이즈','정리하다']]}
  ]},
  {day:55,title:'학교 생활 심화',subtitle:'School Life',sections:[
    {label:'🏫 학교 · At School',words:[['principal','프린시펄','교장 선생님'],['library','라이브러리','도서관'],['cafeteria','캐피테리아','급식실'],['playground','플레이그라운드','운동장'],['hallway','홀웨이','복도'],['schedule','스케줄','시간표'],['recess','리세스','쉬는 시간'],['assembly','어셈블리','조회'],['uniform','유니폼','교복'],['attendance','어텐던스','출석']]},
    {label:'📝 공부 · Studying',words:[['review','리뷰','복습하다'],['prepare','프리페어','준비하다'],['memorize','메모라이즈','외우다'],['solve','솔브','풀다'],['correct','커렉트','고치다/올바른'],['mistake','미스테이크','실수'],['effort','에포트','노력'],['focus','포커스','집중하다'],['progress','프로그레스','발전'],['result','리절트','결과']]}
  ]},
  {day:56,title:'자연 심화',subtitle:'More Nature',sections:[
    {label:'🏞️ 풍경 · Landscape',words:[['field','필드','들판'],['hill','힐','언덕'],['valley','밸리','계곡'],['cliff','클리프','절벽'],['shore','쇼어','해변'],['sand','샌드','모래'],['wave','웨이브','파도'],['stream','스트림','시냇물'],['pond','폰드','연못'],['path','패스','오솔길']]},
    {label:'🌤️ 하늘 · Sky',words:[['sunrise','선라이즈','일출'],['sunset','선셋','일몰'],['shadow','섀도우','그림자'],['shine','샤인','빛나다'],['glow','글로우','빛을 내다'],['dark','다크','어두운'],['bright','브라이트','밝은'],['clear','클리어','맑은'],['breeze','브리즈','산들바람'],['air','에어','공기']]}
  ]},
  {day:57,title:'일과 직업 심화',subtitle:'Work & Career',sections:[
    {label:'💼 일 · Work',words:[['job','잡','일자리'],['work','워크','일하다'],['office','오피스','사무실'],['company','컴퍼니','회사'],['meeting','미팅','회의'],['project','프로젝트','프로젝트'],['task','태스크','업무'],['schedule','스케줄','일정'],['deadline','데드라인','마감일'],['salary','샐러리','급여']]},
    {label:'🌟 능력 · Skills',words:[['skill','스킬','기술'],['talent','탤런트','재능'],['experience','익스피리언스','경험'],['train','트레인','훈련하다'],['lead','리드','이끌다'],['manage','매니지','관리하다'],['create','크리에이트','만들어내다'],['design','디자인','설계하다'],['solve','솔브','해결하다'],['succeed','석시드','성공하다']]}
  ]},
  {day:58,title:'몸과 건강 심화',subtitle:'Body & Health',sections:[
    {label:'🫀 몸 · Body',words:[['heart','하트','심장'],['brain','브레인','뇌'],['bone','본','뼈'],['muscle','머슬','근육'],['skin','스킨','피부'],['blood','블러드','피'],['breath','브레스','숨'],['voice','보이스','목소리'],['nail','네일','손톱'],['throat','쓰로트','목구멍']]},
    {label:'🏥 치료 · Care',words:[['doctor','닥터','의사'],['checkup','체크업','건강검진'],['treat','트릿','치료하다'],['heal','힐','낫다'],['recover','리커버','회복하다'],['pill','필','알약'],['injection','인젝션','주사'],['bandage','밴디지','반창고'],['clinic','클리닉','진료소'],['healthy','헬시','건강한']]}
  ]},
  {day:59,title:'여가 & 놀이',subtitle:'Leisure & Play',sections:[
    {label:'🎡 나들이 · Outings',words:[['picnic','피크닉','소풍'],['vacation','베케이션','휴가'],['holiday','홀리데이','휴일'],['weekend','위켄드','주말'],['beach','비치','해변'],['mountain','마운틴','산'],['amusement park','어뮤즈먼트 파크','놀이공원'],['aquarium','아쿠아리움','수족관'],['ticket','티켓','입장권'],['visit','비짓','방문하다']]},
    {label:'🎲 놀이 · Play',words:[['toy','토이','장난감'],['doll','돌','인형'],['puzzle','퍼즐','퍼즐'],['block','블록','블록'],['ball','볼','공'],['kite','카이트','연'],['card','카드','카드'],['board game','보드 게임','보드게임'],['hide','하이드','숨다'],['seek','식','찾다']]}
  ]},
  {day:60,title:'세계 & 사회',subtitle:'World & Society',sections:[
    {label:'🌐 사회 · Society',words:[['people','피플','사람들'],['society','소사이어티','사회'],['community','커뮤니티','공동체'],['village','빌리지','마을'],['town','타운','읍/도시'],['capital','캐피털','수도'],['nation','네이션','국가'],['government','거번먼트','정부'],['law','로','법'],['history','히스토리','역사']]},
    {label:'🤝 함께 · Together',words:[['help','헬프','돕다'],['volunteer','발런티어','자원봉사'],['donate','도네이트','기부하다'],['support','서포트','지원하다'],['peace','피스','평화'],['equal','이퀄','평등한'],['freedom','프리덤','자유'],['duty','듀티','의무'],['citizen','시티즌','시민'],['culture','컬처','문화']]}
  ]},
  {day:61,title:'묘사하는 말 1',subtitle:'Describing People',sections:[
    {label:'👤 사람 묘사 · Appearance',words:[['handsome','핸섬','잘생긴'],['pretty','프리티','예쁜'],['ugly','어글리','못생긴'],['thin','씬','마른'],['fat','팻','뚱뚱한'],['young','영','어린'],['elderly','엘더리','연세 드신'],['blond','블론드','금발의'],['curly','컬리','곱슬의'],['bald','볼드','대머리의']]},
    {label:'🧠 성향 · Character',words:[['confident','컨피던트','자신감 있는'],['shy','샤이','수줍은'],['clever','클레버','영리한'],['foolish','풀리시','어리석은'],['brave','브레이브','용감한'],['nervous','너버스','불안한'],['loyal','로열','충실한'],['selfless','셀프리스','이타적인'],['modest','모디스트','겸손한'],['arrogant','애러건트','거만한']]}
  ]},
  {day:62,title:'묘사하는 말 2',subtitle:'Describing Things',sections:[
    {label:'📦 사물 · Objects',words:[['useful','유스풀','쓸모 있는'],['useless','유슬리스','쓸모없는'],['common','커먼','흔한'],['rare','레어','드문'],['modern','모던','현대의'],['ancient','에인션트','고대의'],['natural','내추럴','자연의'],['artificial','아티피셜','인공의'],['solid','솔리드','단단한'],['hollow','할로우','속이 빈']]},
    {label:'⭐ 평가 · Quality',words:[['excellent','엑설런트','훌륭한'],['terrible','테러블','끔찍한'],['perfect','퍼펙트','완벽한'],['normal','노멀','보통의'],['special','스페셜','특별한'],['similar','시밀러','비슷한'],['different','디퍼런트','다른'],['important','임포턴트','중요한'],['necessary','네세서리','필요한'],['possible','파서블','가능한']]}
  ]},
  {day:63,title:'행동 동사 1',subtitle:'Action Verbs 1',sections:[
    {label:'🏃 움직임 · Motion',words:[['move','무브','움직이다'],['follow','팔로우','따라가다'],['lead','리드','이끌다'],['enter','엔터','들어가다'],['exit','엑싯','나가다'],['return','리턴','돌아오다'],['arrive','어라이브','도착하다'],['leave','리브','떠나다'],['travel','트래블','이동하다'],['reach','리치','닿다']]},
    {label:'✋ 손 동작 · Handling',words:[['grab','그랩','움켜쥐다'],['press','프레스','누르다'],['pull','풀','끌다'],['carry','캐리','나르다'],['deliver','딜리버','배달하다'],['collect','컬렉트','모으다'],['gather','개더','모이다'],['spread','스프레드','펴다'],['attach','어태치','붙이다'],['remove','리무브','제거하다']]}
  ]},
  {day:64,title:'행동 동사 2',subtitle:'Action Verbs 2',sections:[
    {label:'🧩 만들기 · Creating',words:[['produce','프로듀스','생산하다'],['invent','인벤트','발명하다'],['develop','디벨럽','개발하다'],['form','폼','형성하다'],['shape','셰이프','모양을 만들다'],['repair','리페어','수리하다'],['destroy','디스트로이','파괴하다'],['damage','대미지','손상시키다'],['replace','리플레이스','교체하다'],['complete','컴플리트','완성하다']]},
    {label:'🔍 살피기 · Examining',words:[['check','체크','확인하다'],['examine','이그재민','조사하다'],['discover','디스커버','발견하다'],['search','서치','찾다'],['notice','노티스','알아차리다'],['observe','옵저브','관찰하다'],['compare','컴페어','비교하다'],['measure','메저','측정하다'],['count','카운트','세다'],['record','리코드','기록하다']]}
  ]},
  {day:65,title:'생각과 판단',subtitle:'Thinking & Judging',sections:[
    {label:'💭 사고 · Thought',words:[['consider','컨시더','고려하다'],['imagine','이매진','상상하다'],['realize','리얼라이즈','깨닫다'],['remind','리마인드','상기시키다'],['expect','익스펙트','예상하다'],['suppose','서포즈','가정하다'],['doubt','다웃','의심하다'],['prefer','프리퍼','선호하다'],['intend','인텐드','의도하다'],['recall','리콜','회상하다']]},
    {label:'⚖️ 판단 · Judgment',words:[['judge','저지','판단하다'],['accept','액셉트','받아들이다'],['refuse','리퓨즈','거절하다'],['allow','얼라우','허락하다'],['forbid','포비드','금지하다'],['approve','어프루브','승인하다'],['object','오브젝트','반대하다'],['support','서포트','지지하다'],['admit','어드밋','인정하다'],['deny','디나이','부인하다']]}
  ]},
  {day:66,title:'말과 소통',subtitle:'Speech & Communication',sections:[
    {label:'🗨️ 말하기 · Speaking',words:[['express','익스프레스','표현하다'],['describe','디스크라이브','묘사하다'],['mention','멘션','언급하다'],['announce','어나운스','알리다'],['declare','디클레어','선언하다'],['suggest','서제스트','제안하다'],['insist','인시스트','주장하다'],['complain','컴플레인','불평하다'],['whisper','위스퍼','속삭이다'],['shout','샤우트','외치다']]},
    {label:'📬 소통 · Communication',words:[['contact','컨택트','연락하다'],['inform','인폼','알려주다'],['reply','리플라이','답장하다'],['translate','트랜슬레이트','번역하다'],['message','메시지','메시지'],['signal','시그널','신호'],['gesture','제스처','몸짓'],['expression','익스프레션','표현'],['conversation','컨버세이션','대화'],['argument','아규먼트','논쟁']]}
  ]},
  {day:67,title:'수량과 정도',subtitle:'Quantity & Degree',sections:[
    {label:'📊 수량 · Quantity',words:[['amount','어마운트','양'],['quantity','콴터티','수량'],['several','세버럴','몇몇의'],['various','베리어스','다양한'],['whole','호울','전체의'],['entire','인타이어','전부의'],['single','싱글','하나의'],['double','더블','두 배의'],['average','애버리지','평균의'],['extra','엑스트라','추가의']]},
    {label:'📈 정도 · Degree',words:[['enough','이너프','충분한'],['almost','올모스트','거의'],['nearly','니얼리','거의'],['barely','베얼리','간신히'],['quite','콰이트','꽤'],['rather','래더','다소'],['extremely','익스트림리','극도로'],['slightly','슬라이틀리','약간'],['completely','컴플리틀리','완전히'],['mostly','모스틀리','대부분']]}
  ]},
  {day:68,title:'시간과 순서',subtitle:'Time & Order',sections:[
    {label:'⏰ 시점 · Points in Time',words:[['moment','모먼트','순간'],['period','피리어드','기간'],['century','센추리','세기'],['decade','데케이드','십 년'],['recent','리슨트','최근의'],['current','커런트','현재의'],['ancient','에인션트','고대의'],['modern','모던','현대의'],['temporary','템퍼러리','일시적인'],['permanent','퍼머넌트','영구적인']]},
    {label:'🔢 순서 · Sequence',words:[['order','오더','순서'],['previous','프리비어스','이전의'],['following','팔로잉','다음의'],['final','파이널','마지막의'],['original','오리지널','원래의'],['recently','리슨틀리','최근에'],['already','올레디','이미'],['immediately','이미디엇리','즉시'],['eventually','이벤추얼리','결국'],['gradually','그래주얼리','점차']]}
  ]},
  {day:69,title:'원인과 결과',subtitle:'Cause & Effect',sections:[
    {label:'🔗 원인 · Cause',words:[['cause','코즈','원인/일으키다'],['reason','리즌','이유'],['because','비코즈','때문에'],['since','신스','~이므로'],['due to','듀 투','~때문에'],['lead to','리드 투','~로 이어지다'],['depend','디펜드','의존하다'],['affect','어펙트','영향을 주다'],['influence','인플루언스','영향'],['factor','팩터','요인']]},
    {label:'🎯 결과 · Effect',words:[['result','리절트','결과'],['effect','이펙트','효과'],['consequence','컨시퀀스','결과'],['therefore','데어포어','그러므로'],['thus','더스','따라서'],['so that','소 댓','~하도록'],['produce','프로듀스','낳다'],['create','크리에이트','만들어내다'],['prevent','프리벤트','막다'],['solve','솔브','해결하다']]}
  ]},
  {day:70,title:'비교와 대조',subtitle:'Comparison & Contrast',sections:[
    {label:'⚖️ 비교 · Comparison',words:[['compare','컴페어','비교하다'],['contrast','컨트래스트','대조하다'],['similar','시밀러','유사한'],['alike','얼라이크','비슷한'],['equal','이퀄','동등한'],['match','매치','일치하다'],['resemble','리젬블','닮다'],['both','보스','둘 다'],['either','이더','둘 중 하나'],['neither','니더','둘 다 아닌']]},
    {label:'↔️ 대조 · Contrast',words:[['however','하우에버','그러나'],['although','올도우','비록 ~지만'],['despite','디스파이트','~에도 불구하고'],['instead','인스테드','대신에'],['otherwise','아더와이즈','그렇지 않으면'],['unlike','언라이크','~와 달리'],['opposite','오퍼짓','반대의'],['except','익셉트','~을 제외하고'],['while','와일','반면에'],['yet','옛','그러나']]}
  ]},
  {day:71,title:'문제와 해결',subtitle:'Problems & Solutions',sections:[
    {label:'⚠️ 문제 · Problems',words:[['problem','프라블럼','문제'],['issue','이슈','사안'],['trouble','트러블','곤란'],['difficulty','디피컬티','어려움'],['mistake','미스테이크','실수'],['error','에러','오류'],['fault','폴트','잘못'],['risk','리스크','위험'],['challenge','챌린지','도전 과제'],['conflict','컨플릭트','갈등']]},
    {label:'💡 해결 · Solutions',words:[['solution','솔루션','해결책'],['method','메서드','방법'],['approach','어프로치','접근법'],['strategy','스트래티지','전략'],['advice','어드바이스','조언'],['suggestion','서제스천','제안'],['improve','임프루브','개선하다'],['adjust','어저스트','조정하다'],['overcome','오버컴','극복하다'],['succeed','석시드','성공하다']]}
  ]},
  {day:72,title:'감정 표현 심화 2',subtitle:'Advanced Emotions',sections:[
    {label:'😌 긍정 · Positive',words:[['delighted','딜라이티드','아주 기쁜'],['satisfied','새티스파이드','만족한'],['grateful','그레이트풀','감사하는'],['relieved','릴리브드','안도한'],['eager','이거','열망하는'],['content','컨텐트','만족하는'],['pleasant','플레전트','유쾌한'],['comfortable','컴퍼터블','편안한'],['peaceful','피스풀','평온한'],['impressed','임프레스트','감명받은']]},
    {label:'😔 부정 · Negative',words:[['disappointed','디서포인티드','실망한'],['frustrated','프러스트레이티드','좌절한'],['annoyed','어노이드','짜증난'],['anxious','앵셔스','불안한'],['embarrassed','임배러스트','당황한'],['guilty','길티','죄책감이 드는'],['regret','리그렛','후회하다'],['depressed','디프레스트','우울한'],['furious','퓨리어스','격노한'],['ashamed','어셰임드','부끄러운']]}
  ]},
  {day:73,title:'사회와 제도',subtitle:'Society & Systems',sections:[
    {label:'🏛️ 제도 · Institutions',words:[['system','시스템','체계'],['policy','폴리시','정책'],['election','일렉션','선거'],['vote','보트','투표하다'],['leader','리더','지도자'],['official','오피셜','공무원/공식의'],['organization','오거나이제이션','조직'],['committee','커미티','위원회'],['budget','버짓','예산'],['tax','택스','세금']]},
    {label:'⚖️ 권리 · Rights',words:[['right','라이트','권리'],['duty','듀티','의무'],['justice','저스티스','정의'],['equality','이퀄리티','평등'],['freedom','프리덤','자유'],['protect','프로텍트','보호하다'],['respect','리스펙트','존중하다'],['responsible','리스판서블','책임 있는'],['permit','퍼밋','허가하다'],['punish','퍼니시','처벌하다']]}
  ]},
  {day:74,title:'과학과 기술',subtitle:'Science & Technology',sections:[
    {label:'🔬 과학 · Science',words:[['research','리서치','연구'],['theory','띠어리','이론'],['evidence','에비던스','증거'],['prove','프루브','증명하다'],['analyze','애널라이즈','분석하다'],['data','데이터','자료'],['method','메서드','방법'],['result','리절트','결과'],['discovery','디스커버리','발견'],['invention','인벤션','발명']]},
    {label:'⚙️ 기술 · Technology',words:[['technology','테크놀로지','기술'],['device','디바이스','기기'],['function','펑션','기능'],['operate','오퍼레이트','작동하다'],['connect','커넥트','연결하다'],['program','프로그램','프로그램'],['digital','디지털','디지털의'],['automatic','오토매틱','자동의'],['efficient','이피션트','효율적인'],['advanced','어드밴스드','진보된']]}
  ]},
  {day:75,title:'경제와 거래',subtitle:'Economy & Trade',sections:[
    {label:'💵 경제 · Economy',words:[['economy','이코노미','경제'],['income','인컴','수입'],['expense','익스펜스','지출'],['profit','프라핏','이익'],['loss','로스','손실'],['value','밸류','가치'],['worth','워스','~의 가치가 있는'],['invest','인베스트','투자하다'],['afford','어포드','여유가 되다'],['debt','뎃','빚']]},
    {label:'🤝 거래 · Trade',words:[['trade','트레이드','거래하다'],['exchange','익스체인지','교환하다'],['supply','서플라이','공급하다'],['demand','디맨드','수요/요구하다'],['product','프로덕트','제품'],['service','서비스','서비스'],['contract','컨트랙트','계약'],['agreement','어그리먼트','합의'],['deal','딜','거래'],['negotiate','니고시에이트','협상하다']]}
  ]},
  {day:76,title:'환경과 지구',subtitle:'Environment & Earth',sections:[
    {label:'🌍 지구 · Earth',words:[['planet','플래닛','행성'],['surface','서피스','표면'],['ocean','오션','대양'],['continent','컨티넌트','대륙'],['region','리전','지역'],['climate','클라이밋','기후'],['atmosphere','애트모스피어','대기'],['resource','리소스','자원'],['energy','에너지','에너지'],['species','스피시즈','종']]},
    {label:'♻️ 보호 · Conservation',words:[['pollute','폴루트','오염시키다'],['destroy','디스트로이','파괴하다'],['preserve','프리저브','보존하다'],['conserve','컨서브','아껴 쓰다'],['recycle','리사이클','재활용하다'],['renewable','리뉴어블','재생 가능한'],['sustainable','서스테이너블','지속 가능한'],['survive','서바이브','살아남다'],['extinct','익스팅트','멸종된'],['balance','밸런스','균형']]}
  ]},
  {day:77,title:'건강과 의학',subtitle:'Health & Medicine',sections:[
    {label:'🩺 의학 · Medicine',words:[['patient','페이션트','환자'],['symptom','심텀','증상'],['disease','디지즈','질병'],['infection','인펙션','감염'],['virus','바이러스','바이러스'],['vaccine','백신','백신'],['surgery','서저리','수술'],['diagnose','다이어그노즈','진단하다'],['prescribe','프리스크라이브','처방하다'],['cure','큐어','치료하다']]},
    {label:'💚 건강 · Wellness',words:[['nutrition','뉴트리션','영양'],['balanced','밸런스트','균형 잡힌'],['regular','레귤러','규칙적인'],['habit','해빗','습관'],['prevent','프리벤트','예방하다'],['recover','리커버','회복하다'],['strength','스트렝스','힘'],['fitness','피트니스','체력'],['rest','레스트','휴식'],['immune','이뮨','면역의']]}
  ]},
  {day:78,title:'교육과 학문',subtitle:'Education & Academics',sections:[
    {label:'🎓 교육 · Education',words:[['education','에듀케이션','교육'],['knowledge','날리지','지식'],['subject','서브젝트','과목'],['degree','디그리','학위'],['scholar','스칼러','학자'],['research','리서치','연구하다'],['lecture','렉처','강의'],['seminar','세미나','세미나'],['curriculum','커리큘럼','교육과정'],['graduate','그래주에이트','졸업하다']]},
    {label:'📖 학습 · Learning',words:[['concept','컨셉트','개념'],['principle','프린시플','원리'],['definition','데피니션','정의'],['example','이그잼플','예시'],['exercise','엑서사이즈','연습문제'],['assignment','어사인먼트','과제'],['essay','에세이','논술'],['reference','레퍼런스','참고자료'],['summary','서머리','요약'],['conclusion','컨클루전','결론']]}
  ]},
  {day:79,title:'예술과 문학',subtitle:'Arts & Literature',sections:[
    {label:'🎨 예술 · Arts',words:[['creative','크리에이티브','창의적인'],['artistic','아티스틱','예술적인'],['perform','퍼폼','공연하다'],['audience','오디언스','관객'],['exhibition','엑시비션','전시회'],['masterpiece','마스터피스','걸작'],['style','스타일','양식'],['classic','클래식','고전의'],['modern','모던','현대의'],['inspire','인스파이어','영감을 주다']]},
    {label:'📚 문학 · Literature',words:[['literature','리터러처','문학'],['character','캐릭터','등장인물'],['plot','플롯','줄거리'],['theme','씸','주제'],['setting','세팅','배경'],['fiction','픽션','소설'],['biography','바이오그래피','전기'],['publish','퍼블리시','출판하다'],['edition','에디션','판'],['translate','트랜슬레이트','번역하다']]}
  ]},
  {day:80,title:'여행과 문화',subtitle:'Travel & Culture',sections:[
    {label:'✈️ 여행 · Travel',words:[['journey','저니','여정'],['destination','데스티네이션','목적지'],['departure','디파처','출발'],['arrival','어라이벌','도착'],['accommodation','어커머데이션','숙소'],['reservation','레저베이션','예약'],['schedule','스케줄','일정'],['route','루트','경로'],['souvenir','수버니어','기념품'],['explore','익스플로어','탐험하다']]},
    {label:'🌏 문화 · Culture',words:[['tradition','트러디션','전통'],['custom','커스텀','관습'],['heritage','헤리티지','유산'],['festival','페스티벌','축제'],['ceremony','세러모니','의식'],['religion','릴리전','종교'],['diverse','다이버스','다양한'],['global','글로벌','세계적인'],['local','로컬','현지의'],['adapt','어댑트','적응하다']]}
  ]},
  {day:81,title:'일과 직장',subtitle:'Work & Workplace',sections:[
    {label:'💼 업무 · Tasks',words:[['career','커리어','경력'],['position','포지션','직위'],['apply','어플라이','지원하다'],['interview','인터뷰','면접'],['hire','하이어','고용하다'],['employ','임플로이','고용하다'],['promote','프로모트','승진시키다'],['retire','리타이어','은퇴하다'],['resign','리자인','사임하다'],['colleague','칼리그','동료']]},
    {label:'📋 조직 · Organization',words:[['department','디파트먼트','부서'],['manager','매니저','관리자'],['staff','스태프','직원'],['schedule','스케줄','일정을 잡다'],['assign','어사인','배정하다'],['cooperate','코오퍼레이트','협력하다'],['coordinate','코오디네이트','조율하다'],['supervise','수퍼바이즈','감독하다'],['evaluate','이밸류에이트','평가하다'],['achieve','어치브','달성하다']]}
  ]},
  {day:82,title:'관계와 태도',subtitle:'Relationships & Attitudes',sections:[
    {label:'🤝 관계 · Relationships',words:[['relationship','릴레이션십','관계'],['friendship','프렌드십','우정'],['companion','컴패니언','동반자'],['acquaintance','어퀘인턴스','지인'],['rival','라이벌','경쟁자'],['ally','앨라이','동맹'],['bond','본드','유대'],['loyalty','로열티','충성'],['betray','비트레이','배신하다'],['reconcile','레컨사일','화해하다']]},
    {label:'🙂 태도 · Attitudes',words:[['attitude','애티튜드','태도'],['behavior','비헤이비어','행동'],['manner','매너','태도/예절'],['sincere','신시어','진실한'],['thoughtful','쏘트풀','사려 깊은'],['considerate','컨시더릿','배려하는'],['indifferent','인디퍼런트','무관심한'],['cooperative','코오퍼러티브','협조적인'],['aggressive','어그레시브','공격적인'],['passive','패시브','수동적인']]}
  ]},
  {day:83,title:'추상 개념 1',subtitle:'Abstract Concepts 1',sections:[
    {label:'💡 개념 · Concepts',words:[['idea','아이디어','생각'],['concept','컨셉트','개념'],['purpose','퍼퍼스','목적'],['meaning','미닝','의미'],['sense','센스','감각/의미'],['aspect','애스펙트','측면'],['feature','피처','특징'],['quality','콸리티','질/특성'],['nature','네이처','본질'],['essence','에센스','본질']]},
    {label:'🔑 성질 · Properties',words:[['ability','어빌리티','능력'],['capacity','커패시티','용량/수용력'],['potential','포텐셜','잠재력'],['tendency','텐던시','경향'],['condition','컨디션','조건/상태'],['situation','시추에이션','상황'],['circumstance','서컴스턴스','환경/사정'],['background','백그라운드','배경'],['context','컨텍스트','맥락'],['perspective','퍼스펙티브','관점']]}
  ]},
  {day:84,title:'추상 개념 2',subtitle:'Abstract Concepts 2',sections:[
    {label:'🎯 목표 · Goals',words:[['aim','에임','목표'],['target','타깃','목표물'],['ambition','앰비션','야망'],['motivation','모티베이션','동기'],['determination','디터미네이션','결심'],['commitment','커미트먼트','헌신'],['dedication','데디케이션','전념'],['persistence','퍼시스턴스','끈기'],['patience','페이션스','인내'],['discipline','디서플린','훈련/규율']]},
    {label:'📐 기준 · Standards',words:[['standard','스탠더드','기준'],['criterion','크라이티리언','판단 기준'],['principle','프린시플','원칙'],['rule','룰','규칙'],['norm','놈','규범'],['limit','리밋','한계'],['range','레인지','범위'],['scale','스케일','규모'],['level','레벨','수준'],['measure','메저','척도']]}
  ]},
  {day:85,title:'변화와 발전',subtitle:'Change & Development',sections:[
    {label:'🔄 변화 · Change',words:[['change','체인지','변화'],['transform','트랜스폼','변형시키다'],['convert','컨버트','전환하다'],['shift','시프트','이동하다'],['vary','베리','다양하다'],['adjust','어저스트','조정하다'],['modify','모디파이','수정하다'],['reform','리폼','개혁하다'],['replace','리플레이스','대체하다'],['remain','리메인','남아 있다']]},
    {label:'📈 발전 · Progress',words:[['develop','디벨럽','발전하다'],['progress','프로그레스','진보'],['advance','어드밴스','발전하다'],['expand','익스팬드','확장하다'],['increase','인크리스','증가하다'],['decrease','디크리스','감소하다'],['decline','디클라인','쇠퇴하다'],['grow','그로우','성장하다'],['improve','임프루브','향상되다'],['evolve','이볼브','진화하다']]}
  ]},
  {day:86,title:'의견과 주장',subtitle:'Opinion & Argument',sections:[
    {label:'🗣️ 의견 · Opinion',words:[['opinion','어피니언','의견'],['view','뷰','견해'],['belief','빌리프','믿음'],['claim','클레임','주장하다'],['argue','아규','주장하다'],['state','스테이트','진술하다'],['emphasize','엠퍼사이즈','강조하다'],['point out','포인트 아웃','지적하다'],['assume','어슘','가정하다'],['conclude','컨클루드','결론짓다']]},
    {label:'📣 설득 · Persuasion',words:[['persuade','퍼스웨이드','설득하다'],['convince','컨빈스','확신시키다'],['encourage','인커리지','격려하다'],['discourage','디스커리지','낙담시키다'],['recommend','레커멘드','추천하다'],['warn','원','경고하다'],['remind','리마인드','상기시키다'],['request','리퀘스트','요청하다'],['demand','디맨드','요구하다'],['urge','어지','촉구하다']]}
  ]},
  {day:87,title:'사건과 상황',subtitle:'Events & Situations',sections:[
    {label:'📅 사건 · Events',words:[['event','이벤트','사건'],['incident','인시던트','사건'],['occasion','어케이전','경우'],['occur','어커','발생하다'],['happen','해픈','일어나다'],['take place','테이크 플레이스','열리다'],['arise','어라이즈','생기다'],['emerge','이머지','나타나다'],['appear','어피어','나타나다'],['disappear','디서피어','사라지다']]},
    {label:'🌀 상황 · Situations',words:[['crisis','크라이시스','위기'],['emergency','이머전시','비상사태'],['disaster','디재스터','재난'],['opportunity','아퍼튜니티','기회'],['advantage','어드밴티지','이점'],['disadvantage','디스어드밴티지','불리한 점'],['benefit','베니핏','이익'],['impact','임팩트','영향'],['consequence','컨시퀀스','결과'],['outcome','아웃컴','결과']]}
  ]},
  {day:88,title:'정보와 매체',subtitle:'Information & Media',sections:[
    {label:'📰 매체 · Media',words:[['media','미디어','매체'],['news','뉴스','뉴스'],['report','리포트','보도하다'],['broadcast','브로드캐스트','방송하다'],['journalist','저널리스트','기자'],['article','아티클','기사'],['headline','헤드라인','표제'],['interview','인터뷰','인터뷰하다'],['publish','퍼블리시','발행하다'],['audience','오디언스','청중']]},
    {label:'🔎 정보 · Information',words:[['information','인포메이션','정보'],['source','소스','출처'],['fact','팩트','사실'],['detail','디테일','세부사항'],['content','콘텐트','내용'],['topic','토픽','주제'],['message','메시지','메시지'],['accurate','애큐릿','정확한'],['reliable','릴라이어블','믿을 만한'],['false','폴스','거짓의']]}
  ]},
  {day:89,title:'공간과 위치',subtitle:'Space & Location',sections:[
    {label:'📍 위치 · Location',words:[['location','로케이션','위치'],['position','포지션','자리'],['area','에어리어','구역'],['zone','존','지대'],['border','보더','경계'],['edge','에지','가장자리'],['center','센터','중심'],['surface','서피스','표면'],['interior','인티어리어','내부'],['exterior','익스티어리어','외부']]},
    {label:'📏 거리 · Distance',words:[['distance','디스턴스','거리'],['nearby','니어바이','근처의'],['distant','디스턴트','먼'],['beyond','비욘드','~너머'],['within','위딘','~이내에'],['throughout','쓰루아웃','~전역에'],['toward','투워드','~쪽으로'],['across','어크로스','~을 가로질러'],['along','얼롱','~을 따라'],['beneath','비니스','~아래에']]}
  ]},
  {day:90,title:'일상 표현 심화',subtitle:'Everyday Expressions',sections:[
    {label:'🗓️ 습관 · Routine',words:[['routine','루틴','일과'],['regularly','레귤러리','규칙적으로'],['occasionally','어케이저널리','가끔'],['frequently','프리퀀틀리','자주'],['constantly','칸스턴틀리','끊임없이'],['seldom','셀덤','좀처럼 ~않다'],['hardly','하들리','거의 ~않다'],['normally','노멀리','보통'],['generally','제너럴리','일반적으로'],['particularly','파티큘러리','특히']]},
    {label:'💬 연결어 · Connectors',words:[['moreover','모어오버','게다가'],['furthermore','퍼더모어','더욱이'],['besides','비사이즈','게다가'],['nevertheless','네버덜리스','그럼에도'],['meanwhile','민와일','그동안에'],['accordingly','어코딩리','그에 따라'],['similarly','시밀러리','마찬가지로'],['specifically','스페시피컬리','구체적으로'],['overall','오버올','전반적으로'],['finally','파이널리','마침내']]}
  ]},
  {day:91,title:'성취와 실패',subtitle:'Success & Failure',sections:[
    {label:'🏆 성취 · Achievement',words:[['achievement','어치브먼트','성취'],['accomplish','어캄플리시','완수하다'],['succeed','석시드','성공하다'],['win','윈','이기다'],['earn','언','얻다'],['gain','게인','획득하다'],['reward','리워드','보상'],['honor','아너','명예'],['praise','프레이즈','칭찬하다'],['celebrate','셀러브레이트','축하하다']]},
    {label:'💔 실패 · Failure',words:[['failure','페일리어','실패'],['lose','루즈','지다/잃다'],['miss','미스','놓치다'],['struggle','스트러글','고군분투하다'],['suffer','서퍼','고통받다'],['give up','기브 업','포기하다'],['quit','큇','그만두다'],['defeat','디피트','패배시키다'],['weakness','위크니스','약점'],['limit','리밋','한계']]}
  ]},
  {day:92,title:'감각과 인식',subtitle:'Senses & Perception',sections:[
    {label:'👁️ 감각 · Senses',words:[['perceive','퍼시브','인지하다'],['sense','센스','감지하다'],['detect','디텍트','탐지하다'],['recognize','레커그나이즈','알아보다'],['identify','아이덴티파이','식별하다'],['distinguish','디스팅귀시','구별하다'],['aware','어웨어','알고 있는'],['conscious','컨셔스','의식하는'],['obvious','아비어스','명백한'],['vague','베이그','모호한']]},
    {label:'🎨 묘사 · Description',words:[['visible','비저블','보이는'],['invisible','인비저블','보이지 않는'],['transparent','트랜스패런트','투명한'],['bright','브라이트','밝은'],['dim','딤','희미한'],['silent','사일런트','조용한'],['noisy','노이지','시끄러운'],['scent','센트','향기'],['texture','텍스처','질감'],['flavor','플레이버','풍미']]}
  ]},
  {day:93,title:'양과 측정',subtitle:'Quantity & Measurement',sections:[
    {label:'📐 측정 · Measurement',words:[['length','렝스','길이'],['width','위드스','너비'],['height','하이트','높이'],['depth','뎁스','깊이'],['weight','웨이트','무게'],['volume','볼륨','부피'],['speed','스피드','속도'],['temperature','템퍼러처','온도'],['pressure','프레셔','압력'],['density','덴시티','밀도']]},
    {label:'🔢 수치 · Figures',words:[['figure','피겨','수치'],['rate','레이트','비율'],['ratio','레이시오','비'],['percent','퍼센트','퍼센트'],['portion','포션','부분'],['majority','머조리티','다수'],['minority','마이노리티','소수'],['maximum','맥시멈','최대'],['minimum','미니멈','최소'],['approximate','어프락시밋','대략의']]}
  ]},
  {day:94,title:'법과 규칙',subtitle:'Law & Rules',sections:[
    {label:'⚖️ 법 · Law',words:[['law','로','법'],['legal','리걸','합법의'],['illegal','일리걸','불법의'],['court','코트','법정'],['judge','저지','판사'],['lawyer','로이어','변호사'],['crime','크라임','범죄'],['evidence','에비던스','증거'],['trial','트라이얼','재판'],['sentence','센텐스','선고']]},
    {label:'📜 규칙 · Regulations',words:[['regulation','레귤레이션','규정'],['obey','오베이','따르다'],['violate','바이얼레이트','위반하다'],['enforce','인포스','시행하다'],['require','리콰이어','요구하다'],['prohibit','프로히빗','금지하다'],['permit','퍼밋','허용하다'],['restrict','리스트릭트','제한하다'],['obligation','아블리게이션','의무'],['exception','익셉션','예외']]}
  ]},
  {day:95,title:'심리와 마음',subtitle:'Mind & Psychology',sections:[
    {label:'🧠 마음 · Mind',words:[['mind','마인드','마음'],['thought','쏘트','생각'],['memory','메모리','기억'],['emotion','이모션','감정'],['mood','무드','기분'],['instinct','인스팅트','본능'],['intuition','인튜이션','직관'],['desire','디자이어','욕구'],['impulse','임펄스','충동'],['will','윌','의지']]},
    {label:'🌱 성장 · Growth',words:[['mature','머추어','성숙한'],['independent','인디펜던트','독립적인'],['responsible','리스판서블','책임감 있는'],['reflect','리플렉트','반성하다'],['accept','액셉트','받아들이다'],['adapt','어댑트','적응하다'],['endure','인듀어','견디다'],['overcome','오버컴','극복하다'],['inspire','인스파이어','영감을 주다'],['motivate','모티베이트','동기를 주다']]}
  ]},
  {day:96,title:'건축과 도시',subtitle:'Architecture & City',sections:[
    {label:'🏗️ 건축 · Architecture',words:[['structure','스트럭처','구조물'],['construct','컨스트럭트','건설하다'],['architecture','아키텍처','건축'],['material','머티어리얼','재료'],['foundation','파운데이션','기초'],['column','칼럼','기둥'],['ceiling','실링','천장'],['frame','프레임','틀'],['design','디자인','설계'],['renovate','레노베이트','개조하다']]},
    {label:'🏙️ 도시 · City',words:[['urban','어반','도시의'],['rural','루럴','시골의'],['downtown','다운타운','도심'],['suburb','서버브','교외'],['district','디스트릭트','구역'],['facility','퍼실리티','시설'],['public','퍼블릭','공공의'],['private','프라이빗','사적인'],['transport','트랜스포트','수송하다'],['population','파퓰레이션','인구']]}
  ]},
  {day:97,title:'농업과 식량',subtitle:'Agriculture & Food',sections:[
    {label:'🌾 농업 · Agriculture',words:[['agriculture','애그리컬처','농업'],['crop','크랍','작물'],['harvest','하비스트','수확하다'],['plant','플랜트','심다'],['seed','시드','씨앗'],['soil','소일','토양'],['fertilizer','퍼틸라이저','비료'],['irrigation','이리게이션','관개'],['livestock','라이브스톡','가축'],['farm','팜','농장']]},
    {label:'🍚 식량 · Food Supply',words:[['nutrition','뉴트리션','영양'],['protein','프로틴','단백질'],['vitamin','바이타민','비타민'],['ingredient','인그리디언트','재료'],['organic','오가닉','유기농의'],['fresh','프레시','신선한'],['preserve','프리저브','보존하다'],['process','프로세스','가공하다'],['consume','컨슘','소비하다'],['shortage','쇼티지','부족']]}
  ]},
  {day:98,title:'스포츠와 경쟁',subtitle:'Sports & Competition',sections:[
    {label:'🏅 경쟁 · Competition',words:[['compete','컴피트','경쟁하다'],['competition','컴피티션','경쟁'],['opponent','어포넌트','상대'],['tournament','토너먼트','토너먼트'],['league','리그','리그'],['qualify','콸리파이','자격을 얻다'],['eliminate','일리미네이트','탈락시키다'],['advance','어드밴스','진출하다'],['title','타이틀','타이틀'],['trophy','트로피','트로피']]},
    {label:'💪 훈련 · Training',words:[['athlete','애슬릿','운동선수'],['performance','퍼포먼스','경기력'],['technique','테크닉','기술'],['endurance','인듀어런스','지구력'],['flexible','플렉서블','유연한'],['strength','스트렝스','근력'],['injury','인저리','부상'],['recovery','리커버리','회복'],['teamwork','팀워크','팀워크'],['spirit','스피릿','정신']]}
  ]},
  {day:99,title:'미래와 가능성',subtitle:'Future & Possibility',sections:[
    {label:'🔮 예측 · Prediction',words:[['predict','프리딕트','예측하다'],['forecast','포캐스트','예보하다'],['anticipate','앤티시페이트','예상하다'],['probable','프라버블','있음 직한'],['likely','라이클리','~할 것 같은'],['unlikely','언라이클리','~할 것 같지 않은'],['certain','서튼','확실한'],['uncertain','언서튼','불확실한'],['possibility','파서빌리티','가능성'],['probability','프라버빌리티','확률']]},
    {label:'🚀 계획 · Planning',words:[['plan','플랜','계획하다'],['prepare','프리페어','준비하다'],['arrange','어레인지','준비하다'],['organize','오거나이즈','조직하다'],['schedule','스케줄','예정하다'],['postpone','포스트폰','연기하다'],['cancel','캔슬','취소하다'],['confirm','컨펌','확정하다'],['proceed','프로시드','진행하다'],['implement','임플리먼트','실행하다']]}
  ]},
  {day:100,title:'삶과 가치',subtitle:'Life & Values',sections:[
    {label:'🌟 가치 · Values',words:[['value','밸류','가치'],['virtue','버추','미덕'],['integrity','인테그리티','성실성'],['honesty','아니스티','정직'],['kindness','카인드니스','친절'],['generosity','제너로시티','너그러움'],['courage','커리지','용기'],['wisdom','위즈덤','지혜'],['humility','휴밀리티','겸손'],['gratitude','그래티튜드','감사']]},
    {label:'🕊️ 삶 · Life',words:[['meaningful','미닝풀','의미 있는'],['purposeful','퍼퍼스풀','목적이 있는'],['fulfill','풀필','성취하다'],['contribute','컨트리뷰트','기여하다'],['influence','인플루언스','영향을 주다'],['legacy','레거시','유산'],['journey','저니','여정'],['destiny','데스티니','운명'],['blessing','블레싱','축복'],['hope','호프','희망']]}
  ]},
];

const DICT = {};
DAYS.forEach(d => d.sections.forEach(s => s.words.forEach(w => { DICT[w[0].toLowerCase()] = w[2]; })));
