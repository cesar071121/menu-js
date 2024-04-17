let valor = document.querySelector("#ancho");
let value = document.querySelector("#vancho"); 
let caja =document.querySelector("#caja"); 
valor.oninput=()=>{
  let n=parseInt(valor.value);
  value.innerHTML=n;
  caja.style.width=n+"px"
}


let alto = document.querySelector("#alto");
let altu = document.querySelector("#valto"); 
alto.oninput=()=>{
  let f=parseInt(alto.value);
  altu.innerHTML=f;
  caja.style.height=f+"px"
}

let color =document.querySelector("#color");
color.onchange=()=>{ 
let co=color.value;
  caja.style.background=co;
}


let valo = document.querySelector("#anchob");
let valu = document.querySelector("#vanchob"); 
valo.oninput=()=>{
  let n=parseInt(valo.value);
  valu.innerHTML=n;
  caja.style.borderWidth=n+"px";

}
let colorb=document.querySelector("#colorb");
colorb.oninput = () => {
  let n = colorb.value;
  
  caja.style.borderColor = n;
}
let tipob= document.querySelector("#tipob");
tipob.onchange = () => {
  let r = tipob.value;
  
  caja.style.borderStyle = r;
}
let valor1=document.querySelector("#radio");
let rad=document.querySelector("#radius");
valor1.oninput=()=>{
  let k=parseInt(valor1.value);
  rad.innerHTML=k;
  caja.style.borderRadius=k+"%"
}
let valor2=document.querySelector("#rotat");
let ro=document.querySelector("#rotate");
valor2.oninput=()=>{
  let z=parseInt(valor2.value);
  ro.innerHTML=z;
  caja.style.rotate=z+"deg"
}
let valor3=document.querySelector("#transx");
let rs=document.querySelector("#vtransx");
valor3.oninput=()=>{
  let x=parseInt(valor3.value);
  vtransx.innerHTML=x;
  caja.style.transform="translateX("+x+"px)";
}
let valor5=document.querySelector("#transy");
let xs=document.querySelector("#vtransy");
  valor5.oninput=()=>{
  let y=parseInt(valor5.value);
  vtransy.innerHTML=y;
  caja.style.transform="translateY("+y+"px)";
}
let valor6=document.querySelector("#escale");
  valor6.oninput=()=>{
  let s=parseInt(valor6.value);
  vescale.innerHTML=s;
  caja.style.transform="scale("+s+")";

}
let sombra = document.querySelector("#csombra");
let dv13 = document.querySelector("#sombra");

let tsombra = document.querySelector("#vsombra");
let dv14 = document.querySelector("#som");

let sx = document.querySelector("#sx");
let dv15 = document.querySelector("#som2");

let sy = document.querySelector("#sy");
let dv16 = document.querySelector("#som3");

sombra.onchange = () => {
let n = sombra.value;
caja.style.boxShadow = "10px 10px 5px " + n; 
}

tsombra.oninput = () => {
let n1= parseInt(tsombra.value);
dv14.innerHTML = n1;
caja.style.boxShadow = "10px 10px" +n1+"px black"; 
}

sx.oninput = () => {
let n2 = parseInt(sx.value);
dv15.innerHTML = n2;
caja.style.boxShadow = `${sx}px 10px 10px black`; 
}

sy.oninput = () => {
let n3 = parseInt(sy.value);
dv16.innerHTML = n3;
caja.style.boxShadow = `10px ${sy}px 10px black`;
}