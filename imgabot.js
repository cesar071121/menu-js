let ima=document.querySelector("#spinner");

document.querySelector("#btnVer").onclick=()=>{
ima.innerHTML="<img src='a.jpeg' width=500px>";
ima.style.transform=" rotateY(-180deg)";
  ima.style.transition="all 1.5s linear";
  ima.style.transitionStyle="preserve-3d";
  ima.style.backfaceVisibility

  setTimeout(()=>{
    ima.style.transform=" rotateY(0deg)";
    ima.style.transition="all 3.5s linear";
ima.src=ima
  },1000)
}
document.querySelector("#btnVer2").onclick=()=>{
    spinner.innerHTML="<img src='b.jpg' width=500px>";
    ima.style.transform=" rotateY(-180deg)";
  ima.style.transition="all 1.5s linear";
  ima.style.transitionStyle="preserve-3d";
  ima.style.backfaceVisibility

  setTimeout(()=>{
    ima.style.transform=" rotateY(0deg)";
    ima.style.transition="all 3.5s linear";
ima.src=ima
  },1000)
} 
document.querySelector("#btnVer3").onclick=()=>{
    spinner.innerHTML="<img src='c.jpeg' width=500px>";
    ima.style.transform=" rotateY(-180deg)";
    ima.style.transition="all 1.5s linear";
    ima.style.transitionStyle="preserve-3d";
    ima.style.backfaceVisibility
  
    setTimeout(()=>{
      ima.style.transform=" rotateY(0deg)";
      ima.style.transition="all 3.5s linear";
  ima.src=ima
    },1000)
} 
document.querySelector("#btnVer4").onclick=()=>{
    spinner.innerHTML="<img src='d.jpg' width=500px>";
    ima.style.transform=" rotateY(-180deg)";
    ima.style.transition="all 1.5s linear";
    ima.style.transitionStyle="preserve-3d";
    ima.style.backfaceVisibility
  
    setTimeout(()=>{
      ima.style.transform=" rotateY(0deg)";
      ima.style.transition="all 3.5s linear";
  ima.src=ima
    },1000)
}
