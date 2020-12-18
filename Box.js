class Box{

    constructor(x,y,width,height){
        var options = {
            friction:2
            }
            this.body = Bodies.rectangle(x,y,width,height,options);
            World.add(myworld,this.body);
            this.width=width;
            this.height=height;

    }

    display(){
        var pos=this.body.position;
        var angle= this.body.angle;

        push();
        translate(pos.x,pos.y) // translates center of box as (0,0) of canvas
        rotate(angle);//rotates 
        rectMode(CENTER);
        strokeWeight(3);
        stroke("yellow")
        fill("blue")
        rect(0,0,this.width,this.height);
        pop();
    }

}