$(document).ready(function() {
  var number = Math.floor(Math.random()*101+19)
  $("#randnum").text(number);

  var diceOne = Math.floor(Math.random()*11+1)
  var diceTwo = Math.floor(Math.random()*11+1)
  var diceThree = Math.floor(Math.random()*11+1)
  var diceFour = Math.floor(Math.random()*11+1)

  var total = 0;
  var win = 0;
  var lose = 0;

  $("#winnings").text(win);
  $("#losings").text(lose);

  function reset() {
    number = Math.floor(Math.random()*101+19);
    $("#randnum").text(number);
    diceOne = Math.floor(Math.random()*11+1);
    diceTwo = Math.floor(Math.random()*11+1);
    diceThree = Math.floor(Math.random()*11+1);
    diceFour = Math.floor(Math.random()*11+1);
    total = 0;
    $("#count").text(total);
  }

  function win() {
    alert("Winner, winner, chicken dinner");
    win++;
    $("#win").text(win);
    reset();
  }

  function lose() {
    alert("Loser never get a meal");
    lose++;
    $("#lose").text(lose);
    reset();
  }

  $("#one").on ("click", function(){
    total = total + diceOne;
    $("#count").text(total);
        if (total == number){
          win();
        }
        else if ( total > number){
          lose();
        }
  })

  $("#two").on ("click", function(){
    total = total + diceTwo;
    $("#count").text(total);
        if (total == number){
          win();
        }
        else if ( total > number){
          lose();
        }
  })

  $("#three").on ("click", function(){
    total = total + diceThree;
    $("#count").text(total);
        if (total == number){
          win();
        }
        else if ( total > number){
          lose();
        }
  })

  $("#four").on ("click", function(){
    total = total + diceFour;
    $("#count").text(total);
        if (total == number){
          win();
        }
        else if ( total > number){
          lose();
        }
  });
});
