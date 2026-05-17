let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

// if (!score) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   }
// }

function playGame(userPick) {
  const computerPick = pickComputerMove();
  let result = '';

  if (userPick === 'Rock') {
    if (computerPick === 'Rock') {
      result = 'Tie.';
    } else if (computerPick === 'Paper') {
      result = 'You Lose.';
    } else {
      result = 'You Win.';
    }
  } else if ( userPick === 'Paper') {
    if (computerPick === 'Rock') {
      result = 'You Win.';
    } else if (computerPick === 'Paper') {
      result = 'Tie.';
    } else {
      result = 'You Lose.';
    }
  } else if (userPick === 'Scissors') {
    if (computerPick === 'Rock') {
      result = 'You Lose.';
    } else if (computerPick === 'Paper') {
      result = 'You Win.';
    } else {
      result = 'Tie.';
    }
  }

  if (result == 'You Win.') {
    score.wins += 1;
  } else if (result == 'You Lose.') {
    score.losses += 1;
  } else if (result == 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `
    You
    <img src="images/${userPick}-emoji.png" class="move-icon">
    <img src="images/${computerPick}-emoji.png" class="move-icon">
    Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerPick = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerPick = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerPick = 'Paper';
  } else {
    computerPick = 'Scissors';
  }
  return computerPick;
}