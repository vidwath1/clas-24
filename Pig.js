class Pig{

    constructor(x,y){
        var options = {
            friction:2
            }
            this.body = Bodies.rectangle(x,y,50,50,options);
            World.add(myworld,this.body);
            this.width=50;
            this.height=50;

    }

    display(){
        var pos=this.body.position;
        var angle= this.body.angle;

        push();
        translate(pos.x,pos.y) // translates center of box as (0,0) of canvas
        rotate(angle);//rotates 
        rectMode(CENTER);
        strokeWeight(3);
        stroke("pink")
        fill("green")
        rect(0,0,this.width,this.height);
        pop();
    }

}