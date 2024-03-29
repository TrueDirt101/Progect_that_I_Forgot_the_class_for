class paper {
    constructor(x, y, width, height, angle) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      };
      this.body = Bodies.rectangle(x, y, width, height , options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };

    display(){
   
      
      push();
      translate(this.body.position.x, this.body.position.y);
      fill('purple')
      ellipse(56, 46, 55, 55);
      imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height);
      pop();
    };
  };
  