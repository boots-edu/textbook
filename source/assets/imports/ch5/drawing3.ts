class Color{
	constructor(public red:number=0, public green:number=0,public blue:number=0){ }
	clone():Color{
		return new Color(this.red,this.green,this.blue);
	}
}
class Point{
	constructor(public x:number,public y:number,public color:Color){}
	clone(): Point{
		return new Point(this.x,this.y,this.color.clone());
	}
}
