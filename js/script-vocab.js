// --- DATABASE OF VOCABULARY ---
// r: Romaji
// e: English Meaning

const vocabData = [
    // --- PEOPLE & PRONOUNS ---
    { r: 'WATASHI', e: 'I' },
    { r: 'ANATA', e: 'You' },
    { r: 'KAISHAIN', e: 'Company Employee' },
    { r: 'SHAIN', e: 'Employee' },
    { r: 'SHACHOU', e: 'Company President' },
    { r: 'BUCHOU', e: 'Department Head' },
    { r: 'KACHOU', e: 'Section Head / Supervisor' },
    { r: 'OTOKO', e: 'Male' },
    { r: 'ONNA', e: 'Female' },
    { r: 'SENSEI', e: 'Teacher' },
    { r: 'GAKUSEI', e: 'Student' },
    { r: 'NIHONJIN', e: 'Japanese Person' },
    { r: 'AMERIKAJIN', e: 'American Person' },
    { r: 'FIRIPINJIN', e: 'Filipino Person' },
    { r: 'GAIKOKUJIN', e: 'Foreigner' },
    { r: 'MINNA / MINASAN', e: 'Everyone' },
    { r: 'TOMODACHI', e: 'Friend' },
    { r: 'HITO', e: 'Person (Informal)' },
    { r: 'KATA', e: 'Person (Formal)' },
    { r: 'KAZOKU', e: 'Family' },
    { r: 'RYOUSHIN', e: 'Parents' },
    { r: 'KODOMO / KO', e: 'Children / Child' },
    { r: 'KYOUDAI', e: 'Siblings' },
    { r: 'ENJINIA', e: 'Engineer' },
    { r: 'KENSHUUSEI', e: 'Trainee' },
    { r: '~SAN', e: 'Mr./Miss/Mrs. (Honorific)' },
    { r: '~SENSEI', e: 'Teacher/Doctor (Honorific)' },
    { r: '(O) NAMAE', e: 'Name' },
    { r: 'RYUUGAKUSEI', e: 'Student studying abroad' },
    { r: 'SEITO', e: 'Student' },
    { r: 'KURASUMEITO', e: 'Classmate' },
    { r: 'MENBA-', e: 'Member' },

    // --- PLACES ---
    { r: 'KAISHA', e: 'Company' },
    { r: 'OFISU', e: 'Office' },
    { r: 'GAKKOU', e: 'School' },
    { r: 'DAIGAKU', e: 'University' },
    { r: 'UCHI / IE', e: 'House / Home' },
    { r: 'HEYA', e: 'Room' },
    { r: 'CHUUSHAJOU', e: 'Parking Lot' },
    { r: 'OTEARAI', e: 'Washroom' },
    { r: 'TOIRE', e: 'Toilet' },
    { r: 'DAIDOKORO', e: 'Kitchen' },
    { r: 'KUNI', e: 'Country' },
    { r: 'BYOUIN', e: 'Hospital' },
    { r: 'KOUJOU', e: 'Factory' },
    { r: 'GINKOU', e: 'Bank' },
    { r: 'TAISHIKAN', e: 'Embassy' },
    { r: 'TOSHOKAN', e: 'Library' },
    { r: 'MO-RU', e: 'Mall' },
    { r: 'EIGAKAN', e: 'Movie House' },
    { r: 'KISSATEN / KAFE', e: 'Coffee Shop / Café' },
    { r: 'HONYA', e: 'Bookstore' },
    { r: 'RESUTORAN', e: 'Restaurant' },
    { r: 'DEPA-TO', e: 'Department Store' },
    { r: 'SU-PA-', e: 'Supermarket' },
    { r: 'BIRU', e: 'Building' },
    { r: 'TATEMONO', e: 'Building' },
    { r: 'KAIGISHITSU', e: 'Conference Room' },
    { r: 'KYOUSHITSU', e: 'Classroom' },
    { r: 'RYOU', e: 'Dormitory' },
    { r: 'APA-TO', e: 'Apartment' },
    { r: 'EKI', e: 'Train Station' },
    { r: 'TOKORO / BASHO', e: 'Place' },
    { r: 'KOUEN', e: 'Park' },
    { r: 'MICHI', e: 'Road' },
    { r: 'KUUKOU', e: 'Airport' },
    { r: 'MINATO', e: 'Harbor / Seaport' },
    { r: '(O)MISE', e: 'Store / Shop' },
    { r: 'KUSURIYA', e: 'Drugstore / Pharmacy' },
    { r: 'MACHI', e: 'Town' },
    { r: 'MURA', e: 'Village' },
    { r: 'INAKA', e: 'Province / Rural Area' },
    { r: 'OTERA', e: 'Temple' },
    { r: 'NIWA', e: 'Garden' },
    { r: 'BIJUTSUKAN', e: 'Museum' },
    { r: 'RIZO-TO', e: 'Resort' },
    { r: 'ONSEN', e: 'Hot Spring' },
    { r: 'RYOKAN', e: 'Japanese Style Inn' },
    { r: 'GAIKOKU', e: 'Foreign Country' },
    { r: 'KAIGAI', e: 'Overseas' },
    { r: 'IGIRISU', e: 'United Kingdom' },
    { r: 'FURANSU', e: 'France' },
    { r: 'SUPEIN', e: 'Spain' },
    { r: 'INDO', e: 'India' },
    { r: 'SHINGAPO-RU', e: 'Singapore' },
    { r: 'MARE-SHIA', e: 'Malaysia' },
    { r: 'INDONESHIA', e: 'Indonesia' },
    { r: 'TAI', e: 'Thailand' },

    // --- NATURE ---
    { r: 'YAMA', e: 'Mountain' },
    { r: 'FUJISAN', e: 'Mount Fuji' },
    { r: 'KAWA', e: 'River' },
    { r: 'IKE', e: 'Pond' },
    { r: 'UMI', e: 'Sea' },
    { r: 'KAIGAN', e: 'Seashore' },
    { r: 'KI', e: 'Tree' },

    // --- OBJECTS ---
    { r: 'KOMPYU-TA', e: 'Computer' },
    { r: 'PASOKON', e: 'Personal Computer' },
    { r: 'KAMERA', e: 'Camera' },
    { r: 'NO-TO', e: 'Notebook' },
    { r: 'SURIPPA', e: 'Slippers' },
    { r: 'KURUMA', e: 'Car' },
    { r: 'HON', e: 'Book' },
    { r: 'KOTOBA', e: 'Language / Word' },
    { r: 'INU', e: 'Dog' },
    { r: 'NEKO', e: 'Cat' },
    { r: 'KABAN', e: 'Bag' },
    { r: 'KEITAI (DENWA)', e: 'Cell Phone' },
    { r: 'DENWA', e: 'Telephone' },
    { r: 'KAGI', e: 'Key' },
    { r: 'MEGANE', e: 'Eyeglasses' },
    { r: 'TOKEI', e: 'Watch / Clock' },
    { r: 'TE-BURU', e: 'Table' },
    { r: 'TSUKUE', e: 'Desk' },
    { r: 'HIKIDASHI', e: 'Drawer' },
    { r: 'TEREBI', e: 'Television' },
    { r: 'ISU', e: 'Chair' },
    { r: 'BEDDO', e: 'Bed' },
    { r: 'ENPITSU', e: 'Pencil' },
    { r: 'BO-RUPEN', e: 'Ballpen' },
    { r: 'PEN', e: 'Pen' },
    { r: 'TEGAMI', e: 'Letter' },
    { r: 'KIPPU', e: 'Ticket' },
    { r: 'KITTE', e: 'Postal Stamp' },
    { r: 'KYOUKASHO', e: 'Textbook' },
    { r: 'KASA', e: 'Umbrella' },
    { r: 'BIN', e: 'Bottle' },
    { r: 'OKANE', e: 'Money' },
    { r: 'EN', e: 'Yen' },
    { r: 'PESO', e: 'Peso' },
    { r: 'DORU', e: 'Dollar' },
    { r: 'BANGOU', e: 'Number' },
    { r: 'KEITAI BANGOU', e: 'Cell Phone Number' },
    { r: 'DENWA BANGOU', e: 'Phone Number' },
    { r: 'ZERO / REI / MARU', e: 'Zero / Circle' },
    { r: 'KANJI', e: 'Chinese Character' },
    { r: 'JI', e: 'Character / Letter' },
    { r: 'MEMO', e: 'Memo' },
    { r: 'SHASHIN', e: 'Picture' },
    { r: 'KUSURI', e: 'Medicine' },
    { r: 'PUREZENTO', e: 'Present / Gift' },
    { r: 'ME-RU', e: 'Email' },
    { r: 'REPO-TO', e: 'Report' },
    { r: 'KUREJITTO KA-DO', e: 'Credit Card' },
    { r: 'EIGA', e: 'Movie' },
    { r: 'SHINBUN', e: 'Newspaper' },
    { r: 'ZASSHI', e: 'Magazine' },
    { r: 'SHOUSETSU', e: 'Novel' },
    { r: 'YOMIMONO', e: 'Reading Materials' },
    { r: 'SUPU-N', e: 'Spoon' },
    { r: 'FO-KU', e: 'Fork' },
    { r: 'HASHI', e: 'Chopsticks' },
    { r: 'UTA', e: 'Song' },
    { r: 'ONGAKU', e: 'Music' },
    { r: 'NYU-SU', e: 'News' },
    { r: 'TABAKO', e: 'Cigarette' },

    // --- FOOD & DRINK ---
    { r: 'TABEMONO', e: 'Food' },
    { r: 'NOMIMONO', e: 'Drinks' },
    { r: 'ASAGOHAN', e: 'Breakfast' },
    { r: 'HIRUGOHAN', e: 'Lunch' },
    { r: 'BANGOHAN', e: 'Dinner' },
    { r: 'GOHAN', e: 'Meal (Rice)' },
    { r: 'RA-MEN', e: 'Ramen' },
    { r: 'PAN', e: 'Bread' },
    { r: 'MIKAN', e: 'Orange' },
    { r: 'RINGO', e: 'Apple' },
    { r: 'RYOURI', e: 'Dish / Cooking' },
    { r: 'MIZU', e: 'Water' },
    { r: 'OCHA', e: 'Tea' },
    { r: 'KOUCHA', e: 'Black Tea' },
    { r: 'GYUUNYUU', e: 'Milk' },
    { r: 'KO-HI-', e: 'Coffee' },
    { r: 'KO-RA', e: 'Cola' },
    { r: 'JU-SU', e: 'Juice' },
    { r: 'OSAKE', e: 'Liquor' },
    { r: 'BI-RU', e: 'Beer' },
    { r: 'WAIN', e: 'Wine' },
    { r: 'SHOKUDOU', e: 'Cafeteria' },

    // --- TRANSPORT ---
    { r: 'NORIMONO', e: 'Vehicles' },
    { r: 'O-TOBAI / BAIKU', e: 'Motorcycle' },
    { r: 'JITENSHA', e: 'Bicycle' },
    { r: 'JIDOUSHA / KURUMA', e: 'Car' },
    { r: 'TAKUSHI-', e: 'Taxi' },
    { r: 'BASU', e: 'Bus' },
    { r: 'DENSHA', e: 'Train' },
    { r: 'CHIKATETSU', e: 'Subway' },
    { r: 'SHINKANSEN', e: 'Shinkansen' },
    { r: 'FUNE', e: 'Ship / Boat' },
    { r: 'HIKOUKI', e: 'Airplane' },
    { r: 'ARUITE', e: 'On foot / By walking' },
    { r: 'OUFUKU', e: 'Roundtrip' },
    { r: 'KATAMICHI', e: 'One way' },

    // --- EVENTS & ABSTRACT ---
    { r: 'JUGYOU / KURASU', e: 'Class' },
    { r: 'KAIGI / MI-TINGU', e: 'Meeting' },
    { r: 'SHIGOTO', e: 'Work' },
    { r: 'SHIMEKIRI', e: 'Deadline' },
    { r: 'YASUMI', e: 'Vacation / Holiday' },
    { r: 'KYUUKEI', e: 'Break / Rest' },
    { r: 'KURISUMASU', e: 'Christmas' },
    { r: 'SUPO-TSU TAIKAI', e: 'Sports Festival' },
    { r: '(O)TANJOUBI', e: 'Birthday' },
    { r: 'YOTEI', e: 'Schedule' },
    { r: 'PUROJEKUTO', e: 'Project' },
    { r: 'PA-TI-', e: 'Party' },
    { r: 'SHIAI', e: 'Game / Match' },
    { r: 'SHIKEN / TESUTO', e: 'Examination / Test' },
    { r: 'NEDAN', e: 'Price' },
    { r: 'YACHIN', e: 'Rent' },
    { r: 'ZENBU', e: 'All / Total' },
    { r: '(O)IKURA', e: 'How much?' },
    { r: 'GURAI', e: 'About~' },
    { r: 'HATACHI', e: '20 years old' },
    { r: '(O)IKUTSU', e: 'How old? / How many?' },
    { r: 'PE-JI', e: 'Page' },
    { r: 'GURU-PU', e: 'Group' },
    { r: 'SHUKUDAI', e: 'Homework' },
    { r: 'MONDAI', e: 'Problem' },
    { r: 'TORE-NINGU', e: 'Training' },
    { r: 'ZEMI', e: 'Seminar' },
    { r: 'ARUBAITO', e: 'Part-time job' },
    { r: 'ZANGYOU', e: 'Overtime' },
    { r: 'KAIWA', e: 'Conversation' },
    { r: 'BUNPOU', e: 'Grammar' },
    { r: 'BENKYOU', e: 'Study' },
    { r: 'RENSHUU', e: 'Practice' },
    { r: 'KOTAE', e: 'Answer' },
    { r: 'RYOKOU', e: 'Travel / Trip' },
    { r: 'KARAOKE', e: 'Karaoke' },

    // --- TIME & SEASONS ---
    { r: 'KISETSU', e: 'Season' },
    { r: 'HARU', e: 'Spring' },
    { r: 'NATSU', e: 'Summer' },
    { r: 'AKI', e: 'Autumn / Fall' },
    { r: 'FUYU', e: 'Winter' },
    { r: 'TSUYU', e: 'Rainy Season' },
    { r: 'NATSUYASUMI', e: 'Summer Vacation' },
    { r: 'SHUUMATSU', e: 'Weekend' },
    { r: 'HEIJITSU', e: 'Weekday' },
    { r: 'GOZEN', e: 'Morning (a.m.)' },
    { r: 'GOGO', e: 'Afternoon (p.m.)' },
    { r: 'JIKAN', e: 'Time' },
    { r: 'HITOTSUKI', e: 'One month' },
    { r: 'ITSU', e: 'When' },
    { r: 'IMA', e: 'Now' },
    { r: 'MAZU / HAJIMENI', e: 'First' },
    { r: 'TSUGI', e: 'Next' },
    { r: 'ASA', e: 'Morning' },
    { r: 'HIRU', e: 'Noon / Daytime' },
    { r: 'YORU / BAN', e: 'Night' },

    // --- ADJECTIVES ---
    { r: 'HAYAI', e: 'Early / Fast' },
    { r: 'OSOI', e: 'Late / Slow' },
    { r: 'KIBISHII', e: 'Strict' },
    { r: 'ABUNAI', e: 'Dangerous' },
    { r: 'NEMUI', e: 'Sleepy' },
    { r: 'MAJIME (NA)', e: 'Serious / Industrious' },
    { r: 'GENKI (NA)', e: 'Fine / Healthy' },
    { r: 'ITSUMO', e: 'Always' },
    { r: 'TOKIDOKI', e: 'Sometimes' },
    { r: 'ZENZEN (~NAI)', e: 'Never / Not at all' },
    { r: 'CHOTTO', e: 'A little' },
    { r: 'TOTEMO / TAIHEN', e: 'Very' },
    { r: 'AMARI (~NAI)', e: 'Not very' },

    // --- VERBS ---
    { r: 'OKIMASU', e: 'Wake up' },
    { r: 'NEMASU', e: 'Sleep' },
    { r: 'YASUMIMASU', e: 'Rest / Take a break' },
    { r: 'HAJIMARIMASU', e: 'Start' },
    { r: 'OWARIMASU', e: 'Finish' },
    { r: 'HATARAKIMASU', e: 'Work' },
    { r: 'SHIGOTO SHIMASU', e: 'Work' },
    { r: 'ZANGYOU SHIMASU', e: 'Work overtime' },
    { r: 'BENKYOU SHIMASU', e: 'Study' },
    { r: 'KYUUKEI SHIMASU', e: 'Take a break' },
    { r: 'UMAREMASU', e: 'Be born' },
    { r: 'IKIMASU', e: 'Go' },
    { r: 'KIMASU', e: 'Come' },
    { r: 'KAERIMASU', e: 'Go home / Return' },
    { r: 'MODORIMASU', e: 'Return / Go back' },
    { r: 'KAIMONO SHIMASU', e: 'Shop' },
    { r: 'ASOBIMASU', e: 'Enjoy / Play' },
    { r: 'OYOGIMASU', e: 'Swim' },
    { r: 'TABEMASU', e: 'Eat' },
    { r: 'NOMIMASU', e: 'Drink' },
    { r: 'YOMIMASU', e: 'Read' },
    { r: 'KAKIMASU', e: 'Write' },
    { r: 'KIKIMASU', e: 'Listen / Ask' },
    { r: 'HANASHIMASU', e: 'Speak / Talk' },
    { r: 'MIMASU', e: 'Watch / Look / See' },
    { r: 'KAIMASU', e: 'Buy' },
    { r: 'URIMASU', e: 'Sell' },
    { r: 'OSHIEMASU', e: 'Teach / Tell' },
    { r: 'UTAIMASU', e: 'Sing' },
    { r: 'SUIMASU', e: 'Smoke' },
    { r: '(DENWA O) KAKEMASU', e: 'Call (a phone)' }
];

// --- APP STATE ---
let currentReviewPage = 1;
const reviewItemsPerPage = 50;
let testQueue = [];
let testIndex = 0;
let testScore = 0;
let testMode = 'multiple'; // 'multiple' or 'typing'

// --- DOM ELEMENTS ---
const screens = {
    menu: document.getElementById('menu-screen'),
    review: document.getElementById('review-screen'),
    test: document.getElementById('test-screen'),
    result: document.getElementById('result-screen')
};

const ui = {
    reviewList: document.getElementById('review-list'),
    pageIndicator: document.getElementById('review-page-indicator'),
    prevBtn: document.getElementById('prev-page-btn'),
    nextBtn: document.getElementById('next-page-btn'),

    questionText: document.getElementById('question-text'),
    choicesContainer: document.getElementById('choices-container'),
    typingContainer: document.getElementById('typing-container'),
    answerInput: document.getElementById('answer-input'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    finalScore: document.getElementById('final-score'),

    modal: document.getElementById('feedback-modal'),
    modalHeader: document.getElementById('modal-header-text'),
    modalWord: document.getElementById('modal-word-display'),
    modalHelper: document.getElementById('modal-helper-text'),
    modalAnswer: document.getElementById('modal-correct-answer')
};

// --- NAVIGATION ---
function switchScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
}

// --- REVIEW FUNCTIONALITY ---
function showReview(page) {
    currentReviewPage = page;
    const startIndex = (page - 1) * reviewItemsPerPage;
    const endIndex = startIndex + reviewItemsPerPage;
    const itemsToShow = vocabData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(vocabData.length / reviewItemsPerPage);

    ui.reviewList.innerHTML = '';

    itemsToShow.forEach(item => {
        const div = document.createElement('div');
        div.className = 'review-item';
        div.innerHTML = `
            <span class="review-romaji">${item.r}</span>
            <span class="review-english">${item.e}</span>
        `;
        ui.reviewList.appendChild(div);
    });

    ui.pageIndicator.innerText = `Page ${currentReviewPage} of ${totalPages}`;

    // Update buttons
    ui.prevBtn.disabled = currentReviewPage === 1;
    ui.prevBtn.style.opacity = currentReviewPage === 1 ? '0.5' : '1';

    ui.nextBtn.disabled = currentReviewPage === totalPages;
    ui.nextBtn.style.opacity = currentReviewPage === totalPages ? '0.5' : '1';

    switchScreen('review');
    // Scroll to top of list
    document.querySelector('.app-container').scrollIntoView({ behavior: 'smooth' });
}

function changeReviewPage(delta) {
    const totalPages = Math.ceil(vocabData.length / reviewItemsPerPage);
    const newPage = currentReviewPage + delta;
    if (newPage >= 1 && newPage <= totalPages) {
        showReview(newPage);
    }
}

// --- TEST FUNCTIONALITY ---
function startTest(mode) {
    testMode = mode;
    testScore = 0;
    testIndex = 0;

    // Shuffle full data and pick 50 items
    const shuffled = [...vocabData].sort(() => 0.5 - Math.random());
    testQueue = shuffled.slice(0, 50);

    // Setup UI
    if (testMode === 'multiple') {
        ui.choicesContainer.style.display = 'grid';
        ui.typingContainer.style.display = 'none';
    } else {
        ui.choicesContainer.style.display = 'none';
        ui.typingContainer.style.display = 'block';
    }

    switchScreen('test');
    renderQuestion();
}

function renderQuestion() {
    const currentItem = testQueue[testIndex];
    ui.questionText.innerText = currentItem.r;

    // Update Progress
    ui.progressText.innerText = `${testIndex + 1} / 50`;
    ui.progressFill.style.width = `${((testIndex) / 50) * 100}%`;

    // Reset Inputs
    ui.answerInput.value = '';

    if (testMode === 'multiple') {
        renderMultipleChoice(currentItem);
    } else {
        ui.answerInput.focus();
    }
}

function renderMultipleChoice(currentItem) {
    ui.choicesContainer.innerHTML = '';

    // 1 Correct Answer
    const correctAns = currentItem.e;

    // 3 Random Distractors
    const otherWords = vocabData.filter(w => w.r !== currentItem.r);
    const shuffledOthers = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);
    const choices = [...shuffledOthers.map(w => w.e), correctAns];

    // Shuffle choices
    choices.sort(() => 0.5 - Math.random());

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = choice;
        btn.onclick = () => checkAnswer(choice, correctAns);
        ui.choicesContainer.appendChild(btn);
    });
}

// --- CHECKING ANSWERS ---

// For Multiple Choice
function checkAnswer(selected, correct) {
    const currentItem = testQueue[testIndex];
    if (selected === correct) {
        testScore++;
        showFeedback(true, currentItem);
    } else {
        showFeedback(false, currentItem);
    }
}

// For Typing
function checkTypingAnswer() {
    const input = ui.answerInput.value.trim().toLowerCase();
    const currentItem = testQueue[testIndex];

    // Split correct answer by '/' to handle multiple valid answers (e.g. "I / Me")
    const validAnswers = currentItem.e.toLowerCase().split('/').map(s => s.trim());

    // Exact match check
    const isCorrect = validAnswers.some(ans => ans === input);

    // Loose match: if input is contained within answer (e.g. "Employee" for "Company Employee")
    // Only if input length > 3 to avoid matching simple letters
    const isLooseCorrect = currentItem.e.toLowerCase().includes(input) && input.length > 3;

    if (isCorrect || isLooseCorrect) {
        testScore++;
        showFeedback(true, currentItem);
    } else {
        showFeedback(false, currentItem);
    }
}

// --- FEEDBACK MODAL ---
function showFeedback(isCorrect, item) {
    ui.modalWord.innerText = item.r;
    ui.modalAnswer.innerText = item.e;

    if (isCorrect) {
        ui.modalHeader.innerText = "Correct!";
        ui.modalHeader.style.color = "var(--correct-color)";
        ui.modalHelper.innerText = "Meaning:";
    } else {
        ui.modalHeader.innerText = "Incorrect";
        ui.modalHeader.style.color = "var(--error-color)";
        ui.modalHelper.innerText = "The correct answer is:";
    }

    ui.modal.style.display = 'flex';
}

function closeModal() {
    ui.modal.style.display = 'none';
    testIndex++;
    if (testIndex < 50) {
        renderQuestion();
    } else {
        endTest();
    }
}

function endTest() {
    ui.finalScore.innerText = `${testScore} / 50`;
    switchScreen('result');
}

// Enter Key Support for Typing Test
ui.answerInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (ui.modal.style.display === 'flex') {
            closeModal();
        } else {
            checkTypingAnswer();
        }
    }
});