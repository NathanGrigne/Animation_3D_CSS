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
    buildings.classList.toggle('hide')
})

//button hide batmobile

buttonBatmobile.addEventListener('click',function(){
    batmobile.classList.toggle('hide')
})

//button hide moon

buttonMoon.addEventListener('click',function(){
    moon.classList.toggle('hide')
})

//button hide clouds

buttonClouds.addEventListener('click',function(){
    clouds.classList.toggle('hide')
})

//button hide road

buttonRoad.addEventListener('click',function(){
    road.classList.toggle('hide')
})

//button hide equalizer

buttonEqualizer.addEventListener('click',function(){
    equalizer.classList.toggle('hide')
})

//Menu editing

const openMenu = document.querySelector('.open-menu')
const navigation = document.querySelector('.navigation')

//Open menu editing

openMenu.addEventListener('click',function(){
    navigation.classList.toggle('is-appear')
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

//Sound scream

const cloud2 = document.querySelector('.cloud2')
const soundScream = document.querySelector('.sound-scream')

cloud2.addEventListener('click',function(){
    soundScream.play()
    themeBatman.pause()
    soundBatmobile.pause()
    soundBatSignal.pause()
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
            wheels[i].classList.remove('roll-wheels-paused')

            wheels[i].classList.remove('roll-wheels-inverse-paused')
            wheels[i].classList.remove('roll-wheels-fast-paused')

            wheels[i].classList.remove('roll-wheels-inverse')
            wheels[i].classList.remove('roll-wheels-fast')
        }
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.add('road-line-moving')
            roadLine[y].classList.remove('road-line-moving-paused')

            roadLine[y].classList.remove('road-line-moving-inverse-paused')
            roadLine[y].classList.remove('road-line-moving-fast-paused')

            roadLine[y].classList.remove('road-line-moving-inverse')
            roadLine[y].classList.remove('road-line-moving-fast')
        }
        batmobile.classList.add('batmobile-moving')

        buildings.classList.add('buildings-moving')
        buildings.classList.remove('buildings-moving-paused')

        buildings.classList.remove('buildings-moving-fast-paused')
        buildings.classList.remove('buildings-moving-inverse-paused')

        buildings.classList.remove('buildings-moving-fast')
        buildings.classList.remove('buildings-moving-inverse')
    }
    else if(event.keyCode === 16 && 39){
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.add('road-line-moving-fast')
            roadLine[y].classList.remove('road-line-moving-fast-paused')

            roadLine[y].classList.remove('road-line-moving-paused')
            roadLine[y].classList.remove('road-line-moving-inverse-paused')

            roadLine[y].classList.remove('road-line-moving')
            roadLine[y].classList.remove('road-line-moving-inverse')
        }
        for(let i = 0; i < wheels.length; i++){
            wheels[i].classList.add('roll-wheels-fast')
            wheels[i].classList.remove('roll-wheels-fast-paused')

            wheels[i].classList.remove('roll-wheels-inverse-paused')
            wheels[i].classList.remove('roll-wheels-paused')

            wheels[i].classList.remove('roll-wheels-inverse')
            wheels[i].classList.remove('roll-wheels')
        }

        buildings.classList.add('buildings-moving-fast')
        buildings.classList.remove('buildings-moving-fast-paused')

        buildings.classList.remove('buildings-moving-paused')
        buildings.classList.remove('buildings-moving-inverse-paused')

        buildings.classList.remove('buildings-moving')
        buildings.classList.remove('buildings-moving-inverse')
    }
    else if(event.keyCode === 37){
        for(let i = 0; i < wheels.length; i++){
            wheels[i].classList.add('roll-wheels-inverse')
            wheels[i].classList.remove('roll-wheels-inverse-paused')

            wheels[i].classList.remove('roll-wheels-paused')
            wheels[i].classList.remove('roll-wheels-fast-paused')

            wheels[i].classList.remove('roll-wheels')
            wheels[i].classList.remove('roll-wheels-fast')
        }
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.add('road-line-moving-inverse')
            roadLine[y].classList.remove('road-line-moving-inverse-paused')

            roadLine[y].classList.remove('road-line-moving-paused')
            roadLine[y].classList.remove('road-line-moving-fast-paused')

            roadLine[y].classList.remove('road-line-moving')
            roadLine[y].classList.remove('road-line-moving-fast')
        }
        batmobile.classList.add('batmobile-moving')

        buildings.classList.add('buildings-moving-inverse')
        buildings.classList.remove('buildings-moving-inverse-paused')

        buildings.classList.remove('buildings-moving-paused')
        buildings.classList.remove('buildings-moving-fast-paused')

        buildings.classList.remove('buildings-moving-fast')
        buildings.classList.remove('buildings-moving')
    }
})

window.addEventListener('keyup',(event) =>{
    if(event.keyCode === 39){
        for(let i = 0; i < wheels.length; i++){
            wheels[i].classList.add('roll-wheels-paused')
            
        }
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.add('road-line-moving-paused')
        }
        batmobile.classList.remove('batmobile-moving')
        buildings.classList.add('buildings-moving-paused')
    }
    else if(event.keyCode === 16 && 39){
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.add('road-line-moving-fast-paused')
        }
        for(let i = 0; i < wheels.length; i++){
            wheels[i].classList.add('roll-wheels-fast-paused')
        }
        buildings.classList.add('buildings-moving-fast-paused')
    }
    else if(event.keyCode === 37){
        for(let i = 0; i < wheels.length; i++){
            wheels[i].classList.add('roll-wheels-inverse-paused')
        }
        for(let y = 0; y < roadLine.length; y++){
            roadLine[y].classList.add('road-line-moving-inverse-paused')
        }
        batmobile.classList.remove('batmobile-moving')
        buildings.classList.add('buildings-moving-inverse-paused')
    }
})