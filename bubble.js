function Bubble(x,y){
    this.x=x;
    this.y=y;
    this.r=12; //radius
    this.col=color(255);
  this.direction=1;
  this.sick=0; // for red
  this.recover=0; // for green
    this.display=function(){
      stroke(255);
      fill(this.col);
   ellipse(this.x,this.y,this.r*2,this.r*2);
      }
  
  this.moveAway=function(){
    this.x+=random(-this.r,this.r);
      this.y+=random(-this.r,this.r);
  }
  
    this.changeRed=function(){
      this.col=color(255,0,0,this.lifespan);
    }
   this.changeGreen=function(){
      this.col=color(0,255,0,this.lifespan);
    }
  
   this.isRed=function(){
     if (this.col.levels[0]==255 && this.col.levels[1]==0 && this.col.levels[2]==0){
       return true;
     } else {
     return false;
     }
     
     this.isGreen=function(){
       if (this.col.levels[0]==0 && this.col.levels[1]==255 && this.col.levels[2]==0){
         return true;
       } else {
       return false;
       }
     }
       
   }
  this.intersects=function(other){
    d= dist(this.x,this.y,other.x,other.y);
    if (d<(this.r+other.r)){
      if (this.col.levels[0]==255 && this.col.levels[1]==0 && this.col.levels[2]==0 ){
         if (!(other.col.levels[0]==255 && other.col.levels[1]==0 && other.col.levels[2]==0)){ 
           other.recover=0;
            other.sick=0;
            other.col=color(255,0,0,other.sick);
       }
      }
      return true;
    } else {
      if (other.col.levels[0]==255 && other.col.levels[1]==0 && other.col.levels[2]==0) {
        if (other.sick<256){
          other.sick+=0.01;
          other.col=color(255,0,0,other.sick);
        }  
        if (other.sick>=255){
          if (other.recover<256 ){
            other.recover+=0.01
            ;
            other.col=color(255,0,0,other.sick-other.recover);
            // print(other.recover)
          }
          if (other.recover>=255) {
            // other.sick=0;
            other.col=color(0,255,0,other.recover);
          }
        }
      }
      
    return false;
    }
  }
  
    this.update=function(){  
      this.x+=random(-1,1);
      this.y+=random(-1,1);
      
    }

}