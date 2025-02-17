export interface Serializable {
    serialize(): string;
}
export interface Iterables<T> {
    next(): T;
}
export class MyList implements Serializable, Iterables<number> {
    values: number[] = [];
    pos: number = 0;
    next(): number {
        if (this.pos < this.values.length) return this.values[this.pos++];
        else return -1;
    }
    serialize(): string {
        return JSON.stringify(this.values);
    }
}
