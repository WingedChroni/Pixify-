const pTags = document.querySelectorAll("p");
const mode = document.querySelector("button.noBorder.font16");
const borders = document.querySelectorAll(".button.noBorder");
console.log(borders);
console.log(pTags);

mode.addEventListener("click", (e)=>{
  // alert("working");
  document.body.classList.toggle("theme");
  for (border of borders){
    border.classList.toggle("noBorder");
  }
  
  const pTags = document.querySelectorAll("p");
  console.log(document.body.classList.contains("theme"));
  if(document.body.classList.contains("theme")){
    mode.innerText="Light Mode";
    for (p of pTags){
      p.style.color ="white";
    }
  }else{
    mode.innerText="Dark Mode";
    for (p of pTags){
      p.style.color ="black";
    }
  }
})