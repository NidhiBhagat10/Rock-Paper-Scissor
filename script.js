function playGame(playersMove) {
  let result = '';
  const computersMove = pickComputersMove();

  if (playersMove === 'Rock') {
    if (computersMove === 'Rock') {
      result = 'Tie';
    }
    if (computersMove === 'Paper') {
      result = 'You Lose';
    }
    if (computersMove === 'Scissor') {
      result = 'You Win';
    }
  }

  if (playersMove === 'Paper') {
    if (computersMove === 'Rock') {
      result = 'You Win';
    }
    if (computersMove === 'Paper') {
      result = 'Tie';
    }
    if (computersMove === 'Scissor') {
      result = 'You Lose';
    }
  }

  if (playersMove === 'Scissor') {
    if (computersMove === 'Rock') {
      result = 'You Lose';
    }
    if (computersMove === 'Paper') {
      result = 'You Win';
    }
    if (computersMove === 'Scissor') {
      result = 'Tie';
    }
  }

  document.querySelector('.js-result')
    .innerHTML = `${result}`;

  document.querySelector('.js-moves')
    .innerHTML = `You Picked, ${playersMove}. Computer Picked ${computersMove}`;

  displayScore(result);
}

/* display score */

let tieScore = 0,
  winScore = 0,
  loseScore = 0;

function displayScore(result) {

  if (result === 'Tie') {
    tieScore += 1;
  }
  else if (result === 'You Win') {
    winScore += 1;
  }
  else if (result === 'You Lose') {
    loseScore += 1;
  }
  return resultHtml();
}

function resultHtml() {
  document.querySelector('.js-scores')
  .innerHTML = `Wins: ${winScore}, Losses: ${loseScore}, Ties: ${tieScore}`
}

/* Reset Score */

function resetScore() {
  tieScore = 0;
  winScore = 0;
  loseScore = 0;

  resultHtml();
}


/* generating computers move */

function pickComputersMove() {
  const number = Math.random();
  let computerPicked;

  if (number > 0 && number <= 0.33) {
    computerPicked = 'Rock';
  }
  if (number > 0.33 && number <= 0.66) {
    computerPicked = 'Paper';
  }
  if (number > 0.66 && number <= 1) {
    computerPicked = 'Scissor';
  }
  return computerPicked;
}
