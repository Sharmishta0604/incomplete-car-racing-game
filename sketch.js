var database;
var position;
var canvas,backgroundImg;
var Gamestate=0;
var playerCount=0;
var form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas=createCanvas(500,500);

 


  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  game=new Game();
    game.getState();
    game.start();
  
}

