class Animal {
  readonly name: string;
  static categoies: string[] = ['mammal', 'bird'];
  static test (a: any) {
    return a instanceof Animal;
  }
  constructor(name: string) {
    this.name = name;
  }
  run(): string {
    return `${this.name} is running`;
  }
}

// console.log(Animal.categoies);
const cat = new Animal('wangcai');
// console.log(cat.run());

class Dog extends Animal {
  bark () {
    return `${this.name} is barking`;
  }
}

const xiaobao = new Dog('xiaobao');
// console.log(xiaobao.run());
// console.log(xiaobao.bark());

class Cat extends Animal {
  constructor(name) {
    super(name);
    // console.log(this.name);
  }
  run () {
    return 'memo,' + super.run();
  }
}

const maomao = new Cat('maomao');
// console.log(maomao.run());