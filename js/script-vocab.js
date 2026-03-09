// --- DATABASE OF VOCABULARY ---
// r: Romaji
// e: English Meaning

// --- DATABASE ---
const vocabData = [
    // --- PEOPLE & PRONOUNS ---
    { r: 'Watashi', e: 'I / Me' },
    { r: 'Anata', e: 'You' },
    { r: 'Kaishain', e: 'Company Employee' },
    { r: 'Shain', e: 'Employee' },
    { r: 'Shachou', e: 'Company President' },
    { r: 'Buchou', e: 'Department Head' },
    { r: 'Kachou', e: 'Section Head / Supervisor' },
    { r: 'Otoko', e: 'Male / Man' },
    { r: 'Onna', e: 'Female / Woman' },
    { r: 'Sensei', e: 'Teacher' },
    { r: 'Gakusei', e: 'Student' },
    { r: 'Nihonjin', e: 'Japanese Person' },
    { r: 'Amerikajin', e: 'American Person' },
    { r: 'Firipinjin', e: 'Filipino Person' },
    { r: 'Gaikokujin', e: 'Foreigner' },
    { r: 'Minna', e: 'Everyone' },
    { r: 'Minasan', e: 'Everyone (Polite)' },
    { r: 'Tomodachi', e: 'Friend' },
    { r: 'Hito', e: 'Person' },
    { r: 'Kata', e: 'Person (Formal)' },
    { r: 'Kazoku', e: 'Family' },
    { r: 'Ryoushin', e: 'Parents' },
    { r: 'Kodomo', e: 'Children' },
    { r: 'Ko', e: 'Child' },
    { r: 'Kyoudai', e: 'Siblings' },
    { r: 'Enjinia', e: 'Engineer' },
    { r: 'Kenshuusei', e: 'Trainee' },
    { r: 'San', e: 'Mr. / Miss / Mrs.' },
    { r: 'Namae', e: 'Name' },
    { r: 'Ryuugakusei', e: 'Student studying abroad' },
    { r: 'Seito', e: 'Student' },
    { r: 'Kurasumeito', e: 'Classmate' },
    { r: 'Menbaa', e: 'Member' },
    { r: 'Shinnyuushain', e: 'New Employee' },
    { r: 'Isha', e: 'Doctor' },

    // --- PLACES ---
    { r: 'Kaisha', e: 'Company' },
    { r: 'Ofisu', e: 'Office' },
    { r: 'Gakkou', e: 'School' },
    { r: 'Daigaku', e: 'University' },
    { r: 'Uchi', e: 'Home' },
    { r: 'Ie', e: 'House' },
    { r: 'Heya', e: 'Room' },
    { r: 'Chuushajou', e: 'Parking Lot' },
    { r: 'Otearai', e: 'Washroom / Toilet' },
    { r: 'Kuni', e: 'Country' },
    { r: 'Byouin', e: 'Hospital' },
    { r: 'Koujou', e: 'Factory' },
    { r: 'Ginkou', e: 'Bank' },
    { r: 'Taishikan', e: 'Embassy' },
    { r: 'Toshokan', e: 'Library' },
    { r: 'Mooru', e: 'Mall' },
    { r: 'Eigakan', e: 'Movie Theater' },
    { r: 'Kissaten', e: 'Coffee Shop / Cafe' },
    { r: 'Kafe', e: 'Cafe' },
    { r: 'Honya', e: 'Bookstore' },
    { r: 'Resutoran', e: 'Restaurant' },
    { r: 'Depaato', e: 'Department Store' },
    { r: 'Suupaa', e: 'Supermarket' },
    { r: 'Biru', e: 'Building' },
    { r: 'Kaigishitsu', e: 'Conference Room' },
    { r: 'Kyoushitsu', e: 'Classroom' },
    { r: 'Ryou', e: 'Dormitory' },
    { r: 'Apaato', e: 'Apartment' },
    { r: 'Eki', e: 'Train Station' },
    { r: 'Tokoro', e: 'Place' },
    { r: 'Basho', e: 'Place' },
    { r: 'Tatemono', e: 'Building' },
    { r: 'Kouen', e: 'Park' },
    { r: 'Michi', e: 'Road' },
    { r: 'Kuukou', e: 'Airport' },
    { r: 'Minato', e: 'Harbor / Seaport' },
    { r: 'Omise', e: 'Store / Shop' },
    { r: 'Kusuriya', e: 'Drugstore / Pharmacy' },
    { r: 'Toire', e: 'Toilet' },
    { r: 'Daidokoro', e: 'Kitchen' },
    { r: 'Shokudou', e: 'Cafeteria' },
    { r: 'Yama', e: 'Mountain' },
    { r: 'Kawa', e: 'River' },
    { r: 'Ike', e: 'Pond' },
    { r: 'Umi', e: 'Sea' },
    { r: 'Kaigan', e: 'Seashore' },
    { r: 'Machi', e: 'Town' },
    { r: 'Mura', e: 'Village' },
    { r: 'Inaka', e: 'Province / Rural Area' },
    { r: 'Otera', e: 'Temple' },
    { r: 'Niwa', e: 'Garden' },
    { r: 'Bijutsukan', e: 'Museum' },
    { r: 'Rizooto', e: 'Resort' },
    { r: 'Onsen', e: 'Hot Spring' },
    { r: 'Ryokan', e: 'Japanese Style Inn' },

    // --- TRANSPORTATION ---
    { r: 'Norimono', e: 'Vehicles' },
    { r: 'Ootobai', e: 'Motorcycle' },
    { r: 'Baiku', e: 'Motorcycle' },
    { r: 'Jitensha', e: 'Bicycle' },
    { r: 'Jidousha', e: 'Car' },
    { r: 'Takushii', e: 'Taxi' },
    { r: 'Basu', e: 'Bus' },
    { r: 'Densha', e: 'Train' },
    { r: 'Chikatetsu', e: 'Subway' },
    { r: 'Shinkansen', e: 'Bullet Train' },
    { r: 'Fune', e: 'Ship / Boat' },
    { r: 'Hikouki', e: 'Airplane' },
    { r: 'Aruite', e: 'On foot / Walking' },

    // --- OBJECTS & ITEMS ---
    { r: 'Konpyuuta', e: 'Computer' },
    { r: 'Pasokon', e: 'Personal Computer' },
    { r: 'Kamera', e: 'Camera' },
    { r: 'Nooto', e: 'Notebook' },
    { r: 'Surippa', e: 'Slippers' },
    { r: 'Kuruma', e: 'Car' },
    { r: 'Hon', e: 'Book' },
    { r: 'Kotoba', e: 'Language / Word' },
    { r: 'Inu', e: 'Dog' },
    { r: 'Neko', e: 'Cat' },
    { r: 'Kaban', e: 'Bag' },
    { r: 'Keitai', e: 'Cell Phone' },
    { r: 'Denwa', e: 'Telephone' },
    { r: 'Kagi', e: 'Key' },
    { r: 'Megane', e: 'Eyeglasses' },
    { r: 'Tokei', e: 'Watch / Clock' },
    { r: 'Teeburu', e: 'Table' },
    { r: 'Tsukue', e: 'Desk' },
    { r: 'Hikidashi', e: 'Drawer' },
    { r: 'Terebi', e: 'Television' },
    { r: 'Isu', e: 'Chair' },
    { r: 'Ki', e: 'Tree' },
    { r: 'Enpitsu', e: 'Pencil' },
    { r: 'Boorupen', e: 'Ballpen' },
    { r: 'Pen', e: 'Pen' },
    { r: 'Tegami', e: 'Letter' },
    { r: 'Kippu', e: 'Ticket' },
    { r: 'Kitte', e: 'Stamp' },
    { r: 'Kyoukasho', e: 'Textbook' },
    { r: 'Kasa', e: 'Umbrella' },
    { r: 'Bin', e: 'Bottle' },
    { r: 'Okane', e: 'Money' },
    { r: 'En', e: 'Yen' },
    { r: 'Peso', e: 'Peso' },
    { r: 'Doru', e: 'Dollar' },
    { r: 'Bangou', e: 'Number' },
    { r: 'Zero', e: 'Zero' },
    { r: 'Rei', e: 'Example / Zero' },
    { r: 'Maru', e: 'Circle' },
    { r: 'Beddo', e: 'Bed' },
    { r: 'Shashin', e: 'Picture' },
    { r: 'Kusuri', e: 'Medicine' },
    { r: 'Purezento', e: 'Present / Gift' },
    { r: 'Meeru', e: 'Email' },
    { r: 'Repooto', e: 'Report' },
    { r: 'Kurejitto Kaado', e: 'Credit Card' },
    { r: 'Supuun', e: 'Spoon' },
    { r: 'Fooku', e: 'Fork' },
    { r: 'Hashi', e: 'Chopsticks' },
    { r: 'Tabako', e: 'Cigarette' },

    // --- FOOD & DRINK ---
    { r: 'Mikan', e: 'Orange' },
    { r: 'Ringo', e: 'Apple' },
    { r: 'Gohan', e: 'Rice / Meal' },
    { r: 'Pan', e: 'Bread' },
    { r: 'Tamago', e: 'Egg' },
    { r: 'Niku', e: 'Meat' },
    { r: 'Sakana', e: 'Fish' },
    { r: 'Yasai', e: 'Vegetable' },
    { r: 'Kudamono', e: 'Fruit' },
    { r: 'Mizu', e: 'Water' },
    { r: 'Ocha', e: 'Tea' },
    { r: 'Koucha', e: 'Black Tea' },
    { r: 'Gyuunyuu', e: 'Milk' },
    { r: 'Juusu', e: 'Juice' },
    { r: 'Biiru', e: 'Beer' },
    { r: 'Tabemono', e: 'Food' },
    { r: 'Asagohan', e: 'Breakfast' },
    { r: 'Hirugohan', e: 'Lunch' },
    { r: 'Bangohan', e: 'Dinner' },
    { r: 'Raamen', e: 'Ramen' },
    { r: 'Nomimono', e: 'Drinks' },
    { r: 'Koohii', e: 'Coffee' },
    { r: 'Koora', e: 'Cola' },
    { r: 'Osake', e: 'Liquor / Alcohol' },
    { r: 'Wain', e: 'Wine' },
    { r: 'Ryouri', e: 'Dish / Cooking' },

    // --- EVENTS & ABSTRACT ---
    { r: 'Kurasu', e: 'Class' },
    { r: 'Jugyou', e: 'Class / Lesson' },
    { r: 'Kaigi', e: 'Meeting' },
    { r: 'Miitingu', e: 'Meeting' },
    { r: 'Shigoto', e: 'Work' },
    { r: 'Shimekiri', e: 'Deadline' },
    { r: 'Yasumi', e: 'Vacation / Holiday' },
    { r: 'Kyuukei', e: 'Break / Rest' },
    { r: 'Kurisumasu', e: 'Christmas' },
    { r: 'Supootsu', e: 'Sports' },
    { r: 'Supootsu Taikai', e: 'Sports Festival' },
    { r: 'Tanjoubi', e: 'Birthday' },
    { r: 'Sukejuuru', e: 'Schedule' },
    { r: 'Yotei', e: 'Schedule / Plan' },
    { r: 'Purojekuto', e: 'Project' },
    { r: 'Paatii', e: 'Party' },
    { r: 'Shiai', e: 'Game / Match' },
    { r: 'Shiken', e: 'Exam' },
    { r: 'Nedan', e: 'Price' },
    { r: 'Yachin', e: 'Rent' },
    { r: 'Zenbu', e: 'All / Total' },
    { r: 'Peeji', e: 'Page' },
    { r: 'Oufuku', e: 'Roundtrip' },
    { r: 'Katamichi', e: 'One way' },
    { r: 'Shukudai', e: 'Homework' },
    { r: 'Mondai', e: 'Problem / Question' },
    { r: 'Toreeningu', e: 'Training' },
    { r: 'Zemi', e: 'Seminar' },
    { r: 'Arubaito', e: 'Part-time job' },
    { r: 'Zangyou', e: 'Overtime' },
    { r: 'Kaiwa', e: 'Conversation' },
    { r: 'Bunpou', e: 'Grammar' },
    { r: 'Benkyou', e: 'Study' },
    { r: 'Renshuu', e: 'Practice' },
    { r: 'Tesuto', e: 'Test' },
    { r: 'Kotae', e: 'Answer' },
    { r: 'Kanji', e: 'Chinese Character' },
    { r: 'Ji', e: 'Character / Letter' },
    { r: 'Memo', e: 'Memo' },
    { r: 'Eiga', e: 'Movie' },
    { r: 'Uta', e: 'Song' },
    { r: 'Ongaku', e: 'Music' },
    { r: 'Nyuusu', e: 'News' },
    { r: 'Karaoke', e: 'Karaoke' },
    { r: 'Ryokou', e: 'Travel / Trip' },
    { r: 'Gaikoku', e: 'Foreign Country' },
    { r: 'Kaigai', e: 'Overseas' },

    // --- TIME & SEASONS ---
    { r: 'Kisetsu', e: 'Season' },
    { r: 'Haru', e: 'Spring' },
    { r: 'Natsu', e: 'Summer' },
    { r: 'Aki', e: 'Autumn' },
    { r: 'Fuyu', e: 'Winter' },
    { r: 'Tsuyu', e: 'Rainy Season' },
    { r: 'Natsuyasumi', e: 'Summer Vacation' },
    { r: 'Shuumatsu', e: 'Weekend' },
    { r: 'Heijitsu', e: 'Weekday' },
    { r: 'Gozen', e: 'Morning (a.m.)' },
    { r: 'Gogo', e: 'Afternoon (p.m.)' },
    { r: 'Jikan', e: 'Time' },
    { r: 'Asa', e: 'Morning' },
    { r: 'Hiru', e: 'Noon / Daytime' },
    { r: 'Yoru', e: 'Night' },
    { r: 'Ban', e: 'Night / Evening' },
    { r: 'Kyou', e: 'Today' },
    { r: 'Kinou', e: 'Yesterday' },
    { r: 'Ashita', e: 'Tomorrow' },
    { r: 'Mainichi', e: 'Every day' },
    { r: 'Konshu', e: 'This week' },
    { r: 'Raishu', e: 'Next week' },
    { r: 'Senshu', e: 'Last week' },
    { r: 'Ima', e: 'Now' },
    { r: 'Tsugi', e: 'Next' },
    { r: 'Itsu', e: 'When' },
    { r: 'Mazu', e: 'First' },
    { r: 'Hajimeni', e: 'First' },
    { r: 'Hitotsuki', e: 'One Month' },

    // --- ADJECTIVES & ADVERBS ---
    { r: 'Ookii', e: 'Big' },
    { r: 'Chiisai', e: 'Small' },
    { r: 'Atarashii', e: 'New' },
    { r: 'Furui', e: 'Old' },
    { r: 'Ii', e: 'Good' },
    { r: 'Warui', e: 'Bad' },
    { r: 'Atsui', e: 'Hot' },
    { r: 'Samui', e: 'Cold (Weather)' },
    { r: 'Tsumetai', e: 'Cold (Touch)' },
    { r: 'Muzukashii', e: 'Difficult' },
    { r: 'Yasashii', e: 'Easy / Kind' },
    { r: 'Takai', e: 'Expensive / High' },
    { r: 'Yasui', e: 'Cheap' },
    { r: 'Hikui', e: 'Low' },
    { r: 'Omoshiroi', e: 'Interesting' },
    { r: 'Oishii', e: 'Delicious' },
    { r: 'Isogashii', e: 'Busy' },
    { r: 'Tanoshii', e: 'Fun' },
    { r: 'Shiroi', e: 'White' },
    { r: 'Kuroi', e: 'Black' },
    { r: 'Akai', e: 'Red' },
    { r: 'Aoi', e: 'Blue' },
    { r: 'Kirei', e: 'Beautiful / Clean' },
    { r: 'Genki', e: 'Healthy / Energetic' },
    { r: 'Shizuka', e: 'Quiet' },
    { r: 'Nigiyaka', e: 'Lively' },
    { r: 'Yuumei', e: 'Famous' },
    { r: 'Shinsetsu', e: 'Kind' },
    { r: 'Suki', e: 'Like' },
    { r: 'Kirai', e: 'Dislike' },
    { r: 'Jouzu', e: 'Skillful' },
    { r: 'Heta', e: 'Unskillful' },
    { r: 'Hayai', e: 'Early / Fast' },
    { r: 'Osoi', e: 'Late / Slow' },
    { r: 'Kibishii', e: 'Strict' },
    { r: 'Abunai', e: 'Dangerous' },
    { r: 'Nemui', e: 'Sleepy' },
    { r: 'Majime', e: 'Serious / Industrious' },
    { r: 'Itsumo', e: 'Always' },
    { r: 'Tokidoki', e: 'Sometimes' },
    { r: 'Zenzen', e: 'Never / Not at all' },
    { r: 'Chotto', e: 'A little' },
    { r: 'Totemo', e: 'Very' },
    { r: 'Taihen', e: 'Very / Hard' },
    { r: 'Amari', e: 'Not very (with negative)' },

    // --- VERBS ---
    { r: 'Tabemasu', e: 'To eat' },
    { r: 'Nomimasu', e: 'To drink' },
    { r: 'Ikimasu', e: 'To go' },
    { r: 'Kimasu', e: 'To come' },
    { r: 'Kaerimasu', e: 'To go home / Return' },
    { r: 'Mimasu', e: 'To see / Watch / Look' },
    { r: 'Kikimasu', e: 'To hear / Listen / Ask' },
    { r: 'Yomimasu', e: 'To read' },
    { r: 'Kakimasu', e: 'To write' },
    { r: 'Kaimasu', e: 'To buy' },
    { r: 'Shimasu', e: 'To do' },
    { r: 'Benkyou shimasu', e: 'To study' },
    { r: 'Hatarakimasu', e: 'To work' },
    { r: 'Aimasu', e: 'To meet' },
    { r: 'Nemasu', e: 'To sleep' },
    { r: 'Okimasu', e: 'To wake up' },
    { r: 'Hanashimasu', e: 'To speak / Talk' },
    { r: 'Wakarimasu', e: 'To understand' },
    { r: 'Arimasu', e: 'To have / exist (inanimate)' },
    { r: 'Imasu', e: 'To have / exist (animate)' },
    { r: 'Yasumimasu', e: 'To rest / take a holiday' },
    { r: 'Hajimarimasu', e: 'To start' },
    { r: 'Owarimasu', e: 'To finish' },
    { r: 'Kyuukei shimasu', e: 'To take a break' },
    { r: 'Umaremasu', e: 'To be born' },
    { r: 'Urimasu', e: 'To sell' },
    { r: 'Oshiemasu', e: 'To teach / tell' },
    { r: 'Utaimasu', e: 'To sing' },
    { r: 'Suimasu', e: 'To smoke' },
    { r: 'Kakemasu', e: 'To call (phone)' },
    { r: 'Modorimasu', e: 'To return / Go back' },
    { r: 'Kaimono shimasu', e: 'To shop' },
    { r: 'Asobimasu', e: 'To enjoy / Play' },
    { r: 'Oyogimasu', e: 'To swim' },

    // --- COUNTRIES & PHRASES ---
    { r: 'Ikura', e: 'How much' },
    { r: 'Ikutsu', e: 'How many / How old' },
    { r: 'Gurai', e: 'About / Approximately' },
    { r: 'Doko', e: 'Where' },
    { r: 'Dare', e: 'Who' },
    { r: 'Nani', e: 'What' },
    { r: 'Doushite', e: 'Why' },
    { r: 'Dou', e: 'How' },
    { r: 'Hatachi', e: '20 Years Old' },
    { r: 'Igirisu', e: 'United Kingdom' },
    { r: 'Furansu', e: 'France' },
    { r: 'Supein', e: 'Spain' },
    { r: 'Indo', e: 'India' },
    { r: 'Shingapooru', e: 'Singapore' },
    { r: 'Mareeshia', e: 'Malaysia' },
    { r: 'Indoneshia', e: 'Indonesia' },
    { r: 'Tai', e: 'Thailand' },
    { r: 'Hai', e: 'Yes' },
    { r: 'Iie', e: 'No' },
    { r: 'Arigatou', e: 'Thank you' },
    { r: 'Gomen nasai', e: 'I am sorry' },
    { r: 'Sumimasen', e: 'Excuse me' },
    { r: 'Ohayou', e: 'Good Morning' },
    { r: 'Konnichiwa', e: 'Hello / Good Afternoon' },
    { r: 'Konbanwa', e: 'Good Evening' },
    { r: 'Oyasumi', e: 'Good Night' },
    { r: 'Sayounara', e: 'Goodbye' }
];

// --- APP STATE ---
let currentReviewPage = 1;
const reviewItemsPerPage = 50;
let testQueue = [];
let testIndex = 0;
let testScore = 0;
let testMode = 'multiple';

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

    ui.prevBtn.disabled = currentReviewPage === 1;
    ui.prevBtn.style.opacity = currentReviewPage === 1 ? '0.5' : '1';

    ui.nextBtn.disabled = currentReviewPage === totalPages;
    ui.nextBtn.style.opacity = currentReviewPage === totalPages ? '0.5' : '1';

    switchScreen('review');
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

    // Use total count or 50, whichever is smaller
    const testSize = Math.min(vocabData.length, 50);
    const shuffled = [...vocabData].sort(() => 0.5 - Math.random());
    testQueue = shuffled.slice(0, testSize);

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
    const testSize = testQueue.length;

    ui.questionText.innerText = currentItem.r;
    ui.progressText.innerText = `${testIndex + 1} / ${testSize}`;
    ui.progressFill.style.width = `${((testIndex) / testSize) * 100}%`;
    ui.answerInput.value = '';

    if (testMode === 'multiple') {
        renderMultipleChoice(currentItem);
    } else {
        ui.answerInput.focus();
    }
}

function renderMultipleChoice(currentItem) {
    ui.choicesContainer.innerHTML = '';
    const correctAns = currentItem.e;
    const otherWords = vocabData.filter(w => w.r !== currentItem.r);
    const shuffledOthers = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);
    const choices = [...shuffledOthers.map(w => w.e), correctAns];

    choices.sort(() => 0.5 - Math.random());

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = choice;
        btn.onclick = () => checkAnswer(choice, correctAns);
        ui.choicesContainer.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    const currentItem = testQueue[testIndex];
    if (selected === correct) {
        testScore++;
        showFeedback(true, currentItem);
    } else {
        showFeedback(false, currentItem);
    }
}

function checkTypingAnswer() {
    const input = ui.answerInput.value.trim().toLowerCase();
    const currentItem = testQueue[testIndex];
    const validAnswers = currentItem.e.toLowerCase().split('/').map(s => s.trim());

    const isCorrect = validAnswers.some(ans => ans === input);
    const isLooseCorrect = currentItem.e.toLowerCase().includes(input) && input.length > 2;

    if (isCorrect || isLooseCorrect) {
        testScore++;
        showFeedback(true, currentItem);
    } else {
        showFeedback(false, currentItem);
    }
}

function showFeedback(isCorrect, item) {
    ui.modalWord.innerText = item.r;
    ui.modalAnswer.innerText = item.e;

    if (isCorrect) {
        ui.modalHeader.innerText = "Correct!";
        ui.modalHeader.style.color = "var(--correct-color, #4CAF50)";
        ui.modalHelper.innerText = "Meaning:";
    } else {
        ui.modalHeader.innerText = "Incorrect";
        ui.modalHeader.style.color = "var(--error-color, #F44336)";
        ui.modalHelper.innerText = "The correct answer is:";
    }

    ui.modal.style.display = 'flex';
}

function closeModal() {
    ui.modal.style.display = 'none';
    testIndex++;
    if (testIndex < testQueue.length) {
        renderQuestion();
    } else {
        endTest();
    }
}

function endTest() {
    ui.finalScore.innerText = `${testScore} / ${testQueue.length}`;
    switchScreen('result');
}

ui.answerInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (ui.modal.style.display === 'flex') {
            closeModal();
        } else {
            checkTypingAnswer();
        }
    }
});