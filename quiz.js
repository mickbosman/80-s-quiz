let array = ["Komt Tupac zijn muziek uit de 80's?", "Maakte Michael Jackson in de 80's muziek?", "Maakte dr dre in de 80's muziek?",  "Maakte Madonna in de 80's muziek?",
"Maakte de Red Hot Chili Peppers in de 80's muziek?", "Maakte AC/DC in de 80's muziek?", "Zat Africa - TOTO in de top 10 hits in de jaren 80?", "Komt Thriller - Michael Jackson uit 1980?",
"Was Happy  Hardcore bekend in de 80's?", "was pop de meest populaire muziek gengre in de 80's?"];
let ja = document.getElementById("ja");
let nee = document.getElementById("nee");
let vraag = document.getElementById("vraag");
let doneid = document.getElementById("images");
let overlayText = document.getElementById("overlayText");

let goed = 0;
let fout = 0;
let goedoffout;

vraag.innerHTML = array[0];
let i = 0;
ja.addEventListener("click",()=>{
if (vraag.innerHTML == array[0]) {
      fout++;
} else if (vraag.innerHTML == array[1]) {
      goed++;
} else if (vraag.innerHTML == array[2]) {
      fout++;
} else if (vraag.innerHTML == array[3]) {
      goed++;
} else if (vraag.innerHTML == array[4]) {
      fout++;
} else if (vraag.innerHTML == array[5]) {
          goed++;
} else if (vraag.innerHTML == array[5]) {
          fout++;
} else if (vraag.innerHTML == array[7]) {
          goed++;
}  else if (vraag.innerHTML == array[8]) {
          fout++;
} else if (vraag.innerHTML == array[9]) {
          goed++;
}
i++;
check();
});

nee.addEventListener("click",()=>{
  if (vraag.innerHTML == array[0]) {
        goed++;
  } else if (vraag.innerHTML == array[1]) {
        fout++;
  } else if (vraag.innerHTML == array[2]) {
        goed++;
  } else if (vraag.innerHTML == array[3]) {
        fout++;
  } else if (vraag.innerHTML == array[4]) {
        goed++;
 } else if (vraag.innerHTML == array[5]) {
           goed++;
 } else if (vraag.innerHTML == array[6]) {
           goed++;
 } else if (vraag.innerHTML == array[7]) {
           fout++;
 }  else if (vraag.innerHTML == array[8]) {
           goed++;
 } else if (vraag.innerHTML == array[9]) {
           fout++;
 }
  i++;
  check();
});

function check(){
  if (i>=array.length) {
    overlay();
    done();
  } else {
    vraag.innerHTML = array[i];
    return;
  }
}

function warn() {
  if (window.confirm("Weet je zeker dat je de pagina wilt verlaten?\nAlle gegevens zullen verloren zijn.")) {
    document.location = "quizWelkom.html";
  }
  else {
    return;
  }
}

function warnWelkom() {
  if (window.confirm("Weet je zeker dat je de pagina wilt verlaten?\nAlle gegevens zullen verloren zijn.")) {
    location.reload(true);
  }
  else {
    return;
  }
}


function overlay(){
document.getElementById("overlay").style.height = "100%";
}

function done(){

$goed = "";

  if (goed>fout) {
        doneid.src = "img/goed.png";
    overlayText.innerHTML = "Het aantal goede antwoorden is: " + goed + "<br>";
    overlayText.innerHTML += "Het aantal foute antwoorden is: " + fout + "<br>";
    overlayText.innerHTML += "Goed gedaan!";
    overlayText.style.color = "lightgreen";
  } else if (goed == fout) {
        doneid.src = "img/meh.jpg";
    overlayText.innerHTML = "Het aantal goede antwoorden is: " + goed + "<br>";
    overlayText.innerHTML += "Het aantal foute antwoorden is: " + fout + "<br>";
    overlayText.innerHTML += "Je doet in ieder geval je best!";
    overlayText.style.color = "orange";
  } else if (goed<fout) {
        doneid.src = "img/fout.jpg";
    overlayText.innerHTML = "Het aantal goede antwoorden is: " + goed + "<br>";
    overlayText.innerHTML += "Het aantal foute antwoorden is: " + fout + "<br>";
    overlayText.innerHTML += "Je weet er niks van!";
    overlayText.style.color = "red";
  }
}
