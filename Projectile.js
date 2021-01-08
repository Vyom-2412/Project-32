class Projectile
{
   constructor(bodyA,pointB)
   {
      var options = {bodyA:bodyA,pointB:pointB,stiffnes:0.04,length:20}
      this.pointB = pointB;
      this.body = Constraint.create(options);
      World.add(world,this.body);
   }
   release()
   {
      this.body.bodyA = null;
   }
   display()
   {
      if(this.body.bodyA)
      {
         var pointA = this.body.bodyA.position;
         var pointB = this.pointB;
         strokeWeight(5);
         stroke("grey");
         line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
   }
}