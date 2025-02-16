export class Color{
	constructor(public red:number=0, public green:number=0,public blue:number=0){ }
	clone():Color{
		return new Color(this.red,this.green,this.blue);
	}
}
export class Point{
	constructor(public x:number,public y:number,public color:Color){}
	clone(): Point{
		return new Point(this.x,this.y,this.color.clone());
	}
}
export class Line{
	constructor(public start:Point,public end:Point,public color:Color){}
	clone():Line{
		return new Line(this.start.clone(),this.end.clone(),this.color.clone());
	}
}
export class Rectangle{
	private corner2:Point;
	private corner4:Point;
	constructor(private corner1:Point, private corner3:Point,public color:Color){ 
		this.corner2=new Point(corner3.x,corner1.y,color);
		this.corner4=new Point(corner1.x,corner3.y,color);
	}
	clone():Rectangle{
	   return new Rectangle(this.corner1.clone(),this.corner3.clone(),this.color.clone());
	}
 }
 export class Polygon{
	constructor(public points:Point[],public color:Color){}
	clone():Polygon{
		let newPoints:Point[]=[];				//initialize a new empty array.
		for (let point of this.points){
			newPoints.push(point.clone());		//don't push the point, push a clone of it.
		}
		// so newPoints is a new array containing clones of all the points in this polygon.  We can pass it directly since it is completely new.
	 	return new Polygon(newPoints,this.color.clone());
	}
}


