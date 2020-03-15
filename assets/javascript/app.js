//global variables
var questionsArr = [{
    q: 'What are three building blocks of modern websites?',
    c: ['CSS, Java, C++', 'HTML, CSS, JavaScript', 'Filler'],
    a: 1
},{
    q: "What is Jim's favorite sport?",
    c: ['Basketball', 'Soccer', 'Bowling'],
    a: 0
},{
    q: "Where is The Office located in?",
    c: ["Los Angeles", "Boston", "Scranton"],
    a: 2
}
];
let counter = 0;
let time = 60;
let right = 0;
let wrong = 0;
let timer;


//game logic ie. handlewin hadlelose timer etc.

//init game function

function init(){
    if(counter === questionsArr.length){
        endGame()
    }
    $(".questions").html(`<div id='qTitle'>${questionsArr[counter].q}</div><div id='answers'></div>`);
    questionsArr[counter].c.forEach(function(answer, i){
        $('#answers').append(`<button id=${i} class='answerBtn'>${answer}</button>`)
    })
}

$("#start-button").on("click", function() {
    $(".start-game").css("display", "none");
    timer = setInterval(count, 1000)
    init()
})

$(document).on("click", '.answerBtn', function() {
    console.log($(this).attr("id"))
    if ($(this).attr("id") == questionsArr[counter].a) {
        correct();
    } else {
        incorrect();
    }
})

function correct(){
    counter++;
    right++;
    init();
}


function incorrect() {
    counter++;
    wrong++;
    init();
}

function count(){
    $("#clock").text(time);
    time --;
    if (time === 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(timer)
    $(".questions").html(`<h1>Right: ${right} Wrong:${wrong}   YOU ${right>wrong? 'WIN!': 'LOSE!'}</h1>`)
}