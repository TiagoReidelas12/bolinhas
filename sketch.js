var Motor = Matter.Engine;
var Mundo = Matter.World;
var Corpos=Matter.Bodies;
var Corpo = Matter.Body;
var bolinhas =[]
var limiteBolinhas=500
var motor;
function setup() {
createCanvas(400,400)

motor=Motor.create()
mundo = motor.world;

  var opcoes_chao={
    isStatic:true
}
chao =Corpos.rectangle(200,390,400,20,opcoes_chao);
Mundo.add(mundo,chao);

parede = Corpos.rectangle(325,250,150,20,opcoes_chao);
Mundo.add(mundo,parede);


for(var i =0;i<limiteBolinhas;i++){
adicionarBolinhas()
}

 bola=Corpos.circle(100,10,20)
Mundo.add(mundo,bola);
rectMode(CENTER);

}

function draw() {
background("black");
Motor.update(motor);  

fill("white")
rect(chao.position.x, chao.position.y,400,20)

rect(parede.position.x, parede.position.y,150,20)
fill("blue")
ellipse(bola.position.x, bola.position.y,20);

if(keyIsDown(RIGHT_ARROW)){
  Corpo.applyForce(bola,{x:bola.position.x,y:bola.position.y},{x:0.05,y:0})
}
if(keyIsDown(LEFT_ARROW)){
  Corpo.applyForce(bola,{x:bola.position.x,y:bola.position.y},{x:-0.05,y:0})
}
if(keyIsDown(UP_ARROW)){
  Corpo.applyForce(bola,{x:bola.position.x,y:bola.position.y},{x:0,y:-0.05})
}
if(keyIsDown(DOWN_ARROW)){
  Corpo.applyForce(bola,{x:bola.position.x,y:bola.position.y},{x:0,y:0.05})
}

for(var b=0;b<bolinhas.length;b++){
  var bolinha=bolinhas[b]

  fill("white")
  ellipse(bolinha.position.x,bolinha.position.y,bolinha.circleRadius)
}
}


function adicionarBolinhas(){
  var bolinha=Corpos.circle(random(0,350),random(0,350),random(5,20))
  Mundo.add(mundo,bolinha)                                    
  bolinhas.push(bolinha)
}