let sectionPlat=document.querySelector("#plat")
let sectionDessert=document.querySelector("#section_dessert")
let sectionBoisson=document.querySelector('#section_boisson')
let plat=sectionPlat.querySelectorAll('.card')
let dessert=sectionDessert.querySelectorAll('.card')
let boisson=sectionBoisson.querySelectorAll('.card')
let carte=document.querySelectorAll('.card')

corp_carte=document.querySelectorAll('.card-body')
carte.forEach(element => {
    carte.forEach(element => {
        element.addEventListener('dblclick', ()=>{
            element.remove()
        })
        element.addEventListener('mouseover', ()=>{
            element.style.backgroundColor="gray"
        })
        element.addEventListener('mouseout', ()=>{
            element.style.backgroundColor="white"
        })
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