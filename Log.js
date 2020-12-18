class Log{

    constructor(x,y,height,angle){
        var options = {
            friction:2
            }
            this.body = Bodies.rectangle(x,y,20,height,options);
            World.add(myworld,this.body);
            this.width=20;
            this.height=height;
            Matter.Body.setAngle(this.body,angle);

    }

    display(){
        var pos=this.body.position;
        var angle= this.body.angle;

        push();
        translate(pos.x,pos.y) // translates center of box as (0,0) of canvas
        rotate(angle);//rotates 
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black")
        fill("yellow")
        rect(0,0,this.width,this.height);
        pop();
    }

}