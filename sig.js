let dia= document.querySelector("#dia")
let vdia = document.querySelector("#vdia");
let mes = document.querySelector("#mes");
let vmes=document.querySelector("#img");
let vmes1=document.querySelector("#img1");
mes.onchange=()=>{
  signo()
}
dia.oninput=()=>{ signo()}

const signo=()=>{
  let m=mes.value;
  let d=parseInt(dia.value);
  vdia.innerHTML=d;

  fe.innerHTML=d+" "+"de"+" "+m;



if ((m == "enero" && d >= 20) || (m == "febrero" && d <= 18)) {
   vmes.innerHTML=("Acuario");
   document.getElementById("img1").innerHTML='<img src="A.jpg" width=200px/>';
   
}
else if (m == " " ) {
  fe.innerHTML="";
    vmes.innerHTML=("Pon algo en mes wey");
    document.getElementById("img1").innerHTML='<img src="meme.jpg" width=200px/>';
}
else if ((m == "febrero" && d >= 19) || (m == "marzo" && d <= 20)) {
    vmes.innerHTML=("Piscis");
    document.getElementById("img1").innerHTML='<img src="pis.jpg" width=200px/>';
}
else if ((m == "marzo" && d >= 21) || (m == "abril" && d <= 19)) {
    vmes.innerHTML=("Aries");
    document.getElementById("img1").innerHTML='<img src="ar.jpg" width=200px/>';
}
else if ((m == "abril" && d >= 20) || (m == "mayo"&& d <= 20)) {
    vmes.innerHTML=("Tauro");
    document.getElementById("img1").innerHTML='<img src="tauro.jpg" width=200px/>';
    
}
else if ((m == "mayo" && d >= 21) || (m == "junio"&& d <= 20)) {
    vmes.innerHTML=("Géminis");
    document.getElementById("img1").innerHTML='<img src="g.jpg" width=200px/>';
}
else if ((m == "junio" && d >= 21) || (m == "julio" && d <= 22)) {
    vmes.innerHTML=("cancer");
    document.getElementById("img1").innerHTML='<img src="c.jpg" width=200px/>';
}
else if ((m == "julio" && d >= 23) || (m == "agosto"&& d <= 22)) {
    vmes.innerHTML=("Leo");
    document.getElementById("img1").innerHTML='<img src="l.jpg" width=200px/>';
}
else if ((m == "agosto" && d >= 23) || (m == "septiembre"&& d <= 22)) {
    vmes.innerHTML=("Virgo");
    document.getElementById("img1").innerHTML='<img src="virgo.jpg" width=200px/>';
}
else if ((m == "septiembre" && d >= 23) || (m == "octubre" && d <= 22)) {
    vmes.innerHTML=("Libra");
    document.getElementById("img1").innerHTML='<img src="libra.jpg" width=200px/>';
}
else if ((m == "octubre" && d >= 23) || (m == "noviembre" && d <= 21)) {
    vmes.innerHTML=("Escorpio");
    document.getElementById("img1").innerHTML='<img src="escor.jpg" width=200px/>';
}
else if ((m == "noviembre" && d >= 22) || (m == "diciembre" && d <= 21)) {
    vmes.innerHTML=("Sagitario");
    document.getElementById("img1").innerHTML='<img src="s.jpg" width=200px/>';
}
else {
    vmes.innerHTML=("Capricornio");
    document.getElementById("img1").innerHTML='<img src="ca.jpg" width=200px/>';
}
img1.style.transform="rotateY(-180deg)";
    img1.style.transition="all 0.5s linear";
    img1.style.transitionStyle="preserve-3d";
    img1.style.backfaceVisibility="hidden";
    
    setTimeout(() => {
      img1.style.transform="rotate(0deg)"
    img1.style.transform="all 0.5s linear";
    }, 250);
}
img1.innerHTML="";
