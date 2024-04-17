var spinner=document.querySelector("#spinner");
document.querySelector("#btnver").onclick=()=>{
  spinner.innerHTML="<img src='im.gif'>";
  setTimeout(()=>{
    spinner.innerHTML="<h1>HOLA!!</h1>";
  },1000);
}