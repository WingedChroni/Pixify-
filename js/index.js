const nav = document.querySelector("nav");
nav.style.flexBasis="25%";

const container = document.querySelector("#container");
container.style.position="relative";

container.firstElementChild.style.width="100%";

//message styling
container.firstElementChild.nextElementSibling.style = `width:45%;
position: absolute;
bottom:0;
left: 0;
border-radius: 150px 150px 150px 0;
padding: 3%;`;

//button styling
document.querySelector(".button").style=`
position:absolute;
right: 5%;
bottom: 5%;
padding: 2% 5%;
font-size:36px;`;