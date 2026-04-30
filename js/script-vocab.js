// --- DATABASE OF VOCABULARY ---
// r: Romaji
// e: English Meaning

// --- DATABASE ---
const vocabData = [
    // --- PEOPLE & PRONOUNS ---
    { r: 'WATASHI', e: 'I / Me' },
    { r: 'ANATA', e: 'You' },
    { r: 'BOKU', e: 'I (masculine)' },
    { r: 'WATAKUSHI', e: 'I (feminine)' },
    { r: 'KARE', e: 'He, boyfriend' },
    { r: 'KANOJO', e: 'She, girlfriend' },
    { r: 'KAISHAIN', e: 'Company Employee' },
    { r: 'SHAIN', e: 'Employee' },
    { r: 'SHACHOU', e: 'Company President' },
    { r: 'BUCHOU', e: 'Department Head' },
    { r: 'KACHOU', e: 'Section Head / Supervisor' },
    { r: 'OTOKO', e: 'Male / Man' },
    { r: 'ONNA', e: 'Female / Woman' },
    { r: 'OTONA', e: 'Adult' },
    { r: 'SENSEI', e: 'Teacher' },
    { r: 'GAKUSEI', e: 'Student' },
    { r: 'NIHONJIN', e: 'Japanese Person' },
    { r: 'AMERIKAJIN', e: 'American Person' },
    { r: 'FIRIPINJIN', e: 'Filipino Person' },
    { r: 'GAIKOKUJIN', e: 'Foreigner' },
    { r: 'MINNA / MINASAN', e: 'Everyone' },
    { r: 'TOMODACHI', e: 'Friend' },
    { r: 'NAKAMA', e: 'Friend, colleague' },
    { r: 'HITO', e: 'Person (Informal)' },
    { r: 'KATA', e: 'Person (Formal)' },
    { r: 'KAZOKU', e: 'Family' },
    { r: 'RYOUSHIN', e: 'Parents' },
    { r: 'KODOMO / KO', e: 'Children / Child' },
    { r: 'KYOUDAI', e: 'Siblings' },
    { r: 'ITOKO', e: 'Cousin' },
    { r: 'ENJINIA', e: 'Engineer' },
    { r: 'KENSHUUSEI', e: 'Trainee' },
    { r: '~SAN', e: 'Mr./Miss/Mrs. (Honorific)' },
    { r: '~SENSEI', e: 'Teacher/Doctor (Honorific)' },
    { r: '(O) NAMAE', e: 'Name' },
    { r: 'RYUUGAKUSEI', e: 'Student studying abroad' },
    { r: 'SEITO', e: 'Student' },
    { r: 'KURASUMEITO', e: 'Classmate' },
    { r: 'MENBA-', e: 'Member' },
    { r: 'SHINNYUUSHAIN', e: 'New Employee' },
    { r: 'ISHA', e: 'Doctor' },
    { r: 'DAREKA', e: 'Somebody' },
    { r: 'DAREMO', e: 'Nobody' },

    // --- BODY PARTS ---
    { r: 'ATAMA', e: 'Head' },
    { r: 'KAO', e: 'Face' },
    { r: 'KAMINOKE', e: 'Hair' },
    { r: 'ME', e: 'Eyes' },
    { r: 'HANA', e: 'Nose' },
    { r: 'MIMI', e: 'Ears' },
    { r: 'KUCHI', e: 'Mouth' },
    { r: 'HA', e: 'Teeth' },
    { r: 'KUBI', e: 'Neck' },
    { r: 'TE', e: 'Hands' },
    { r: 'YUBI', e: 'Finger' },
    { r: 'TSUME', e: 'Fingernails' },
    { r: 'KARADA', e: 'Body' },
    { r: 'ONAKA', e: 'Stomach' },
    { r: 'ASHI', e: 'Feet, leg' },
    { r: 'SEI', e: 'Height' },

    // --- PLACES ---
    { r: 'KAISHA', e: 'Company' },
    { r: 'OFISU', e: 'Office' },
    { r: 'GAKKOU', e: 'School' },
    { r: 'DAIGAKU', e: 'University' },
    { r: 'UCHI / IE / (O)TAKU', e: 'House / Home' },
    { r: 'HEYA', e: 'Room' },
    { r: 'CHUUSHAJOU', e: 'Parking Lot' },
    { r: 'OTEARAI', e: 'Washroom / Toilet' },
    { r: 'TOIRE', e: 'Toilet' },
    { r: 'DAIDOKORO', e: 'Kitchen' },
    { r: 'KUNI', e: 'Country' },
    { r: 'BYOUIN', e: 'Hospital' },
    { r: 'KOUJOU', e: 'Factory' },
    { r: 'GINKOU', e: 'Bank' },
    { r: 'TAISHIKAN', e: 'Embassy' },
    { r: 'TOSHOKAN', e: 'Library' },
    { r: 'MO-RU', e: 'Mall' },
    { r: 'EIGAKAN', e: 'Movie House / Theater' },
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
    { r: 'KAIDAN', e: 'Stairs' },
    { r: 'ESUKARE-TA-', e: 'Escalator' },
    { r: 'EREBE-TA', e: 'Elevator' },
    { r: 'GENKAN', e: 'Entrance way' },
    { r: 'OKUJOU', e: 'Rooftop' },
    { r: 'HASHI', e: 'Bridge' },
    { r: 'IRIGUCHI', e: 'Entrance' },
    { r: 'DEGUCHI', e: 'Exit' },
    { r: 'MON', e: 'Gate' },
    { r: 'ROUKA', e: 'Corridor' },
    { r: 'KADO', e: 'Corner' },
    { r: 'DOURO', e: 'Road, highway' },
    { r: 'PU-RU', e: 'Swimming pool' },
    { r: 'NORIBA', e: 'Bus stop' },
    { r: 'KOUSATEN', e: 'Intersection' },
    { r: 'KOUBAN', e: 'Police box' },

    // --- NATURE ---
    { r: 'YAMA', e: 'Mountain' },
    { r: 'FUJISAN', e: 'Mount Fuji' },
    { r: 'KAWA', e: 'River' },
    { r: 'IKE', e: 'Pond' },
    { r: 'UMI', e: 'Sea' },
    { r: 'KAIGAN', e: 'Seashore' },
    { r: 'KI', e: 'Tree' },
    { r: 'HANA', e: 'Flower' },
    { r: 'SAKURA', e: 'Sakura' },
    { r: 'SORA', e: 'Sky' },
    { r: 'TENKI', e: 'Weather' },
    { r: 'TORI', e: 'Bird' },
    { r: 'SAKANA', e: 'Fish' },
    { r: 'BARA', e: 'Rose' },
    { r: 'AME', e: 'Rain' },
    { r: 'KAZE', e: 'Wind' },
    { r: 'YUKI', e: 'Snow' },

    // --- OBJECTS & ITEMS ---
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
    { r: 'ZERO / REI / MARU', e: 'Zero / Circle / Example' },
    { r: 'KANJI', e: 'Chinese Character' },
    { r: 'JI', e: 'Character / Letter' },
    { r: 'MEMO', e: 'Memo' },
    { r: 'SHASHIN', e: 'Picture' },
    { r: 'KUSURI', e: 'Medicine' },
    { r: 'PUREZENTO', e: 'Present / Gift' },
    { r: 'ME-RU', e: 'Email' },
    { r: 'REPO-TO', e: 'Report' },
    { r: 'KUREJITTO KA-DO', e: 'Credit Card' },
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
    { r: 'BEDDO', e: 'Bed' },
    { r: 'PIANO', e: 'Piano' },
    { r: 'GITA-', e: 'Guitar' },
    { r: 'CHAWAN', e: 'Rice bowl, tea cup' },
    { r: '(O) SARA', e: 'Plate' },
    { r: 'HAIZARA', e: 'Ashtray' },
    { r: 'NAIFU', e: 'Knife' },
    { r: 'SEKKEN', e: 'Soap' },
    { r: 'JUUSHO', e: 'Address' },
    { r: 'BOTAN', e: 'Button' },
    { r: 'POSUTO', e: 'Post box' },
    { r: 'POSUTA-', e: 'Poster' },
    { r: 'GOMI', e: 'Garbage' },
    { r: 'MONO', e: 'Thing' },
    { r: 'SAIN', e: 'Signature' },
    { r: 'KEISANKI', e: 'Calculator' },
    { r: 'KESHIGOMU', e: 'Eraser' },
    { r: 'JISHO', e: 'Dictionary' },
    { r: 'CHIZU', e: 'Map' },
    { r: 'KA-TEN', e: 'Curtain' },
    { r: 'SUITCHI', e: 'Switch' },
    { r: 'NIMOTSU', e: 'Luggage' },
    { r: 'DENKI', e: 'Electricity, light' },
    { r: 'DENKISEIHIN', e: 'Electronic goods' },
    { r: 'EAKON', e: 'Air-conditioner' },
    { r: 'SUTO-BU', e: 'Stove, heater' },
    { r: 'REIZOUKO', e: 'Refrigerator' },
    { r: 'HONDANA', e: 'Bookshelf' },
    { r: 'SAKUBUN', e: 'Essay, composition' },
    { r: 'KAMI', e: 'Paper' },
    { r: 'MANGA', e: 'Manga' },
    { r: 'E', e: 'Painting' },
    { r: 'OMIYAGE', e: 'Souvenir' },
    { r: 'NANIKA', e: 'Something' },
    { r: 'NANIMO', e: 'Nothing' },
    { r: 'HOTERU', e: 'Hotel' },
    { r: 'SHAWA-', e: 'Shower' },
    { r: 'OFURO', e: 'Bathtub' },
    { r: 'KABIN', e: 'Vase' },
    { r: 'DOA', e: 'Door' },
    { r: 'MADO', e: 'Window' },
    { r: 'HAKO', e: 'Box' },
    { r: 'HAGAKI', e: 'Post card' },
    { r: 'FUUTOU', e: 'Envelope' },
    { r: 'WASUREMONO', e: 'Lost item' },

    // --- CLOTHING ---
    { r: 'FUKU', e: 'Clothes' },
    { r: 'YOUFUKU', e: 'Western style clothes' },
    { r: 'SHATSU', e: 'Shirt' },
    { r: 'Y SHATSU', e: '(White) shirt' },
    { r: 'SEBIRO', e: 'Suit' },
    { r: 'SE-TA-', e: 'Sweater' },
    { r: 'KO-TO', e: 'Coat' },
    { r: 'O-BA-', e: 'Overcoat' },
    { r: 'UWAGI', e: 'Jacket' },
    { r: 'SHITAGI', e: 'Underwear' },
    { r: 'ZUBON / PANTSU', e: 'Pants' },
    { r: 'SUKA-TO', e: 'Skirt' },
    { r: 'KUTSU', e: 'Shoes' },
    { r: 'KUTSUSHITA', e: 'Socks' },
    { r: 'BOUSHI', e: 'Hat' },
    { r: 'NEKUTAI', e: 'Necktie' },
    { r: 'HANKACHI', e: 'Handkerchief' },
    { r: 'BERUTO', e: 'Belt' },
    { r: 'POKETTO', e: 'Pocket' },
    { r: 'SANGURASU', e: 'Sunglass' },
    { r: 'IYARINGU', e: 'Earrings' },
    { r: 'NEKKURESU', e: 'Necklace' },
    { r: 'YUBIWA', e: 'Ring' },

    // --- FOOD & DRINK ---
    { r: 'MIKAN', e: 'Orange' },
    { r: 'RINGO', e: 'Apple' },
    { r: 'GOHAN', e: 'Rice / Meal' },
    { r: 'PAN', e: 'Bread' },
    { r: 'TAMAGO', e: 'Egg' },
    { r: 'NIKU', e: 'Meat' },
    { r: 'SAKANA', e: 'Fish' },
    { r: 'YASAI', e: 'Vegetables' },
    { r: 'KUDAMONO', e: 'Fruits' },
    { r: 'MIZU', e: 'Water' },
    { r: 'OCHA', e: 'Tea' },
    { r: 'KOUCHA', e: 'Black Tea' },
    { r: 'GYUUNYUU', e: 'Milk' },
    { r: 'KO-HI-', e: 'Coffee' },
    { r: 'KO-RA', e: 'Cola' },
    { r: 'JU-SU', e: 'Juice' },
    { r: 'OSAKE', e: 'Liquor / Alcohol' },
    { r: 'BI-RU', e: 'Beer' },
    { r: 'WAIN', e: 'Wine' },
    { r: 'RYOURI', e: 'Dish / Cooking' },
    { r: 'TABEMONO', e: 'Food' },
    { r: 'NOMIMONO', e: 'Drinks' },
    { r: 'ASAGOHAN', e: 'Breakfast' },
    { r: 'HIRUGOHAN', e: 'Lunch' },
    { r: 'BANGOHAN', e: 'Dinner' },
    { r: 'RA-MEN', e: 'Ramen' },
    { r: 'SHIO', e: 'Salt' },
    { r: 'SATOU', e: 'Sugar' },
    { r: 'SHOUYU', e: 'Soy sauce' },
    { r: 'JAMU', e: 'Jam' },
    { r: 'SARADA', e: 'Salad' },
    { r: 'BUDOU', e: 'Grapes' },
    { r: 'TORINIKU', e: 'Chicken meat' },
    { r: 'BUTANIKU', e: 'Pork' },
    { r: 'GYUUNIKU', e: 'Beef' },
    { r: 'OKASHI', e: 'Sweets, snacks' },

    // --- TRANSPORTATION ---
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

    // --- EVENTS & ABSTRACT ---
    { r: 'KURASU', e: 'Class' },
    { r: 'JUGYOU', e: 'Class / Lesson' },
    { r: 'KAIGI', e: 'Meeting' },
    { r: 'MI-TINGU', e: 'Meeting' },
    { r: 'SHIGOTO', e: 'Work' },
    { r: 'SHIMEKIRI', e: 'Deadline' },
    { r: 'YASUMI', e: 'Vacation / Holiday' },
    { r: 'KYUUKEI', e: 'Break / Rest' },
    { r: 'KURISUMASU', e: 'Christmas' },
    { r: 'SUPO-TSU', e: 'Sports' },
    { r: 'SUPO-TSU TAIKAI', e: 'Sports festival' },
    { r: '(O)TANJOUBI', e: 'Birthday' },
    { r: 'SUKEJU-RU', e: 'Schedule' },
    { r: 'YOTEI', e: 'Schedule' },
    { r: 'PUROJEKUTO', e: 'Project' },
    { r: 'PA-TI-', e: 'Party' },
    { r: 'SHIAI', e: 'Game / Match' },
    { r: 'SHIKEN', e: 'Examination' },
    { r: 'NEDAN', e: 'Price' },
    { r: 'YACHIN', e: 'Rent' },
    { r: 'ZENBU', e: 'All / Total' },
    { r: 'PE-JI', e: 'Page' },
    { r: 'OUFUKU', e: 'Roundtrip' },
    { r: 'KATAMICHI', e: 'One way' },
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
    { r: 'TESUTO', e: 'Test, examination' },
    { r: 'KOTAE', e: 'Answer' },
    { r: 'RYOKOU', e: 'Travel, trip' },
    { r: 'KARAOKE', e: 'Karaoke' },
    { r: 'SUUGAKU', e: 'Mathematics' },
    { r: 'HIDARIGAWA', e: 'Left side' },
    { r: 'MIGIGAWA', e: 'Right side' },
    { r: 'BYOUKI', e: 'Sickness / illness' },
    { r: 'NETSU', e: 'Fever' },
    { r: 'KAZEGUZURI', e: 'Cold medicine' },
    { r: 'SEIKATSU', e: 'Lifestyle' },
    { r: 'YOUJI', e: 'Tasks' },
    { r: 'OTO', e: 'Sound' },
    { r: 'KOE', e: 'Voice' },
    { r: 'TSUNAMI', e: 'Tsunami' },
    { r: 'JISHIN', e: 'Earthquake' },
    { r: 'TAIFUU', e: 'Typhoon' },
    { r: 'BASUKETTOBO-RU', e: 'Basketball' },
    { r: 'GORUFU', e: 'Golf' },
    { r: 'SAKKA-', e: 'Soccer' },
    { r: 'TENISU', e: 'Tennis' },
    { r: 'BADOMINTON', e: 'Badminton' },
    { r: 'GE-MU', e: 'Game' },
    { r: 'CHI-MU', e: 'Team' },
    { r: 'RU-RU', e: 'Rules' },
    { r: 'HANAMI', e: 'Flower viewing' },
    { r: 'HANABI', e: 'Fireworks' },
    { r: 'NOMIKAI', e: 'Drinking party' },
    { r: 'IRO', e: 'Color' },
    { r: 'NIOI', e: 'Smell' },
    { r: 'AJI', e: 'Taste' },

    // --- TIME & SEASONS ---
    { r: 'KISETSU', e: 'Season' },
    { r: 'HARU', e: 'Spring' },
    { r: 'NATSU', e: 'Summer' },
    { r: 'AKI', e: 'Autumn, fall' },
    { r: 'FUYU', e: 'Winter' },
    { r: 'TSUYU', e: 'Rainy season' },
    { r: 'NATSUYASUMI', e: 'Summer vacation' },
    { r: 'SHUUMATSU', e: 'Weekend' },
    { r: 'HEIJITSU', e: 'Weekday' },
    { r: 'GOZEN', e: 'Morning, a.m.' },
    { r: 'GOGO', e: 'Afternoon, p.m.' },
    { r: 'JIKAN', e: 'Time' },
    { r: 'ITSU', e: 'When' },
    { r: 'IMA', e: 'Now' },
    { r: 'MAZU', e: 'First' },
    { r: 'HAJIMENI', e: 'First' },
    { r: 'TSUGI', e: 'Next' },
    { r: 'ASA', e: 'Morning' },
    { r: 'HIRU', e: 'Noon, daytime' },
    { r: 'YORU / BAN', e: 'Night' },
    { r: 'HITOTSUKI', e: 'One month' },
    { r: 'SAIKIN', e: 'Recently' },
    { r: 'SAIGO', e: 'Last' },
    { r: 'HANBUN', e: 'Half' },

    // --- ADJECTIVES & ADVERBS ---
    { r: 'OOKII', e: 'Big' },
    { r: 'CHIISAI', e: 'Small' },
    { r: 'ATARASHII', e: 'New' },
    { r: 'FURUI', e: 'Old' },
    { r: 'II', e: 'Good' },
    { r: 'WARUI', e: 'Bad' },
    { r: 'ATSUI', e: 'Hot' },
    { r: 'SAMUI', e: 'Cold (Weather)' },
    { r: 'TSUMETAI', e: 'Cold (Touch)' },
    { r: 'MUZUKASHII', e: 'Difficult' },
    { r: 'YASASHII', e: 'Easy / Kind' },
    { r: 'TAKAI', e: 'Expensive / High' },
    { r: 'YASUI', e: 'Cheap' },
    { r: 'HIKUI', e: 'Low' },
    { r: 'OMOSHIROI', e: 'Interesting' },
    { r: 'OISHII', e: 'Delicious' },
    { r: 'ISOGASHII', e: 'Busy' },
    { r: 'TANOSHII', e: 'Fun' },
    { r: 'SHIROI', e: 'White' },
    { r: 'KUROI', e: 'Black' },
    { r: 'AKAI', e: 'Red' },
    { r: 'AOI', e: 'Blue' },
    { r: 'KIREI', e: 'Beautiful / Clean' },
    { r: 'GENKI', e: 'Healthy / Energetic' },
    { r: 'SHIZUKA', e: 'Quiet' },
    { r: 'NIGIYAKA', e: 'Lively' },
    { r: 'YUUMEI', e: 'Famous' },
    { r: 'SHINSETSU', e: 'Kind' },
    { r: 'SUKI', e: 'Like, love' },
    { r: 'KIRAI', e: 'Dislike, hate' },
    { r: 'JOUZU', e: 'Skillful, good at' },
    { r: 'HETA', e: 'Unskillful, poor at' },
    { r: 'HAYAI', e: 'Early, fast' },
    { r: 'OSOI', e: 'Late, slow' },
    { r: 'KIBISHII', e: 'Strict' },
    { r: 'ABUNAI', e: 'Dangerous' },
    { r: 'NEMUI', e: 'Sleepy' },
    { r: 'MAJIME (NA)', e: 'Serious, industrious' },
    { r: 'ITSUMO', e: 'Always' },
    { r: 'TOKIDOKI', e: 'Sometimes' },
    { r: 'ZENZEN (~NAI)', e: 'Never, not at all' },
    { r: 'CHOTTO', e: 'A little' },
    { r: 'TOTEMO', e: 'Very' },
    { r: 'TAIHEN', e: 'Very, difficult' },
    { r: 'AMARI (~NAI)', e: 'Not very' },
    { r: 'KARAI', e: 'Spicy' },
    { r: 'AMAI', e: 'Sweet' },
    { r: 'NIGAI', e: 'Bitter' },
    { r: 'SUPPAI', e: 'Sour' },
    { r: 'SHOPPAI', e: 'Salty' },
    { r: 'HOSHII', e: 'Want' },
    { r: 'SUKOSHI', e: 'A little, few' },
    { r: 'TAKUSAN', e: 'Many' },
    { r: 'OOZEI', e: 'Many (people)' },
    { r: 'OOI', e: 'Many (things)' },
    { r: 'FUTOI', e: 'Fat, thick' },
    { r: 'HOSOI', e: 'Slim, thin' },
    { r: 'KAWAII', e: 'Cute' },
    { r: 'TADASHII', e: 'Correct' },
    { r: 'TAITEI', e: 'Usually, generally' },
    { r: 'DANDAN', e: 'Gradually' },
    { r: 'MOCHIRON', e: 'Of course, obviously' },
    { r: 'MASSUGU', e: 'Straight' },
    { r: 'HONTOU', e: 'Truth, real' },
    { r: 'KOREKARA', e: 'After this, from now on' },
    { r: 'SOREKARA', e: 'After that, one more thing' },
    { r: 'SOREDE', e: 'Therefore, so' },
    { r: 'SOREDEWA / DEWA', e: 'Well, then, bye for now' },
    { r: 'ITAI', e: 'Painful' },
    { r: 'DARUI', e: 'Sluggish' },
    { r: 'SHITSUREI', e: 'Impolite, rude' },
    { r: 'KEKKOU', e: 'Reasonably' },
    { r: 'MOTTO', e: 'More' },
    { r: 'YUKKURI', e: 'Slowly' },
    { r: 'YOKU', e: 'Often, well' },
    { r: 'FUKUZATSU (NA)', e: 'Complicated' },
    { r: 'URAYAMASHII', e: 'Envious, jealous' },
    { r: 'MEZURASHII', e: 'Unusual, rare' },
    { r: 'URUSAI', e: 'Noisy' },
    { r: 'SAKI (NI)', e: 'Ahead' },
    { r: 'WAKAI', e: 'Young' },
    { r: 'IYA (NA)', e: 'Disagreeable' },
    { r: 'DAME (NA)', e: 'No good' },
    { r: 'ONAJI', e: 'Same' },
    { r: 'MANNAKA', e: 'Center' },
    { r: 'TATOEBA', e: 'For example' },
    { r: 'JIBUN DE', e: 'By oneself' },
    { r: 'DEKIRUDAKE', e: 'As much as possible' },
    { r: 'DOUZO', e: 'Please, kindly' },
    { r: 'TABUN', e: 'Maybe' },
    { r: 'ATATAKAI', e: 'Warm' },
    { r: 'SUZUSHII', e: 'Cool' },

    // --- VERBS ---
    { r: 'TABEMASU', e: 'Eat' },
    { r: 'NOMIMASU', e: 'Drink' },
    { r: 'IKIMASU', e: 'Go' },
    { r: 'KIMASU', e: 'Come' },
    { r: 'KAERIMASU', e: 'Go home, return' },
    { r: 'MIMASU', e: 'Watch, look, see' },
    { r: 'KIKIMASU', e: 'Listen, ask' },
    { r: 'YOMIMASU', e: 'Read' },
    { r: 'KAKIMASU', e: 'Write' },
    { r: 'KAIMASU', e: 'Buy' },
    { r: 'SHIMASU', e: 'Do' },
    { r: 'BENKYOU SHIMASU', e: 'Study' },
    { r: 'HATARAKIMASU', e: 'Work' },
    { r: 'AIMASU', e: 'Meet' },
    { r: 'NEMASU', e: 'Sleep' },
    { r: 'OKIMASU', e: 'Wake up' },
    { r: 'HANASHIMASU', e: 'Speak, talk' },
    { r: 'WAKARIMASU', e: 'Understand' },
    { r: 'ARIMASU', e: 'Have / exist (inanimate)' },
    { r: 'IMASU', e: 'Have / exist (animate)' },
    { r: 'YASUMIMASU', e: 'Rest' },
    { r: 'HAJIMARIMASU', e: 'Start' },
    { r: 'OWARIMASU', e: 'Finish' },
    { r: 'SHIGOTO SHIMASU', e: 'Work' },
    { r: 'ZANGYOU SHIMASU', e: 'Work overtime' },
    { r: 'KYUUKEI SHIMASU', e: 'Take a break' },
    { r: 'UMAREMASU', e: 'Be born' },
    { r: 'URIMASU', e: 'Sell' },
    { r: 'OSHIEMASU', e: 'Teach, tell' },
    { r: 'UTAIMASU', e: 'Sing' },
    { r: 'SUIMASU', e: 'Smoke' },
    { r: '(DENWA O) KAKEMASU', e: 'Call (a phone)' },
    { r: 'MODORIMASU', e: 'Return, go back' },
    { r: 'KAIMONO SHIMASU', e: 'Shop' },
    { r: 'ASOBIMASU', e: 'Enjoy, play' },
    { r: 'OYOGIMASU', e: 'Swim' },
    { r: 'SAGASU', e: 'Search' },
    { r: 'TANOMU', e: 'Request, ask' },
    { r: 'TSUKARERU', e: 'Be tired' },
    { r: 'YOBU', e: 'Call out, invite' },
    { r: 'ARAU', e: 'Wash' },
    { r: 'OSU', e: 'Press, push' },
    { r: 'HIKU', e: 'Pull' },
    { r: '(SHIKEN O) UKERU', e: 'Take an examination' },
    { r: 'UNDOU (SURU)', e: 'Exercise' },
    { r: 'ARU', e: 'Have' },
    { r: 'IRU', e: 'Need' },
    { r: 'DEKIRU', e: 'Can (do)' },
    { r: 'WAKARU', e: 'Understand' },
    { r: 'KIKOERU', e: 'Can hear' },
    { r: 'MIERU', e: 'Can see' },
    { r: 'NARU', e: 'Become' },
    { r: 'KARIRU', e: 'Borrow' },
    { r: 'KASU', e: 'Lend' },
    { r: 'KAESU', e: 'Return' },
    { r: 'HARAU', e: 'Pay' },
    { r: 'HASHIRU', e: 'Run' },
    { r: 'SANPO (SURU)', e: 'Stroll' },
    { r: 'JOGINGU (SURU)', e: 'Jogging' },
    { r: 'TOBU', e: 'Fly, jump' },
    { r: 'SUTERU', e: 'Throw' },
    { r: 'SUWARU', e: 'Sit' },
    { r: 'TATSU', e: 'Stand' },
    { r: 'MOTTEKURU', e: 'Bring' },
    { r: 'MOTTEIKU', e: 'Take' },
    { r: 'YAMERU', e: 'Quit, stop' },
    { r: 'ORIRU', e: 'Get off' },
    { r: 'DERU', e: 'Leave, come out' },
    { r: 'DEKAKERU', e: 'Leave, go out' },
    { r: 'WATARU', e: 'Go across' },
    { r: 'TOORU', e: 'Pass through' },
    { r: 'AKERU', e: 'Open (tr)' },
    { r: 'AKU', e: 'Open (in)' },
    { r: 'SHIMERU', e: 'Close (tr)' },
    { r: 'SHIMARU', e: 'Close (in)' },
    { r: 'TSUKERU', e: 'Turn on (tr)' },
    { r: 'TSUKU', e: 'Turn on (in)' },
    { r: 'KESU', e: 'Turn off (tr) / Erase' },
    { r: 'KIERU', e: 'Turn off (in)' },
    { r: 'ATSUMERU', e: 'Gather, collect (tr)' },
    { r: 'ATSUMARU', e: 'Gather, collect (in)' },
    { r: 'NARABERU', e: 'Line up, arrange (tr)' },
    { r: 'NARABU', e: 'Line up, arrange (in)' },
    { r: 'TOMERU', e: 'Stop, park (tr)' },
    { r: 'TOMARU', e: 'Stop, park (in) / Stay' },
    { r: 'KOWASU', e: 'Destroy (tr)' },
    { r: 'KOWARERU', e: 'Destroy (in)' },
    { r: 'SUMU', e: 'Live, reside' },
    { r: 'TSUKU', e: 'Arrive' },
    { r: 'TSUTOMERU', e: 'Work (for)' },
    { r: 'NORU', e: 'Ride' },
    { r: 'AU', e: 'Meet' },
    { r: 'OKU', e: 'Put, place' },
    { r: 'HAIRU', e: 'Enter' },
    { r: 'MIGAKU', e: 'Brush' },
    { r: 'ABIRU', e: 'Take a shower' },
    { r: '(OFURO NI) HAIRU', e: 'Take a bath' },
    { r: 'NOBORU', e: 'Climb' },
    { r: 'IRERU', e: 'Insert, put in' },
    { r: 'KIRU', e: 'Wear (upper garment) / Cut' },
    { r: 'HAKU', e: 'Wear (lower garment)' },
    { r: 'KABURU', e: 'Wear (hat)' },
    { r: '(MEGANE O) KAKERU', e: 'Wear (glasses)' },
    { r: '(NEKUTAI O) SHIMERU', e: 'Wear (necktie, belt)' },
    { r: 'NUGU', e: 'Take off (clothes)' },
    { r: 'HAZUSU', e: 'Remove' },
    { r: 'AGARU', e: 'Rise, go up' },
    { r: 'SAGARU', e: 'Fall, go down' },
    { r: 'WATASU', e: 'Handover' },
    { r: 'MISERU', e: 'Show' },
    { r: 'CHIGAU', e: 'Differ, wrong' },
    { r: 'ERABU', e: 'Choose' },
    { r: 'KIMERU', e: 'Decide' },
    { r: 'WASURERU', e: 'Forget' },
    { r: 'ODORU', e: 'Dance' },
    { r: 'HIKU', e: 'Play instruments' },
    { r: 'SOTSUGYOU SURU', e: 'Graduate' },
    { r: 'OKURU', e: 'Send' },
    { r: 'TORU', e: 'Take' },
    { r: 'KANGAERU', e: 'Think about' },
    { r: 'RYUUGAKU (SURU)', e: 'Studying abroad' },
    { r: 'SHITSUMON (SURU)', e: 'Ask, question' },
    { r: 'TASUKERU', e: 'Help' },
    { r: 'ISOGU', e: 'Hurry' },
    { r: 'IU', e: 'Say' },
    { r: 'OMOU', e: 'Think' },
    { r: 'GOUKAKU (SURU)', e: 'Pass a test, interview' },
    { r: 'HIRAKU', e: 'Open an event' },
    { r: 'ITADAKU', e: 'Receive' },
    { r: '(KADO O) MAGARU', e: 'Turn' },
    { r: '(AME GA) FURU', e: 'Rain' },
    { r: 'FUKU', e: 'Blow' },
    { r: 'KUMORU', e: 'Cloudy' },
    { r: 'HARERU', e: 'Sunny' },
    { r: 'SAKU', e: 'Bloom' },
    { r: 'NAKU', e: 'Bark, purr, cry' },
    { r: 'NAKUNARU', e: 'Die, be lost' },
    { r: 'KOMARU', e: 'Be troubled' },

    // --- PHRASES & MISC ---
    { r: '(O)IKURA', e: 'How much?' },
    { r: '(O)IKUTSU', e: 'How old? (Formal) / How many?' },
    { r: '~DO', e: 'Degrees (temperature, angle)' },
    { r: 'SHITSUREI SHIMASU', e: 'Excuse me' },
    { r: 'KEKKOU DESU', e: 'I\'m fine' },
    { r: 'DAIJOUBU DESU', e: 'I\'m fine' },
    { r: 'MOU ICHIDO', e: 'Once more, again' }
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