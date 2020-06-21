var block1;

var block2;

var block3;

var block4;

var block5;

var Daniel, Daniel_pic;


var gameState = "nothing";

var gameState = "para2";

var gameState = "para3";

var gameState = "para4";

var gameState = "para5";

var gameState = "para1";

function preload () {

Daniel_pic = loadImage("Photo/Daniel.png");


}


function setup() {
  createCanvas(1365.5,656.5);

 Daniel = createSprite(684.5,400,10,10);
 Daniel.addImage(Daniel_pic);
 Daniel.scale = 1.2;

 Block1 = createSprite(300,620,25,25);
 Block1.shapeColor = "blue";

 Block2 = createSprite(450,620,25,25);
 Block2.shapeColor = "blue";

 Block3 = createSprite(600,620,25,25);
 Block3.shapeColor = "blue";

 Block4 = createSprite(750,620,25,25);
 Block4.shapeColor = "blue";

 Block5 = createSprite(900,620,25,25);
 Block5.shapeColor = "blue";

}

function draw() {
  background("black");  

   

   if (mousePressedOver(Block1)) {

   gameState = "para1";

   }
  
  if (mousePressedOver(Block2)) {

    gameState = "para2";
  
    }
    
  if (mousePressedOver(Block3)) {

      gameState = "para3";
    
      }
      
  if (mousePressedOver(Block4)) {

        gameState = "para4";
      
        }
        
  if (mousePressedOver(Block5)) {

          gameState = "para5";
        
          }
          

  drawSprites();


 

  textSize(30);
  fill("red");
  text("Click on the boxes one by one",400,580);

  

  

  if (gameState === "para2" ) {

    textSize(30);
    fill("black");
    text("I am  a Martial Arts purple belt and know ",670,40);
    text("how to play the piano. I am also an animal lover",670,90);
    text("and really love dogs !!! I really love coding",670,140);
    text("and making apps and games.",670,190);


  }

  if (gameState === "para3" ) {

    textSize(30);
    fill("black");
    text("I am a Certified Android App Developer",670,40);
    text("I study in 9th .",670,90);
    text("I really love Maths and Science !!!",670,140);
    text("I also play in a band called Lunar Lions.",670,190);

  }

  if (gameState === "para4" ) {

    textSize(30);
    fill("black");
    text("My life brings on lots of challenges",670,40);
    text("But I overcome each one with determination ",670,90);
    text("I don't work hard, ",670,140);
    text("I work Smart !!!",670,190);

  }

  if (gameState === "para5" ) {

    textSize(30);
    fill("black");
    text("I never give up,",670,40);
    text("I take on challenges with grace",670,90);
    text("I never get discouraged",670,140);
    text("Much Love....Peace !!!",670,190);


  }

  if (gameState === "para1" ) {

    textSize(30);
    fill("black");
    text("Hi !!! My name is Daniel Thomas and I am 13...",670,40);
    text("I am not unique... but what I do makes me unique",670,90);
    text("I am the school topper and a Science Olympiad ",670,140);
    text("winner.",670,190);

  }


}