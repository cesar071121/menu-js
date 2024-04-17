const suma=()=>{
    let n1 = parseInt(document.querySelector("#num1").value);
    let n2 = parseInt(document.querySelector("#num2").value);
    let suma = n1+n2;
    document.querySelector("#res").innerHTML="<h1>"+suma+"</h1";
  }
  
  const resta=()=>{
    let n1 = parseInt(document.querySelector("#num1").value);
    let n2 = parseInt(document.querySelector("#num2").value);
    let resta = n1-n2;
    document.querySelector("#res").innerHTML="<h1>"+resta+"</h1";
  }
  
  const multi=()=>{
    let n1 = parseInt(document.querySelector("#num1").value);
    let n2 = parseInt(document.querySelector("#num2").value);
    let multiplicacion = n1*n2;
    document.querySelector("#res").innerHTML="<h1>"+multiplicacion+"</h1";
  }
  
  const division=()=>{
    let n1 = parseInt(document.querySelector("#num1").value);
    let n2 = parseInt(document.querySelector("#num2").value);
    let division = n1/n2;
    document.querySelector("#res").innerHTML="<h1>"+division+"</h1";
  }
  
  const porcentaje=()=>{
    let n1 = parseInt(document.querySelector("#num1").value);
    let n2 = parseInt(document.querySelector("#num2").value);
    let porcentaje = n1%n2;
    document.querySelector("#res").innerHTML="<h1>"+porcentaje+"</h1";
  }
  
  const potencia=()=>{
    let n1 = parseInt(document.querySelector("#num1").value);
    let n2 = parseInt(document.querySelector("#num2").value);
    let potencia = Math.pow(n1, n2);
    document.querySelector("#res").innerHTML="<h1>"+potencia+"</h1";
  }

  const delet=()=>{
    document.querySelector("#num1").value="";
    document.querySelector("#num2").value="";
    document.querySelector("#res").innerHTML="";
    }
  