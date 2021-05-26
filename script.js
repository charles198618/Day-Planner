<<<<<<< HEAD
=======

>>>>>>> 86852914e724f89835da0631611491bb922f9e12
console.log(moment().format())
console.log(moment().format('dddd, MMMM, Do'))

var timeHTMLElement = document.getElementById("currentDay")

timeHTMLElement.textContent = moment().format('dddd, MMMM, Do')

console.log(moment().format('HH'))
var currentHourTime = moment().format('HH');

var allTextareas = document.querySelectorAll('textarea');

for(i=0; i<allTextareas.length; i++){
    // allTextareas[i].value = "check"
    if(i+9 < currentHourTime){
        allTextareas[i].setAttribute("class", "col-8 past")
    }else if (i+9 == currentHourTime) {
        allTextareas[i].setAttribute("class", "col-8 present")
    }else {
        allTextareas[i].setAttribute("class", "col-8 future")
    }
    allTextareas[i].value = localStorage.getItem(i+9)
}

var allButtons = document.querySelectorAll('button');

for(j=0 ; j <allButtons.length; j++){
    allButtons[j].setAttribute("id", j+9)
    allButtons[j].addEventListener("click", saveLocalStorage)
}

function saveLocalStorage () {
    console.log(this)
    var key= this.id;
    var value = this.previousElementSibling.value
    localStorage.setItem(key, value)
}