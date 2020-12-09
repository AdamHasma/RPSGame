const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const choices = document.querySelectorAll('.weapon');
const restart = document.getElementById('playOn');
const result = document.getElementById('result');
let computerCount = 0;
let playerCount = 0;
let audio = new Audio('kekw.mp3')
const scoreboard = {
  player: 0,
  computer: 0
};
const hideElements = document.querySelectorAll('.hide');

function play(e) {
  hideElements.forEach((hide) => {
    hide.setAttribute('style', 'display: block;');
  });
  const playerChoice = e.target.id
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
};

function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

function getWinner(p, c) {
  if (p === c) {
    rock.setAttribute('style', 'background: #c3c3c3;');
    paper.setAttribute('style', 'background: #c3c3c3;');
    scissors.setAttribute('style', 'background: #c3c3c3;');
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      rock.setAttribute('style', 'background: #C28484;');
      paper.setAttribute('style', 'background: #c3c3c3;');
      scissors.setAttribute('style', 'background: #c3c3c3;');
      return 'computer';
    } else {
      rock.setAttribute('style', 'background: #84BFC2;');
      paper.setAttribute('style', 'background: #c3c3c3;');
      scissors.setAttribute('style', 'background: #c3c3c3;');
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      paper.setAttribute('style', 'background: #C28484;');
      rock.setAttribute('style', 'background: #c3c3c3;');
      scissors.setAttribute('style', 'background: #c3c3c3;');
      return 'computer';
    } else {
      paper.setAttribute('style', 'background: #84BFC2;');
      rock.setAttribute('style', 'background: #c3c3c3;');
      scissors.setAttribute('style', 'background: #c3c3c3;');
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      scissors.setAttribute('style', 'background: #C28484;');
      rock.setAttribute('style', 'background: #c3c3c3;');
      paper.setAttribute('style', 'background: #c3c3c3;');
      return 'computer';
    } else {
      scissors.setAttribute('style', 'background: #84BFC2;');
      paper.setAttribute('style', 'background: #c3c3c3;');
      rock.setAttribute('style', 'background: #c3c3c3;');
      return 'player';
    }
  }
};

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    scoreboard.player++;
    result.innerHTML = `<h5 class="text-win"><span style="font-weight: 800;">You win!</span> Computer took ${computerChoice}.</h5>`;
    playerCount ++;
    computerCount = 0;
    if (playerCount === 3) {
      document.getElementById('poggers').setAttribute('style', 'display: block;');
      setTimeout(function(){ document.getElementById('poggers').setAttribute('style', 'display: none;'); }, 1900);
    }
  } else if (winner === 'computer') {
    scoreboard.computer++;
    result.innerHTML = `<h5 class="text-lose"><span style="font-weight: 800;">You lose!</span> Computer took ${computerChoice}.</h5>`;
    computerCount ++;
    playerCount = 0;
    if (computerCount === 3) {
      audio.play();
      document.getElementById('kekw').setAttribute('style', 'display: block;');
      setTimeout(function(){ document.getElementById('kekw').setAttribute('style', 'display: none;'); }, 1900);
    }
  } else {
    result.innerHTML = `<h5 class="text-draw"><span style="font-weight: 800;">It's a draw.</span> Computer took ${computerChoice}.</h5>`;
  }
  score.innerHTML = `
  <h5>You: ${scoreboard.player}</h5>
  <h5>Computer: ${scoreboard.computer}</h5>
  `;
};


 restart.onclick = function () {
   result.style.display = 'none';
   rock.setAttribute('style', 'background: #84BFC2;');
   paper.setAttribute('style', 'background: #84BFC2;');
   scissors.setAttribute('style', 'background: #84BFC2;');
};


// Event listeners
choices.forEach((choice) => {
    choice.addEventListener('click', play);
});
