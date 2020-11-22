let one = document.getElementById('one')
let two = document.getElementById("two")
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let lol = 1;
let clicker = 0
let mainColor = 'chocolate';
let red = []
let green = []

var inputs = document.getElementsByClassName("test");

var button = document.getElementById("clear")
button.addEventListener('click', clear)

function clear(){
    // alert("test")
    clicker = 0
    red = []
    green = []
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = i+1
        inputs[i].style.fontSize = '20px'
        inputs[i].style.backgroundColor = "black"
        inputs[i].addEventListener("click", test);
        inputs[i].style.border = 'solid white 2px'
    }
}
clear()
function test() {
    let place = document.getElementById(this.id)
    let number = document.getElementById(this.id).innerHTML
    if (clicker == 9) {
        alert("Ходы кончились :(")
    }
    else {
        if (place.innerHTML == 'X' ||  place.innerHTML == 'O') {
            alert("Это поле занято")
        }
        else {
            if (lol == 1) {
                place.innerHTML = "X"
                place.style.fontSize = "80px"
                lol += 1
                clicker += 1
                red.push(number)
            }
            else {
                
                place.innerHTML = "O"
                place.style.fontSize = "80px"
                lol -= 1
                clicker += 1
                green.push(number)
            }
        }
    // LOGIC GAME //
    if (red.indexOf('1') != -1 && red.indexOf('2') != -1 && red.indexOf('3') != -1) {
        one.style.border = 'solid red 2pxx'
        two.style.border = 'solid red 2px'
        three.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ КРАСНЫЙ!!!")
    } else if (green.indexOf('1') != -1 && green.indexOf('2') != -1 && green.indexOf('3') != -1) {
        one.style.border = 'solid red 2pxx'
        two.style.border = 'solid red 2px'
        three.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ ЗЕЛЕНЫЙ!!!")
    } else if (red.indexOf('4') != -1 && red.indexOf('5') != -1 && red.indexOf('6') != -1) {
        four.style.border = 'solid red 2px'
        five.style.border = 'solid red 2px'
        six.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('4') != -1 && green.indexOf('5') != -1 && green.indexOf('6') != -1) {
        four.style.border = 'solid red 2px'
        five.style.border = 'solid red 2px'
        six.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('7') != -1 && red.indexOf('8') != -1 && red.indexOf('9') != -1) {
        seven.style.border = 'solid red 2px'
        eight.style.border = 'solid red 2px'
        nine.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('7') != -1 && green.indexOf('8') != -1 && green.indexOf('9') != -1) {
        seven.style.border = 'solid red 2px'
        eight.style.border = 'solid red 2px'
        nine.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('1') != -1 && red.indexOf('4') != -1 && red.indexOf('7') != -1) {
        one.style.border = 'solid red 2px'
        four.style.border = 'solid red 2px'
        seven.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('1') != -1 && green.indexOf('4') != -1 && green.indexOf('7') != -1) {
        one.style.border = 'solid red 2px'
        four.style.border = 'solid red 2px'
        seven.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('2') != -1 && red.indexOf('5') != -1 && red.indexOf('8') != -1) {
        two.style.border = 'solid red 2px'
        five.style.border = 'solid red 2px'
        eight.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('2') != -1 && green.indexOf('5') != -1 && green.indexOf('8') != -1) {
        two.style.border = 'solid red 2px'
        five.style.border = 'solid red 2px'
        eight.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('3') != -1 && red.indexOf('6') != -1 && red.indexOf('9') != -1) {
        three.style.border = 'solid red 2px'
        six.style.border = 'solid red 2px'
        nine.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('3') != -1 && green.indexOf('6') != -1 && green.indexOf('9') != -1) {
        three.style.border = 'solid red 2px'
        six.style.border = 'solid red 2px'
        nine.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('1') != -1 && red.indexOf('5') != -1 && red.indexOf('9') != -1) {
        one.style.border = 'solid red 2px'
        five.style.border = 'solid red 2px'
        nine.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('1') != -1 && green.indexOf('5') != -1 && green.indexOf('9') != -1) {
        one.style.border = 'solid red 2px'
        five.style.border = 'solid red 2px'
        nine.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('3') != -1 && red.indexOf('5') != -1 && red.indexOf('7') != -1) {
        three.style.border = 'solid red 2px'
        five.style.border = 'solid red 2px'
        seven.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('3') != -1 && green.indexOf('5') != -1 && green.indexOf('7') != -1) {
        three.style.border = 'solid red 2px'
        five.style.border = 'solid red 2px'
        seven.style.border = 'solid red 2px'
        alert("ПОБЕДИЛ зеленый!!!")
    }
    

    // END LOGIC GAME //
    }
    // alert("red: " + red + " green: " + green )
    // alert(this.id);
}