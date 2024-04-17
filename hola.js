let valor = document.querySelector("#valor");
let value = document.querySelector("#value");
let tama=document.querySelector("#tama");
valor.oninput=()=>{
  let n=parseInt(valor.value);
  value.innerHTML=n;
  
 if (valor.value <= 25) {
    value.style.color = "yellow";
  } else if (valor.value <= 50) {
    value.style.color = "green";
  } else if (valor.value <= 75) {
    value.style.color = "white";
  } else {
    value.style.color = "purple";
  }

    tama.style.width=n+"px";
    tama.style.height=n+"px";
  
}