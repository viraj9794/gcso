var car, wall
var speed=Math.round(random(55, 90));
var weight=Math.round(random(400, 1500));

function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(55, 90));
  weight=Math.round(random(400, 1500));

  car=createSprite(50, 200, 50, 50);
  car.shapeColor="cyan";
  car.velocityX=speed;
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor=255;
}

function draw() {
  background(0);  
  var deformation=0.5*weight*speed*speed/22500;
  console.log(deformation);
  if(deformation<50){
    car.shapeColor="cyan"
  }
  if(deformation<100){
    car.shapeColor="green"
  }if(deformation>100 && deformation<180){
    car.shapeColor="yellow"
  }if(deformation>180){
    car.shapeColor="red"
  }
  if(car.x>1400){
    car.velocityX=0;
  }
  drawSprites();
}