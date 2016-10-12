/////Two players (player X, and player O) play on 3x3 grid.
////Player X is a human player, and player O is an AI.
////A player can put his/her letter (either X or O) in an empty cell in the grid.
// If a player forms a row, a column or a diagonal with his/her letter, that player wins and the game ends.
//If the grid is full and there’s no row, column or diagonal of the same letter, the game ends at draw.
// A player should try to win in the lowest possible number of moves.

///make a board array with e values
//make a for loop that draws the board
//when click on a spot
//update the board array with the value
//call the function to draw the board again



////make the board

var boardDiv = document.getElementById('board');

var board2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

//type a string and use split method to turn in to an array to be lazy

function createSquares(){

  for(var i = 0; i < board2.length; i++){
    var boardElement = document.createElement('div');
    boardDiv.appendChild(boardElement);
    boardElement.textContent = board2[i];
    boardElement.className = 'empty-square square';
    boardElement.id = 'square' + board2[i];
  }
}

createSquares();


//alternate the turns
//check for wins


var win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// var gameState =

var squares = document.getElementsByClassName('square');
var player1 = true;

var currentGameO = [];
var currentGameX = [];

function changeValue(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(event){
      if(player1 === true){
        console.log(event.target.textContent);
        var currentPositionX = parseInt(event.target.textContent);
        event.target.className = 'cross';
        event.target.textContent = 'X';
        currentGameX.push(currentPositionX);
        ////Check for wins
        // if currentGameO === win combination


      }else{
        console.log(event.target.textContent);
        var currentPositionO = parseInt(event.target.textContent);
        event.target.className = 'circle';
        event.target.textContent = 'O';
        currentGameO.push(currentPositionO);


        ////Check for wins
        // if currentGameX === win combination

      }
      player1 = !player1;
      // console.log(parseInt(fullSquare.textContent));
      boardFull();
      checkWin();
    })

  }

}

changeValue();

function checkWin(){

  for (var c = 0; c < win.length; c++){
      var orderedO = currentGameO.sort();
      var orderedX = currentGameX.sort();
      // console.log('checking for win');
      // console.log(win[c]);
      // console.log('orderedO ---- ' + orderedO);
      // console.log('orderedX ---- ' + orderedX);
      // console.log(orderedX);
      // console.log(orderedO);

      // console.log( (win[c].indexOf(orderedX[0])) );
      // console.log( (win[c].indexOf(orderedX[1])) );
      // console.log( (win[c].indexOf(orderedX[2])) );


    // if((win[c][0] === orderedX[0] && win[c][1] === orderedX[1] && win[c][2] === orderedX[2])){
    if( (orderedX.indexOf(win[c][0]) !== -1) && (orderedX.indexOf(win[c][1]) !== -1) && (orderedX.indexOf(win[c][2]) !== -1) ) {
      // console.log('orderx', orderedX)
      alert('Player1 Wins');

      //if index of first position of is there

      //reset the game
      resetGame();
    }else if( (orderedO.indexOf(win[c][0]) !== -1) && (orderedO.indexOf(win[c][1]) !== -1) && (orderedO.indexOf(win[c][2]) !== -1) ){
      alert('player2 wins');
      // console.log('ordero', orderedO)
      // console.log('player2');
      //reset the game
        resetGame();
    }
  }
}

function resetGame(){
  document.querySelector("#board").innerHTML = " ";
  createSquares();
  changeValue();
  currentGameO = [];
  currentGameX = [];
  player1 = true;
}

var fullSquare = document.getElementsByClassName('fullSquare');

function boardFull(){
  //if there no numbers on the board
  if(isNaN(parseInt(fullSquare.textContent))){
    console.log('hi');
  }
}



  // console.log(parseInt(fullSquare.textContent));

// if((orderedX[0] && orderedX[1] && orderedX[2]).includes){
//   console.log('orderx', orderedX)
//   alert('Player1 Wins');



 // || (win[c][0] === orderedO[0] && win[c][1] === orderedO[1] && win[c][1] === orderedO[1]))



//check if someone wins - that also checks for draws
//if win restart

// var score = {
//   'X': 0,
//   'O': 0
// };

// jQuery version of changeValue loop that creates a loop for you
// $('.squares').click(function(event) {
//   console.log(event.target)
// })


//
// var changeElement = document.getElementsByClassName('square');
//
// function changeValue(){
//   for(var i = 0; i < board2.length; i++){
//     //get content in square divs
//     var changeElement = board2[i];
//     // var changeElement = document.getElementById('empty-square');
//     changeElement.textContent = 'hello';
//     changeElement.className = 'cross circle';
//   }
// }
//
// giveValue();

//alternate player could be a function
//alternate player turns
//first click = X
//second click = O
//if user clicks board change to X or O
//if .className is '' then turn to X or 0



// var win1 = [0, 1, 2];
// var win2 = [3, 4, 5];
// var win3 = [6, 7, 8];
// var win4 = [0, 3, 6];
// var win5 = [4, 5, 6];
// var win6 = [6, 7, 8];
// var win7 = [0, 4, 8];
// var win8 = [2, 4, 6];

// function changeValue(){
//   if()




//
// function findPlayer(){
//   if(player1 === true){
//     changeToX();
//     player1 = false;
//   }else{
//     changeToO();
//     player1 = true;
//   }
// }

// function changeToX(){
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].addEventListener('click', function(event){
//       console.log(event.target.textContent);
//       event.target.className = 'cross';
//       event.target.textContent = 'X';
//     })
//   }
// }











//alternate player could be a function
//alternate player turns
//first click = X
//second click = O
//if user clicks board change to X or O
//if .className is '' then turn to X or 0


///win or lose or draw
// cant compere [1, 2, 3]  with [1, 2, 3]  because they are complex objects - will come back as false
// but array.join() will allow to compare arrays


//put in nine values

//loop through the values to compare if matches the winning combinations
//if board matches win print win message
//if board is draw print draw message




// var win = ['win', 'win', 'win', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose'];
//
// var win1 = [1, 2, 3];
// var win2 = [4, 5, 6];
// var win3 = [7, 8, 9];
// var win4 = [1, 4, 7];
// var win5 = [4, 5, 6];
// var win6 = [7, 8, 9];
// var win7 = [1, 5, 9];
// var win8 = [3, 5, 7];
//

//what happens when game ends

//if 012, 345, 568 = X OR O ---- player wins
//if 012, 345, 678 = X OR O ---- player wins
//if 048, 246 = X OR 0 ---- player wins

// var boardDiv = document.getElementById('board');


// var cubes = [
//   ['0', '1', '2'],
//   ['3', '4', '5'],
//   ['6', '7', '8'],
// ];
//
// for(var i = 0; i < cubes.length; i++) {
//     var cube = cubes[i];
//     for(var j = 0; j < cube.length; j++) {
//         display("cube[" + i + "][" + j + "] = " + cube[j]);
//     }
// }


//
// var board3 = [
//  [0, 1, 2],
//  [3, 4, 5],
//  [6, 7, 8],
// ];


// for(var i = 0; i < board3.length; i++) {
//   //divs here?
//     var board = board3[i];
//     console.log('main loop');
//     for(var j = 0; j < board.length; j++) {
//       //spans here?
//       var boardSquare = document.createElement('div');
//       boardDiv.appendChild(boardSquare);
//       boardSquare.textContent = board[j];
//       console.log('nested loop')
//     }
// }



//loop through the values to compare if matches the winning combinations
//if they match game over --- has won

// function createSquares(){
//
//   for(var i = 0; i < board2.length; i++){
//     var boardElement = document.createElement('div');
//     boardDiv.appendChild(boardElement);
//     boardElement.textContent = board2[i];
//   }
// }
//
//
// createSquares();

//console with arrays

// // daysOfWeek
// ["sun", "mon", "tues", "weds"]
// // daysOfWeek.unshift(daysOfWeek.pop());
// 4
// // daysOfWeek
// ["weds", "sun", "mon", "tues"]
//

// var days = [
//   ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
//   ['saturday', 'sunday']
// ];

// cant compere [1, 2, 3]  with [1, 2, 3]  because they are complex objects - will come back as false
// but array.join() will allow to compare arrays


//put in nine values

//loop through the values to compare if matches the winning combinations
//if they match game over --- has won

// var winningCombination1 = []  //do this 8 times because there are 8 winning combination
