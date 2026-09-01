const API = 'https://script.google.com/a/macros/cgnmail.net/s/AKfycbxbwQiyQr9uSpM_Xte97hfwE4pvQQaKWFRJ9uINBaT6sq0YilvnEj0yh34EVn_DVAVDaQ/exec';
const START_DATE = new Date('2026-07-22');
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
];

const DICT = {};
DAYS.forEach(d => d.sections.forEach(s => s.words.forEach(w => { DICT[w[0].toLowerCase()] = w[2]; })));
