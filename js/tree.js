class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treeTrunkWidth=450;
		this.treeTrunknHeight=600;
		this.wallThickness=10;
		
		this.image = loadImage("images/tree.png");
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.treeTrunkWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.treeTrunknHeight/2, this.wallThickness, this.treeTrunknHeight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.treeTrunkWidth/2, this.y-this.treeTrunknHeight/2, this.wallThickness, this.treeTrunknHeight, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push();
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.treeTrunknHeight/2,this.treeTrunkWidth, this.treeTrunknHeight);
			pop();
	}

}