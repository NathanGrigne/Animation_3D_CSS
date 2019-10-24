const buttonBuildings = document.querySelector('.hideBuildings')
const buildings = document.querySelector('.buildings')

const buttonBatmobile = document.querySelector('.hideBatmobile')
const batmobile = document.querySelector('.batmobile')

const buttonMoon = document.querySelector('.hideMoon')
const moon = document.querySelector('.moon')

const buttonClouds = document.querySelector('.hideCloud')
const clouds = document.querySelector('.clouds')

buttonBuildings.addEventListener('click',function(){
    if(buildings.classList.contains('hide')){
        buildings.classList.remove('hide')
    }
    else{
        buildings.classList.add('hide')
    }
})


buttonBatmobile.addEventListener('click',function(){
    if(batmobile.classList.contains('hide')){
        batmobile.classList.remove('hide')
    }
    else{
        batmobile.classList.add('hide')
    }
})

buttonMoon.addEventListener('click',function(){
    if(moon.classList.contains('hide')){
        moon.classList.remove('hide')
    }
    else{
        moon.classList.add('hide')
    }
})

buttonClouds.addEventListener('click',function(){
    if(clouds.classList.contains('hide')){
        clouds.classList.remove('hide')
    }
    else{
        clouds.classList.add('hide')
    }
})

const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const navigation = document.querySelector('.navigation')

openMenu.addEventListener('click',function(){
    navigation.classList.add('is-appear')
})

closeMenu.addEventListener('click',function(){
    navigation.classList.remove('is-appear')
})

const hideBatSignal = document.querySelector('.moon')
const batSignal = document.querySelector('.bat-signal')

moon.addEventListener('click',function(){
    if(batSignal.classList.contains('hide')){
        batSignal.classList.remove('hide')
    }
    else{
        batSignal.classList.add('hide')
    }
})