const buttonBuildings = document.querySelector('.hideBuildings')
const buildings = document.querySelector('.buildings')

const buttonBatmobile = document.querySelector('.hideBatmobile')
const batmobile = document.querySelector('.batmobile')

const buttonMoon = document.querySelector('.hideMoon')
const moon = document.querySelector('.moon')

const buttonClouds = document.querySelector('.hideCloud')
const clouds = document.querySelector('.clouds')

const buttonRoad = document.querySelector('.hideRoad')
const road = document.querySelector('.road')

const buttonEqualizer = document.querySelector('.hideEqualizer')

//button hide buildings

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

//button hide batmobile

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

//button hide moon

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

//button hide clouds

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

//button hide road

buttonRoad.addEventListener('click',function(){
    if(road.classList.contains('hide')){
        road.classList.remove('hide')
        buttonRoad.classList.remove('yellow')
    }
    else{
        road.classList.add('hide')
        buttonRoad.classList.add('yellow')
    }
})

//button hide equalizer

buttonEqualizer.addEventListener('click',function(){
    if(equalizer.classList.contains('hide')){
        equalizer.classList.remove('hide')
        buttonEqualizer.classList.remove('yellow')
    }
    else{
        equalizer.classList.add('hide')
        buttonEqualizer.classList.add('yellow')
    }
})

//Menu editing

const openMenu = document.querySelector('.open-menu')
const navigation = document.querySelector('.navigation')

//Open menu editing

openMenu.addEventListener('click',function(){
    if(navigation.classList.contains('is-appear')){
        navigation.classList.remove('is-appear')
    }
    else{
        navigation.classList.add('is-appear')
    }
})

//Sounds

const hideBatSignal = document.querySelector('.moon')
const batSignal = document.querySelector('.bat-signal')
const soundBatSignal = document.querySelector('.sound-bat-signal')

//sound on click moon

moon.addEventListener('click',function(){
    if(batSignal.classList.contains('hide')){
        batSignal.classList.remove('hide')
        soundBatSignal.play()
        soundBatmobile.volume = 0.5
        for(let i = 0; i < barEqualizer.length; i++){
            barEqualizer[i].classList.remove('equalizer-animation')
        }
        musicStatus = false
        themeBatman.pause()
        batmanSoundStatus = false
        soundBatmobile.pause()
    }
    else{
        batSignal.classList.add('hide')
    }
})

//Equalizer

const equalizer = document.querySelector('.equalizer')
const themeBatman = document.querySelector('.theme-batman')
const barEqualizer = document.querySelectorAll('.bar')
let musicStatus = false

//Sound on click equalizer

equalizer.addEventListener('click',function(){
    if(musicStatus == false){
        for(let i = 0; i < barEqualizer.length; i++){
            barEqualizer[i].classList.add('equalizer-animation')
        }
        batmanSoundStatus = false
        soundBatmobile.pause()
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

//Sound on click batmobile

const soundBatmobile = document.querySelector('.sound-batmobile')
let batmanSoundStatus = false

batmobile.addEventListener('click',function(){
    if(batmanSoundStatus == false){
        soundBatmobile.play()
        soundBatmobile.volume = 0.5
        for(let i = 0; i < barEqualizer.length; i++){
            barEqualizer[i].classList.remove('equalizer-animation')
        }
        musicStatus = false
        themeBatman.pause()
        batmanSoundStatus = true
    }
    else{
        soundBatmobile.pause()
        batmanSoundStatus = false
    }
})

// Click to play

const clickToPlay = document.querySelector('.click-to-play')
const playMenu = document.querySelector('.play-menu')

clickToPlay.addEventListener('click',function(){
    playMenu.classList.add('hide')
    moon.classList.remove('hide')
    clouds.classList.remove('hide')
    buildings.classList.remove('hide')
    road.classList.remove('hide')
    batmobile.classList.remove('hide')
    equalizer.classList.remove('hide')
})