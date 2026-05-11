let sheet = document.getElementById("sheet");
let details = document.getElementById("details");

let toggleM = document.getElementById("metronomeToggle");
let metronome = null;
let isPlaying = false;
let bpm = document.getElementById('metronomeSpeedSlider').value;
const slider = document.getElementById('metronomeSpeedSlider');

slider.addEventListener('input', () => {
  bpm = parseInt(slider.value);
  document.getElementById('metronomeSpeedSlider').textContent = bpm;

  if (isPlaying) {
    clearInterval(metronome);
    const intervalMs = (60 / bpm) * 1000;
    metronome = setInterval(tick, intervalMs);
  }
});

async function loadIn(Details, pdfLink) {
    let detailsObject = JSON.parse(Details);
    console.log(detailsObject);
    
    for (const key in detailsObject) {
        if (Object.prototype.hasOwnProperty.call(detailsObject, key)) {
            try
            {
                document.getElementById(key).innerText = detailsObject[key];
                console.log(detailsObject[key]);
            }
            catch
            {
            }
        }
    }

    sheet.innerText = null;

    const pdf = await pdfjsLib.getDocument(pdfLink).promise;
    console.log(pdf);

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });

        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        sheet.appendChild(canvas);

        await page.render({
          canvasContext: canvas.getContext('2d'),
          viewport
        }).promise;
      }

      document.getElementById("downloadPDF").href = pdfLink;
}

function tick() {
  toggleM.style.backgroundColor = 'rgba(77, 75, 136, 0.5)';
  toggleM.style.borderColor = 'rgba(77, 75, 136, 0.5)';
  setTimeout(() => {
    toggleM.style.backgroundColor = null;
    toggleM.style.borderColor = null;
  }, 80);
}

function metronomeFlipflop(){
    if (!isPlaying)
    {
        metronome = setInterval(tick,(60/+document.getElementById("metronomeSpeedSlider").value)*1000);
        toggleM.children[0].src = "images/pause.svg";
        isPlaying = true;
    }
    else
    {
        clearInterval(metronome);
        toggleM.children[0].src = "images/start.svg";
        isPlaying = false;
    }
}

loadIn(localStorage.selectedScore,"IKT_kották/Dob/Pop/Középhaladó/PDF/rolling_in_the_deep.pdf")