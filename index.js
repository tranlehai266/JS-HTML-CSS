let secretNumber;
let lastGuess;
let guessesRemaining = 10;
let pastGuesses = [];

const CORRECT_MESSAGE = "Chính xác! Bạn là một nhà ngoại cảm tài giỏi!!!.";
const INCORRECT_MESSAGE = "Không đúng. Bạn chỉ là một người bình thường.";

function generateNumber() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  // MILESTONE 1: Right now the secret number is always 5. Change this
  // to return a secret number between 1 and 10. 
}

function checkIsCorrect() {
  if ( lastGuess === secretNumber){
    return 0; 
  } else if (lastGuess < secretNumber){
    return -1;
  } else {
    return 1;
  }

  // MILESTONE 3: Right now every guess will be true. Change
  // the above code so it checks to make sure lastGuess
  // is equal to secretNumber.
}


function makeGuess() {
  if(!secretNumber) {
    generateNumber();
  }
  // MILESTONE 2: ADD CODE HERE to pop up a dialog box
  // asking the user for a number.
  let guess = prompt("Chọn số từ 1 đến 10");
  guess = parseInt(guess);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    alert("Bạn chỉ được chọn số từ 1 đến 10.");
    return;
  }

  lastGuess = guess;
  guessesRemaining--;
  pastGuesses.push(guess);
  
  let message = "";
  const result = checkIsCorrect();

 if (result === 0) {
    message = CORRECT_MESSAGE;
  } else {
    message = INCORRECT_MESSAGE;
   if (result === -1) {
    message += " Dự đoán của bạn quá thấp!";
  } else {
    message += " Dự đoán của bạn quá cao!";
  }
  message += ` Dự đoán của bạn còn lại ${guessesRemaining}. Số trước đó bạn dự đoán là ${pastGuesses.join(", ")}.`;
}


  //--------------------------------------------
  
  updatePage();
  alert(message)
}


// Don't worry about this part! Feel free to play around,
// but we'll teach you all about how JavaScript and HTML
// work together in the next section. If you're done Milestone
// 5, you'll need to fiddle around in here a bit.

function updatePage() {
  document.getElementById("last-guess").innerHTML = lastGuess;
  const correct = document.getElementById("correct");
  const result = checkIsCorrect();
  if(result === 0) {
    correct.innerHTML = CORRECT_MESSAGE;
  } else {
    correct.innerHTML = INCORRECT_MESSAGE;
    if (result === -1) {
      correct.innerHTML += " Dự đoán của bạn quá thấp!";
    } else {
      correct.innerHTML += " Dự đoán của bạn quá cao!";
    }
  }
  
  const remaining = document.getElementById("guesses-remaining");
  remaining.innerHTML = guessesRemaining;

}