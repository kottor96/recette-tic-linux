let sectionPlat=document.querySelector("#plat")
let sectionDessert=document.querySelector("#section_dessert")
let sectionBoisson=document.querySelector('#section_boisson')
let plat=sectionPlat.querySelectorAll('.card')
let dessert=sectionDessert.querySelectorAll('.card')
let boisson=sectionBoisson.querySelectorAll('.card')
let carte=document.querySelectorAll('.card')

corp_carte=document.querySelectorAll('.card-body')

carte.forEach(element => {
    element.querySelector('img').addEventListener('dblclick', ()=>{
        element.remove()
    })
    element.addEventListener('mouseover', ()=>{
        element.style.backgroundColor="gray"
    })
    element.addEventListener('mouseout', ()=>{
        element.style.backgroundColor="white"
    })
})
plat.forEach(element => {
    element.addEventListener('click', ()=>{
        element.style.boxShadow = "0.1cm 0.1cm 0.1cm blue"
    })
});

dessert.forEach(element => {
    element.addEventListener('click', ()=>{
        element.style.boxShadow = "0.1cm 0.1cm 0.1cm green"
    })
});
boisson.forEach(element => {
    element.addEventListener('click', ()=>{
        element.style.boxShadow = "0.1cm 0.1cm 0.1cm red"
    })
});

link1=plat[0].querySelectorAll('a')[1]
link2=plat[1].querySelectorAll('a')[1]
link3=plat[2].querySelectorAll('a')[1]
link1.addEventListener('click', ()=>{
    window.location.href = "./page/recette-plat/recette-carbonara.html";
})
link2.addEventListener('click', ()=>{
    window.location.href = "./page/recette-plat/recette-poulet-mariner.html";
})
link3.addEventListener('click', ()=>{
    window.location.href = "./page/recette-plat/recette-lasagne.html";
})

let pute = document.createElement("input");
pute.type= "text";
pute.placeholder="entrer votre adresse ici."
pute.id = "zoneTexte"
pute.style.width="300px"
pute.style.height="40px";

let buton = document.createElement("button")
buton.textContent = "valider"
buton.style.width="75px"
buton.style.height="40px"

buton.addEventListener("click", ()=>{
    console.log("valider, "+ pute.value)
})
let gros= document.createElement("button")
gros.textContent="newspapier"
gros.style.height="40px"

let message=document.createElement("p");
message.style.display="none"

buton.addEventListener("click", ()=>{
    if (pute.value.trim() !== "") {
        message.textContent = "Merci pour votre inscription à la newsletter !";
        message.style.display = "block";
    } 
    else {
        message.textContent = "Veuillez entrer un email valide.";
        message.style.display = "block";
        message.style.color = "white"; // Message d'erreur en rouge
    }
    })
fot=document.querySelector('footer')
fot.appendChild(pute)
fot.appendChild(buton)
fot.appendChild(message)