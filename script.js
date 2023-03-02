const imageSets = [
    {
      id:1,  
      name: 'Andrew Smith',
      title: 'Innocence',
      images: [
        'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
        'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
      ],
    },
    {
      id:2,
      name: 'Jane Doe',
      title: 'Nature Adventures',
      images: [
        'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
        'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
      ],
    },
    {
      id:3,
      name: 'Irna Tawsen',
      title: 'Faces of the World',
      images: [
        'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
        'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ],
    },
    {
      id:4,
      name: 'Mark Dale',
      title: 'Wild Animals',
      images: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
        'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ]
    }

  ];

const main = document.querySelector("main");

  const displayCatalog =(list) => {
    const catalog = document.querySelector("#photoCatalog");
    const preview = list.map(album=>{
      console.log(album.images[0]);
      return `<a class="preview" href="details.html?id=${album.id}">
      <img src=${album.images[0]} alt=${album.title}>
       <div class="black flex spaceBetween">
          <p class="font16">${album.title} - ${album.name}</p>
          <p class="font16">see more</p>
       </div>
       </a>
       `
    });
    catalog.innerHTML = preview.join("");
  };

let currentId;
let gallery;


  window.onload = function(){

    const urlParams = new URLSearchParams (window.location.search);
    currentId = urlParams.get("id");
    console.log(currentId === null);

   
      displayCatalog(imageSets);
      const submit = document.querySelector("#submit");
      submit.addEventListener("click", (e)=>{
        e.preventDefault();
        console.log("check");
        const name = document.querySelector('input[name="name"]').value;
        const title = document.querySelector('input[name="title"]').value;
        const link1 = document.querySelector('input[name="link1"]').value;
        const link2 = document.querySelector('input[name="link2"]').value;
        const link3 = document.querySelector('input[name="link3"]').value;
        const link4 = document.querySelector('input[name="link4"]').value;
        const link5 = document.querySelector('input[name="link5"]').value;
        
        const newAddition = {
          id: (imageSets.length+1),
          name: name,
          title: title,
          images: [
            link1,
            link2,
            link3,
            link4,
            link5
          ]
        };

       alert(newAddition.id);
        imageSets.push(newAddition);
        console.log(imageSets);

        const newPreview = document.createElement("div");
        newPreview.innerHTML = 
        `<a class="preview" href="details.html?id=${newAddition.id}">
      <img src=${newAddition.images[0]} alt=${newAddition.title}>
       <div class="black flex spaceBetween">
          <p>${newAddition.title} - ${newAddition.name}</p>
          <p>see more</p>
       </div>
       </a>`;

       let test = document.querySelector("#photoCatalog");
      //  test.append(newPreview);
       test.insertBefore(newPreview, test.firstChild);
        console.log("added");
      });

}

// const pTags = document.querySelectorAll("p");
// const mode = document.querySelector("button.noBorder");
// const borders = document.querySelectorAll(".button");
// // console.log(borders);
// console.log(pTags);

// mode.addEventListener("click", (e)=>{
//   // alert("working");
//   document.body.classList.toggle("theme");
//   // for (border of borders){
//   //   border.classList.toggle("noBorder");
//   // }
  
//   const pTags = document.querySelectorAll("p");
//   console.log(document.body.classList.contains("theme"));
//   if(document.body.classList.contains("theme")){
//     mode.innerText="Light Mode";
//     for (p of pTags){
//       p.style.color ="white";
//     }
//   }else{
//     mode.innerText="Dark Mode";
//     for (p of pTags){
//       p.style.color ="black";
//     }
//   }
// })



