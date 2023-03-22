document.addEventListener('DOMContentLoaded', () => {
  const dartboard = document.querySelector('.dartboard')
  const scoreDisplay = document.getElementById('score')
  const width = 25
  const layout = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,  
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0,
    0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 0, 0,
    0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 0,
    0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1, 0,
    1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1,
    1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 5, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1,
    1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 5, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1,
    1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 5, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1,
    1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1,
    0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1, 0,
    0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 0,
    0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 0, 0,
    0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   ]
  const parts = []
  function createDartboard() {
    for (let i=0; i < layout.length; i++) {
        const part = document.createElement('div')
        dartboard.appendChild(part)
        parts.push(part)
        if(layout[i] === 0) {
            parts[i].classList.add('outside')
        } else if (layout[i] === 1) {
            parts[i].classList.add('circle1') 
        } else if (layout[i] === 2) {
            parts[i].classList.add('circle2')
        } else if (layout[i] === 3) {
            parts[i].classList.add('circle3')
        } else if (layout[i] === 4) {
            parts[i].classList.add('circle4')
        } else if (layout[i] === 5) {
            parts[i].classList.add('center')
        }    

    }
  }
  createDartboard()
  
  let dart1CurrentIndex = 26
  let dart2CurrentIndex = 27
  let dart3CurrentIndex = 28

  parts[dart1CurrentIndex].classList.add('dart1')
  parts[dart2CurrentIndex].classList.add('dart2')
  parts[dart3CurrentIndex].classList.add('dart3')
  let points = 0
  

const button1 = document.createElement('button')
button1.type = 'button'
button1.classList.add('button1')
button1.innerText = 'Throw dart one'
document.body.appendChild(button1)

button1.addEventListener('click', throwDart1)

function throwDart1 () {
    parts[dart1CurrentIndex].classList.remove('dart1')
    let throw1 = Math.floor(Math.random() * parts.length)
    parts[throw1].classList.add('dart1')
    button1.disabled = true
    if(parts[throw1].classList.contains('circle1')) {
        points += 10
        scoreDisplay.innerHTML = points
    } else if (parts[throw1].classList.contains('circle2')) {
        points += 20
        scoreDisplay.innerHTML = points
    } else if (parts[throw1].classList.contains('circle3')) {
        points += 30
        scoreDisplay.innerHTML = points
    } else if (parts[throw1].classList.contains('circle4')) {
        points += 40
        scoreDisplay.innerHTML = points
    } else if (parts[throw1].classList.contains('center')) {
        points += 50
        scoreDisplay.innerHTML = points   
}
}

const button2 = document.createElement('button')
button2.type = 'button'
button2.classList.add('button1')
button2.innerText = 'Throw dart two'
document.body.appendChild(button2)

button2.addEventListener('click', throwDart2)

function throwDart2 () {
    parts[dart2CurrentIndex].classList.remove('dart2')
    let throw2 = Math.floor(Math.random() * parts.length)
    parts[throw2].classList.add('dart2')
    button2.disabled = true
    if(parts[throw2].classList.contains('circle1')) {
        points += 10
        scoreDisplay.innerHTML = points
    } else if (parts[throw2].classList.contains('circle2')) {
        points += 20
        scoreDisplay.innerHTML = points
    } else if (parts[throw2].classList.contains('circle3')) {
        points += 30
        scoreDisplay.innerHTML = points
    } else if (parts[throw2].classList.contains('circle4')) {
        points += 40
        scoreDisplay.innerHTML = points
    } else if (parts[throw2].classList.contains('center')) {
        points += 50
        scoreDisplay.innerHTML = points   
}
}

const button3 = document.createElement('button')
button3.type = 'button'
button3.classList.add('button1')
button3.innerText = 'Throw dart three'
document.body.appendChild(button3)

button3.addEventListener('click', throwDart3)

function throwDart3 () {
    parts[dart3CurrentIndex].classList.remove('dart3')
    let throw3 = Math.floor(Math.random() * parts.length)
    parts[throw3].classList.add('dart3')
    button3.disabled = true
    if(parts[throw3].classList.contains('circle1')) {
        scoreDisplay.innerHTML += 10
    } else if (parts[throw3].classList.contains('circle2')) {
        scoreDisplay.innerHTML += 20
    } else if (parts[throw3].classList.contains('circle3')) {
        points += 10
        scoreDisplay.innerHTML = points
    } else if (parts[throw3].classList.contains('circle4')) {
        points += 10
        scoreDisplay.innerHTML = points
    } else if (parts[throw3].classList.contains('center')) {
        scoreDisplay.innerHTML += 50    
}
}

})


class player {
    constructor (){

    }
}

