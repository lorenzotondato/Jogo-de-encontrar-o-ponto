let x;
let y;

function setup() {
  createCanvas(800, 800);
  x = random(800);
  x = int(x);
  y = random(800);
  y = int(y);
}

function draw() {
  background(0,128,0);
  let distanciaX;
  let distanciaY;
  let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  //distancia = sqrt(distanciaX*distanciaX + distanciaY*distanciaY);
  distancia = dist(mouseX,mouseY,x,y);
  fill(25,25,112)
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 10);
  //console.log(distancia);

  if (distancia < 3) {
    fill(255,215,0)
    text("Finalmente eu Encontrei!", 400, 400);
    noLoop();
  }
}