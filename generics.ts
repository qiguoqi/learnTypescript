function echo<T>(arg: T): T {
  return arg;
}

const result = echo('123');

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123]);
console.log(result2);

function echoWithArr<T> (arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arrs = echoWithArr([1, 2, 3]);

interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength> (arg: T): T {
  console.log(arg.length);
  return arg;
}

class Queue<T> {
  private arr = [];
  push(item: T) {
    return this.arr.push(item);
  }
  pop(): T {
    return this.arr.shift();
  }
}

const queue = new Queue<number>();

interface KeyPair<T, U> {
  key: T,
  value: U,
}

const obj: KeyPair<number, string> = {key: 123, value: 'str'}

let arrNumber: number[] = [1, 2, 3];
let arrNumber2: Array<number> = [1, 2, 3];

interface IPlus<T> {
  (a: T, b: T): T;
}

function addT(a: number, b: number): number {
  return a + b;
}

const a: IPlus<number> = addT

