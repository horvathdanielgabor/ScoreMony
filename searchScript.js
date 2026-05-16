// Score class
class Score {
    constructor(name, artist, instrument, genre, difficulty, key, fileSize, pageCount, fileName) {
        this.name = name;
        this.artist = artist;
        this.instrument = instrument;
        this.genre = genre;
        this.difficulty = difficulty;
        this.key = key;
        this.fileSize = fileSize;
        this.pageCount = pageCount;
        this.fileName = fileName;
    }
}

// All of the scores, cuz we don't have a database, so we need to hardcode them in :D

const scores = [
    new Score("All Of Me", "Various", "Hegedű", "Jazz", "Kezdő", "A major", 108.81, 1, "IKT_kották/Hegedű/Jazz/Kezdő/Képek/All_of_me/All_of_me_page_0001.jpg"),
    new Score("All I Want For Christmas Is You", "Various", "Fuvola", "Pop", "Közép", "A major", 39.34, 1, "IKT_kották/Fuvola/Pop/Középhaladó/Képek/All_i_want_for_christmas_is_you/all_i_want_for_christmas_is_you_page_0001.jpg"),
    new Score("American Idiot", "Green Day", "Dob", "Rock", "Haladó", "Fm", 63.79, 2, "IKT_kották/Dob/Rock/Haladó/Képek/American_idiot/american_idiot_green_day_drum_transcription_page_0001.jpg"),
    new Score("Ave Maria", "Schubert", "Hegedű", "Klasszikus", "Közép", "B major", 144.90, 1, "IKT_kották/Hegedű/Klasszikus/Középhaladó/Képek/Ave_Maria/schubert_ave_maria_violin_page_0001.jpg"),
    new Score("Barney Brallaghan", "Various", "Fuvola", "Klasszikus", "Kezdő", "C major", 47.99, 1, "IKT_kották/Fuvola/Klasszikus/Kezdő/Képek/Barney_Brallaghan/barney_brallaghan_page_0001.jpg"),
    new Score("Beautiful Things", "Various", "Gitár", "Pop", "Kezdő", "G major", 145.88, 1, "IKT_kották/Gitár/Pop/Kezdő/Képek/Beautiful_things/Beautiful_things_page_0001.jpg"),
    new Score("Billie Jean", "Michael Jackson", "Dob", "Pop", "Kezdő", "F# minor", 267.61, 4, "IKT_kották/Dob/Pop/Kezdő/Képek/Billie_Jean/17_Billie_Jean_page_0001.jpg"),
    new Score("Bohemian Rhapsody", "Queen", "Hegedű", "Rock", "Közép", "Bbm", 101.47, 1, "IKT_kották/Hegedű/Rock/Középhaladó/Képek/Bohemian_Rhapsody/Bohemian_Rhapsody_page_0001.jpg"),
    new Score("Boogie Woogie Stomp", "Various", "Zongora", "Jazz", "Kezdő", "Bb major", 55.68, 1, "IKT_kották/Zongora/Jazz/Kezdő/Képek/Boogie_Woogie_Stomp/Boogie_Woogie_Stomp_page_0001.jpg"),
    new Score("Boulevard Of Broken Dreams", "Green Day", "Gitár", "Rock", "Kezdő", "F# major", 208.05, 4, "IKT_kották/Gitár/Rock/Kezdő/Képek/Boulevard_of_broken_dreams/Guitar_Green_Day_Boulevard_Web_page_0002.jpg"),
    new Score("Bye Bye Blackbird", "Various", "Hegedű", "Jazz", "Haladó", "F major", 114.05, 1, "IKT_kották/Hegedű/Jazz/Haladó/Képek/bye_bye_blackbird/bye_bye_blackbird_page_0001.jpg"),
    new Score("Canon In D", "Pachelbel", "Hegedű", "Klasszikus", "Kezdő", "D major", 93.74, 1, "IKT_kották/Hegedű/Klasszikus/Kezdő/Képek/Canon_in_D/Canon_in_D_page_0001.jpg"),
    new Score("Could Have Been Me", "Various", "Zongora", "Rock", "Haladó", "B major", 69.32, 1, "IKT_kották/Zongora/Rock/Haladó/Képek/Could_Have_Been_Me/Could_Have_Been_Me_page_0001.jpg"),
    new Score("Counting And Subdividing", "Various", "Dob", "Klasszikus", "Kezdő", "4/4 time", 41.68, 1, "IKT_kották/Dob/Klasszikus/Kezdő/Képek/Counting_and_Subdividing_in_44/counting_and_subdividing_page_0001.jpg"),
    new Score("Daisy", "Various", "Fuvola", "Pop", "Kezdő", "G major", 31.27, 1, "IKT_kották/Fuvola/Pop/Kezdő/Képek/Daisy/a_bicycle_built_for_two_flute_page_0001.jpg"),
    new Score("Defying Gravity", "Wicked", "Zongora", "Zenés színház", "Kezdő", "C major", 102.98, 1, "IKT_kották/Zongora/Zenés_színház/Kezdő/Képek/Defying_Gravity/Defying_Gravity_page_0001.jpg"),
    new Score("Die With A Smile", "Lady Gaga", "Gitár", "Pop", "Haladó", "A major", 136.78, 1, "IKT_kották/Gitár/Pop/Haladó/Képek/Die_with_a_smile/Die_with_a_smile_page_0001.jpg"),
    new Score("Don't Start Now", "Dua Lipa", "Dob", "Pop", "Haladó", "F major", 51.87, 2, "IKT_kották/Dob/Pop/Haladó/Képek/Dont_start_now/dont_start_now_page_0001.jpg"),
    new Score("Fascination", "Various", "Gitár", "Klasszikus", "Közép", "D major", 83.94, 1, "IKT_kották/Gitár/Klasszikus/Középhaladó/Képek/Fascination/Fascination_page_0001.jpg"),
    new Score("Für Elise", "Beethoven", "Zongora", "Klasszikus", "Közép", "A minor", 129.26, 4, "IKT_kották/Zongora/Klasszikus/Középhaladó/Képek/Für_Elise/fur_elise_beethoven_page_0001.jpg"),
    new Score("Gentlemen", "Ravel", "Zongora", "Klasszikus", "Haladó", "G major", 74.87, 1, "IKT_kották/Zongora/Klasszikus/Haladó/Képek/Goodness_Of_God/Goodness_Of_God_page_0001.jpg"),
    new Score("Geralt Of Rivia", "Various", "Gitár", "Zenés színház", "Haladó", "Am", 114.42, 1, "IKT_kották/Gitár/Zenés_színház/Haladó/Képek/Geralt_Of_Rivia/Geralt_Of_Rivia_page_0001.jpg"),
    new Score("Ghostbusters", "Ray Parker Jr.", "Dob", "Zenés színház", "Közép", "Em", 90.67, 1, "IKT_kották/Dob/Zenés_színház/Középhaladó/Képek/Ghostbusters/Ghostbusters_page_0001.png"),
    new Score("Girl From Ipanema", "Various", "Gitár", "Jazz", "Haladó", "G major", 161.85, 1, "IKT_kották/Gitár/Jazz/Haladó/Képek/The_girl_from_Ipanema/The_girl_from_Ipanema_page_0001.jpg"),
    new Score("Girls Like You", "Various", "Hegedű", "Pop", "Kezdő", "F# major", 138.22, 1, "IKT_kották/Hegedű/Pop/Kezdő/Képek/Girls_like_you/Girls_like_you_page_0001.jpg"),
    new Score("Golden", "Various", "Hegedű", "Zenés színház", "Kezdő", "F# major", 63.30, 1, "IKT_kották/Hegedű/Zenés_színház/Kezdő/Képek/Golden/Golden_page_0001.jpg"),
    new Score("Grande Valse Brillante", "Chopin", "Gitár", "Klasszikus", "Haladó", "A major", 137.05, 1, "IKT_kották/Gitár/Klasszikus/Haladó/Képek/Grande_valse_brillante_Op.18/Grande_valse_brillante_Op.18__page_0001.jpg"),
    new Score("Hammer To Fall", "Queen", "Dob", "Rock", "Kezdő", "Bm", 44.98, 4, "IKT_kották/Dob/Rock/Kezdő/Képek/Hammer_to_fall/hammer_to_fall_page_0001.jpg"),
    new Score("He's A Pirate", "Various", "Fuvola", "Zenés színház", "Haladó", "G major", 146.03, 1, "IKT_kották/Fuvola/Zenés_színház/Haladó/Képek/Hes_a_pirate/Hes_a_pirate_page_0001.jpg"),
    new Score("Holiday", "Green Day", "Dob", "Rock", "Közép", "E major", 73.49, 5, "IKT_kották/Dob/Rock/Középhaladó/Képek/Holiday/holiday_green_day_drum_chart2_page_0001.jpg"),
    new Score("I Really Want To Stay At Your House", "Various", "Zongora", "Zenés színház", "Haladó", "D major", 139.20, 1, "IKT_kották/Zongora/Zenés_színház/Haladó/Képek/I_Really_Want_To_Stay_At_Your_House/I_Really_Want_To_Stay_At_Your_House_page_0001.jpg"),
    new Score("I Won't Say I'm In Love", "Disney", "Dob", "Zenés színház", "Kezdő", "D major", 109.63, 1, "IKT_kották/Dob/Zenés_színház/Kezdő/Képek/I_wont_say_Im_in_love/I_wont_say_Im_in_love_page_0001.jpg"),
    new Score("Pink Pony Club", "Chappell Roan", "Zongora", "Pop", "Kezdő", "C major", 126.16, 1, "IKT_kották/Zongora/Pop/Kezdő/Képek/Pink_Pony_Club/Pink_Pony_Club_page_0001.jpg"),
    new Score("Jazz Independence 1", "Various", "Dob", "Jazz", "Kezdő", "Bb major", 41.71, 1, "IKT_kották/Dob/Jazz/Kezdő/Képek/Jazz_exercises_1/jazz_independence_exercises_1_page_0001.jpg"),
    new Score("Jazz Independence 2", "Various", "Dob", "Jazz", "Közép", "F major", 46.91, 1, "IKT_kották/Dob/Jazz/Középhaladó/Képek/Jazz_independence_exercises_2/jazz_independence_exercises_2_page_0001.jpg"),
    new Score("Jazz Vespas", "Various", "Dob", "Jazz", "Haladó", "C major", 80.92, 3, "IKT_kották/Dob/Jazz/Haladó/Képek/Jazz_Vespas/Jazz_Vespas_Drums_page_0001.jpg"),
    new Score("Love For Sale", "Various", "Gitár", "Jazz", "Kezdő", "F major", 104.76, 1, "IKT_kották/Gitár/Jazz/Kezdő/Képek/Love_for_sale/Love_for_sale_page_0001.jpg"),
    new Score("Lose Control", "Various", "Zongora", "Pop", "Közép", "D major", 108.14, 1, "IKT_kották/Zongora/Pop/Középhaladó/Képek/Lose_Control/Lose_Control_page_0001.jpg"),
    new Score("Malaguena", "Various", "Gitár", "Klasszikus", "Kezdő", "E major", 62.77, 1, "IKT_kották/Gitár/Klasszikus/Kezdő/Képek/Malaguena/Malaguena_page_0001.jpg"),
    new Score("Maple Leaf Rag", "Joplin", "Zongora", "Jazz", "Haladó", "A major", 114.49, 4, "IKT_kották/Zongora/Jazz/Haladó/Képek/Maple_leaf_rag/Maple_Leaf_Rag_page_0001.jpg"),
    new Score("Minor Swing", "Django Reinhardt", "Hegedű", "Jazz", "Közép", "D minor", 158.78, 1, "IKT_kották/Hegedű/Jazz/Középhaladó/Képek/Minor_swing/Minor_swing_page_0001.jpg"),
    new Score("Moeller Jam", "Various", "Dob", "Klasszikus", "Haladó", "G major", 19.28, 1, "IKT_kották/Dob/Klasszikus/Haladó/Képek/Moeller_Jam/moeller_jam_page_0001.jpg"),
    new Score("Moonlight Serenade", "Glenn Miller", "Fuvola", "Jazz", "Közép", "G major", 508.60, 1, "IKT_kották/Fuvola/Jazz/Középhaladó/Képek/Moonlight_Serenade/miller_glenn_moonlight_serenade_112285_page_0001.jpg"),
    new Score("Never Enough", "The Greatest Showman", "Hegedű", "Zenés színház", "Közép", "Cm", 69.51, 1, "IKT_kották/Hegedű/Zenés_színház/Középhaladó/Képek/Never_Enough/Never_Enough_page_0001.jpg"),
    new Score("Nothing Else Matters", "Metallica", "Gitár", "Rock", "Haladó", "Em", 110.56, 1, "IKT_kották/Gitár/Rock/Haladó/Képek/Nothing_else_matters/Nothing_else_matters_page_0001.jpg"),
    new Score("Nuvole Bianche", "Einaudi", "Zongora", "Klasszikus", "Kezdő", "E major", 42.19, 1, "IKT_kották/Zongora/Klasszikus/Kezdő/Képek/Nuvole_Bianche/Nuvole_Bianche_page_0001.jpg"),
    new Score("Ordinary", "Various", "Hegedű", "Pop", "Közép", "A major", 125.62, 1, "IKT_kották/Hegedű/Pop/Középhaladó/Képek/Ordinary/Ordinary_page_0001.jpg"),
    new Score("Over The Rainbow", "Wizard Of Oz", "Fuvola", "Zenés színház", "Közép", "C major", 60.35, 2, "IKT_kották/Fuvola/Zenés_színház/Középhaladó/Képek/Over_the_rainbow/over_the_rainbow_page_0001.jpg"),
    new Score("Paint It Black", "Rolling Stones", "Hegedű", "Rock", "Haladó", "B minor", 114.97, 1, "IKT_kották/Hegedű/Rock/Haladó/Képek/Paint_it_black/Paint_it_black_page_0001.jpg"),
    new Score("Peaches", "Various", "Gitár", "Zenés színház", "Kezdő", "D major", 76.54, 1, "IKT_kották/Gitár/Zenés_színház/Kezdő/Képek/Peaches/Peaches_page_0001.jpg"),
    new Score("Phantom Of The Opera", "Lloyd Webber", "Fuvola", "Zenés színház", "Kezdő", "Am", 35.75, 1, "IKT_kották/Fuvola/Zenés_színház/Kezdő/Képek/The_phantom_of_the_opera/The_phantom_of_the_opera_page_0001.jpg"),
    new Score("Ravel Bolero", "Maurice Ravel", "Fuvola", "Klasszikus", "Közép", "C major", 84.95, 1, "IKT_kották/Fuvola/Klasszikus/Középhaladó/Képek/Bolero/ravel_bolero_page_0001.jpg"),
    new Score("Rather Be", "Clean Bandit", "Hegedű", "Pop", "Haladó", "F# major", 144.58, 1, "IKT_kották/Hegedű/Pop/Haladó/Képek/Rather_be/Rather_be_page_0001.jpg"),
    new Score("Rewrite The Stars", "The Greatest Showman", "Zongora", "Zenés színház", "Közép", "D major", 130.86, 1, "IKT_kották/Zongora/Zenés_színház/Középhaladó/Képek/Rewrite_The_Stars/Rewrite_The_Stars_page_0001.jpg"),
    new Score("Rythme Ruse", "Various", "Fuvola", "Pop", "Haladó", "G major", 463.86, 3, "IKT_kották/Fuvola/Pop/Haladó/Képek/Rythme_rusé/chauve_thierry_rythme_ruse_183039_page_0002.jpg"),
    new Score("Rolling In The Deep", "Adele", "Dob", "Pop", "Közép", "Dm", 52.09, 3, "IKT_kották/Dob/Pop/Középhaladó/Képek/Rolling_in_the_deep/rolling_in_the_deep_page_0001.jpg"),
    new Score("Shallow", "Lady Gaga", "Gitár", "Pop", "Közép", "A major", 118.77, 1, "IKT_kották/Gitár/Pop/Középhaladó/Képek/Shallow/Shallow_page_0001.jpg"),
    new Score("Smile", "Various", "Zongora", "Jazz", "Közép", "F major", 72.89, 1, "IKT_kották/Zongora/Jazz/Középhaladó/Képek/Smile/Smile_page_0001.jpg"),
    new Score("Smells Like Teen Spirit", "Nirvana", "Gitár", "Rock", "Közép", "F major", 213.12, 3, "IKT_kották/Gitár/Rock/Középhaladó/Képek/Smells_like_teen_spirit/Jam_Nirvana_Smells_Like_Teen_Spirit_2019_page_0001.jpg"),
    new Score("Solo Violin Partita 2", "Bach", "Hegedű", "Klasszikus", "Haladó", "D minor", 190.35, 1, "IKT_kották/Hegedű/Klasszikus/Haladó/Képek/Solo_Violin_Partita_No._2_in_D_Minor/Solo_Violin_Partita_No._2_in_D_Minor_page_0001.jpg"),
    new Score("Someone You Loved", "Lewis Capaldi", "Zongora", "Pop", "Haladó", "G major", 79.58, 1, "IKT_kották/Zongora/Pop/Haladó/Képek/Someone_You_Loved/Someone_You_Loved_page_0001.jpg"),
    new Score("Spring", "Vivaldi", "Fuvola", "Klasszikus", "Haladó", "E major", 143.69, 5, "IKT_kották/Fuvola/Klasszikus/Haladó/Képek/Spring/vivaldi_the_four_seasons_spring_page_0001.jpg"),
    new Score("Summer Nights", "Michele Gori", "Fuvola", "Jazz", "Haladó", "Bb major", 56.96, 2, "IKT_kották/Fuvola/Jazz/Haladó/Képek/Summer_Nights/summer_nights_michele_gori_page_0001.jpg"),
    new Score("Sweet Child O' Mine", "Guns N' Roses", "Fuvola", "Rock", "Haladó", "D major", 114.88, 1, "IKT_kották/Fuvola/Rock/Haladó/Képek/Sweet_Child_o_mine/Sweet_Child_o_mine_page_0001.jpg"),
    new Score("Take Five", "Dave Brubeck", "Gitár", "Jazz", "Közép", "Em", 123.51, 1, "IKT_kották/Gitár/Jazz/Középhaladó/Képek/Take_Five/Take_five_page_0001.jpg"),
    new Score("The Lion King", "Elton John", "Dob", "Zenés színház", "Haladó", "A major", 202.71, 1, "IKT_kották/Dob/Zenés_színház/Haladó/Képek/The_lion_king/The_lion_king_page_0001.jpg"),
    new Score("The Show Must Go On", "Queen", "Zongora", "Rock", "Közép", "B major", 69.48, 1, "IKT_kották/Zongora/Rock/Középhaladó/Képek/The_Show_Must_Go_On/The_Show_Must_Go_On_page_0001.jpg"),
    new Score("Under The Sea", "Disney", "Gitár", "Zenés színház", "Közép", "F major", 44.32, 1, "IKT_kották/Gitár/Zenés_színház/Középhaladó/Képek/Under_the_sea/Under_the_sea_page_0001.jpg"),
    new Score("Viva La Vida", "Coldplay", "Hegedű", "Rock", "Kezdő", "Dm", 128.96, 1, "IKT_kották/Hegedű/Rock/Kezdő/Képek/Viva_la_vida/viva_la_vida_page_0001.jpg"),
    new Score("Viva La Vida (Flute)", "Coldplay", "Fuvola", "Rock", "Közép", "Dm", 115.86, 1, "IKT_kották/Fuvola/Rock/Középhaladó/Képek/Viva_la_vida/viva_la_vida_page_0001.jpg"),
    new Score("We Don't Talk About Bruno", "Encanto", "Hegedű", "Zenés színház", "Haladó", "C major", 47.07, 1, "IKT_kották/Hegedű/Zenés_színház/Haladó/Képek/We_dont_talk_about_Bruno/We_dont_talk_about_Bruno_page_0001.jpg"),
    new Score("When The Saints Go Marching In", "Various", "Fuvola", "Jazz", "Kezdő", "F major", 40.89, 1, "IKT_kották/Fuvola/Jazz/Kezdő/Képek/When_the_saints_go_marching_in/when_the_saints_go_marching_in_page_0001.jpg"),
    new Score("Yellow", "Coldplay", "Fuvola", "Rock", "Kezdő", "Gm", 37.04, 1, "IKT_kották/Fuvola/Rock/Kezdő/Képek/Yellow/Yellow_page_0001.jpg"),
    new Score("Yesterday", "The Beatles", "Zongora", "Rock", "Kezdő", "F major", 63.08, 1, "IKT_kották/Zongora/Rock/Kezdő/Képek/Yesterday/Yesterday_page_0001.jpg"),
    new Score("Afro Caribbean Rhythms", "Various", "Dob", "Klasszikus", "Közép", "A minor", 53.50, 2, "IKT_kották/Dob/Klasszikus/Középhaladó/Képek/Afro_Caribbean_Rhythms/afrocaribbean_rhythms_page_0001.jpg")
];

const filterMappings = {
    // Style/Genre filters
    'Rock': 'Rock',
    'Klasszikus': 'Klasszikus',
    'Jazz': 'Jazz',
    'Pop': 'Pop',
    'Zenés Színház': 'Zenés Színház'
};

const difficultyMappings = {
    'Kezdő': 'Kezdő',
    'Közép': 'Közép',
    'Haladó': 'Haladó'
};

// Element template
function createScoreElement(score) {
    const scoreElement = document.createElement('div');
    scoreElement.classList.add('scoreResult');
    let instrumentIcon;
    switch (score.instrument) {
        case 'Hegedű': instrumentIcon = 'images/hangszerek/violin.svg';
            break;
        case 'Fuvola': instrumentIcon = 'images/hangszerek/transverse-flute.svg';
            break;
        case 'Gitár': instrumentIcon = 'images/hangszerek/guitar.svg';
            break;
        case 'Dob': instrumentIcon = 'images/hangszerek/drum.svg';
            break;
        case 'Zongora': instrumentIcon = 'images/hangszerek/grand-piano.svg';
            break;
        default: instrumentIcon = 'images/reloadIcon.svg';
    }
    scoreElement.innerHTML = `
        <div class="scoreResultImage" style="background-image: url('${score.fileName}');"></div>
        <div class="scoreResultInfo">
            <div class="scoreResultTop">
                <h2 class="scoreName">${score.name}</h2>
                <div class="scoreArtistContainer">
                    <img class="scoreInstrumentIcon" src="${instrumentIcon}" alt="${score.instrument} icon">
                    <p class="scoreArtist">${score.artist}</p>
                </div>

            </div>
            <div class="scoreResultBottom">
                <div class="scoreResultCorner scoreCornerLeft">
                    <p class="scoreGenre">${score.genre}</p>
                </div>
                <div class="scoreResultCorner scoreCornerRight ${score.difficulty}ScoreColor">
                    <p class="scoreDifficulty">${score.difficulty}</p>
                </div>
            </div>
            <div class="scoreResultHoverContent">
                <button class="scoreResultCloseBtn" aria-label="Close">×</button>
                <p class="scoreInstrument"><strong>Hangszer:</strong> ${score.instrument}</p>
                <p class="scoreKey"><strong>Kulcs:</strong> ${score.key}</p>
                <div class="scoreResultMetadata">
                    <p class="scorePages"><strong>Oldal:</strong> ${score.pageCount}</p>
                    <p class="scoreFileSize"><strong>Fájlméret:</strong> ${score.fileSize} KB</p>
                </div>
            </div>
        </div>
    `;
    return scoreElement;
}

// Get selected filters
function getSelectedInstrumentFilters() {
    const selectedInstruments = [];

    const filterSections = document.querySelectorAll('.filterSection');
    if (filterSections.length > 0) {
        const instrumentSection = filterSections[0];
        const checkboxes = instrumentSection.querySelectorAll('input[type="checkbox"]');
        const labels = instrumentSection.querySelectorAll('p');

        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked && labels[index]) {
                selectedInstruments.push(labels[index].textContent);
            }
        });
    }
    return selectedInstruments;
}

function getSelectedGenreFilters() {
    const selectedGenres = [];

    const filterSections = document.querySelectorAll('.filterSection');
    if (filterSections.length > 1) {
        const styleSection = filterSections[1];
        const checkboxes = styleSection.querySelectorAll('input[type="checkbox"]');
        const labels = styleSection.querySelectorAll('p');

        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked && labels[index]) {
                selectedGenres.push(labels[index].textContent);
            }
        });
    }
    return selectedGenres;
}

function getSelectedDifficultyFilters() {
    const selectedDifficulties = [];

    const filterSections = document.querySelectorAll('.filterSection');
    if (filterSections.length > 2) {
        const difficultySection = filterSections[2];
        const checkboxes = difficultySection.querySelectorAll('input[type="checkbox"]');
        const labels = difficultySection.querySelectorAll('p');

        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked && labels[index]) {
                selectedDifficulties.push(labels[index].textContent);
            }
        });
    }
    return selectedDifficulties;
}

// Search and filter function
function performSearch() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('query', searchInput);
    history.replaceState(null, null, "?" + urlParams.toString());

    const resultCont = document.getElementById("resultCont");
    const selectedInstruments = getSelectedInstrumentFilters();
    const selectedGenres = getSelectedGenreFilters();
    const selectedDifficulties = getSelectedDifficultyFilters();

    let filteredScores = scores;

    if (searchInput.trim() !== "") {
        filteredScores = filteredScores.filter(score =>
            score.name.toLowerCase().trim().includes(searchInput) ||
            score.artist.toLowerCase().trim().includes(searchInput)
        );
    }

    if (selectedInstruments.length > 0) {
        filteredScores = filteredScores.filter(score =>
            selectedInstruments.includes(score.instrument)
        );
    }

    if (selectedGenres.length > 0) {
        filteredScores = filteredScores.filter(score =>
            selectedGenres.includes(score.genre)
        );
    }

    if (selectedDifficulties.length > 0) {
        filteredScores = filteredScores.filter(score =>
            selectedDifficulties.includes(score.difficulty)
        );
    }

    // Clear results cuz why not
    resultCont.innerHTML = "";

    // Display results or throw bs message if no results
    if (filteredScores.length === 0) {
        const noMatch = document.createElement('div');
        noMatch.classList.add('noMatch');
        noMatch.textContent = "Whoops, something went wrong";
        resultCont.appendChild(noMatch);
    } else {
        filteredScores.forEach(score => {
            resultCont.appendChild(createScoreElement(score));
        });

        // Reattach SM view handlers and close buttons after creating new cards
        attachSmViewHandlers();
        const closeButtons = document.querySelectorAll('.scoreResultCloseBtn');
        closeButtons.forEach(btn => {
            btn.removeEventListener('click', handleCloseClick);
            btn.addEventListener('click', handleCloseClick);
        });
    }
}

// Load search result from home via query
window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    if (query) {
        document.getElementById("searchInput").value = query;
        performSearch();
    }
});

// SM view onclick handlers - expand/collapse with redirect
function isSmView() {
    return document.body.clientWidth <= 768;
}

function attachSmViewHandlers() {
    const cards = document.querySelectorAll('.scoreResult');
    cards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });
}

function handleCardClick(e) {
    const scoreData = {
        name: this.querySelector('.scoreName')?.textContent || '',
        artist: this.querySelector('.scoreArtist')?.textContent || '',
        instrument: this.querySelector('.scoreInstrument')?.innerHTML.split(">")[2].trim() || '',
        genre: this.querySelector('.scoreGenre')?.textContent || '',
        difficulty: this.querySelector('.scoreDifficulty')?.textContent || '',
        key: this.querySelector('.scoreKey')?.textContent.split(": ")[1] || '',
        imgName: this.querySelector('.scoreResultImage')?.style.backgroundImage.slice(5, -2) || '',
    };

    if (!isSmView()) {
        localStorage.setItem('selectedScore', JSON.stringify(scoreData));
        window.location.href = 'sheet.html';
    }
    else{
        // Don't expand if clicking the close button
        if (e.target.classList.contains('scoreResultCloseBtn')) return;

        const isExpanded = this.classList.contains('expanded');

        if (!isExpanded) {
            // Not expanded yet - close other cards and expand this one
            document.querySelectorAll('.scoreResult.expanded').forEach(card => {
                card.classList.remove('expanded');
            });
            this.classList.add('expanded');
        } else {
            localStorage.setItem('selectedScore', JSON.stringify(scoreData));
            localStorage.setItem("pdfName", pdfName);
            window.location.href = 'sheet.html';
        }
    }
}

function handleCloseClick(e) {
    if (!isSmView()) return;
    e.stopPropagation();
    // Close the expanded menu
    const card = e.target.closest('.scoreResult');
    if (card) {
        card.classList.remove('expanded');
    }
}

// Search on Enter key and setup checkbox listeners
document.addEventListener('DOMContentLoaded', function() { // I can explain, this is here for a reason: it doesn't work without it :>
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener('keypress', function(e) {
        // But what if ALL key presses did that?
        // performSearch();
        if (e.key === 'Enter') {
            performSearch();
        }
    });


    
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            performSearch();
        });
    });

    const resultCont = document.getElementById("resultCont");
    scores.forEach(score => {
        resultCont.appendChild(createScoreElement(score));
    });

    // Initialize menu state for SM view
    if (isSmView()) {
        const searchBarEl = document.getElementById("searchBarContainer");
        if (searchBarEl) {
            searchBarEl.classList.add("menu-closed");
        }
    }

    // Initialize SM view handlers and close buttons
    attachSmViewHandlers();
    const closeButtons = document.querySelectorAll('.scoreResultCloseBtn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', handleCloseClick);
    });
});

// Filter dropdown animation and mobile menu

function filterDropDownTrigger(el){
    holderParent = el.parentElement.nextSibling.nextSibling;
    if (!el.classList.contains("spinEffect")) {
        el.classList.add("spinEffect");
        holderParent.style.maxHeight = 0;
        setTimeout(() => {
            el.style.transform = "rotate(-90deg)";
        }, 500)
    }
    else{
        el.classList.remove("spinEffect");
        holderParent.style.maxHeight = holderParent.scrollHeight + "px";
        setTimeout(() => {
            el.classList.add("spinEffectBack");
        }, 10)
        setTimeout(() => {
            el.style.transform = "none";
            el.classList.remove("spinEffectBack");
        }, 500)
    }
}

function menuOpenClose(){
    let menuEl = document.getElementById("filterCont");
    let btnEl = document.getElementById("filterMenuTriggerCont");
    let searchBarEl = document.getElementById("searchBarContainer");
    let btnIcon = document.getElementById("arrowCont");

    if (!menuEl.classList.contains("activeMenu")) {
        menuEl.classList.add("activeMenu");
        if (document.body.clientWidth > 768) {
            btnIcon.style.transform = "rotate(90deg)";
        }
        else {
            btnIcon.style.transform = "rotate(180deg)";
        }

        if (searchBarEl) {
            searchBarEl.classList.remove("menu-closed");
        }
    }
    else {
        menuEl.classList.remove("activeMenu");
        if (document.body.clientWidth > 768) {
            btnIcon.style.transform = "rotate(-90deg)";
        }
        else {
            btnIcon.style.transform = "rotate(0deg)";
        }

        if (searchBarEl) {
            searchBarEl.classList.add("menu-closed");
        }
    }
}

// Rezise responsivity handler

window.addEventListener("resize", () => {
    let menuEl = document.getElementById("filterCont");
    let btnIcon = document.getElementById("arrowCont");
    
    if (document.body.clientWidth > 1180) {
        menuEl.style.display = "block";
        menuEl.classList.remove("activeMenu");
        menuEl.style.width = '';
        let searchBarEl = document.getElementById("searchBarContainer");
        if (searchBarEl) {
            searchBarEl.classList.remove("menu-closed");
        }
        // Close expanded cards when leaving SM view
        document.querySelectorAll('.scoreResult.expanded').forEach(card => {
            card.classList.remove('expanded');
        });
    } else if (document.body.clientWidth > 768) {
        // Header
        for (let element of document.getElementsByClassName("topnav")) {
            element.style = null;
            for (const innerElement of element.children) {
                    innerElement.style = null;
                    for (const child of innerElement.children) {child.style = null};
                    innerElement.style = null;
                }
            };
        document.getElementsByClassName("icon")[0].children[0].src = "images/UserIcon.png";

        // Menu
        menuEl.classList.remove("activeMenu");
        btnIcon.style.transform = "rotate(-90deg)";
        let searchBarEl = document.getElementById("searchBarContainer");
        if (searchBarEl) {
            searchBarEl.classList.add("menu-closed");
        }
        // Close expanded cards when leaving SM view
        document.querySelectorAll('.scoreResult.expanded').forEach(card => {
            card.classList.remove('expanded');
        });
    } else if (document.body.clientWidth <= 768) {
        // Reattach handlers when resizing into SM view
        attachSmViewHandlers();
        btnIcon.style.transform = "rotate(0deg)";
    }
});


// Header code (mock of app.js header)

function headerSlidePush(onBlock) {
  var allFound = document.getElementsByClassName(onBlock);
  var turnOn = Array(...allFound).find(item => item.className.includes("slide"));
  var change = Array(...allFound).find(item => item.className.includes("icon")).children[0];
  let searchIn = document.getElementById("searchInput");

  if (turnOn.style.width == "") {
    containOriginal = change.src;
    change.src = "images/CloseIcon.png";

    for (const element of document.getElementsByClassName("topnav")[0].children)
    {
      if (!element.className.includes(onBlock))
      {
        element.style.width = "0%";
      }
      else
      {
        for (const innerElement of element.children)
        {
          if (!innerElement.className.includes(onBlock) && innerElement.tagName != "IMG")
          {
            innerElement.style.width = "0%";
            innerElement.style.order = 4
          }
        }
      }
    }

    document.getElementsByClassName("topnav")[0].children[1].style.width = "80%"
    turnOn.style.order = onBlock == "search"? 2 : 4
    turnOn.style.width = "100%";
    searchIn.style.width = "0%";
    searchIn.style.padding = "0px";
    searchIn.style.border = "none";
  }
  else
  {
    change.src = containOriginal;
    document.getElementsByClassName("topnav")[0].children[1].style.width = "60%"

    for (const element of document.getElementsByClassName("topnav")[0].children)
    {
      element.style.width = null;
      for (const innerElement of element.children)
      {
        innerElement.style.width = null;
        for (const child of innerElement.children) {child.style.width = null};
        innerElement.style.order = null;
      }
    }

    searchIn.style.width = "100%";
    searchIn.style.padding = "0 15px";
    searchIn.style.border = "2px solid #f0f1ff";
  }
}