class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.2  
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
     
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed <3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility -= 0.005
        tint(255,this.Visibility);
        pop();
      }
      
    }
    score(){
      if(this.Visibility <0&& this.Visibility){
        score=score+1
      }
    }
}

