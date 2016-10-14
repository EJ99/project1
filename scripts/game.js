///////TIC TAC TOE

var boardDiv = document.getElementById('board');
var board2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
var player1name = 'player 1';
var player2name = 'player 2';
var player1Wins = 0;
var player2Wins = 0;
var keepScore = document.getElementById('keepScore');
var squares = document.getElementsByClassName('square');
var player1 = true;
var currentGameO = [];
var currentGameX = [];

///////WIN COMBINATIONS

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


///////CREATE SQUARES FUNCTION

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


//////////ALTERNATE VALUE OF SQUARES

function changeValue(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(event){
      if((player1 === true) && ((event.target.textContent !== 'X') && (event.target.textContent !== 'O'))){
        var currentPositionX = parseInt(event.target.textContent);
        event.target.className = 'cross fullSquare';
        event.target.innerHTML = 'X'; //fontsie 0 //class with a background image
        currentGameX.push(currentPositionX);
      }else if((player1 === false) && ((event.target.textContent !== 'X') && (event.target.textContent !== 'O'))){
        var currentPositionO = parseInt(event.target.textContent);
        event.target.className = 'circle fullSquare';
        event.target.textContent = 'O';
        currentGameO.push(currentPositionO);
      }
      player1 = !player1;
      checkWin();
    })
  }
}

changeValue();

///////////////CHECK PLAYER NAMES

function checkNames(){
  var result = document.getElementById("result");
  var result2 = document.getElementById("result2");
  // var p1Ptag = document.createElement('P');
  // var p2Ptag = document.createElement('P');
  player1name = document.getElementById("name1").value;
  player2name = document.getElementById("name2").value;
  nameInput = document.getElementsByClassName("names");
  player1name = player1name.toUpperCase();
  player2name = player2name.toUpperCase();
  result.innerHTML = player1name + ": " + player1Wins;
  result2.innerHTML = player2name + ": " + player2Wins;
  $(".firstScreen").hide();
}

//////////CHECK FOR WINS AND RESET GAME

// $('#scoreboard').hide()

function checkWin(){

  for (var c = 0; c < win.length; c++){
      var orderedO = currentGameO.sort();
      var orderedX = currentGameX.sort();
      var result = document.getElementById('result');
      // var play1winmessage = document.getElementById('animated-example');
      // console.log( (win[c].indexOf(orderedX[0])) );
    if( (orderedX.indexOf(win[c][0]) !== -1) && (orderedX.indexOf(win[c][1]) !== -1) && (orderedX.indexOf(win[c][2]) !== -1) ) {
      $('#result').addClass("animatedScore pulse");
      $('.roundWinner').html(player1name + " WINS");
      player1Wins += 1;
      player2Wins += 0;
      result.innerHTML = player1name + ": " + player1Wins;
      resetGame();
    }else if( (orderedO.indexOf(win[c][0]) !== -1) && (orderedO.indexOf(win[c][1]) !== -1) && (orderedO.indexOf(win[c][2]) !== -1) ){
      $('#result2').addClass("animatedScore pulse");
      $('.roundWinner').html(player2name + " WINS");
      player2Wins += 1;
      player1Wins += 0;
      result2.innerHTML = player2name + ": " + player2Wins;
      resetGame();
      }
    }
    if(!/[^a-zA-Z]/.test(boardDiv.textContent)){
      console.log('draw');
      $('.roundWinner').html("DRAW");
      result2.innerHTML = player2name + ": " + player2Wins;
      resetGame();
      return
  }
}


//////////RESET GAME FUNCTION

function resetGame(){
  currentGameO = [];
  currentGameX = [];
  player1 = true;

  document.querySelector("#board").innerHTML = "";
  createSquares();
  changeValue();

  setTimeout(function(){
  $('#result').removeClass("animatedScore pulse");
  }, 1000);
  setTimeout(function(){
  $('#result2').removeClass("animatedScore pulse");
  }, 1000);
}


///GAME TYPE

// function gameOption(){
//     var gameType = document.getElementById("gameType").value
//     var original = document.getElementById("original").value;
//     var cats = document.getElementById("cats").value;
//
//     if(gameType == "cats"){
//       console.log('cats');
//       // document.getElementsByClassName('cross').style.backgroundImage = "url('images/grumpy.jpeg')";
//       document.getElementsByClassName('circle').style.backgroundColor = "red";
//       // // // circle.style.backgroundImage = "url('images/rollcat.jpeg')";
//       // $('.cross').css("background-color", "yellow");
//       // // $('.circle').css("background-image", "url(styles/images/rollcat.jpg)");
//     }
// }
