var URL_1 = "https://api.chucknorris.io/jokes/random";
var URL_2 = "https://yesno.wtf/api";

function start() {
  findJoke();
  console.log("Where do I go ?");
}
async function findJoke() {
  try {
    let jokeResponse = await fetch(URL_1);
    let joke = await jokeResponse.json();
    handleJoke(joke);
    let yesNoResponse = await fetch(URL_2);
    let yesNoAnswer = await yesNoResponse.json();
    handleYesNoAnswer(yesNoAnswer);
  } catch (err) {
    console.error("ERRRRRRRRRRR", err);
  }
}
function findJoke2() {
  $.ajax({
    url: URL_1,
  }).done(function (joke) {
    // if ("a".length == 1) {
    //   throw new Error("Custom error");
    // }
    handleJoke(joke);
  }).fail(function (xhr, status, err) {
    console.error("UNEXPECTED Error ", err);
  }).then(function () {
    $.ajax({
      url: URL_2
    }).done(function (yesNoAnswer) {
      console.log(yesNoAnswer);
      handleYesNoAnswer(yesNoAnswer);
    }).fail(function (xhr, status, err) {
      console.error("Error ", err);
    });
  });
}

function handleYesNoAnswer(yesNoAnswer) {
  if (yesNoAnswer.answer == "no") {
    document.getElementById("jokeText").className = "bad";
  } else {
    document.getElementById("jokeText").className = "good";
  }
  document.getElementById("jokeImage").src = yesNoAnswer.image;
}

function handleJoke(joke) {
  console.log(joke);
  document.getElementById("jokeText").innerHTML = joke.value;

}