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
// This is the only part done by AI, cuz I am too lazy to write them all, cry about it
const scores = [
    new Score("All Of Me", "Various", "Hegedű", "Jazz", "Kezdő", "A major", 108.81, 1, "IKT_kották/Hegedű/Jazz/Kezdő/Képek/All_of_me/All_of_me.jpg"),
    new Score("All I Want For Christmas Is You", "Various", "Fuvola", "Pop", "Közép", "A major", 39.34, 1, "IKT_kották/Fuvola/Pop/Középhaladó/Képek/All_i_want_for_christmas_is_you/all_i_want_for_christmas_is_you.jpg"),
    new Score("American Idiot", "Green Day", "Dob", "Rock", "Haladó", "Fm", 63.79, 2, "IKT_kották/Dob/Rock/Haladó/Képek/American_idiot/american_idiot_green_day_drum_transcription_page_0001.jpg"),
    new Score("Ave Maria", "Schubert", "Hegedű", "Klasszikus", "Közép", "B major", 144.90, 1, "IKT_kották/Hegedű/Klasszikus/Középhaladó/Képek/Ave_Maria/schubert_ave_maria_violin_page_0001.jpg"),
    new Score("Barney Brallaghan", "Various", "Fuvola", "Klasszikus", "Kezdő", "C major", 47.99, 1, "IKT_kották/Fuvola/Klasszikus/Kezdő/Képek/Barney_Brallaghan/barney_brallaghan_page_0001.jpg"),
    new Score("Beautiful Things", "Various", "Gitár", "Pop", "Kezdő", "G major", 145.88, 1, "IKT_kották/Gitár/Pop/Kezdő/Képek/Beautiful_things.jpg"),
    new Score("Billie Jean", "Michael Jackson", "Dob", "Pop", "Kezdő", "F# minor", 267.61, 4, "IKT_kották/Dob/Pop/Kezdő/Képek/Billie_Jean/17._Billie_Jean_page_0001.jpg"),
    new Score("Bohemian Rhapsody", "Queen", "Hegedű", "Rock", "Közép", "Bbm", 101.47, 1, "IKT_kották/Hegedű/Rock/Középhaladó/Képek/Bohemian_Rhapsody.jpg"),
    new Score("Boogie Woogie Stomp", "Various", "Zongora", "Jazz", "Kezdő", "Bb major", 55.68, 1, "IKT_kották/Zongora/Jazz/Kezdő/Képek/Boogie_Woogie_Stomp.jpg"),
    new Score("Boulevard Of Broken Dreams", "Green Day", "Gitár", "Rock", "Kezdő", "F# major", 208.05, 4, "IKT_kották/Gitár/Rock/Kezdő/Képek/Boulevard_of_broken_dreams/Guitar_Green_Day_Boulevard_Web_page_0001.jpg"),
    new Score("Bye Bye Blackbird", "Various", "Hegedű", "Jazz", "Haladó", "F major", 114.05, 1, "IKT_kották/Hegedű/Jazz/Haladó/Képek/bye_bye_blackbird.jpg"),
    new Score("Canon In D", "Pachelbel", "Hegedű", "Klasszikus", "Kezdő", "D major", 93.74, 1, "IKT_kották/Hegedű/Klasszikus/Kezdő/Képek/Canon_in_D.jpg"),
    new Score("Could Have Been Me", "Various", "Zongora", "Rock", "Haladó", "B major", 69.32, 1, "IKT_kották/Zongora/Rock/Haladó/Képek/Could_Have_Been_Me.jpg"),
    new Score("Counting And Subdividing", "Various", "Dob", "Klasszikus", "Kezdő", "4/4 time", 41.68, 1, "IKT_kották/Dob/Klasszikus/Kezdő/Képek/Counting_and_Subdividing_in_44/counting_and_subdividing_page_0001.jpg"),
    new Score("Daisy", "Various", "Fuvola", "Pop", "Kezdő", "G major", 31.27, 1, "IKT_kották/Fuvola/Pop/Kezdő/Képek/Daisy/a_bicycle_built_for_two_flute_page_0001.jpg"),
    new Score("Defying Gravity", "Wicked", "Zongora", "Zenés színház", "Kezdő", "C major", 102.98, 1, "IKT_kották/Zongora/Zenés_színház/Kezdő/Képek/Defying_Gravity.jpg"),
    new Score("Die With A Smile", "Lady Gaga", "Gitár", "Pop", "Haladó", "A major", 136.78, 1, "IKT_kották/Gitár/Pop/Haladó/Képek/Die_with_a_smile.jpg"),
    new Score("Don't Start Now", "Dua Lipa", "Dob", "Pop", "Haladó", "F major", 51.87, 2, "IKT_kották/Dob/Pop/Haladó/Képek/Don't_start_now/dont_start_now_page_0001.jpg"),
    new Score("Fascination", "Various", "Gitár", "Klasszikus", "Közép", "D major", 83.94, 1, "IKT_kották/Gitár/Klasszikus/Középhaladó/Képek/Fascination.jpg"),
    new Score("Für Elise", "Beethoven", "Zongora", "Klasszikus", "Közép", "A minor", 129.26, 4, "IKT_kották/Zongora/Klasszikus/Középhaladó/Képek/Für_Elise/fur_elise_beethoven_page_0001.jpg"),
    new Score("Gentlemen", "Ravel", "Zongora", "Klasszikus", "Haladó", "G major", 74.87, 1, "IKT_kották/Zongora/Klasszikus/Haladó/Képek/Goodness_Of_God.jpg"),
    new Score("Geralt Of Rivia", "Various", "Gitár", "Zenés színház", "Haladó", "Am", 114.42, 1, "IKT_kották/Gitár/Zenés_színház/Haladó/Képek/Geralt_Of_Rivia.jpg"),
    new Score("Ghostbusters", "Ray Parker Jr.", "Dob", "Zenés színház", "Közép", "Em", 90.67, 1, "IKT_kották/Dob/Zenés_színház/Középhaladó/Képek/Ghostbusters.png"),
    new Score("Girl From Ipanema", "Various", "Gitár", "Jazz", "Haladó", "G major", 161.85, 1, "IKT_kották/Gitár/Jazz/Haladó/Képek/The_girl_from_Ipanema.jpg"),
    new Score("Girls Like You", "Various", "Hegedű", "Pop", "Kezdő", "F# major", 138.22, 1, "IKT_kották/Hegedű/Pop/Kezdő/Képek/Girls_like_you.jpg"),
    new Score("Golden", "Various", "Hegedű", "Zenés színház", "Kezdő", "F# major", 63.30, 1, "IKT_kották/Hegedű/Zenés_színház/Kezdő/Képek/Golden.jpg"),
    new Score("Grande Valse Brillante", "Chopin", "Gitár", "Klasszikus", "Haladó", "A major", 137.05, 1, "IKT_kották/Gitár/Klasszikus/Haladó/Képek/Grande_valse_brillante_Op.18.jpg"),
    new Score("Hammer To Fall", "Queen", "Dob", "Rock", "Kezdő", "Bm", 44.98, 4, "IKT_kották/Dob/Rock/Kezdő/Képek/Hammer_to_fall/hammer_to_fall_page_0001.jpg"),
    new Score("He's A Pirate", "Various", "Fuvola", "Zenés színház", "Haladó", "G major", 146.03, 1, "IKT_kották/Fuvola/Zenés_színház/Haladó/Képek/He's_a_pirate.jpg"),
    new Score("Holiday", "Green Day", "Dob", "Rock", "Közép", "E major", 73.49, 5, "IKT_kották/Dob/Rock/Középhaladó/Képek/Holiday/holiday_green_day_drum_chart2_page_0001.jpg"),
    new Score("I Really Want To Stay At Your House", "Various", "Zongora", "Zenés színház", "Haladó", "D major", 139.20, 1, "IKT_kották/Zongora/Zenés_színház/Haladó/Képek/I_Really_Want_To_Stay_At_Your_House.jpg"),
    new Score("I Won't Say I'm In Love", "Disney", "Dob", "Zenés színház", "Kezdő", "D major", 109.63, 1, "IKT_kották/Dob/Zenés_színház/Kezdő/Képek/I_won't_say_(I'm_in_love).jpg"),
    new Score("Imagine", "John Lennon", "Zongora", "Pop", "Kezdő", "C major", 126.16, 1, "IKT_kották/Zongora/Pop/Kezdő/Képek/Pink_Pony_Club.jpg"),
    new Score("Jazz Independence 1", "Various", "Dob", "Jazz", "Kezdő", "Bb major", 41.71, 1, "IKT_kották/Dob/Jazz/Kezdő/Képek/Jazz_exercises_1/jazz_independence_exercises_1_page_0001.jpg"),
    new Score("Jazz Independence 2", "Various", "Dob", "Jazz", "Közép", "F major", 46.91, 1, "IKT_kották/Dob/Jazz/Középhaladó/Képek/Jazz_independence_exercises_2/jazz_independence_exercises_2_page_0001.jpg"),
    new Score("Jazz Vespas", "Various", "Dob", "Jazz", "Haladó", "C major", 80.92, 3, "IKT_kották/Dob/Jazz/Haladó/Képek/Jazz_Vespas/Jazz_Vespas_Drums_page_0001.jpg"),
    new Score("Love For Sale", "Various", "Gitár", "Jazz", "Kezdő", "F major", 104.76, 1, "IKT_kották/Gitár/Jazz/Kezdő/Képek/Love_for_sale.jpg"),
    new Score("Love Control", "Various", "Zongora", "Pop", "Közép", "D major", 108.14, 1, "IKT_kották/Zongora/Pop/Középhaladó/Képek/Lose_Control.jpg"),
    new Score("Malaguena", "Various", "Gitár", "Klasszikus", "Kezdő", "E major", 62.77, 1, "IKT_kották/Gitár/Klasszikus/Kezdő/Képek/Malaguena.jpg"),
    new Score("Maple Leaf Rag", "Joplin", "Zongora", "Jazz", "Haladó", "A major", 114.49, 4, "IKT_kották/Zongora/Jazz/Haladó/Képek/Maple_leaf_rag/Maple_Leaf_Rag_page_0001.jpg"),
    new Score("Minor Swing", "Django Reinhardt", "Hegedű", "Jazz", "Közép", "D minor", 158.78, 1, "IKT_kották/Hegedű/Jazz/Középhaladó/Képek/Minor_swing.jpg"),
    new Score("Moeller Jam", "Various", "Dob", "Klasszikus", "Haladó", "G major", 19.28, 1, "IKT_kották/Dob/Klasszikus/Haladó/Képek/Moeller_Jam/moeller_jam_page_0001.jpg"),
    new Score("Moonlight Serenade", "Glenn Miller", "Fuvola", "Jazz", "Közép", "G major", 508.60, 1, "IKT_kották/Fuvola/Jazz/Középhaladó/Képek/Moonlight_Serenade/[Free_scores.com]_miller_glenn_moonlight_serenade_112285_page_0002.jpg"),
    new Score("Never Enough", "The Greatest Showman", "Hegedű", "Zenés színház", "Közép", "Cm", 69.51, 1, "IKT_kották/Hegedű/Zenés_színház/Középhaladó/Képek/Never_Enough.jpg"),
    new Score("Nothing Else Matters", "Metallica", "Gitár", "Rock", "Haladó", "Em", 110.56, 1, "IKT_kották/Gitár/Rock/Haladó/Képek/Nothing_else_matters.jpg"),
    new Score("Nuvole Bianche", "Einaudi", "Zongora", "Klasszikus", "Kezdő", "E major", 42.19, 1, "IKT_kották/Zongora/Klasszikus/Kezdő/Képek/Nuvole_Bianche.jpg"),
    new Score("Ordinary", "Various", "Hegedű", "Pop", "Közép", "A major", 125.62, 1, "IKT_kották/Hegedű/Pop/Középhaladó/Képek/Ordinary.jpg"),
    new Score("Over The Rainbow", "Wizard Of Oz", "Fuvola", "Zenés színház", "Közép", "C major", 60.35, 2, "IKT_kották/Fuvola/Zenés_színház/Középhaladó/Képek/Over_the_rainbow/over_the_rainbow_page_0001.jpg"),
    new Score("Paint It Black", "Rolling Stones", "Hegedű", "Rock", "Haladó", "B minor", 114.97, 1, "IKT_kották/Hegedű/Rock/Haladó/Képek/Paint_it_black.jpg"),
    new Score("Peaches", "Various", "Gitár", "Zenés színház", "Kezdő", "D major", 76.54, 1, "IKT_kották/Gitár/Zenés_színház/Kezdő/Képek/Peaches.jpg"),
    new Score("Phantom Of The Opera", "Lloyd Webber", "Fuvola", "Zenés színház", "Kezdő", "Am", 35.75, 1, "IKT_kották/Fuvola/Zenés_színház/Kezdő/Képek/The_phantom_of_the_opera.jpg"),
    new Score("Ravel Bolero", "Maurice Ravel", "Fuvola", "Klasszikus", "Közép", "C major", 84.95, 1, "IKT_kották/Fuvola/Klasszikus/Középhaladó/Képek/Bolero/ravel_bolero_page_0001.jpg"),
    new Score("Rather Be", "Clean Bandit", "Hegedű", "Pop", "Haladó", "F# major", 144.58, 1, "IKT_kották/Hegedű/Pop/Haladó/Képek/Rather_be.jpg"),
    new Score("Rewrite The Stars", "The Greatest Showman", "Zongora", "Zenés színház", "Közép", "D major", 130.86, 1, "IKT_kották/Zongora/Zenés_színház/Középhaladó/Képek/Rewrite_The_Stars.jpg"),
    new Score("Rythme Ruse", "Various", "Fuvola", "Pop", "Haladó", "G major", 463.86, 3, "IKT_kották/Fuvola/Pop/Haladó/Képek/Rythme_rusé/[Free_scores.com]_chauve_thierry_rythme_ruse_183039_page_0002.jpg"),
    new Score("Rolling In The Deep", "Adele", "Dob", "Pop", "Közép", "Dm", 52.09, 3, "IKT_kották/Dob/Pop/Középhaladó/Képek/Rolling_in_the_deep/rolling_in_the_deep_page_0001.jpg"),
    new Score("Shallow", "Lady Gaga", "Gitár", "Pop", "Közép", "A major", 118.77, 1, "IKT_kották/Gitár/Pop/Középhaladó/Képek/Shallow.jpg"),
    new Score("Smile", "Various", "Zongora", "Jazz", "Közép", "F major", 72.89, 1, "IKT_kották/Zongora/Jazz/Középhaladó/Képek/#207_Smile/#207_Smile.jpg"),
    new Score("Smells Like Teen Spirit", "Nirvana", "Gitár", "Rock", "Közép", "F major", 213.12, 3, "IKT_kották/Gitár/Rock/Középhaladó/Képek/Smells_like_teen_spirit/Jam_Nirvana_Smells_Like_Teen_Spirit_2019_page_0001.jpg"),
    new Score("Solo Violin Partita 2", "Bach", "Hegedű", "Klasszikus", "Haladó", "D minor", 190.35, 1, "IKT_kották/Hegedű/Klasszikus/Haladó/Képek/Solo_Violin_Partita_No._2_in_D_Minor.jpg"),
    new Score("Someone You Loved", "Lewis Capaldi", "Zongora", "Pop", "Haladó", "G major", 79.58, 1, "IKT_kották/Zongora/Pop/Haladó/Képek/Someone_You_Loved.jpg"),
    new Score("Spring", "Vivaldi", "Fuvola", "Klasszikus", "Haladó", "E major", 143.69, 5, "IKT_kották/Fuvola/Klasszikus/Haladó/Képek/Spring/vivaldi_the_four_seasons_spring_page_0001.jpg"),
    new Score("Summer Nights", "Michele Gori", "Fuvola", "Jazz", "Haladó", "Bb major", 56.96, 2, "IKT_kották/Fuvola/Jazz/Haladó/Képek/Summer_Nights/summer_nights_michele_gori_page_0001.jpg"),
    new Score("Sweet Child O' Mine", "Guns N' Roses", "Fuvola", "Rock", "Haladó", "D major", 114.88, 1, "IKT_kották/Fuvola/Rock/Haladó/Képek/Sweet_Child_o_mine.jpg"),
    new Score("Take Five", "Dave Brubeck", "Gitár", "Jazz", "Közép", "Em", 123.51, 1, "IKT_kották/Gitár/Jazz/Középhaladó/Képek/Take_Five/Take_five.jpg"),
    new Score("The Lion King", "Elton John", "Dob", "Zenés színház", "Haladó", "A major", 202.71, 1, "IKT_kották/Dob/Zenés_színház/Haladó/Képek/The_lion_king/The_lion_king.jpg"),
    new Score("The Show Must Go On", "Queen", "Zongora", "Rock", "Közép", "B major", 69.48, 1, "IKT_kották/Zongora/Rock/Középhaladó/Képek/The_Show_Must_Go_On.jpg"),
    new Score("Under The Sea", "Disney", "Gitár", "Zenés színház", "Közép", "F major", 44.32, 1, "IKT_kották/Gitár/Zenés_színház/Középhaladó/Képek/Under_the_sea.jpg"),
    new Score("Viva La Vida", "Coldplay", "Hegedű", "Rock", "Kezdő", "Dm", 128.96, 1, "IKT_kották/Hegedű/Rock/Kezdő/Képek/Viva_la_vida.jpg"),
    new Score("Viva La Vida (Flute)", "Coldplay", "Fuvola", "Rock", "Közép", "Dm", 115.86, 1, "IKT_kották/Fuvola/Rock/Középhaladó/Képek/Viva_la_vida.jpg"),
    new Score("We Don't Talk About Bruno", "Encanto", "Hegedű", "Zenés színház", "Haladó", "C major", 47.07, 1, "IKT_kották/Hegedű/Zenés_színház/Haladó/Képek/We_don't_talk_about_Bruno.jpg"),
    new Score("When The Saints Go Marching In", "Various", "Fuvola", "Jazz", "Kezdő", "F major", 40.89, 1, "IKT_kották/Fuvola/Jazz/Kezdő/Képek/When_the_saints_go_marching_in/when_the_saints_go_marching_in_page_0001.jpg"),
    new Score("Yellow", "Coldplay", "Fuvola", "Rock", "Kezdő", "Gm", 37.04, 1, "IKT_kották/Fuvola/Rock/Kezdő/Képek/Yellow.jpg"),
    new Score("Yesterday", "The Beatles", "Zongora", "Rock", "Kezdő", "F major", 63.08, 1, "IKT_kották/Zongora/Rock/Kezdő/Képek/Yesterday.jpg"),
    new Score("Afro Caribbean Rhythms", "Various", "Dob", "Klasszikus", "Közép", "A minor", 53.50, 2, "IKT_kották/Dob/Klasszikus/Középhaladó/Képek/Afro_Caribbean_Rhythms/afrocaribbeanrhythms_page_0001.jpg")
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
    scoreElement.innerHTML = `
        <div class="scoreResultImage" style="background-image: url('${score.fileName}');"></div>
        <div class="scoreResultInfo">
            <div class="scoreResultTop">
                <h2 class="scoreName">${score.name}</h2>
                <p class="scoreArtist">${score.artist}</p>
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
    const resultCont = document.getElementById("resultCont");
    const selectedInstruments = getSelectedInstrumentFilters();
    const selectedGenres = getSelectedGenreFilters();
    const selectedDifficulties = getSelectedDifficultyFilters();

    let filteredScores = scores;

    if (searchInput.trim() !== "") {
        filteredScores = filteredScores.filter(score =>
            score.name.toLowerCase().includes(searchInput) ||
            score.artist.toLowerCase().includes(searchInput)
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

// SM view onclick handlers - expand/collapse with redirect
function isSmView() {
    return document.body.clientWidth <= 768;
}

function attachSmViewHandlers() {
    const cards = document.querySelectorAll('.scoreResult');
    cards.forEach(card => {
        card.removeEventListener('click', handleCardClick);
        if (isSmView()) {
            card.addEventListener('click', handleCardClick);
        }
    });
}

function handleCardClick(e) {
    if (!isSmView()) return;

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
        // Already expanded - redirect to sheet.html
        const scoreData = {
            name: this.querySelector('.scoreName')?.textContent || '',
            artist: this.querySelector('.scoreArtist')?.textContent || '',
            instrument: this.querySelector('.scoreInstrument')?.textContent || '',
            genre: this.querySelector('.scoreGenre')?.textContent || '',
            difficulty: this.querySelector('.scoreDifficulty')?.textContent || '',
            key: this.querySelector('.scoreKey')?.textContent || '',
            fileSize: this.querySelector('.scoreFileSize')?.textContent || '',
            pageCount: this.querySelector('.scorePages')?.textContent || '',
            fileName: this.style.backgroundImage?.match(/url\(['"]?([^'")]+)['"]?\)/)?.[1] || ''
        };

        sessionStorage.setItem('selectedScore', JSON.stringify(scoreData));
        window.location.href = 'sheet.html';
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
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

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
    console.log(holderParent);
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

    if (!menuEl.classList.contains("activeMenu")) {
        menuEl.classList.add("activeMenu");
        if (searchBarEl) {
            searchBarEl.classList.remove("menu-closed");
        }
    }
    else {
        menuEl.classList.remove("activeMenu");
        if (searchBarEl) {
            searchBarEl.classList.add("menu-closed");
        }
    }
}

window.addEventListener("resize", () => {
    console.log("resize");
    if (document.body.clientWidth > 1180) {
        let menuEl = document.getElementById("filterCont");
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
        let menuEl = document.getElementById("filterCont");
        menuEl.classList.remove("activeMenu");
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
    }
});