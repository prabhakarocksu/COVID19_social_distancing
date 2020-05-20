var bubbles=[];


function setup() {
  createCanvas(600, 400); 
  bubbles[0]=new Bubble(250,200);
  bubbles[1]=new Bubble(450,200);
  bubbles[0].col=color(255,0,0);
  bubbles[1].col=color(0,255,0);
}

function mousePressed(){
  bubbles.push(new Bubble(mouseX,mouseY));
}

function draw() {
  background(0);
  // fill(255);
  bubbles[0].col=color(255,0,0);
  for (i=0;i<bubbles.length;i++){
     bubbles[i].update();
      bubbles[i].display();
     for (j=0;j<bubbles.length;j++){ 
        if (j!=i && bubbles[i].intersects(bubbles[j])){
          bubbles[i].moveAway();          
          // if (bubbles[i].isRed){
          //   bubbles[j].changeRed();
          // }
          // if (bubbles[i].isGreen){
          //   bubbles[j].changeGreen();
          // }
          
        }
       
     }
  }
  // bubbles[0].update();
  // bubbles[1].update();
  // bubbles[0].display();
  // bubbles[1].display();

  
     
}


  
 