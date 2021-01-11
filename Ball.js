class Ball{
      constructor(x,y,width,height,angle){
            
            var options ={
                'density':1,
                'frictionAir':0.005

            }
            this.body =Bodies.rectangle(x,y,width,height,options);
            this.width =width;
            this.height =height;
            this.image=loadImage("Superhero-01.png");
            World.add(world,this.body);
    
        }
        display(){
            var posi =this.body.position;
            var angle=this.body.angle;
            push();
            translate(posi.x,posi.y);
            
            ellipse(0,0,this.width,this.height);
            imageMode(CENTER);
            this.image.scale=5;
            image(this.image,0,0,400,200);
            pop();
        }
    
}