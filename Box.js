class Box
{
  constructor(x,y,width,height)
   {
     var options = {'restitution':0.8,'friction':1.0,'density':1.0}
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body);
     this.Visibility = 255;

   }
   score()
   {
     if(this.Visibility == 0)
     {
       score = score + 10;
     }
   }
  display()
  {
    if(this.body.speed<2)
    {
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
      fill("white");
    }
    else
    {
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
      fill("white");
    }
  }
}
