/**
 * Jharkhand Tourism Data Repository
 * Contains lists for Destinations, Foods, and GI Tags.
 */

const destinationsData = [
    // --- Major Cities ---
    { name: "Ranchi", category: "city", location: "Ranchi", description: "Ranchi, the capital of Jharkhand, has a rich history rooted in tribal culture and natural heritage. It was once part of the Chotanagpur Plateau, inhabited mainly by indigenous tribes such as the Munda, Oraon, and Ho. During British rule, Ranchi developed as a hill station and administrative center due to its pleasant climate. The city played an important role in tribal movements led by leaders like Birsa Munda. In 2000, Ranchi became the capital of the newly formed state of Jharkhand. Today, it is known for its waterfalls, greenery, and cultural significance.", image: "images/ranchi_cover.jpg" },
    { name: "Jamshedpur", category: "city", location: "Jamshedpur", description: "Jamshedpur, popularly known as the Steel City of India, was founded in 1919 by visionary industrialist Jamsetji Tata. It was established as India’s first planned industrial city with the setting up of Tata Iron and Steel Company (now Tata Steel). Located in present-day Jharkhand, the city grew rapidly around steel production and modern infrastructure. Jamshedpur is renowned for its well-planned layout, greenery, and civic amenities. Landmarks like Jubilee Park and Dimna Lake reflect the city’s blend of industry and nature. Today, Jamshedpur stands as a symbol of India’s industrial progress and sustainable urban development.", image: "images/jamshedpur_cover.jpg" },
    { name: "Dhanbad", category: "city", location: "Dhanbad", description: "Dhanbad, known as the Coal Capital of India, has a history closely linked to coal mining. The discovery of rich coal reserves in the Jharia coalfield during the late 19th century led to its rapid development under British rule. Dhanbad grew as an important industrial and commercial center due to coal-based industries. The establishment of Indian School of Mines (ISM) in 1926 enhanced its educational and technical importance. After independence, the city continued to expand with nationalized coal mines. Today, Dhanbad plays a vital role in India’s energy and industrial sector.", image: "images/dhanbad_cover.jpg" },
    { name: "Deoghar", category: "city", location: "Deoghar", description: "Deoghar is one of the most important religious cities of Jharkhand with a rich spiritual history. It is home to the famous Baidyanath Dham, one of the 12 Jyotirlingas of Lord Shiva, attracting millions of devotees every year. The city has been a major center of pilgrimage since ancient times, especially during the Shravani Mela. Deoghar also has historical links with local kingdoms and spiritual scholars. Over time, it developed as a cultural and religious hub of eastern India. Today, Deoghar is known worldwide for its faith, traditions, and sacred heritage.", image: "images/deoghar_cover.jpg" },
    { name: "Hazaribagh", category: "city", location: "Hazaribagh", description: "Hazaribagh is a historic town of Jharkhand known for its natural beauty and cultural heritage. During British rule, it developed as a health resort due to its pleasant climate. The region has deep roots in tribal history, especially of the Santhal and Munda communities. Hazaribagh also played a role in India’s freedom movement, with leaders using it as a place of confinement. The famous Hazaribagh National Park reflects its rich wildlife and forest history. Today, the town is known for education, history, and scenic landscapes.", image: "images/hazaribagh_cover.jpg" },
    { name: "Bokaro", category: "city", location: "Bokaro", description: "Bokaro is a planned industrial city of Jharkhand, developed as a major center of steel production in India. It came into prominence with the establishment of the Bokaro Steel Plant in the 1960s, one of the largest public sector steel plants. The city was designed with modern infrastructure, wide roads, and residential sectors. Bokaro grew rapidly with the expansion of heavy industries and supporting townships. Over time, it became an important industrial and educational hub of the region. Today, Bokaro represents India’s progress in steel and industrial development.", image: "images/bokaro_cover.jpg" },
    { name: "Giridih", category: "city", location: "Giridih", description: "Home to the majestic Parasnath Hill, the highest peak in Jharkhand and a world-renowned pilgrimage site for Jains. Giridih is also famous for its natural beauty, including the scenic Usri Falls and the peaceful village of Madhuban.", image: "images/giridih.png" },
    { name: "Palamu", category: "city", location: "Palamu", description: "A region rich in history and wildlife, Palamu is home to the ancient Palamu Forts, built during the Chero dynasty. It also features the Betla National Park, one of the first tiger reserves in India, offering a blend of heritage and nature.", image: "images/palamu.png" },
    { name: "Simdega", category: "city", location: "Simdega", description: "Known as the 'Cradle of Hockey' in India, Simdega is a picturesque district blessed with natural beauty, dense forests, and scenic water bodies like the Kelaghagh Dam and Ramrekha Dham.", image: "images/simdega.png" },




    // --- Waterfalls ---
    { name: "Hundru Falls", category: "waterfall", location: "Ranchi", description: "Hundru Falls is one of the most beautiful natural waterfalls of Jharkhand, formed by the Subarnarekha River on the Chhota Nagpur Plateau. It has existed since ancient times and was closely connected with the life and culture of local tribal communities. The waterfall was considered sacred and used for traditional rituals and gatherings. During the British period, it gained recognition for its scenic beauty. Today, Hundru Falls stands as a symbol of Jharkhand’s rich natural and cultural heritage.", image: "images/hundru-falls.jpg", detailsImage: "images/hundru_falls_details.jpg" },
    { name: "Jonha Falls", category: "waterfall", location: "Ranchi", description: "Also known as Gautamdhara Falls, a hanging valley fall." },
    { name: "Dassam Falls", category: "waterfall", location: "Ranchi", description: "Beautiful waterfall falling from 144 ft near Taimara village." },
    { name: "Panch Gagh Falls", category: "waterfall", location: "Khunti", description: "A picturesque set of five waterfalls in a serene setting." },
    { name: "Hirni Falls", category: "waterfall", location: "West Singhbhum", description: "Located in dense forests near Chakradharpur." },
    { name: "Rajrappa Falls", category: "waterfall", location: "Ramgarh", description: "Where the Bhairavi river meets the Damodar river." },
    { name: "Sita Falls", category: "waterfall", location: "Ranchi", description: "A hidden gem near Jonha, named after Goddess Sita." },
    { name: "Lodh Falls", category: "waterfall", location: "Latehar", description: "The highest waterfall in Jharkhand (468 ft)." },
    { name: "Bhatinda Falls", category: "waterfall", location: "Dhanbad", description: "Rocky waterfall located in Moonidih." },
    { name: "Usri Falls", category: "waterfall", location: "Giridih", description: "A scenic waterfall on the Usri River." },

    // --- Hill Stations & Nature ---
    { name: "Netarhat", category: "hill", location: "Latehar", description: "Queen of Chotanagpur, famous for sunrise and sunsets." },
    { name: "Patratu Valley", category: "hill", location: "Ramgarh", description: "Breathtaking S-curve roads and scenic dam view." },
    { name: "Parasnath Hill", category: "hill", location: "Giridih", description: "The highest peak in the state of Jharkhand, standing at 1,366 meters. It is a major Jain pilgrimage site known as Shikharji, offering breathtaking panoramic views and a serene atmosphere.", image: "images/giridih.png" },
    { name: "Tagore Hill", category: "hill", location: "Ranchi", description: "Associated with Rabindranath Tagore, offers city views." },
    { name: "Canary Hill", category: "hill", location: "Hazaribagh", description: "Offers a bird's eye view of Hazaribagh town." },
    { name: "Dalma Hills", category: "hill", location: "Jamshedpur", description: "Home to the Dalma Wildlife Sanctuary and Elephant Reserve." },
    { name: "Trikut Hill", category: "hill", location: "Deoghar", description: "Three-peaked hill offering trekking and ropeway rides." },
    { name: "Gonda Hill", category: "hill", location: "Ranchi", description: "Scenic hill near Kanke Dam with a rock garden." },

    // --- Heritage ---
    { name: "Palamu Forts", category: "heritage", location: "Latehar", description: "Two majestic forts, the Old Palamu Fort and the New Palamu Fort, located deep within the Betla National Park. These forts were the seats of the Chero kings and represent a significant chapter in Jharkhand's history.", image: "images/palamu.png" },
    { name: "Rajmahal", category: "heritage", location: "Sahibganj", description: "Historic town with Mughal-era ruins on the Ganges." },
    { name: "Navratangarh Fort", category: "heritage", location: "Gumla", description: "Ancient capital of the Nagvanshi dynasty." },
    { name: "Tilaiya Dam Area", category: "heritage", location: "Koderma", description: "Old structures and scenic views near the dam." },
    { name: "Ranchi Lake", category: "heritage", location: "Ranchi", description: "Man-made lake excavated by Colonel Onsley in 1842." },

    // --- Spiritual ---
    { name: "Baidyanath Dham", category: "spiritual", location: "Deoghar", description: "One of the 12 Jyotirlingas, a major Shiva temple." },
    { name: "Parasnath Temple", category: "spiritual", location: "Giridih", description: "Also known as Sammed Shikharji, this is the most sacred pilgrimage site for Jains. It is believed that twenty of the twenty-four Tirthankaras attained Nirvana here.", image: "images/giridih.png" },
    { name: "Rajrappa Temple", category: "spiritual", location: "Ramgarh", description: "Famous Shakti Peeth dedicated to Goddess Chhinnamasta." },
    { name: "Jagannath Temple", category: "spiritual", location: "Ranchi", description: "17th-century temple, a replica of the Puri temple." },
    { name: "Sun Temple", category: "spiritual", location: "Ranchi", description: "Beautiful temple designed like a chariot with 18 wheels." },
    { name: "Tapovan Caves", category: "spiritual", location: "Deoghar", description: "Ancient caves where sages are said to have meditated." },
    { name: "Naulakha Temple", category: "spiritual", location: "Deoghar", description: "Similar architecture to Belur Math, built for 9 lakhs." },
    { name: "Maa Dewri Temple", category: "spiritual", location: "Ranchi", description: "Ancient temple of Goddess Durga with 16 arms." },
    { name: "Baba Basukinath", category: "spiritual", location: "Dumka", description: "Important Shiva temple visited after Baidyanath Dham." },
    { name: "Maluti Temples", category: "spiritual", location: "Dumka", description: "Cluster of 72 ancient terracotta temples." },

    // --- Lakes & Dams ---
    { name: "Patratu Dam", category: "lake", location: "Ramgarh", description: "Massive reservoir perfect for boating and sunsets." },
    { name: "Kanke Dam", category: "lake", location: "Ranchi", description: "Popular spot for sunset views and boating." },
    { name: "Rukka Dam", category: "lake", location: "Ranchi", description: "Also known as Getalsud Dam, main water supply for Ranchi." },
    { name: "Maithon Dam", category: "lake", location: "Dhanbad", description: "Located on Barakar river, famous for its underground powerhouse." },
    { name: "Tenughat Dam", category: "lake", location: "Bokaro", description: "Large earthfill dam on the Damodar river." },
    { name: "Massanjore Dam", category: "lake", location: "Dumka", description: "Also called Canada Dam, offers scenic views." },
    { name: "Konar Dam", category: "lake", location: "Hazaribagh", description: "One of the DVC dams, known for its scenic beauty." },
    { name: "Kelaghagh Dam", category: "lake", location: "Simdega", description: "A major tourist attraction in Simdega, this dam is surrounded by hills and offers a peaceful environment for boating and picnics.", image: "images/simdega.png" },

    // --- Adventure ---
    { name: "Pahari Mandir Trek", category: "adventure", location: "Ranchi", description: "Climb 468 steps to the Shiva temple for a city view." },
    { name: "Parasnath Trek", category: "adventure", location: "Giridih", description: "A challenging yet rewarding 9km trek to the highest peak in Jharkhand. The trail takes you through lush forests and offers stunning vistas of the surrounding plains.", image: "images/giridih.png" },
    { name: "Betla Jeep Safari", category: "adventure", location: "Palamu", description: "Wildlife safari to spot tigers, elephants, and deer." },
    { name: "Rock Garden", category: "adventure", location: "Ranchi", description: "Man-made garden carved out of rocks near Gonda Hill." },
    { name: "Dalma Trek", category: "adventure", location: "Jamshedpur", description: "Trekking trails through the wildlife sanctuary." },

    // --- Hidden Gems ---
    { name: "Madhuban", category: "hidden", location: "Giridih", description: "A peaceful and spiritual village situated at the foothills of Parasnath Hill. It serves as the base for the trek and is home to several ancient Jain temples and dharamshalas.", image: "images/giridih.png" },
    { name: "Lugu Buru", category: "hidden", location: "Bokaro", description: "Sacred religious site for the Santals." },
    { name: "Ulihatu", category: "hidden", location: "Khunti", description: "Birthplace of tribal freedom fighter Bhagwan Birsa Munda." },
    { name: "Dombari Buru", category: "hidden", location: "Khunti", description: "Historical hill associated with Birsa Munda's movement." },
    { name: "Barkagaon Valley", category: "hidden", location: "Hazaribagh", description: "Scenic and largely unexplored forest valley." }
];

const foodData = [
    { name: "Rugda", description: "Rare forest mushroom cooked with spices, famous for earthly flavor." },
    { name: "Chilka Roti", description: "Soft rice and lentil flatbread, served with chutney." },
    { name: "Bamboo Shoots", description: "Tender shoots cooked with mustard, giving a tangy tribal taste." },
    { name: "Dhuska", description: "Crispy fried rice-lentil pancakes, served with ghugni." }
];

const giData = [
    { name: "Sohrai-Khovar Painting", year: "2020", description: "Traditional tribal mural art made by women during festivals." },
    { name: "Jharkhand Silk", year: "2006", description: "Kuchai/Tussar Silk known for fine texture and organic production." },
    { name: "Chakla-Bhajna Fabric", year: "2021", description: "Unique handwoven textile from rural Jharkhand." },
    { name: "Bokaro Metal Craft", year: "Proposed", description: "Intricate metal artworks and utensils." }
];

// Helper to get image based on category if no specific logic
function getPlaceholderImage(category) {
    switch (category) {
        case 'waterfall': return 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80';
        case 'wildlife': return 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80';
        case 'spiritual': return 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80';
        case 'city': return 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80';
        case 'hill': return 'https://images.unsplash.com/photo-1589136777351-943069d27321?auto=format&fit=crop&w=800&q=80';
        case 'lake': return 'https://images.unsplash.com/photo-1596707435889-cb4c32b50424?auto=format&fit=crop&w=800&q=80';
        case 'heritage': return 'https://images.unsplash.com/photo-1588506161405-c1d4719b4db6?auto=format&fit=crop&w=800&q=80';
        case 'hospital': return 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80';
        default: return 'https://images.unsplash.com/photo-1544605963-356fd480e661?auto=format&fit=crop&w=800&q=80';
    }
}

// Append Hospitals Data
destinationsData.push(
    // Ranchi Hospitals
    { name: "RIMS Ranchi", category: "hospital", location: "Ranchi", description: "Rajendra Institute of Medical Sciences (RIMS) is the premier medical institute in Ranchi, providing advanced healthcare services to the state of Jharkhand.", image: "" },
    { name: "Sadar Hospital", category: "hospital", location: "Ranchi", description: "Sadar Hospital is a key government healthcare provider in Ranchi, offering essential medical services to the community.", image: "" },
    { name: "Paras HEC Hospital", category: "hospital", location: "Ranchi", description: "Paras HEC Hospital is a multi-specialty hospital in Ranchi known for its advanced critical care and specialized treatments.", image: "" },
    { name: "Medanta Hospital", category: "hospital", location: "Ranchi", description: "Medanta Hospital (Ranchi Unit) offers world-class super-specialty medical care with state-of-the-art infrastructure.", image: "" },

    // Hazaribagh Hospitals
    { name: "Sheikh Bhikhari Medical College & Hospital", category: "hospital", location: "Hazaribagh", description: "SBMCH is a prominent medical college and hospital in Hazaribagh, providing comprehensive healthcare and medical education.", image: "" },
    { name: "St. Columba's (Mission) Hospital", category: "hospital", location: "Hazaribagh", description: "A historic mission hospital in Hazaribagh, providing quality healthcare services with distinct compassion.", image: "" },
    { name: "HZB Arogyam Superspeciality Hospital", category: "hospital", location: "Hazaribagh", description: "A leading super-specialty hospital in Hazaribagh known for its modern medical facilities and expert care.", image: "" },

    // Other Major Hospitals
    { name: "Tata Main Hospital", category: "hospital", location: "Jamshedpur", description: "A multi-specialty hospital managed by Tata Steel, serving the Jamshedpur region.", image: "" },
    { name: "Bokaro General Hospital", category: "hospital", location: "Bokaro", description: "A large hospital equipped with modern facilities, serving the Bokaro Steel City.", image: "" },
    { name: "PMCH Dhanbad", category: "hospital", location: "Dhanbad", description: "Patliputra Medical College and Hospital, a key healthcare provider in the coal capital.", image: "" },
    { name: "AIIMS Deoghar", category: "hospital", location: "Deoghar", description: "All India Institute of Medical Sciences, offering advanced medical care and research facilities.", image: "" }
);
