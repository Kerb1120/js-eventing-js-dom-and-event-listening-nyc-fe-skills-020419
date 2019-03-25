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
