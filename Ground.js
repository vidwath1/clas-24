class Ground{

    constructor(){
        var options ={
            isStatic:true,
            friction:0.04
        }
        this.body = Bodies.rectangle(width/2,height-20,width,10,options);
        World.add(myworld,this.body);
        
    }  

        display(){

            rectMode(CENTER);
            fill("brown")
            rect(this.body.position.x,this.body.position.y,width,10);
          

        }
}