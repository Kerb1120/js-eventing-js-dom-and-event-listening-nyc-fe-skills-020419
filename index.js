function onClick(event) {
  console.log(event)
}

function onKeyDown(event) {
  console.log(event.keyCode)
}

const inputBox = document.getElementById('sup')

function onInputKeyDown(event){
  console.log(event)
  if (event.keyCode === 71) {
    event.preventDefault()
  } else {
  }
}






const p = document.getElementById('yellow')

function onYellowClick() {
  
}

p.addEventListerner('click', (event) => {
  console.log(event)
  p.style.backgroundColor = 'yellow'
})



