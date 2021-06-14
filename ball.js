class Ball {
    constructor(x,y,){

        var options={
            ísStatic:false,
            'restitution':0.3,
            'density':1.2,
            'friction':0.3
        }
        this.body=Matter.Bodies.circle(x,y,30,{options});
        this.radius=30;
        this.image = loadImage("paper.png");
       
        
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position.x;
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width/2, this.height/2);
        this.image.resize(80,80);
        pop();
    }
};