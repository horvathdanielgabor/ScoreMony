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
    new Score("All Of Me", "Various", "Hegedű", "Jazz", "Kezdő", "A major", 108.81, 1, "IKT_kották/Hegedű/Jazz/Kezdő/Képek/All of me.jpg"),
    new Score("All I Want For Christmas Is You", "Various", "Fuvola", "Pop", "Közép", "A major", 39.34, 1, "IKT_kották/Fuvola/Pop/Középhaladó/Képek/All i want fo christmas is you.jpg"),
    new Score("American Idiot", "Green Day", "Dob", "Rock", "Haladó", "Fm", 63.79, 2, "IKT_kották/Dob/Rock/Haladó/Képek/American idiot/american-idiot-green-day-drum-transcription_page-0001.jpg"),
    new Score("Ave Maria", "Schubert", "Hegedű", "Klasszikus", "Közép", "B major", 144.90, 1, "IKT_kották/Hegedű/Klasszikus/Középhaladó/Képek/Ave Maria/schubert-ave-maria-violin_page-0001.jpg"),
    new Score("Barney Brallaghan", "Various", "Fuvola", "Klasszikus", "Kezdő", "C major", 47.99, 1, "IKT_kották/Fuvola/Klasszikus/Kezdő/Képek/Barney Brallaghan/barney-brallaghan_page-0001.jpg"),
    new Score("Beautiful Things", "Various", "Gitár", "Pop", "Kezdő", "G major", 145.88, 1, "IKT_kották/Gitár/Pop/Kezdő/Képek/Beautiful things.jpg"),
    new Score("Billie Jean", "Michael Jackson", "Dob", "Pop", "Kezdő", "F# minor", 267.61, 4, "IKT_kották/Dob/Pop/Kezdő/Képek/Billie Jean/17.-Billie-Jean_page-0001.jpg"),
    new Score("Bohemian Rhapsody", "Queen", "Hegedű", "Rock", "Közép", "Bbm", 101.47, 1, "IKT_kották/Hegedű/Rock/Középhaladó/Képek/Bohemian Rhapsody.jpg"),
    new Score("Boogie Woogie Stomp", "Various", "Zongora", "Jazz", "Kezdő", "Bb major", 55.68, 1, "IKT_kották/Zongora/Jazz/Kezdő/Képek/Boogie Woogie Stomp.jpg"),
    new Score("Boulevard Of Broken Dreams", "Green Day", "Gitár", "Rock", "Kezdő", "F# major", 208.05, 4, "IKT_kották/Gitár/Rock/Kezdő/Képek/Boulevard of broken dreams/Guitar-Green-Day-Boulevard-Web_page-0001.jpg"),
    new Score("Bye Bye Blackbird", "Various", "Hegedű", "Jazz", "Haladó", "F major", 114.05, 1, "IKT_kották/Hegedű/Jazz/Haladó/Képek/bye bye blackbird.jpg"),
    new Score("Canon In D", "Pachelbel", "Hegedű", "Klasszikus", "Kezdő", "D major", 93.74, 1, "IKT_kották/Hegedű/Klasszikus/Kezdő/Képek/Canon in D.jpg"),
    new Score("Could Have Been Me", "Various", "Zongora", "Rock", "Haladó", "B major", 69.32, 1, "IKT_kották/Zongora/Rock/Haladó/Képek/Could Have Been Me.jpg"),
    new Score("Counting And Subdividing", "Various", "Dob", "Klasszikus", "Kezdő", "4/4 time", 41.68, 1, "IKT_kották/Dob/Klasszikus/Kezdő/Képek/Counting and Subdividing in 44/counting-and-subdividing_page-0001.jpg"),
    new Score("Daisy", "Various", "Fuvola", "Pop", "Kezdő", "G major", 31.27, 1, "IKT_kották/Fuvola/Pop/Kezdő/Képek/Daisy/a-bicycle-built-for-two-flute_page-0001.jpg"),
    new Score("Defying Gravity", "Wicked", "Zongora", "Zenés színház", "Kezdő", "C major", 102.98, 1, "IKT_kották/Zongora/Zenés színház/Kezdő/Képek/Defying Gravity.jpg"),
    new Score("Die With A Smile", "Lady Gaga", "Gitár", "Pop", "Haladó", "A major", 136.78, 1, "IKT_kották/Gitár/Pop/Haladó/Képek/Die with a smile.jpg"),
    new Score("Don't Start Now", "Dua Lipa", "Dob", "Pop", "Haladó", "F major", 51.87, 2, "IKT_kották/Dob/Pop/Haladó/Képek/Don't start now/dont-start-now_page-0001.jpg"),
    new Score("Fascination", "Various", "Gitár", "Klasszikus", "Közép", "D major", 83.94, 1, "IKT_kották/Gitár/Klasszikus/Középhaladó/Képek/Fascination.jpg"),
    new Score("Für Elise", "Beethoven", "Zongora", "Klasszikus", "Közép", "A minor", 129.26, 4, "IKT_kották/Zongora/Klasszikus/Középhaladó/Képek/Für Elise/fur-elise-beethoven_page-0001.jpg"),
    new Score("Gentlemen", "Ravel", "Zongora", "Klasszikus", "Haladó", "G major", 74.87, 1, "IKT_kották/Zongora/Klasszikus/Haladó/Képek/Goodness Of God.jpg"),
    new Score("Geralt Of Rivia", "Various", "Gitár", "Zenés színház", "Haladó", "Am", 114.42, 1, "IKT_kották/Gitár/Zenés színház/Haladó/Képek/Geralt Of Rivia.jpg"),
    new Score("Ghostbusters", "Ray Parker Jr.", "Dob", "Zenés színház", "Közép", "Em", 90.67, 1, "IKT_kották/Dob/Zenés színház/Középhaladó/Képek/Ghostbusters.png"),
    new Score("Girl From Ipanema", "Various", "Gitár", "Jazz", "Haladó", "G major", 161.85, 1, "IKT_kották/Gitár/Jazz/Haladó/Képek/The girl from Ipanema.jpg"),
    new Score("Girls Like You", "Various", "Hegedű", "Pop", "Kezdő", "F# major", 138.22, 1, "IKT_kották/Hegedű/Pop/Kezdő/Képek/Girls like you.jpg"),
    new Score("Golden", "Various", "Hegedű", "Zenés színház", "Kezdő", "F# major", 63.30, 1, "IKT_kották/Hegedű/Zenés színház/Kezdő/Képek/Golden.jpg"),
    new Score("Grande Valse Brillante", "Chopin", "Gitár", "Klasszikus", "Haladó", "A major", 137.05, 1, "IKT_kották/Gitár/Klasszikus/Haladó/Képek/Grande valse brillante Op.18.jpg"),
    new Score("Hammer To Fall", "Queen", "Dob", "Rock", "Kezdő", "Bm", 44.98, 4, "IKT_kották/Dob/Rock/Kezdő/Képek/Hammer to fall/hammer_to_fall_page-0001.jpg"),
    new Score("He's A Pirate", "Various", "Fuvola", "Zenés színház", "Haladó", "G major", 146.03, 1, "IKT_kották/Fuvola/Zenés színház/Haladó/Képek/He's a pirate.jpg"),
    new Score("Holiday", "Green Day", "Dob", "Rock", "Közép", "E major", 73.49, 5, "IKT_kották/Dob/Rock/Középhaladó/Képek/Holiday/holiday-green-day-drum-chart2_page-0001.jpg"),
    new Score("I Really Want To Stay At Your House", "Various", "Zongora", "Zenés színház", "Haladó", "D major", 139.20, 1, "IKT_kották/Zongora/Zenés színház/Haladó/Képek/I Really Want To Stay At Your House.jpg"),
    new Score("I Won't Say I'm In Love", "Disney", "Dob", "Zenés színház", "Kezdő", "D major", 109.63, 1, "IKT_kották/Dob/Zenés színház/Kezdő/Képek/I won't say (I'm in love).jpg"),
    new Score("Imagine", "John Lennon", "Zongora", "Pop", "Kezdő", "C major", 126.16, 1, "IKT_kották/Zongora/Pop/Kezdő/Képek/Pink Pony Club.jpg"),
    new Score("Jazz Independence 1", "Various", "Dob", "Jazz", "Kezdő", "Bb major", 41.71, 1, "IKT_kották/Dob/Jazz/Kezdő/Képek/Jazz_exercises_1/jazz-independence-exercises-1_page-0001.jpg"),
    new Score("Jazz Independence 2", "Various", "Dob", "Jazz", "Közép", "F major", 46.91, 1, "IKT_kották/Dob/Jazz/Középhaladó/Képek/Jazz_independence_exercises_2/jazz-independence-exercises-2_page-0001.jpg"),
    new Score("Jazz Vespas", "Various", "Dob", "Jazz", "Haladó", "C major", 80.92, 3, "IKT_kották/Dob/Jazz/Haladó/Képek/Jazz_Vespas/Jazz-Vespas-Drums_page-0001.jpg"),
    new Score("Love For Sale", "Various", "Gitár", "Jazz", "Kezdő", "F major", 104.76, 1, "IKT_kották/Gitár/Jazz/Kezdő/Képek/Love for sale.jpg"),
    new Score("Love Control", "Various", "Zongora", "Pop", "Közép", "D major", 108.14, 1, "IKT_kották/Zongora/Pop/Középhaladó/Képek/Lose Control.jpg"),
    new Score("Malaguena", "Various", "Gitár", "Klasszikus", "Kezdő", "E major", 62.77, 1, "IKT_kották/Gitár/Klasszikus/Kezdő/Képek/Malaguena.jpg"),
    new Score("Maple Leaf Rag", "Joplin", "Zongora", "Jazz", "Haladó", "A major", 114.49, 4, "IKT_kották/Zongora/Jazz/Haladó/Képek/Maple leaf rag/Maple Leaf Rag_page-0001.jpg"),
    new Score("Minor Swing", "Django Reinhardt", "Hegedű", "Jazz", "Közép", "D minor", 158.78, 1, "IKT_kották/Hegedű/Jazz/Középhaladó/Képek/Minor swing.jpg"),
    new Score("Moeller Jam", "Various", "Dob", "Klasszikus", "Haladó", "G major", 19.28, 1, "IKT_kották/Dob/Klasszikus/Haladó/Képek/Moeller Jam/moeller-jam_page-0001.jpg"),
    new Score("Moonlight Serenade", "Glenn Miller", "Fuvola", "Jazz", "Közép", "G major", 508.60, 1, "IKT_kották/Fuvola/Jazz/Középhaladó/Képek/Moonlight Serenade/[Free-scores.com]_miller-glenn-moonlight-serenade-112285_page-0002.jpg"),
    new Score("Never Enough", "The Greatest Showman", "Hegedű", "Zenés színház", "Közép", "Cm", 69.51, 1, "IKT_kották/Hegedű/Zenés színház/Középhaladó/Képek/Never Enough.jpg"),
    new Score("Nothing Else Matters", "Metallica", "Gitár", "Rock", "Haladó", "Em", 110.56, 1, "IKT_kották/Gitár/Rock/Haladó/Képek/Nothing else matters.jpg"),
    new Score("Nuvole Bianche", "Einaudi", "Zongora", "Klasszikus", "Kezdő", "E major", 42.19, 1, "IKT_kották/Zongora/Klasszikus/Kezdő/Képek/Nuvole Bianche.jpg"),
    new Score("Ordinary", "Various", "Hegedű", "Pop", "Közép", "A major", 125.62, 1, "IKT_kották/Hegedű/Pop/Középhaladó/Képek/Ordinary.jpg"),
    new Score("Over The Rainbow", "Wizard Of Oz", "Fuvola", "Zenés színház", "Közép", "C major", 60.35, 2, "IKT_kották/Fuvola/Zenés színház/Középhaladó/Képek/Over the rainbow/over-the-rainbow_page-0001.jpg"),
    new Score("Paint It Black", "Rolling Stones", "Hegedű", "Rock", "Haladó", "B minor", 114.97, 1, "IKT_kották/Hegedű/Rock/Haladó/Képek/Paint it black.jpg"),
    new Score("Peaches", "Various", "Gitár", "Zenés színház", "Kezdő", "D major", 76.54, 1, "IKT_kották/Gitár/Zenés színház/Kezdő/Képek/Peaches.jpg"),
    new Score("Phantom Of The Opera", "Lloyd Webber", "Fuvola", "Zenés színház", "Kezdő", "Am", 35.75, 1, "IKT_kották/Fuvola/Zenés színház/Kezdő/Képek/The phantom of the opera.jpg"),
    new Score("Ravel Bolero", "Maurice Ravel", "Fuvola", "Klasszikus", "Közép", "C major", 84.95, 1, "IKT_kották/Fuvola/Klasszikus/Középhaladó/Képek/Bolero/ravel-bolero_page-0001.jpg"),
    new Score("Rather Be", "Clean Bandit", "Hegedű", "Pop", "Haladó", "F# major", 144.58, 1, "IKT_kották/Hegedű/Pop/Haladó/Képek/Rather be.jpg"),
    new Score("Rewrite The Stars", "The Greatest Showman", "Zongora", "Zenés színház", "Közép", "D major", 130.86, 1, "IKT_kották/Zongora/Zenés színház/Középhaladó/Képek/Rewrite The Stars.jpg"),
    new Score("Rythme Ruse", "Various", "Fuvola", "Pop", "Haladó", "G major", 463.86, 3, "IKT_kották/Fuvola/Pop/Haladó/Képek/Rythme rusé/[Free-scores.com]_chauve-thierry-rythme-ruse-183039_page-0002.jpg"),
    new Score("Rolling In The Deep", "Adele", "Dob", "Pop", "Közép", "Dm", 52.09, 3, "IKT_kották/Dob/Pop/Középhaladó/Képek/Rolling in the deep/rolling-in-the-deep_page-0001.jpg"),
    new Score("Shallow", "Lady Gaga", "Gitár", "Pop", "Közép", "A major", 118.77, 1, "IKT_kották/Gitár/Pop/Középhaladó/Képek/Shallow.jpg"),
    new Score("Smile", "Various", "Zongora", "Jazz", "Közép", "F major", 72.89, 1, "IKT_kották/Zongora/Jazz/Középhaladó/Képek/#207 Smile/#207 Smile.jpg"),
    new Score("Smells Like Teen Spirit", "Nirvana", "Gitár", "Rock", "Közép", "F major", 213.12, 3, "IKT_kották/Gitár/Rock/Középhaladó/Képek/Smells like teen spirit/Jam-Nirvana-Smells-Like-Teen-Spirit-2019_page-0001.jpg"),
    new Score("Solo Violin Partita 2", "Bach", "Hegedű", "Klasszikus", "Haladó", "D minor", 190.35, 1, "IKT_kották/Hegedű/Klasszikus/Haladó/Képek/Solo Violin Partita No. 2 in D Minor.jpg"),
    new Score("Someone You Loved", "Lewis Capaldi", "Zongora", "Pop", "Haladó", "G major", 79.58, 1, "IKT_kották/Zongora/Pop/Haladó/Képek/Someone You Loved.jpg"),
    new Score("Spring", "Vivaldi", "Fuvola", "Klasszikus", "Haladó", "E major", 143.69, 5, "IKT_kották/Fuvola/Klasszikus/Haladó/Képek/Spring/vivaldi-the-four-seasons-spring_page-0001.jpg"),
    new Score("Summer Nights", "Michele Gori", "Fuvola", "Jazz", "Haladó", "Bb major", 56.96, 2, "IKT_kották/Fuvola/Jazz/Haladó/Képek/Summer Nights/summer-nights-michele-gori_page-0001.jpg"),
    new Score("Sweet Child O' Mine", "Guns N' Roses", "Fuvola", "Rock", "Haladó", "D major", 114.88, 1, "IKT_kották/Fuvola/Rock/Haladó/Képek/Sweet Child o mine.jpg"),
    new Score("Take Five", "Dave Brubeck", "Gitár", "Jazz", "Közép", "Em", 123.51, 1, "IKT_kották/Gitár/Jazz/Középhaladó/Képek/Take Five/Take five.jpg"),
    new Score("The Lion King", "Elton John", "Dob", "Zenés színház", "Haladó", "A major", 202.71, 1, "IKT_kották/Dob/Zenés színház/Haladó/Képek/The lion king/The lion king.jpg"),
    new Score("The Show Must Go On", "Queen", "Zongora", "Rock", "Közép", "B major", 69.48, 1, "IKT_kották/Zongora/Rock/Középhaladó/Képek/The Show Must Go On.jpg"),
    new Score("Under The Sea", "Disney", "Gitár", "Zenés színház", "Közép", "F major", 44.32, 1, "IKT_kották/Gitár/Zenés színház/Középhaladó/Képek/Under the sea.jpg"),
    new Score("Viva La Vida", "Coldplay", "Hegedű", "Rock", "Kezdő", "Dm", 128.96, 1, "IKT_kották/Hegedű/Rock/Kezdő/Képek/Viva la vida.jpg"),
    new Score("Viva La Vida (Flute)", "Coldplay", "Fuvola", "Rock", "Közép", "Dm", 115.86, 1, "IKT_kották/Fuvola/Rock/Középhaladó/Képek/Viva la vida.jpg"),
    new Score("We Don't Talk About Bruno", "Encanto", "Hegedű", "Zenés színház", "Haladó", "C major", 47.07, 1, "IKT_kották/Hegedű/Zenés színház/Haladó/Képek/We don't talk about Bruno.jpg"),
    new Score("When The Saints Go Marching In", "Various", "Fuvola", "Jazz", "Kezdő", "F major", 40.89, 1, "IKT_kották/Fuvola/Jazz/Kezdő/Képek/When the saints go marching in/when-the-saints-go-marching-in_page-0001.jpg"),
    new Score("Yellow", "Coldplay", "Fuvola", "Rock", "Kezdő", "Gm", 37.04, 1, "IKT_kották/Fuvola/Rock/Kezdő/Képek/Yellow.jpg"),
    new Score("Yesterday", "The Beatles", "Zongora", "Rock", "Kezdő", "F major", 63.08, 1, "IKT_kották/Zongora/Rock/Kezdő/Képek/Yesterday.jpg"),
    new Score("Afro Caribbean Rhythms", "Various", "Dob", "Klasszikus", "Közép", "A minor", 53.50, 2, "IKT_kották/Dob/Klasszikus/Középhaladó/Képek/Afro Caribbean Rhythms/afrocaribbeanrhythms_page-0001.jpg")
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
                <div class="scoreResultCorner scoreCornerRight">
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