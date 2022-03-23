var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if(keyDown("right")){
    box.velocityX = 5
  }
  else{
    box.velocityX = 0
  }
  if(keyDown("left")){
    box.velocityX = -5
  }
  else{
    box.velocityY = 0
  }
if(keyDown("up")){
  box.velocityY = -5
}
else{
  box.velocityY = 0
}
if(keyDown("down")){
  box.velocityY = 5
}
else{
  box.velocityY = 0
}
drawSprites();
}




