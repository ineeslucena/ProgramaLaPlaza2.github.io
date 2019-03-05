let a = [];
let tamany =[2,5,8,20,14];
let ample =[20,50,80,10,140];
let alt =[20,50,80,10,140];
let paleta =['#FFB5E8','#AFCBFF','#BFFCC6','#FFF5BA','#ffffff'];
let espaix =[2,10,20,30,40];
let espaiy =[2,10,20,30,40];
let grossor =[1,2,3,4,5];
let velocitat =[0.5,1,0.2,10,2];
let wx = [0.1,0.2,0.3,0.25,0.4];
let gx = [1,0.2,0.12,0.4,0.08];
let wind;
let gravity;
let paraules = ['PROGRAMA', 'LA PLAZA'];
let simbols = [];
let c=0;
function setup(){
  createCanvas(192,157);
  background(255);
  for(let i=0; i<5; i=i+1){
    a.push(new Antena());
  }
}
function draw(){
  //fill(0,255,0);
  textSize(20);
  textAlign(CENTER);
  c=c+1;
  if((c>100) && (c<200)){
    text(paraules[0],width/2,height/2);
  }else if((c>200) && (c<300)){
    text(paraules[1],width/2,height/2);
  }/*else if(c>320){
    text(paraules[2],width/2,height/2);*/  
  console.log(c);
  let gravity = new createVector(0.5,1);
  for(let i=0; i<a.length; i=i+1){
    wind = createVector(wx[i],wx[i]);
    gravity = createVector(gx[i],gx[i]);
    a[i].update();
    a[i].applyForce(wind);
    a[i].applyForce(gravity);
    a[i].display(tamany[i], ample[i], espaix[i], alt[i], espaiy[i], paleta[i], grossor[i]);
    a[i].checkEdges();
  }
}
class Antena{
  constructor(){
    this.mass = 5;
    this.position = new createVector (50,100);
    this.velocity = new createVector (-2,1);
    this.acceleration = new createVector (0,0);
  }
  applyForce(force){
    var f = p5.Vector.div(force, this.mass);
      this.acceleration.add(f);
  }
  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  display(t, ampr, sx, altr, sy, c, g){
    stroke(c);
    strokeWeight(g);
    for(var posx=0; posx<ampr; posx=posx+sx){
      for(var posy=0; posy<altr; posy=posy+sy){
        push();
        translate(posx+this.position.x-ampr,posy+this.position.y-altr);
          point (0,t,t*2,t);
          point (t,0,t,t*2);
        pop();
      }
    }
  }
  checkEdges(){
    if (this.position.x > width){
      this.position.x = width;
      this.velocity.x = this.velocity.x*-1;
    } else if (this.position.x < 0){
      this.position.x = 0;
        this.velocity.x = this.velocity.x*-1;
    }
    if (this.position.y > height){
      this.position.y = height;
      this.velocity.y = this.velocity.y*-1;
    } else if (this.position.y < -100){
      this.position.y = -50;
      this.velocity.y *= -1;
    }
  }
}