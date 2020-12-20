var car,wall,speed,weight;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="white";
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(0,0,0);  
  if (car.isTouching(wall)) {
    car.velocityX=0
    deformation=0.5*weight*speed*speed/22500
  
  if(deformation<100) {
    car.shapeColor="green";
    textSize(30);
    fill("white");
    text("The car is safe", 50,200)
  }
  else if (deformation>100 && deformation<180) {
    car.shapeColor="yellow";
    textSize(30);
    fill("white");
    text("The car is moderately safe", 50,200);
  } 
  else {
    car.shapeColor="red";
    textSize(30);
    fill("white");
    text("The car is very unsafe", 50,200);
  }
}
  drawSprites();
}