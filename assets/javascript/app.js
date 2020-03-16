//global variables
var questionsArr = [{
    q: "What is the nickname/alterego Michael Scott gives his convict character?",
    c: ['Convict Scott', 'Johnny Rotten', 'Prison Mike'],
    a: 2
},{
    q: "What was the name of Jim's sports company he founded with his college roommate?",
    c: ['Klutch Sports', 'Athlead/Athleap', 'Entertainment 720'],
    a: 1
},{
    q: "What city is The Office located in?",
    c: ["Los Angeles, CA", "Boston, MA", "Scranton, PA"],
    a: 2
},{
    q: "What is Pam's ex-fiance's name?",
    c: ["Roy", "Randall", "Darryl"],
    a: 0
},{
    q: "What is the name of Dwight's farm?",
    c: ["Schrute Farms", "Dwight's Farm", "Dwight & Mose Farms"],
    a: 0
}, {
    q: "How does Darryl break his leg in The Office?",
    c: ["Playing Basketball", "Falls off a ladder", "Skateboarding"],
    a: 1
}
];
let counter = 0;
let time = 45;
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