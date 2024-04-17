let numero = document.querySelector("#numero");
let vnum = document.querySelector("#vnum");
let borrar = document.querySelector("#borrar");
let resultado = document.querySelector("#resultado");
 a=parseInt(numero.value)

vnum.innerHTML = a;
numero.oninput =()=>{
  
  vnum.innerHTML= numero.value;
  let n = parseFloat(numero.value);
  let res = Math.sqrt(n).toFixed(2);
  
  resultado.innerHTML=res;
}

borrar.onclick=()=>{
  resultado.innerHTML="0";
}