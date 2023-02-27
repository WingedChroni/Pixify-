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
          <p>${album.title} - ${album.name}</p>
          <p>see more</p>
       </div>
       </a>
       `
    });
    catalog.innerHTML = preview.join("");
  };

let currentId;
let gallery;
let count = 0;

  window.onload = function(){

    const urlParams = new URLSearchParams (window.location.search);
    currentId = urlParams.get("id");
    console.log(currentId === null);

    if(currentId === null){
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



    }else{
      console.log(imageSets);
    console.log("current id is" + currentId);

    const currentAlbum = imageSets.filter(album=>album.id==currentId);
    console.log(currentAlbum[0]);
    gallery=currentAlbum[0];
  // try{
    console.log(currentAlbum[0].images[count]);
    
    const pic = `<h1>${currentAlbum[0].title}</h1>
    <h2>${currentAlbum[0].name}</h2>
    <img src=${currentAlbum[0].images[0]} alt=${currentAlbum[0].title} class="focused">
    <p font20>${count+1} of ${currentAlbum[0].images.length}</p>
    <div class="flex spaceBetween textCenter">
      <button class="button bgDark noBorder font20" id="prev">Previous</button>
      <button class="button bgDark noBorder font20" id="next">Next</button>
    </div>`;
    main.innerHTML = pic;
    document.querySelector("p").style.marginTop="2%";
    let temp = main.lastChild;
    temp.style.width="30%";   
    temp.style.margin = "3% 0 8% 0";
  // }catch(e){
  //   if(e){
  //     console.log("still no?");
  //   }
  // }
  const next = document.querySelector("#next");
  next.addEventListener("click", (e)=>{
    
    if(count<4){
      count++;
      document.querySelector("img").src=gallery.images[count];
      document.querySelector("p").innerText=`${count+1} of 5`; 
    }
  });

  const previous = document.querySelector("#prev");
  previous.addEventListener("click", (e)=>{
   
    // alert(count);
    if(count>0){
       count--;
      document.querySelector("img").src=gallery.images[count];
      document.querySelector("p").innerText=`${count+1} of 5`; 
    }
  });
  }
}

// const previous = document.querySelector("#next");
// previous.addEventListener("click", (e)=>{
//   count++;
//   alert(count);
//   if(count<5){
//     document.querySelector("img").src=gallery.images[count];
//   }
// });

const mode = document.querySelector("button.noBorder");

mode.addEventListener("click", (e)=>{
  // alert("working");
  document.body.classList.toggle("theme");
  console.log(document.body.classList.contains("theme"));
  if(document.body.classList.contains("theme")){
    mode.innerText="Light Mode";
  }else{
    mode.innerText="Dark Mode";
  }
})

