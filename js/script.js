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

// 3. Basic Words (No Dakuten/Handakuten) - Approx 50
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
    { q: 'おなか', a: 'onaka', t: 'Stomach' }, { q: 'せなか', a: 'senaka', t: 'Back' }, { q: 'あたま', a: 'atama', t: 'Head' }
];

// 4. Advanced Words (Contains Dakuten/Handakuten) - Approx 50
const advancedWords = [
    { q: 'がくせい', a: 'gakusei', t: 'Student' }, { q: 'だいがく', a: 'daigaku', t: 'University' },
    { q: 'げんき', a: 'genki', t: 'Healthy/Lively' }, { q: 'ともだち', a: 'tomodachi', t: 'Friend' },
    { q: 'かばん', a: 'kaban', t: 'Bag' }, { q: 'えんぴつ', a: 'enpitsu', t: 'Pencil' },
    { q: 'てがみ', a: 'tegami', t: 'Letter' }, { q: 'でんわ', a: 'denwa', t: 'Telephone' },
    { q: 'まど', a: 'mado', t: 'Window' }, { q: 'ドア', a: 'doa', t: 'Door' }, // Katakana often used but good for phonetic
    { q: 'みず', a: 'mizu', t: 'Water' }, { q: 'ごはん', a: 'gohan', t: 'Rice/Meal' },
    { q: 'たまご', a: 'tamago', t: 'Egg' }, { q: 'りんご', a: 'ringo', t: 'Apple' },
    { q: 'みかん', a: 'mikan', t: 'Tangerine' }, { q: 'ぶどう', a: 'budou', t: 'Grapes' },
    { q: 'いちご', a: 'ichigo', t: 'Strawberry' }, { q: 'やさい', a: 'yasai', t: 'Vegetables' },
    { q: 'くだもの', a: 'kudamono', t: 'Fruit' }, { q: 'おちゃ', a: 'ocha', t: 'Tea' },
    { q: 'ぎゅうにゅう', a: 'gyuunyuu', t: 'Milk' }, { q: 'しんぶん', a: 'shinbun', t: 'Newspaper' },
    { q: 'めがね', a: 'megane', t: 'Glasses' }, { q: 'ぼうし', a: 'boushi', t: 'Hat' },
    { q: 'ズボン', a: 'zubon', t: 'Pants' }, { q: 'かぜ', a: 'kaze', t: 'Wind/Cold' },
    { q: 'かぞく', a: 'kazoku', t: 'Family' }, { q: 'こども', a: 'kodomo', t: 'Child' },
    { q: 'おとこ', a: 'otoko', t: 'Man' }, { q: 'おんな', a: 'onna', t: 'Woman' },
    { q: 'ぎんこう', a: 'ginkou', t: 'Bank' }, { q: 'びょういん', a: 'byouin', t: 'Hospital' },
    { q: 'ちず', a: 'chizu', t: 'Map' }, { q: 'きっぷ', a: 'kippu', t: 'Ticket' },
    { q: 'じかん', a: 'jikan', t: 'Time' }, { q: 'えいが', a: 'eiga', t: 'Movie' },
    { q: 'おんがく', a: 'ongaku', t: 'Music' }, { q: 'ざっし', a: 'zasshi', t: 'Magazine' },
    { q: 'スポーツ', a: 'supootsu', t: 'Sports' }, { q: 'デート', a: 'deeto', t: 'Date' },
    { q: 'さんぽ', a: 'sanpo', t: 'Walk' }, { q: 'しごと', a: 'shigoto', t: 'Job/Work' },
    { q: 'べんきょう', a: 'benkyou', t: 'Study' }, { q: 'だいじょうぶ', a: 'daijoubu', t: 'Okay' },
    { q: 'ありがとう', a: 'arigatou', t: 'Thank You' }, { q: 'ごめんなさい', a: 'gomennasai', t: 'Sorry' },
    { q: 'こんばんは', a: 'konbanwa', t: 'Good Evening' }
];


// --- VARIABLES ---
let currentQueue = [];
let currentIndex = 0;
let score = 0;
const totalQuestions = 20;

// --- DOM ELEMENTS ---
const screens = {
    menu: document.getElementById('menu-screen'),
    review: document.getElementById('review-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const ui = {
    question: document.getElementById('question-text'),
    progressText: document.getElementById('progress-text'),
    progressFill: document.getElementById('progress-fill'),
    input: document.getElementById('answer-input'),
    score: document.getElementById('final-score'),
    modal: document.getElementById('feedback-modal'),
    modalAnswer: document.getElementById('modal-correct-answer'),
    modalTrans: document.getElementById('modal-translation'),
    reviewGrid: document.getElementById('review-grid')
};

// --- FUNCTIONS ---

// 1. Show Review Screen (Populates with Separator)
function showReview() {
    ui.reviewGrid.innerHTML = '';

    // Function to add a header
    const addHeader = (text) => {
        const h = document.createElement('div');
        h.className = 'review-section-header';
        h.innerText = text;
        ui.reviewGrid.appendChild(h);
    };

    // Helper to add cards
    const addCards = (list) => {
        list.forEach(item => {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `<div class="char-jp">${item.q}</div><div class="char-en">${item.a}</div>`;
            ui.reviewGrid.appendChild(card);
        });
    };

    // Render Basic
    addHeader("Basic Hiragana");
    addCards(basicChars);

    // Render Dakuten
    addHeader("Dakuten & Handakuten");
    addCards(dakuChars);

    switchScreen('review');
}

// 2. Start the Quiz
// Type: 'chars' or 'words'
// Stage: 1 (Basic) or 2 (Mixed)
function startQuiz(type, stage) {
    let pool = [];

    if (type === 'chars') {
        if (stage === 1) {
            pool = [...basicChars];
        } else {
            pool = [...basicChars, ...dakuChars];
        }
    } else if (type === 'words') {
        if (stage === 1) {
            pool = [...basicWords];
        } else {
            pool = [...basicWords, ...advancedWords];
        }
    }

    // Shuffle (Fisher-Yates)
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Slice to max questions
    // Even if pool has 100 items, we only take 20.
    const limit = Math.min(pool.length, totalQuestions);
    currentQueue = pool.slice(0, limit);
    currentIndex = 0;
    score = 0;

    switchScreen('quiz');
    renderQuestion();
}

// 3. Render Current Question
function renderQuestion() {
    const item = currentQueue[currentIndex];

    ui.question.innerText = item.q;
    ui.progressText.innerText = `${currentIndex + 1} / ${currentQueue.length}`;

    const pct = ((currentIndex) / currentQueue.length) * 100;
    ui.progressFill.style.width = `${pct}%`;

    ui.input.value = '';
    ui.input.focus();
}

// 4. Check Answer
function checkAnswer() {
    const userAns = ui.input.value.trim().toLowerCase();
    const correctAns = currentQueue[currentIndex].a.toLowerCase();
    const currentItem = currentQueue[currentIndex];

    // Simple normalization to handle "ohayou" vs "ohayo" if desired, 
    // but for now strict matching logic based on data.
    if (userAns === correctAns) {
        score++;
        nextQuestion();
    } else {
        showModal(currentItem);
    }
}

// 5. Show Wrong Answer Modal
function showModal(item) {
    ui.modalAnswer.innerText = item.a;

    if (item.t) {
        ui.modalTrans.innerText = `(${item.t})`;
        ui.modalTrans.style.display = 'block';
    } else {
        ui.modalTrans.style.display = 'none';
    }

    ui.modal.style.display = 'flex';
}

// 6. Close Modal
function closeModal() {
    ui.modal.style.display = 'none';
    nextQuestion();
}

// 7. Next Question or End
function nextQuestion() {
    currentIndex++;
    if (currentIndex < currentQueue.length) {
        renderQuestion();
    } else {
        endQuiz();
    }
}

// 8. End Quiz
function endQuiz() {
    ui.score.innerText = `${score} / ${currentQueue.length}`;
    switchScreen('result');
}

// Helper: Switch Screens
function switchScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
}

// Event Listener: Enter key
ui.input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (ui.modal.style.display === 'flex') {
            closeModal();
        } else {
            checkAnswer();
        }
    }
});