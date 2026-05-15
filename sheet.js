let sheet = document.getElementById("sheet");
let details = document.getElementById("details");
let maximizeBtn = document.getElementById("maximize");
let sidebarBtn =  Array(...document.getElementsByTagName("span")).pop();

console.log(sidebarBtn);

let toggleM = document.getElementById("metronomeToggle");
let metronome = null;
let isPlaying = false;
let bpm = document.getElementById('metronomeSpeedSlider').value;
const slider = document.getElementById('metronomeSpeedSlider');
let audioCtx = null;

let sidebar = false;

let lastWidth = null;

slider.addEventListener('input', () => {
  bpm = parseInt(slider.value);
  document.getElementById('metronomeSpeedSlider').textContent = bpm;

  if (isPlaying) {
    clearInterval(metronome);
    const intervalMs = (60 / bpm) * 1000;
    metronome = setInterval(tick, intervalMs);
  }
});

function ensureAudio() {
  if (!audioCtx) audioCtx = new AudioContext();
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

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

      document.getElementById("download").href = pdfLink;
      document.getElementById("downloadPDF").href = pdfLink;
}

function playClick() {
      const osc  = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
 
      // Accent beat (beat 1) plays at a higher pitch
      osc.frequency.value = 440;
 
      const t = audioCtx.currentTime;
      gain.gain.setValueAtTime( 0.6, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
      osc.start(t);
      osc.stop(t + 0.06);
    }

function tick() {
  toggleM.style.backgroundColor = 'rgba(77, 75, 136, 0.5)';
  toggleM.style.borderColor = 'rgba(77, 75, 136, 0.5)';
  setTimeout(() => {
    toggleM.style.backgroundColor = null;
    toggleM.style.borderColor = null;
  }, 80);
  playClick();
}

function metronomeFlipflop(){
    if (!isPlaying)
    {
        metronome = setInterval(tick,(60/+document.getElementById("metronomeSpeedSlider").value)*1000);
        toggleM.children[0].src = "images/pause.svg";
        isPlaying = true;
        ensureAudio();
    }
    else
    {
        clearInterval(metronome);
        toggleM.children[0].src = "images/start.svg";
        isPlaying = false;
        audioCtx = null;
    }
}

function openDetails(){
  if (!sidebar)
  {
    sidebar = true;
    details.parentElement.style.flex = "30%";
    sheet.style.flex = "65%";
    maximizeBtn.style.right = "calc(10px + 35%)";
    sidebarBtn.innerText = "chevron_forward";
  }
  else
  {
    sidebar = false;
    details.parentElement.style.flex = null;
    sheet.style.flex = null;
    maximizeBtn.style.right = null;
    sidebarBtn.innerText = "chevron_backward";
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    lastWidth = [maximizeBtn.style.right, details.parentNode.style.flex, sheet.style.flex, sheet.style.height];
    maximizeBtn.children[0].innerText = "zoom_in_map";
    details.parentNode.style.flex = "0%";
    document.getElementsByClassName("collapse-menu")[0].style.flex = "0%";
    document.getElementsByTagName("header")[0].style.height = "0px";
    sheet.style.flex = "100%";
    sheet.style.height = "100%";
    maximizeBtn.style.right = "10px";
  } else {
    document.exitFullscreen();
    maximizeBtn.children[0].innerText = "zoom_out_map";
    details.parentNode.style.flex = lastWidth[1];
    document.getElementsByClassName("collapse-menu")[0].style.flex = null;
    document.getElementsByTagName("header")[0].style.height = null;
    sheet.style.flex = lastWidth[2];
    sheet.style.height = lastWidth[3];
    maximizeBtn.style.right = lastWidth[0];
  }
}


loadIn(localStorage.selectedScore, "IKT_kották\\Dob\\Pop\\Középhaladó\\PDF\\rolling_in_the_deep.pdf")
/*"IKT_kották\Dob\Pop\Középhaladó\PDF\rolling_in_the_deep.pdf"*/