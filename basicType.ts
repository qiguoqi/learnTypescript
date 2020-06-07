const isDone: boolean = false;

let age: number = 20;
let binaryNumber: number = 0b1111;

let firstName: string = 'viking';
let message: string = `hello ${firstName}, age is ${age}`;

let u: undefined = undefined;
let n: null = null;

let num: number = undefined;//undefined是所有变量类型的子类型

let notSure: any = 4;
notSure = 'maybe it is a string';
notSure = true;

notSure.name;
notSure.getName();
//应该尽量避免使用any

let numberOrString: number | string = '123';
numberOrString = 123;

let arrOfNumber: number[] = [1, 2, 3, 4];
arrOfNumber.push(5);

let arr: [string, number] = ['viking', 20];