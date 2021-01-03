class mango{
 constructor(x,y){
     var options={
         isStatic : true,
         restitution : 0,
         friction : 5
 }
 this.y = y;
 this.x = x;
 this.image = loadImage("Plucking mangoes/mango.png");
 World.add(world, this.body)
 }  
    display()
    {
        var mangoPos= this.body.position;
        push()
        rotate(this.body.angle)
        rectMode(CENTER)
        ellipseMode(CENTER)
        Image(this.image , 10, this.image.r*5, this.r*5)
        pop();
    }
}