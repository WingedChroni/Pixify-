const pTags = document.querySelectorAll("p");
const mode = document.querySelector("button.noBorder.font16");
const borders = document.querySelectorAll(".button.noBorder");
console.log(borders);
console.log(pTags);

//add functionality to dark mode button
mode.addEventListener("click", (e)=>{
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

//Hamburger menu
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", (e)=>{
  let navBar = document.querySelector("div.flex");
  document.querySelector("nav").classList.toggle("links");
  navBar.classList.toggle("mobile-menu");
});
console.log(hamburger.innerHTML);

window.onclick = function(event) {
  console.log(event.target.matches("#dropBtn"));
  if (!event.target.matches("#dropBtn")) {
    document.querySelector("div.flex").classList.remove("mobile-menu");
    document.querySelector("nav").classList.remove("links");
    console.log(`nav no longer ${document.querySelector("nav").classList.contains("links")}`);
  }
}