let sectionPlat=document.querySelector("#plat")
let sectionDessert=document.querySelector("#section_dessert")
let sectionBoisson=document.querySelector('#section_boisson')
let plat=sectionPlat.querySelectorAll('.card')
let dessert=sectionDessert.querySelectorAll('.card')
let boisson=sectionBoisson.querySelectorAll('.card')
let carte=document.querySelectorAll('.card')
var lol
corp_carte=document.querySelectorAll('.card-body')
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
});
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
plat[0].querySelectorAll('a')[2].addEventListener('click', ()=>{
    
})