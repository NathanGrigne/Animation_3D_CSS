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
let musicStatus = true

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
const body = document.querySelector('body')

clickToPlay.addEventListener('click',function(){
    body.classList.add('background-gradient')
    playMenu.classList.add('hide')
    moon.classList.remove('hide')
    clouds.classList.remove('hide')
    buildings.classList.remove('hide')
    road.classList.remove('hide')
    batmobile.classList.remove('hide')
    equalizer.classList.remove('hide')
    themeBatman.play()
    for(let i = 0; i < barEqualizer.length; i++){
        barEqualizer[i].classList.add('equalizer-animation')
    }
})

//Launch animation keydown

const wheels = document.querySelectorAll('.wheels')
const roadLine = document.querySelectorAll('.road-line')

window.addEventListener('keydown',event =>{
    if(event.keyCode === 39){
        for(let i = 0; i < wheels.length; i++){
            wheels[i].classList.add('roll-wheels')
        }
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.add('road-line-moving')
        }
        buildings.classList.add('buildings-moving')
        batmobile.classList.add('batmobile-moving')

        buildings.classList.remove('buildings-moving-inverse')
        buildings.classList.remove('buildings-moving-fast')
        for(let x = 0; x < wheels.length; x++){
            wheels[x].classList.remove('roll-wheels-inverse')
        } 
        for(let e = 0; e < roadLine.length; e++){
            roadLine[e].classList.remove('road-line-moving-inverse')
        }
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.remove('road-line-moving-fast')
        }
    }
    else if(event.keyCode === 16 && 39){
        buildings.classList.add('buildings-moving-fast')
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.add('road-line-moving-fast')
        }
    }
    else if(event.keyCode === 37){
        for(let i = 0; i < wheels.length; i++){
            wheels[i].classList.add('roll-wheels-inverse')
        }
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.add('road-line-moving-inverse')
        }
        buildings.classList.add('buildings-moving-inverse')
        batmobile.classList.add('batmobile-moving')

        buildings.classList.remove('buildings-moving')
        buildings.classList.remove('buildings-moving-fast')
        for(let x = 0; x < wheels.length; x++){
            wheels[x].classList.remove('roll-wheels')
        } 
        for(let e = 0; e < roadLine.length; e++){
            roadLine[e].classList.remove('road-line-moving')
        }
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.remove('road-line-moving-fast')
        }
    }

    else{
        for(let i = 0; i < wheels.length; i++){
            wheels[i].classList.remove('roll-wheels')
            wheels[i].classList.remove('roll-wheels-inverse')
        } 
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.remove('road-line-moving')
            roadLine[y].classList.remove('road-line-moving-inverse')
        }
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.remove('road-line-moving-fast')
        }
        batmobile.classList.remove('batmobile-moving')
        buildings.classList.remove('buildings-moving')
        buildings.classList.remove('buildings-moving-inverse')
        buildings.classList.remove('buildings-moving-fast')
    }
})

// AAAH

const cloud1 = document.querySelector('.cloud1')
const soundScream = document.querySelector('.sound-scream')

cloud1.addEventListener('click',function(){
    soundScream.play()
})
