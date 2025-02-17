interface Serializable {
    serialize(): string;
}
interface Iterables<T> {
    next(): T;
}
class MyList implements Serializable, Iterables<number> {
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
