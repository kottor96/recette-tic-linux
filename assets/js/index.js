let sectionPlat=document.querySelector("#plat")
let sectionDessert=document.querySelector("#dessert")
let sectionBoisson=document.querySelector('#boisson')
let plat=sectionPlat.querySelectorAll('.card')
let dessert=sectionDessert.querySelectorAll('.card')
let boisson=sectionPlat.querySelectorAll('.card')
let carte=document.querySelectorAll('.card')
var lol
corp_carte=document.querySelectorAll('.card-body')
carte.forEach(element => {
    lol=element.querySelector('.card-body')
    console.log(element);
    console.log(lol);
    lol.addEventListener('click', ()=>{
        element.style.boxShadow = "0.1cm 0.1cm 0.1cm red"
    })
    element.addEventListener('mouseover', ()=>{
        element.style.backgroundColor="gray"
    })
    element.addEventListener('mouseout', ()=>{
        element.style.backgroundColor="white"
    })
    
});



