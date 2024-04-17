let peso = document.querySelector("#peso");
let vpeso = document.querySelector("#vpeso");
let altura = document.querySelector("#altura");
let valtura = document.querySelector("#valtura");
let ri = document.querySelector("#ri");


vpeso.innerHTML = peso.value;
  peso.oninput =()=>{
  vpeso.innerHTML= peso.value+"KG";
  let n= parseInt(peso.value);
  
valtura.innerHTML = altura.value;

  altura.oninput =()=>{
spinner.innerHTML="<img src='im.gif' width=150>";
  setTimeout(()=>{
    spinner.innerHTML="";

  valtura.innerHTML= altura.value+"CM";
  let m= parseInt(altura.value);
  let res = m/100;
  let re=res*res;
  let imc=n/re;
  ri.innerHTML=imc.toFixed(2);
  
  
;
  
  if (imc <= 18.5) {
      i.style.background = "black";
      f.style.background="green";
      s.style.background="yellow";
      o1.style.background="orange";
      o2.style.background="red";
      o3.style.background="purple";
      }

    if (imc >= 18.6 && imc <= 24.9) {
      i.style.background="blue";
        f.style.background = "black";
        s.style.background = "yellow";
        o1.style.background = "orange";
        o2.style.background = "red";
        o3.style.background = "purple";
    }

    if (imc >= 25 && imc <= 29.9) {
i.style.background="blue";
f.style.background="green";
        s.style.background="black";
        o1.style.background = "orange";
        o2.style.background = "red";
        o3.style.background = "purple";
    }

    if (imc >= 30 && imc <= 34.9) {
      i.style.background="blue";
f.style.background="green";
 s.style.background = "yellow";
      o1.style.background="black";
        o2.style.background = "red";
        o3.style.background = "purple";
    }

    if (imc >= 35 && imc <= 39.9) {
         i.style.background="blue";
f.style.background="green";
 s.style.background = "yellow";
 o1.style.background = "orange";
      o2.style.background="black";
o3.style.background = "purple";
    }
    if (imc >=40) {
         i.style.background="blue";
f.style.background="green";
 s.style.background = "yellow";
 o1.style.background = "orange";
 o2.style.background = "red";
      o3.style.background="black";
    }
  },1000)
  }}
