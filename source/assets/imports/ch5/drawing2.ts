export class Color{
	constructor(public red:number=0, public green:number=0,public blue:number=0){ }
	clone():Color{
		return new Color(this.red,this.green,this.blue);
	}
}