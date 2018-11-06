(function() {
  $(document).ready(init);

var count = 0
var redScore = 0
var blueScore = 0
var tieGame = 0

function init() {
  $(".box").click(addPiece);
}

//if backgrond color is white then run everything else,
//if its not, then stop and dont do anything

function addPiece() {
  if($(this).css('background-color') === 'rgb(255, 255, 255)') {
    if(count % 2) {
      $(this).css("background-color", "red");
      if (gameOver("rgb(255, 0, 0)")) {
        alert("Red Wins!")
        redScore++;
        $('#redScore').empty(redScore)
        $('#redScore').append(redScore)
        count = 0
        newGame()
      }
    } else {
      $(this).css("background-color","blue");
      if (gameOver("rgb(0, 0, 255)")) {
        alert("Blue Wins!")
        blueScore++;
        $('#blueScore').empty(blueScore)
        $('#blueScore').append(blueScore)
        count = 0
        newGame()
      }
    }
    count = count + 1
    if(count%9 === 0) {
      alert("Tie Game!")
      newGame()
      tieGame++
      $('#tieGame').empty(tieGame)
      $('#tieGame').append(tieGame)
    };
  }
}

function gameOver(color){
  //if boxes 1, 2, and 3 match color(red) return true, gameOver
  if($("#1").css("background-color") == color
     && $("#2").css("background-color") == color
     && $("#3").css("background-color") == color) {
              return true
  } else if($("#4").css("background-color") == color
       && $("#5").css("background-color") == color
       && $("#6").css("background-color") == color) {
         return true
       } else if($("#7").css("background-color") == color
            && $("#8").css("background-color") == color
            && $("#9").css("background-color") == color) {
              return true
            } else if($("#1").css("background-color") == color
                 && $("#4").css("background-color") == color
                 && $("#7").css("background-color") == color) {
                   return true
                 } else if($("#2").css("background-color") == color
                      && $("#5").css("background-color") == color
                      && $("#8").css("background-color") == color) {
                        return true
                      } else if($("#3").css("background-color") == color
                           && $("#6").css("background-color") == color
                           && $("#9").css("background-color") == color) {
                             return true
                           } else if($("#1").css("background-color") == color
                                && $("#5").css("background-color") == color
                                && $("#9").css("background-color") == color) {
                                  return true
                                } else  if($("#3").css("background-color") == color
                                     && $("#5").css("background-color") == color
                                     && $("#7").css("background-color") == color) {
                                       return true
                                     }
  //if we found no 3 in a rows then nobody has won yet, return false.
  return false
}

})();

function newGame() {
  $('.box').removeClass("red")
  $('.box').removeClass("blue")
  // $('.box').removeClass(color)
  $('.box').css({
    "background-color":"white"
  });
}
