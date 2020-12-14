var FixedRect, MovingRect
function setup() {
  createCanvas(1000,800);
  FixedRect = createSprite(500,500,30,30);
  FixedRect.shapeColor = "Green";
  MovingRect = createSprite(70,200,10,10);
  MovingRect.shapeColor = "Green";
}

function draw() {
  background(255,255,255);  
  MovingRect.y = mouseY;
  MovingRect.x = mouseX;
  if(MovingRect.x - FixedRect.x < MovingRect.width/2 + FixedRect.width/2 &&
    FixedRect.x - MovingRect.x < FixedRect.width/2 + MovingRect.width/2 &&
    FixedRect.y - MovingRect.y < FixedRect.height/2 + MovingRect.height/2 &&
    MovingRect.y - FixedRect.y < MovingRect.height/2 + FixedRect.height/2)
  {
    MovingRect.shapeColor = "Red";
    FixedRect.shapeColor = "Red";
  }
  else {
    MovingRect.shapeColor = "Green";
    FixedRect.shapeColor = "Green";
   }


  drawSprites();  
}