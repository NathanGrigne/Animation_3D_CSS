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
        buttonBuildings.classList.remove('yellow')
    }
    else{
        buildings.classList.add('hide')
        buttonBuildings.classList.add('yellow')
    }
})


buttonBatmobile.addEventListener('click',function(){
    if(batmobile.classList.contains('hide')){
        batmobile.classList.remove('hide')
        buttonBatmobile.classList.remove('yellow')
    }
    else{
        batmobile.classList.add('hide')
        buttonBatmobile.classList.add('yellow')
    }
})

buttonMoon.addEventListener('click',function(){
    if(moon.classList.contains('hide')){
        moon.classList.remove('hide')
        buttonMoon.classList.remove('yellow')
    }
    else{
        moon.classList.add('hide')
        buttonMoon.classList.add('yellow')
    }
})

buttonClouds.addEventListener('click',function(){
    if(clouds.classList.contains('hide')){
        clouds.classList.remove('hide')
        buttonClouds.classList.remove('yellow')
    }
    else{
        clouds.classList.add('hide')
        buttonClouds.classList.add('yellow')
    }
})

const openMenu = document.querySelector('.open-menu')
const navigation = document.querySelector('.navigation')

openMenu.addEventListener('click',function(){
    if(navigation.classList.contains('is-appear')){
        navigation.classList.remove('is-appear')
    }
    else{
        navigation.classList.add('is-appear')
    }
})

const hideBatSignal = document.querySelector('.moon')
const batSignal = document.querySelector('.bat-signal')
const soundBatSignal = document.querySelector('.sound-bat-signal')

moon.addEventListener('click',function(){
    if(batSignal.classList.contains('hide')){
        batSignal.classList.remove('hide')
        soundBatSignal.play()
    }
    else{
        batSignal.classList.add('hide')
    }
})

const soundBatmobile = document.querySelector('.sound-batmobile')

batmobile.addEventListener('click',function(){
    soundBatmobile.play()
    soundBatmobile.volume = 0.5
})

const equalizer = document.querySelector('.equalizer')
const themeBatman = document.querySelector('.theme-batman')
const barEqualizer = document.querySelectorAll('.bar')
let musicStatus = false

equalizer.addEventListener('click',function(){
    if(musicStatus == false){
        for(let i = 0; i < barEqualizer.length; i++){
            barEqualizer[i].classList.add('equalizer-animation')
        }
        themeBatman.play()
        musicStatus = true
    }
    else{
        for(let i = 0; i < barEqualizer.length; i++){
            barEqualizer[i].classList.remove('equalizer-animation')
        }
        themeBatman.pause()
        musicStatus = false
    }
})