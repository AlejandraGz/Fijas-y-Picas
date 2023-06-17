const numberGenerator = () => {
  let number = "";
  const numbers = "0123456789";
  for (let i = 0; i < 3; i++) {
    randomNumber = numbers.charAt(Math.floor(Math.random() * numbers.length));
    number.includes(randomNumber) ? i-- : number += randomNumber
  }
  return number;
};
const onload = () => {
  generatedNumber = numberGenerator()
  document.getElementById("r1c1").focus()
  for (let j = 2; j < 5; j++) {
    for (let i = 0; i < 3; i++) {
      document.getElementById(`r${j}c${i + 1}`).disabled = true
      document.getElementById(`r${j}c${i + 1}`).style.background = "#17151575"
    }
  }
}
let counter = 0;
function preventNonNumericalInput(e) {
  e = e || window.Event
  let charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
  let charStr = String.fromCharCode(charCode);
  if (!charStr.match(/^[0-9]+$/)) {
    e.preventDefault();
  }
}
let numbIn = ''
let index = 1;
let auxiliarNumb = ''

const addInputValue = () => {
  index++
  checkState()
  if (index == 5) {
    endGame()
    return
  }
  if (auxiliarNumb != generatedNumber) {
    enableInput()
    return
  } else {
    checkState()
    setTimeout(() => {
      alert('Ganaste')
    }, "500");
    setTimeout(() => {
      window.location.reload()
    }, "500");
  }
}
const enableInput = () => {
  for (let i = 0; i < 3; i++) {
    document.getElementById(`r${index}c${i + 1}`).disabled = false
    document.getElementById(`r${index}c${i + 1}`).style.background = "white"
    document.getElementById(`r${index}c1`).focus()
  }
}

const checkState = () => {
  for (let i = 0; i < 3; i++) {
    numbIn += document.getElementById(`r${index - 1}c${i + 1}`).value
    if (numbIn[i] == generatedNumber[i]) {
      document.getElementById(`r${index - 1}c${i + 1}`).style.backgroundColor = "green"
    } else if (generatedNumber.includes(numbIn[i])) {
      document.getElementById(`r${index - 1}c${i + 1}`).style.backgroundColor = "yellow"
    } else {
      document.getElementById(`r${index - 1}c${i + 1}`).style.backgroundColor = "white"
    }
  }
  auxiliarNumb = numbIn
  numbIn = ''
}

const endGame = () => {
  setTimeout(() => {
    alert(`Perdiste, el número secreto era: ${generatedNumber}`)
  }, "500");
  setTimeout(() => {
    window.location.reload()
  }, "500");
}