export class Color{
	constructor(public red:number, public green:number,public blue:number){ }
}
export class Point{
	constructor(public x:number,public y:number,public color:Color){}
}
export class Line{
	constructor(public start:Point,public end:Point,public color:Color){}
}
export class Rectangle{
	constructor(public corner1:Point,public corner2:Point,public color:Color){}
}
export class Polygon{
	constructor(public points:Point[],public color:Color){}
}
