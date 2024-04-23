let red=document.querySelector("#red");
let vred = document.querySelector("#vred");
let green=document.querySelector("#green");
let vgreen = document.querySelector("#vgreen");
let blue=document.querySelector("#blue");
let vblue = document.querySelector("#vblue");

let rgb = document.querySelector("#rgb")

let resul = document.querySelector("#resu");

red.oninput =fuction=> {
   g=parseInt(green.value);
  r=parseInt(red.value);
  b=parseInt(blue.value);
vred.innerHTML=r;
var r2="RGB:( "+r+" , "+g+" , "+b+" )";
  rgb.innerHTML=r2

resu.style.backgroundColor="rgb("+r+","+g+","+b+")";

hexa.innerHTML="#"+convertirhexa(r)+convertirhexa(g)+convertirhexa(b);
}
green.oninput =fuction=> {
 
  g=parseInt(green.value);
  b=parseInt(blue.value);
   r=parseInt(red.value);
  
vgreen.innerHTML=g;
var r2="RGB:( "+r+" , "+g+" , "+b+" )";
  rgb.innerHTML=r2
  
  resu.style.backgroundColor="rgb("+r+","+g+","+b+")";
  
  hexa.innerHTML="#"+convertirhexa(r)+convertirhexa(g)+convertirhexa(b);
}
blue.oninput =fuction=> {
   g=parseInt(green.value);
  b=parseInt(blue.value);
 r=parseInt(red.value);
vblue.innerHTML=b;
var r2="RGB:( "+r+" , "+g+" , "+b+" )";
  rgb.innerHTML=r2
  
  let bar="background("+r+" , "+g+" , "+b+" );";
  
  resu.style.backgroundColor="rgb("+r+","+g+","+b+")";
  
  
  hexa.innerHTML="#"+convertirhexa(r)+convertirhexa(g)+convertirhexa(b);
}

function convertirhexa(valor) {
  let hexa=(valor>16)?valor.toString(16).toUpperCase():"0"+valor.toString(16).toUpperCase();
  return hexa;
}
