const saName = document.querySelector('.name')
const time = document.querySelector('.time')
const nameHere = document.querySelector('.name-here')
const timeHere = document.querySelector('.time-here')
const main = document.querySelector('.main')
const buttonik = document.querySelector('.buttonik')

function create() {
    let newName = document.createElement('p')
    let newTime = document.createElement('p')
    let newDiv = document.createElement('div')
    let span = document.createElement("span")
    let audioNum = 20

    span.textContent = "\u00d7"

    newName.textContent = saName.value
    newTime.textContent = time.value

    
    main.appendChild(newDiv)
    newDiv.appendChild(newName)
    newDiv.appendChild(newTime)
    newDiv.appendChild(span)

    newDiv.style.display = "flex"
    newDiv.style.gap = "50px"
    span.style.cursor = "pointer"
    const audio = new Audio()
    audio.src = "./onlymp3.to - Alert notification sound effect--TnurslVW5M-256k-1654082821386.mp3"

    setInterval(() => {
        newTime.textContent--
        audioNum++
        if(newTime.textContent < 0 && newTime.textContent > -1.5 ) {
            newName.style.color = "red"
            audio.play()
            audioNum = 0
        }
        if(newTime.textContent < 0) {
            newTime.style.color = "red"
        }
        
    }, 60000);



    
    
}

main.addEventListener("click", remove)

function remove(e) {
    if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        
    }
}

