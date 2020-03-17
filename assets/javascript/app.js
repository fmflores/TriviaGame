//global variables
// array of questions with objects containing each question, the choices for the questions answers, and the index of the correct answer 
var questionsArr = [
  {
    q: "What is Michael Scott's convict alterego/character?",
    c: ["Convict Scott", "Johnny Rotten", "Prison Mike"],
    a: 2
  },
  {
    q: "What is the name of Kevin's Police cover band?",
    c: ["The Scrantones", "Scrantonicity", "Here Comes Treble"],
    a: 1
  },
  {
    q: "What city is The Office located in?",
    c: ["Los Angeles, CA", "Boston, MA", "Scranton, PA"],
    a: 2
  },
  {
    q: "What nickname does Andy give to Jim?",
    c: ["Big Tuna", "Nard Dog", "Dwigt"],
    a: 0
  },
  {
    q: "What is the name of Dwight's farm?",
    c: ["Schrute Farms", "Dwight's Farm", "Dwight & Mose Farms"],
    a: 0
  },
  {
    q: "How does Darryl break his leg in The Office?",
    c: ["Playing Basketball", "Falls off a ladder", "Skateboarding"],
    a: 1
  },
  {
    q: "Where do Pam and Jim get married?",
    c: ["Niagara Falls", "Puerto Rico", "Connecticut"],
    a: 0
  }
];
let counter = 0;
let time = 60;
let right = 0;
let wrong = 0;
let timer;

// 
$("#lose-image").hide();
$("#win-image").hide();

//init game function
function init() {
  // if the counter is equal to the number of questions/length of the questionsArr end the game
  if (counter === questionsArr.length) {
    endGame();
  }
// selecting the questions div, write to the html 
  $(".questions").html(
    // create a div with the id of qTitle and insert the current index of the questionsArr (the question) and create a div with id of "answers" 
    `<div id='qTitle'>${questionsArr[counter].q}</div><div id='answers'></div>`
  );
  // for each choice (c) of possible answers of the current index 
  questionsArr[counter].c.forEach(function(answer, i) {
    // append to the answers div, a button with the id of the current index, and write the text of its javascript code to the button
    $("#answers").append(
      `<button id=${i} class='answerBtn'>${answer}</button>`
    );
  });
}

// when the start button is clicked
$("#start-button").on("click", function() {
  // hide the start-game div which holds the start button
  $(".start-game").css("display", "none");
  // and run the setInterval function with the arguments of count function and run every second
  timer = setInterval(count, 1000);
  init();
});

// apply to the whole document. onclick of the answerBtn, 
$(document).on("click", ".answerBtn", function() {
  // when the button is clicked if id of the button being clicked is equal to the answer (a) key of the current question (equal in value) 
  if ($(this).attr("id") == questionsArr[counter].a) {
    // run the correct function
    correct();
  } else {
    // else run the incorrect function
    incorrect();
  }
});

function correct() {
  counter++;
  right++;
  init();
}

function incorrect() {
  counter++;
  wrong++;
  init();
}

function count() {
  $("#clock").text(time);
  time--;
  if (time === 0) {
    endGame();
  }
}

function endGame() {
  clearInterval(timer);
  // write to the questions div 
  $(".questions").html(
    // create an h1 element with the text Right and Wrong and insert the javascript code of number of right and num of wrong
    `<h1>Right: ${right} <br/> Wrong: ${wrong} <br/>  YOU ${
      // ternary operator: if right > wrong display WIN else display LOSE!
      right > wrong ? "WIN!" : "LOSE!"
    }</h1>`
  );
  if (right > wrong) {
    $("#lose-image").hide();
    $("#win-image").show();
  } else {
    $("#lose-image").show();
    $("#win-image").hide();
  }
}
