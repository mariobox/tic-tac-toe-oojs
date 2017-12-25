'use strict'

var g = new Game();

var counter = 0;

function play() {
  let bd = document.getElementById('board');
  bd.addEventListener('click', (event) => {
    // console.log(event.target);
    event.target.innerHTML = g.players[counter].symbol;

    var squareNum = event.target.id.split('');
    var row = squareNum[0];
    var col = squareNum[1];

    g.board.grid[row][col].whoseTurn();
    g.board.check_win();

    if (counter == 0) { counter = 1 }
    else { counter = 0 }
  });
}


function print_winner() {
  let winner = g.players[counter].symbol;
  document.getElementById('message').innerHTML = `${winner} wins`;
}


function print_tie() {
  document.getElementById('message').innerHTML = "It's a tie";  
}


function play_again() {
  let bt = document.getElementById('new-game');
  bt.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');  
    for (let i = 0; i < 9; i++) {
     squares[i].innerHTML = "";
    }
    g = new Game();
  });
}


play();
play_again();

