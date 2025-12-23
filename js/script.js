// --- DATABASE ---

// 1. Basic Hiragana (Seion)
const basicChars = [
    { q: 'あ', a: 'a' }, { q: 'い', a: 'i' }, { q: 'う', a: 'u' }, { q: 'え', a: 'e' }, { q: 'お', a: 'o' },
    { q: 'か', a: 'ka' }, { q: 'き', a: 'ki' }, { q: 'く', a: 'ku' }, { q: 'け', a: 'ke' }, { q: 'こ', a: 'ko' },
    { q: 'さ', a: 'sa' }, { q: 'し', a: 'shi' }, { q: 'す', a: 'su' }, { q: 'せ', a: 'se' }, { q: 'そ', a: 'so' },
    { q: 'た', a: 'ta' }, { q: 'ち', a: 'chi' }, { q: 'つ', a: 'tsu' }, { q: 'て', a: 'te' }, { q: 'と', a: 'to' },
    { q: 'な', a: 'na' }, { q: 'に', a: 'ni' }, { q: 'ぬ', a: 'nu' }, { q: 'ね', a: 'ne' }, { q: 'の', a: 'no' },
    { q: 'は', a: 'ha' }, { q: 'ひ', a: 'hi' }, { q: 'ふ', a: 'fu' }, { q: 'へ', a: 'he' }, { q: 'ほ', a: 'ho' },
    { q: 'ま', a: 'ma' }, { q: 'み', a: 'mi' }, { q: 'む', a: 'mu' }, { q: 'め', a: 'me' }, { q: 'も', a: 'mo' },
    { q: 'や', a: 'ya' }, { q: 'ゆ', a: 'yu' }, { q: 'よ', a: 'yo' },
    { q: 'ら', a: 'ra' }, { q: 'り', a: 'ri' }, { q: 'る', a: 'ru' }, { q: 'れ', a: 're' }, { q: 'ろ', a: 'ro' },
    { q: 'わ', a: 'wa' }, { q: 'を', a: 'wo' }, { q: 'ん', a: 'n' }
];

// 2. Dakuten & Handakuten
const dakuChars = [
    { q: 'が', a: 'ga' }, { q: 'ぎ', a: 'gi' }, { q: 'ぐ', a: 'gu' }, { q: 'げ', a: 'ge' }, { q: 'ご', a: 'go' },
    { q: 'ざ', a: 'za' }, { q: 'じ', a: 'ji' }, { q: 'ず', a: 'zu' }, { q: 'ぜ', a: 'ze' }, { q: 'ぞ', a: 'zo' },
    { q: 'だ', a: 'da' }, { q: 'ぢ', a: 'ji' }, { q: 'づ', a: 'zu' }, { q: 'で', a: 'de' }, { q: 'ど', a: 'do' },
    { q: 'ば', a: 'ba' }, { q: 'び', a: 'bi' }, { q: 'ぶ', a: 'bu' }, { q: 'べ', a: 'be' }, { q: 'ぼ', a: 'bo' },
    { q: 'ぱ', a: 'pa' }, { q: 'ぴ', a: 'pi' }, { q: 'ぷ', a: 'pu' }, { q: 'ぺ', a: 'pe' }, { q: 'ぽ', a: 'po' }
];

// 3. Words (Stage 1: Basic)
const basicWords = [
    { q: 'いえ', a: 'ie', t: 'House' }, { q: 'あお', a: 'ao', t: 'Blue' }, { q: 'あか', a: 'aka', t: 'Red' },
    { q: 'えき', a: 'eki', t: 'Station' }, { q: 'うえ', a: 'ue', t: 'Up' }, { q: 'した', a: 'shita', t: 'Down' },
    { q: 'ねこ', a: 'neko', t: 'Cat' }, { q: 'いぬ', a: 'inu', t: 'Dog' }, { q: 'とり', a: 'tori', t: 'Bird' },
    { q: 'みみ', a: 'mimi', t: 'Ear' }, { q: 'め', a: 'me', t: 'Eye' }, { q: 'て', a: 'te', t: 'Hand' },
    { q: 'やま', a: 'yama', t: 'Mountain' }, { q: 'かわ', a: 'kawa', t: 'River' }, { q: 'ひ', a: 'hi', t: 'Fire/Sun' },
    { q: 'つき', a: 'tsuki', t: 'Moon' }, { q: 'はな', a: 'hana', t: 'Flower' }, { q: 'ゆき', a: 'yuki', t: 'Snow' },
    { q: 'あめ', a: 'ame', t: 'Rain/Candy' }, { q: 'くも', a: 'kumo', t: 'Cloud' }, { q: 'せんせい', a: 'sensei', t: 'Teacher' },
    { q: 'いす', a: 'isu', t: 'Chair' }, { q: 'つくえ', a: 'tsukue', t: 'Desk' }, { q: 'かさ', a: 'kasa', t: 'Umbrella' },
    { q: 'くつ', a: 'kutsu', t: 'Shoes' }, { q: 'さかな', a: 'sakana', t: 'Fish' }, { q: 'にく', a: 'niku', t: 'Meat' },
    { q: 'おすし', a: 'osushi', t: 'Sushi' }, { q: 'くるま', a: 'kuruma', t: 'Car' }, { q: 'あなた', a: 'anata', t: 'You' },
    { q: 'わたし', a: 'watashi', t: 'I / Me' }, { q: 'あした', a: 'ashita', t: 'Tomorrow' }, { q: 'きょう', a: 'kyou', t: 'Today' },
    { q: 'きのう', a: 'kinou', t: 'Yesterday' }, { q: 'なまえ', a: 'namae', t: 'Name' }, { q: 'しろ', a: 'shiro', t: 'White' },
    { q: 'くろ', a: 'kuro', t: 'Black' }, { q: 'なつ', a: 'natsu', t: 'Summer' }, { q: 'ふゆ', a: 'fuyu', t: 'Winter' },
    { q: 'あき', a: 'aki', t: 'Autumn' }, { q: 'はる', a: 'haru', t: 'Spring' }, { q: 'うし', a: 'ushi', t: 'Cow' },
    { q: 'うま', a: 'uma', t: 'Horse' }, { q: 'さる', a: 'saru', t: 'Monkey' }, { q: 'おかね', a: 'okane', t: 'Money' },
    { q: 'おなか', a: 'onaka', t: 'Stomach' }, { q: 'せなか', a: 'senaka', t: 'Back' }, { q: 'あたま', a: 'atama', t: 'Head' },
    { q: 'かいしゃいん', a: 'kaishain', t: 'Company Employee' }, { q: 'しゃいん', a: 'shain', t: 'Employee' },
    { q: 'しゃちょう', a: 'shachou', t: 'Company President' }, { q: 'かちょう', a: 'kachou', t: 'Section Manager' },
    { q: 'おとこ', a: 'otoko', t: 'Male' }, { q: 'おんな', a: 'onna', t: 'Female' },
    { q: 'みんな', a: 'minna', t: 'Everyone' }, { q: 'みなさん', a: 'minasan', t: 'Everyone (Polite)' },
    { q: 'ひと', a: 'hito', t: 'Person' }, { q: 'かた', a: 'kata', t: 'Person (Formal)' },
    { q: 'けんしゅうせい', a: 'kenshuusei', t: 'Trainee' }, { q: 'かいしゃ', a: 'kaisha', t: 'Company' },
    { q: 'うち', a: 'uchi', t: 'House/Home' }, { q: 'へや', a: 'heya', t: 'Room' },
    { q: 'おてあらい', a: 'otearai', t: 'Washroom' }, { q: 'かめら', a: 'kamera', t: 'Camera' },
    { q: 'のーと', a: 'nooto', t: 'Notebook' }, { q: 'ほん', a: 'hon', t: 'Book' },
    { q: 'くに', a: 'kuni', t: 'Country' }, { q: 'たいしかん', a: 'taishikan', t: 'Embassy' },
    { q: 'としょかん', a: 'toshokan', t: 'Library' }, { q: 'もーる', a: 'mooru', t: 'Mall' },
    { q: 'きっさてん', a: 'kissaten', t: 'Coffee Shop' }, { q: 'かふぇ', a: 'kafe', t: 'Cafe' },
    { q: 'ほんや', a: 'honya', t: 'Bookstore' }, { q: 'れすとらん', a: 'resutoran', t: 'Restaurant' },
    { q: 'きょうしつ', a: 'kyoushitsu', t: 'Classroom' }, { q: 'りょう', a: 'ryou', t: 'Dormitory' },
    { q: 'りょうしん', a: 'ryoushin', t: 'Parents' }, { q: 'こ', a: 'ko', t: 'Child' },
    { q: 'けいたい', a: 'keitai', t: 'Cell Phone' }, { q: 'とけい', a: 'tokei', t: 'Watch/Clock' },
    { q: 'き', a: 'ki', t: 'Tree' }, { q: 'くらす', a: 'kurasu', t: 'Class' },
    { q: 'やちん', a: 'yachin', t: 'Rent' }, { q: 'えん', a: 'en', t: 'Yen' },
    { q: 'いくら', a: 'ikura', t: 'How much' }, { q: 'はたち', a: 'hatachi', t: '20 Years Old' },
    { q: 'いくつ', a: 'ikutsu', t: 'How many / How old' }, { q: 'れい', a: 'rei', t: 'Zero / Example' },
    { q: 'まる', a: 'maru', t: 'Circle / Zero' }, { q: 'きって', a: 'kitte', t: 'Postal Stamp' },
    { q: 'きょうかしょ', a: 'kyoukasho', t: 'Textbook' }, { q: 'みかん', a: 'mikan', t: 'Orange' },
    { q: 'しめきり', a: 'shimekiri', t: 'Deadline' }, { q: 'やすみ', a: 'yasumi', t: 'Vacation/Rest' },
    { q: 'きゅうけい', a: 'kyuukei', t: 'Break' }, { q: 'くりすます', a: 'kurisumasu', t: 'Christmas' },
    { q: 'しあい', a: 'shiai', t: 'Game/Match' }, { q: 'しけん', a: 'shiken', t: 'Exam' },
    { q: 'きせつ', a: 'kisetsu', t: 'Season' }, { q: 'つゆ', a: 'tsuyu', t: 'Rainy Season' },
    { q: 'なつやすみ', a: 'natsuyasumi', t: 'Summer Vacation' }, { q: 'しゅうまつ', a: 'shuumatsu', t: 'Weekend' },
    { q: 'いつ', a: 'itsu', t: 'When' }, { q: 'いま', a: 'ima', t: 'Now' },
    { q: 'あさ', a: 'asa', t: 'Morning' }, { q: 'ひる', a: 'hiru', t: 'Noon/Daytime' },
    { q: 'よる', a: 'yoru', t: 'Night' }
];

// 4. Words (Stage 2: Advanced/Dakuten)
const advancedWords = [
    { q: 'がくせい', a: 'gakusei', t: 'Student' }, { q: 'だいがく', a: 'daigaku', t: 'University' },
    { q: 'げんき', a: 'genki', t: 'Healthy/Lively' }, { q: 'ともだち', a: 'tomodachi', t: 'Friend' },
    { q: 'かばん', a: 'kaban', t: 'Bag' }, { q: 'えんぴつ', a: 'enpitsu', t: 'Pencil' },
    { q: 'てがみ', a: 'tegami', t: 'Letter' }, { q: 'でんわ', a: 'denwa', t: 'Telephone' },
    { q: 'まど', a: 'mado', t: 'Window' }, { q: 'ドア', a: 'doa', t: 'Door' },
    { q: 'みず', a: 'mizu', t: 'Water' }, { q: 'ごはん', a: 'gohan', t: 'Rice/Meal' },
    { q: 'たまご', a: 'tamago', t: 'Egg' }, { q: 'りんご', a: 'ringo', t: 'Apple' },
    { q: 'ぶどう', a: 'budou', t: 'Grapes' }, { q: 'いちご', a: 'ichigo', t: 'Strawberry' },
    { q: 'やさい', a: 'yasai', t: 'Vegetables' }, { q: 'くだもの', a: 'kudamono', t: 'Fruit' },
    { q: 'おちゃ', a: 'ocha', t: 'Tea' }, { q: 'ぎゅうにゅう', a: 'gyuunyuu', t: 'Milk' },
    { q: 'しんぶん', a: 'shinbun', t: 'Newspaper' }, { q: 'めがね', a: 'megane', t: 'Glasses' },
    { q: 'ぼうし', a: 'boushi', t: 'Hat' }, { q: 'ズボン', a: 'zubon', t: 'Pants' },
    { q: 'かぜ', a: 'kaze', t: 'Wind/Cold' }, { q: 'かぞく', a: 'kazoku', t: 'Family' },
    { q: 'こども', a: 'kodomo', t: 'Child' }, { q: 'ぎんこう', a: 'ginkou', t: 'Bank' },
    { q: 'びょういん', a: 'byouin', t: 'Hospital' }, { q: 'ちず', a: 'chizu', t: 'Map' },
    { q: 'きっぷ', a: 'kippu', t: 'Ticket' }, { q: 'じかん', a: 'jikan', t: 'Time' },
    { q: 'えいが', a: 'eiga', t: 'Movie' }, { q: 'おんがく', a: 'ongaku', t: 'Music' },
    { q: 'ざっし', a: 'zasshi', t: 'Magazine' }, { q: 'スポーツ', a: 'supootsu', t: 'Sports' },
    { q: 'デート', a: 'deeto', t: 'Date' }, { q: 'さんぽ', a: 'sanpo', t: 'Walk' },
    { q: 'しごと', a: 'shigoto', t: 'Job/Work' }, { q: 'べんきょう', a: 'benkyou', t: 'Study' },
    { q: 'だいじょうぶ', a: 'daijoubu', t: 'Okay' }, { q: 'ありがとう', a: 'arigatou', t: 'Thank You' },
    { q: 'ごめんなさい', a: 'gomennasai', t: 'Sorry' }, { q: 'こんばんは', a: 'konbanwa', t: 'Good Evening' },
    { q: 'ぶちょう', a: 'buchou', t: 'Department Head' }, { q: 'にほんじん', a: 'nihonjin', t: 'Japanese Person' },
    { q: 'あめりかじん', a: 'amerikajin', t: 'American' }, { q: 'ふぃりぴんじん', a: 'firipinjin', t: 'Filipino' },
    { q: 'えんじにあ', a: 'enjinia', t: 'Engineer' }, { q: 'おふぃす', a: 'ofisu', t: 'Office' },
    { q: 'がっこう', a: 'gakkou', t: 'School' }, { q: 'ちゅうしゃじょう', a: 'chuushajou', t: 'Parking Lot' },
    { q: 'こんぴゅーた', a: 'konpyuuta', t: 'Computer' }, { q: 'ぱそこん', a: 'pasokon', t: 'PC' },
    { q: 'すりっぱ', a: 'surippa', t: 'Slippers' }, { q: 'ことば', a: 'kotoba', t: 'Language/Word' },
    { q: 'こうじょう', a: 'koujou', t: 'Factory' }, { q: 'えいがかん', a: 'eigakan', t: 'Movie Theater' },
    { q: 'でぱーと', a: 'depaato', t: 'Department Store' }, { q: 'すーぱー', a: 'suupaa', t: 'Supermarket' },
    { q: 'びる', a: 'biru', t: 'Building' }, { q: 'かいぎしつ', a: 'kaigishitsu', t: 'Conference Room' },
    { q: 'あぱーと', a: 'apaato', t: 'Apartment' }, { q: 'がいこくじん', a: 'gaikokujin', t: 'Foreigner' },
    { q: 'かぎ', a: 'kagi', t: 'Key' }, { q: 'てーぶる', a: 'teeburu', t: 'Table' },
    { q: 'ひきだし', a: 'hikidashi', t: 'Drawer' }, { q: 'てれび', a: 'terebi', t: 'Television' },
    { q: 'ねだん', a: 'nedan', t: 'Price' }, { q: 'ぺそ', a: 'peso', t: 'Peso' },
    { q: 'どる', a: 'doru', t: 'Dollar' }, { q: 'ぜんぶ', a: 'zenbu', t: 'All / Total' },
    { q: 'ぐらい', a: 'gurai', t: 'About (approx)' }, { q: 'ぺーじ', a: 'peeji', t: 'Page' },
    { q: 'ばんごう', a: 'bangou', t: 'Number' }, { q: 'ぼーるぺん', a: 'boorupen', t: 'Ballpen' },
    { q: 'ぺん', a: 'pen', t: 'Pen' }, { q: 'びん', a: 'bin', t: 'Bottle' },
    { q: 'きょうだい', a: 'kyoudai', t: 'Siblings' }, { q: 'かいぎ', a: 'kaigi', t: 'Meeting' },
    { q: 'たんじょうび', a: 'tanjoubi', t: 'Birthday' }, { q: 'すけじゅーる', a: 'sukejuuru', t: 'Schedule' },
    { q: 'ぷろじぇくと', a: 'purojekuto', t: 'Project' }, { q: 'ぱーてぃ', a: 'paatii', t: 'Party' },
    { q: 'へいじつ', a: 'heijitsu', t: 'Weekday' }, { q: 'ごぜん', a: 'gozen', t: 'Morning (AM)' },
    { q: 'ごご', a: 'gogo', t: 'Afternoon (PM)' }, { q: 'つぎ', a: 'tsugi', t: 'Next' }
];

// --- APP STATE ---
let currentQueue = [];
let currentIndex = 0;
let score = 0;
const totalQuestions = 20;

// Learning State
let learningState = {
    items: [],
    phase: 'memorize', // 'memorize' or 'practice'
    currentIndex: 0,
    currentId: null
};
let learningScore = 0;

// Learning Groups Mapping (Slicing the Basic & Daku arrays)
const learningGroups = {
    '1.1': basicChars.slice(0, 5),    // a-o
    '1.2': basicChars.slice(5, 10),   // ka-ko
    '1.3': basicChars.slice(10, 15),  // sa-so
    '1.4': basicChars.slice(15, 20),  // ta-to
    '1.5': basicChars.slice(20, 25),  // na-no
    '1.6': basicChars.slice(25, 30),  // ha-ho
    '1.7': basicChars.slice(30, 35),  // ma-mo
    '1.8': basicChars.slice(35, 38),  // ya-yo
    '1.9': basicChars.slice(38, 43),  // ra-ro
    '2.0': basicChars.slice(43, 46),  // wa-wo-n
    '3.0': dakuChars.slice(0, 5),     // ga-go
    '3.1': dakuChars.slice(5, 10),    // za-zo
    '3.2': dakuChars.slice(10, 15),   // da-do
    '3.3': dakuChars.slice(15, 20),   // ba-bo
    '3.4': dakuChars.slice(20, 25)    // pa-po
};

// Ordered list of IDs for "Next Level" feature
const learningOrder = [
    '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0',
    '3.0', '3.1', '3.2', '3.3', '3.4'
];

// --- DOM ELEMENTS ---
const screens = {
    menu: document.getElementById('menu-screen'),
    learning: document.getElementById('learning-screen'),
    review: document.getElementById('review-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const ui = {
    // Shared
    modal: document.getElementById('feedback-modal'),
    modalHeader: document.getElementById('modal-header-text'),
    modalHelper: document.getElementById('modal-helper-text'),
    modalAnswer: document.getElementById('modal-correct-answer'),
    modalTrans: document.getElementById('modal-translation'),
    levelModal: document.getElementById('level-complete-modal'),
    practiceModal: document.getElementById('practice-modal'),
    learnScoreDisplay: document.getElementById('learning-score-display'),

    // Quiz specific
    question: document.getElementById('question-text'),
    progressText: document.getElementById('progress-text'),
    progressFill: document.getElementById('progress-fill'),
    input: document.getElementById('answer-input'),
    score: document.getElementById('final-score'),

    // Learning specific
    learnTitle: document.getElementById('learning-title'),
    learnInstr: document.getElementById('learning-instruction'),
    learnChar: document.getElementById('learning-char'),
    learnRomaji: document.getElementById('learning-romaji'),
    learnInput: document.getElementById('learning-input'),
    learnBtn: document.getElementById('learning-action-btn'),

    // Review specific
    reviewGrid: document.getElementById('review-grid')
};

// --- GENERAL NAVIGATION ---
function switchScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
}

// --- REVIEW CHART ---
function showReview() {
    ui.reviewGrid.innerHTML = '';
    const addHeader = (text) => {
        const h = document.createElement('div');
        h.className = 'review-section-header';
        h.innerText = text;
        ui.reviewGrid.appendChild(h);
    };
    const addCards = (list) => {
        list.forEach(item => {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `<div class="char-jp">${item.q}</div><div class="char-en">${item.a}</div>`;
            ui.reviewGrid.appendChild(card);
        });
    };
    addHeader("Basic Hiragana");
    addCards(basicChars);
    addHeader("Dakuten & Handakuten");
    addCards(dakuChars);
    switchScreen('review');
}

// ==========================================
//    LEARNING MODE LOGIC
// ==========================================

function startLearning(id) {
    learningState.currentId = id;
    // For Memorize phase: ONLY show the items specific to this lesson
    learningState.items = [...learningGroups[id]];
    learningState.phase = 'memorize';
    learningState.currentIndex = 0;
    learningScore = 0; // Reset learning score

    // Reset UI
    ui.learnTitle.innerText = `Lesson ${id}`;
    ui.learnInstr.innerText = "Memorize the letters";
    ui.learnInput.style.display = 'none';
    ui.learnRomaji.style.display = 'block';
    ui.learnBtn.innerText = "Next";

    switchScreen('learning');
    renderLearningItem();
}

function renderLearningItem() {
    const item = learningState.items[learningState.currentIndex];
    ui.learnChar.innerText = item.q;

    if (learningState.phase === 'memorize') {
        ui.learnRomaji.innerText = item.a;
        ui.learnRomaji.style.display = 'block';
        ui.learnInput.style.display = 'none';
        ui.learnBtn.innerText = "Next";
        ui.learnInstr.innerText = `Memorize this (${learningState.currentIndex + 1}/${learningState.items.length})`;
    } else {
        // Practice Phase
        ui.learnRomaji.style.display = 'none';
        ui.learnInput.style.display = 'block';
        ui.learnInput.value = '';
        ui.learnInput.focus();
        ui.learnBtn.innerText = "Check";
        ui.learnInstr.innerText = `Question ${learningState.currentIndex + 1}/${learningState.items.length}`;
    }
}

function handleLearningAction() {
    if (learningState.phase === 'memorize') {
        learningState.currentIndex++;
        if (learningState.currentIndex >= learningState.items.length) {
            // End of Memorize Phase -> Show Modal to Start Practice
            ui.practiceModal.style.display = 'flex';
        } else {
            renderLearningItem();
        }
    } else {
        // Practice Phase: Check Answer
        checkLearningAnswer();
    }
}

// Called by the button inside #practice-modal
function startPracticePhase() {
    ui.practiceModal.style.display = 'none';
    learningState.phase = 'practice';

    // *** CUMULATIVE LOGIC ***
    // Find index of current lesson in the ordered list
    const currentIdx = learningOrder.indexOf(learningState.currentId);
    let practicePool = [];

    // Combine all groups from lesson 0 up to current lesson
    for (let i = 0; i <= currentIdx; i++) {
        const id = learningOrder[i];
        if (learningGroups[id]) {
            practicePool = practicePool.concat(learningGroups[id]);
        }
    }

    // Set state items to the cumulative pool
    learningState.items = practicePool;

    // Shuffle
    learningState.items.sort(() => Math.random() - 0.5);
    learningState.currentIndex = 0;
    learningScore = 0;

    renderLearningItem();
}

function checkLearningAnswer() {
    const userAns = ui.learnInput.value.trim().toLowerCase();
    const item = learningState.items[learningState.currentIndex];

    if (userAns === item.a) {
        learningScore++;
        showModal(item, true, true); // (item, isCorrect, isLearningMode)
    } else {
        showModal(item, false, true);
    }
}

function nextLearningItem() {
    learningState.currentIndex++;
    if (learningState.currentIndex >= learningState.items.length) {
        // End of Lesson
        ui.learnScoreDisplay.innerText = `${learningScore} / ${learningState.items.length}`;
        ui.levelModal.style.display = 'flex';
    } else {
        renderLearningItem();
    }
}

function retryCurrentLevel() {
    ui.levelModal.style.display = 'none';
    startLearning(learningState.currentId);
}

function proceedToNextLevel() {
    ui.levelModal.style.display = 'none';
    const currentIdx = learningOrder.indexOf(learningState.currentId);
    if (currentIdx > -1 && currentIdx < learningOrder.length - 1) {
        const nextId = learningOrder[currentIdx + 1];
        startLearning(nextId);
    } else {
        alert("Congratulations! You have completed all lessons!");
        switchScreen('menu');
    }
}


// ==========================================
//    QUIZ MODE LOGIC (EXISTING)
// ==========================================

function startQuiz(type, stage) {
    let pool = [];
    if (type === 'chars') {
        pool = (stage === 1) ? [...basicChars] : [...basicChars, ...dakuChars];
    } else {
        pool = (stage === 1) ? [...basicWords] : [...basicWords, ...advancedWords];
    }

    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const limit = Math.min(pool.length, totalQuestions);
    currentQueue = pool.slice(0, limit);
    currentIndex = 0;
    score = 0;

    switchScreen('quiz');
    renderQuestion();
}

function renderQuestion() {
    const item = currentQueue[currentIndex];
    ui.question.innerText = item.q;
    ui.progressText.innerText = `${currentIndex + 1} / ${currentQueue.length}`;
    ui.progressFill.style.width = `${((currentIndex) / currentQueue.length) * 100}%`;
    ui.input.value = '';
    ui.input.focus();
}

function checkAnswer() {
    const userAns = ui.input.value.trim().toLowerCase();
    const correctAns = currentQueue[currentIndex].a.toLowerCase();
    const item = currentQueue[currentIndex];

    if (userAns === correctAns) {
        score++;
        showModal(item, true, false);
    } else {
        showModal(item, false, false);
    }
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < currentQueue.length) {
        renderQuestion();
    } else {
        ui.score.innerText = `${score} / ${currentQueue.length}`;
        switchScreen('result');
    }
}

// ==========================================
//    SHARED MODAL LOGIC
// ==========================================

// isLearningMode: Boolean flag to determine which "Next" function to call
let isLearningCtx = false;

function showModal(item, isCorrect, isLearning) {
    isLearningCtx = isLearning;

    ui.modalAnswer.innerText = item.a;
    ui.modalTrans.innerText = item.t ? `(${item.t})` : '';
    ui.modalTrans.style.display = item.t ? 'block' : 'none';

    if (isCorrect) {
        ui.modalHeader.innerText = "Correct!";
        ui.modalHeader.style.color = "var(--correct-color)";
        ui.modalHelper.innerText = "You got it:";
    } else {
        ui.modalHeader.innerText = "Incorrect";
        ui.modalHeader.style.color = "var(--error-color)";
        ui.modalHelper.innerText = "The correct answer is:";
    }

    ui.modal.style.display = 'flex';
}

function closeModal() {
    ui.modal.style.display = 'none';
    if (isLearningCtx) {
        nextLearningItem();
    } else {
        nextQuestion();
    }
}

// Global Event Listeners
document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // If feedback modal is open
        if (ui.modal.style.display === 'flex') {
            closeModal();
            return;
        }

        // If level complete modal is open
        if (ui.levelModal.style.display === 'flex') {
            return; // Let user click buttons
        }

        // If practice start modal is open
        if (ui.practiceModal.style.display === 'flex') {
            startPracticePhase();
            return;
        }

        // Logic depending on active screen
        if (screens.learning.classList.contains('active')) {
            handleLearningAction();
        } else if (screens.quiz.classList.contains('active')) {
            checkAnswer();
        }
    }
});