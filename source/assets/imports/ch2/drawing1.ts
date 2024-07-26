class Color{
	constructor(public red:number, public green:number,public blue:number){ }
}
class Point{
	constructor(public x:number,public y:number,public color:Color){}
}
class Line{
	constructor(public start:Point,public end:Point,public color:Color){}
}
class Rectangle{
	constructor(public corner1:Point,public corner2:Point,public color:Color){}
}
class Polygon{
	constructor(public points:Point[],public color:Color){}
}
