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
    clicker = 0
    red = []
    green = []
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "chocolate"
        inputs[i].addEventListener("click", test);
        inputs[i].style.border = 'solid black 2px'
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
        if (place.style.backgroundColor === 'chocolate')
            if (lol == 1) {
                place.style.backgroundColor = 'red';
                lol += 1
                clicker += 1
                red.push(number)
            }
            else {
                place.style.backgroundColor = 'green';
                lol -= 1
                clicker += 1
                green.push(number)
            }
        else {
            alert("Это поле занято")
        }
    // LOGIC GAME //
    if (red.indexOf('1') != -1 && red.indexOf('2') != -1 && red.indexOf('3') != -1) {
        one.style.border = 'solid blue 3pxx'
        two.style.border = 'solid blue 3px'
        three.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ КРАСНЫЙ!!!")
    } else if (green.indexOf('1') != -1 && green.indexOf('2') != -1 && green.indexOf('3') != -1) {
        one.style.border = 'solid blue 3pxx'
        two.style.border = 'solid blue 3px'
        three.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ ЗЕЛЕНЫЙ!!!")
    } else if (red.indexOf('4') != -1 && red.indexOf('5') != -1 && red.indexOf('6') != -1) {
        four.style.border = 'solid blue 3px'
        five.style.border = 'solid blue 3px'
        six.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('4') != -1 && green.indexOf('5') != -1 && green.indexOf('6') != -1) {
        four.style.border = 'solid blue 3px'
        five.style.border = 'solid blue 3px'
        six.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('7') != -1 && red.indexOf('8') != -1 && red.indexOf('9') != -1) {
        seven.style.border = 'solid blue 3px'
        eight.style.border = 'solid blue 3px'
        nine.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('7') != -1 && green.indexOf('8') != -1 && green.indexOf('9') != -1) {
        seven.style.border = 'solid blue 3px'
        eight.style.border = 'solid blue 3px'
        nine.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('1') != -1 && red.indexOf('4') != -1 && red.indexOf('7') != -1) {
        one.style.border = 'solid blue 3px'
        four.style.border = 'solid blue 3px'
        seven.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('1') != -1 && green.indexOf('4') != -1 && green.indexOf('7') != -1) {
        one.style.border = 'solid blue 3px'
        four.style.border = 'solid blue 3px'
        seven.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('2') != -1 && red.indexOf('5') != -1 && red.indexOf('8') != -1) {
        two.style.border = 'solid blue 3px'
        five.style.border = 'solid blue 3px'
        eight.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('2') != -1 && green.indexOf('5') != -1 && green.indexOf('8') != -1) {
        two.style.border = 'solid blue 3px'
        five.style.border = 'solid blue 3px'
        eight.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('3') != -1 && red.indexOf('6') != -1 && red.indexOf('9') != -1) {
        three.style.border = 'solid blue 3px'
        six.style.border = 'solid blue 3px'
        nine.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('3') != -1 && green.indexOf('6') != -1 && green.indexOf('9') != -1) {
        three.style.border = 'solid blue 3px'
        six.style.border = 'solid blue 3px'
        nine.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('1') != -1 && red.indexOf('5') != -1 && red.indexOf('9') != -1) {
        one.style.border = 'solid blue 3px'
        five.style.border = 'solid blue 3px'
        nine.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('1') != -1 && green.indexOf('5') != -1 && green.indexOf('9') != -1) {
        one.style.border = 'solid blue 3px'
        five.style.border = 'solid blue 3px'
        nine.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ зеленый!!!")
    } else if (red.indexOf('3') != -1 && red.indexOf('5') != -1 && red.indexOf('7') != -1) {
        three.style.border = 'solid blue 3px'
        five.style.border = 'solid blue 3px'
        seven.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ красный!!!")
    } else if (green.indexOf('3') != -1 && green.indexOf('5') != -1 && green.indexOf('7') != -1) {
        three.style.border = 'solid blue 3px'
        five.style.border = 'solid blue 3px'
        seven.style.border = 'solid blue 3px'
        alert("ПОБЕДИЛ зеленый!!!")
    }
    

    // END LOGIC GAME //
    }
    // alert("red: " + red + " green: " + green )
    // alert(this.id);
}