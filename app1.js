let numero = document.querySelector("#numero");
let vnum = document.querySelector("#vnum");
let borrar = document.querySelector("#borrar");
let resultado = document.querySelector("#resultado");

vnum.innerHTML ="$" +numero.value + "MX";

numero.oninput =()=>{
  
  vnum.innerHTML= "$" +numero.value + "MXN";
  let n = parseFloat(numero.value);
  let res ="$" + (n/16.65).toFixed(2)+"USD";

  resultado.innerHTML=res;
}

borrar.onclick=()=>{
  resultado.innerHTML="";
  vnum.innerHTML="1";
  numero.textContent=1;
}