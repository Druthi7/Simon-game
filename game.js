var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var press = false;


$(document).on('keydown', function (){
  if(!press){
    //press=true;
    //$("h1").text("Level "+level);
    nextSequence();
    press=true;
  }
  })
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);
   console.log(userClickedPattern);
   playSounds(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1)
})
function checkAnswer(currentLevel){
  console.log("game  "+gamePattern);
  console.log("user  "+userClickedPattern);

  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else{
    playSounds("wrong");
    $("h1").text("game over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

function  nextSequence(){
  level++;
  userClickedPattern=[];
  $("h1").text("Level "+level);
  var rand = Math.floor(Math.random()*4);
  console.log(rand);
  var randomChosenColour = buttonColours[rand];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSounds(randomChosenColour);
}



function playSounds(name){
var audio = new Audio("sounds/"+name+".mp3");
  audio.play();}

function animatePress(currentColour){
  $("#"+ currentColour).addClass("pressed");
    setTimeout(function(){ 
      $("#"+ currentColour).removeClass("pressed"); }, 100);
  
}

function startOver(){
  level=0;
  gamePattern=[];
//userClickedPattern=[];
  press = false;
}