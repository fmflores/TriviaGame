//global variables
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

$("#lose-image").hide();
$("#win-image").hide();

//init game function
function init() {
  if (counter === questionsArr.length) {
    endGame();
  }
  $(".questions").html(
    `<div id='qTitle'>${questionsArr[counter].q}</div><div id='answers'></div>`
  );
  questionsArr[counter].c.forEach(function(answer, i) {
    $("#answers").append(
      `<button id=${i} class='answerBtn'>${answer}</button>`
    );
  });
}

$("#start-button").on("click", function() {
  $(".start-game").css("display", "none");
  timer = setInterval(count, 1000);
  init();
});

$(document).on("click", ".answerBtn", function() {
  console.log($(this).attr("id"));
  if ($(this).attr("id") == questionsArr[counter].a) {
    correct();
  } else {
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
  $(".questions").html(
    `<h1>Right: ${right} <br/> Wrong: ${wrong} <br/>  YOU ${
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
