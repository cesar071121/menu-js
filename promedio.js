let f = 0;
let c = 0;
let e = 0;
let m = 0;
let i = 0;
let r=0;

let ingles = document.querySelector("#ingles");
let fisica = document.querySelector("#fisica");
let calculo = document.querySelector("#calculo");
let ecologia = document.querySelector("#ecologia");
let modulos = document.querySelector("#modulo");

fisica.oninput = function() {
    f = parseInt(fisica.value);
    vfisica.innerHTML = f;
    var r = (f + c + e + m + i) / 5;
    vresul.innerHTML = r;
promedio();
    updateProgress()
}

ingles.oninput = function() {
    i = parseInt(ingles.value);
    vingles.innerHTML = i;
    var r = (f + c + e + m + i) / 5;
    vresul.innerHTML = r;
    promedio();
    updateProgress()
}

ecologia.oninput = function() {
    e = parseInt(ecologia.value);
    vecologia.innerHTML = e;
    var r = (f + c + e + m + i) / 5;
    vresul.innerHTML = r;
    promedio();
    updateProgress()
}

calculo.oninput = function() {
    c = parseInt(calculo.value);
    vcalculo.innerHTML = c;
    var r = (f + c + e + m + i) / 5;
    vresul.innerHTML = r;
    promedio();
    updateProgress()
}

modulos.oninput = function() {
    m = parseInt(modulos.value);
    vmodulos.innerHTML = m;
    var r = (f + c + e + m + i) / 5;
    vresul.innerHTML = r;

    promedio();
updateProgress()
}

function promedio(){
    f = parseInt(fisica.value);
    i = parseInt(ingles.value);
    e = parseInt(ecologia.value);
    c = parseInt(calculo.value);
    m = parseInt(modulos.value);

    let prome=(f+i+m+e+c)/5;
    a.innerHTML=prome.toFixed(1);
    updateProgress();
}

function updateProgress() {
    var rangeValue = parseFloat(a.textContent);
    var progressBar = document.getElementById('progressBar');
    var progressBarBackground = document.getElementById('progressBarBackground');
    
    var circumference = 2 * Math.PI * parseFloat(progressBar.getAttribute('r'));
    var progress = rangeValue / 10; 
    var dashOffset = circumference * (1 - progress);
    
    progressBar.style.strokeDasharray =`${circumference} ${circumference}`;
    progressBar.style.strokeDashoffset = dashOffset;

    if (rangeValue >= 5 && rangeValue <= 5.9) {
        progressBar.style.stroke = "red";
        r3.innerHTML="REPROBADO"
    } else if (rangeValue >= 6 && rangeValue <= 7.4) {
        progressBar.style.stroke = "orange";
        r3.innerHTML="REGULAR"

    } else if (rangeValue >= 7.5 && rangeValue <= 8.9) {
        progressBar.style.stroke = "yellow";
        r3.innerHTML="BUENO"

    } else if (rangeValue >= 9 && rangeValue <= 10) {
        progressBar.style.stroke = "green";
        r3.innerHTML="EXCELENTE"

    }
}