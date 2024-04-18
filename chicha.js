var an= document.querySelector("#an");
var va= document.querySelector("#va");
var bn=document.querySelector("#bn");
var vb= document.querySelector("#vb");
var cn=document.querySelector("#cn");
var vc=document.querySelector("#vc");
var fac=document.querySelector("#fac");

an.oninput=()=> me();
bn.oninput=()=> me();
cn.oninput=()=> me();
fac.oninput=()=> me();
const me=()=>{
    let a=parseInt(an.value);
    va.innerHTML=a;
    let b=parseInt(bn.value);
    vb.innerHTML=b;
    let c= parseInt(cn.value);
    vc.innerHTML=c;
    let R=fac;
    a2.innerHTML="";
    a3.innerHTML="";
    var spinner=document.querySelector("#spinner");
    spinner.innerHTML="<img src='im.gif'>";
    setTimeout(()=>{


let ux=(((-1)*b));
let ux1=(Math.sqrt(Math.pow(b,2))-(4*a*c));
let ux2=(2*a);
let fx1=(ux-ux1)/ux2;
x1.innerHTML=fx1.toFixed(2);



let dx=(ux+ux1)/ux2;
x2.innerHTML=dx.toFixed(2);

if (ux1==0) {
    R.textContent="Una solucion"
    x2.innerHTML="";
}
else if(ux1>0){
    R.textContent="Dos soluciones"
}
else if(ux1<0){
    R.textContent="No hay solucion"
x1.innerHTML=" ";
x2.innerHTML=" ";

}

a2.innerHTML="X1";
a3.innerHTML="X2";
spinner.innerHTML="";
},1000);

}
