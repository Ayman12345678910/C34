class Ball{
    constructor(x, y, width, height){
    var options= {
        
        frictionAir: 0.001,
        density: 1
    }    
    this.body= Bodies.rectangle (x, y, width, height, options)
    World.add(world, this.body)
    this.height= height
    this.width= width
    
    }
    display(){
    var pos = this.body.position
    var angle = this.body.angle
    push ()
    translate(pos.x, pos.y)
    rotate(angle)
    fill("purple")
    ellipse(0, 0, this.width, this.height) 
    pop();

    }
}