// --- DATABASE ---

// Set 1: Single Characters
const charData = [
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

// Set 2: Words (Includes Translation)
const wordData = [
    { q: 'いえ', a: 'ie', t: 'House' },
    { q: 'あお', a: 'ao', t: 'Blue' },
    { q: 'あか', a: 'aka', t: 'Red' },
    { q: 'えき', a: 'eki', t: 'Station' },
    { q: 'うえ', a: 'ue', t: 'Up / Above' },
    { q: 'した', a: 'shita', t: 'Down / Below' },
    { q: 'ねこ', a: 'neko', t: 'Cat' },
    { q: 'いぬ', a: 'inu', t: 'Dog' },
    { q: 'とり', a: 'tori', t: 'Bird' },
    { q: 'みみ', a: 'mimi', t: 'Ear' },
    { q: 'め', a: 'me', t: 'Eye' },
    { q: 'て', a: 'te', t: 'Hand' },
    { q: 'すし', a: 'sushi', t: 'Sushi' },
    { q: 'さけ', a: 'sake', t: 'Alcohol / Salmon' },
    { q: 'やま', a: 'yama', t: 'Mountain' },
    { q: 'かわ', a: 'kawa', t: 'River' },
    { q: 'ひ', a: 'hi', t: 'Fire / Sun' },
    { q: 'つき', a: 'tsuki', t: 'Moon' },
    { q: 'はな', a: 'hana', t: 'Flower' },
    { q: 'ゆき', a: 'yuki', t: 'Snow' },
    { q: 'あめ', a: 'ame', t: 'Rain / Candy' },
    { q: 'くも', a: 'kumo', t: 'Cloud / Spider' },
    { q: 'せんせい', a: 'sensei', t: 'Teacher' },
    { q: 'がくせい', a: 'gakusei', t: 'Student' },
    { q: 'おはよう', a: 'ohayou', t: 'Good Morning' }
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

// 1. Show Review Screen
function showReview() {
    // Clear existing content
    ui.reviewGrid.innerHTML = '';

    // Generate grid items dynamically from charData
    charData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="char-jp">${item.q}</div>
            <div class="char-en">${item.a}</div>
        `;
        ui.reviewGrid.appendChild(card);
    });

    switchScreen('review');
}

// 2. Start the Quiz
function startQuiz(mode) {
    let pool = [];

    // Combine data based on selection
    if (mode === 'chars') {
        pool = [...charData];
    } else if (mode === 'words') {
        pool = [...wordData];
    } else {
        pool = [...charData, ...wordData];
    }

    // Shuffle (Fisher-Yates Algorithm)
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Take top 20 or less if pool is smaller
    const limit = Math.min(pool.length, totalQuestions);
    currentQueue = pool.slice(0, limit);
    currentIndex = 0;
    score = 0;

    // Switch Screens
    switchScreen('quiz');
    renderQuestion();
}

// 3. Render Current Question
function renderQuestion() {
    const item = currentQueue[currentIndex];

    ui.question.innerText = item.q;
    ui.progressText.innerText = `${currentIndex + 1} / ${currentQueue.length}`;

    // Update progress bar width
    const pct = ((currentIndex) / currentQueue.length) * 100;
    ui.progressFill.style.width = `${pct}%`;

    // Clear and focus input
    ui.input.value = '';
    ui.input.focus();
}

// 4. Check Answer
function checkAnswer() {
    const userAns = ui.input.value.trim().toLowerCase();
    const correctAns = currentQueue[currentIndex].a.toLowerCase();
    const currentItem = currentQueue[currentIndex];

    if (userAns === correctAns) {
        // Correct
        score++;
        nextQuestion();
    } else {
        // Incorrect - Show Modal
        showModal(currentItem);
    }
}

// 5. Show Wrong Answer Modal
function showModal(item) {
    ui.modalAnswer.innerText = item.a;

    // If it has a translation (Set 2 or Mixed), show it
    if (item.t) {
        ui.modalTrans.innerText = `(${item.t})`;
        ui.modalTrans.style.display = 'block';
    } else {
        ui.modalTrans.style.display = 'none';
    }

    ui.modal.style.display = 'flex';
}

// 6. Close Modal (Triggered by button on modal)
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

// Event Listener: Allow "Enter" key to submit
ui.input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // If modal is open, Enter closes modal. If closed, Enter checks answer.
        if (ui.modal.style.display === 'flex') {
            closeModal();
        } else {
            checkAnswer();
        }
    }
});