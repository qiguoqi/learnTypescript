interface Person {
  readonly id: number;
  name: string;
  age?: number;
}

let viking: Person = {
  name: 'tom',
  age: 20,
  id: 10001,
}

interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatteryStatus(): void;
}

interface radioWithBattery extends Radio {
  checkBatteryStatus(): void;
}

class Car implements Radio {
  switchRadio() {

  }
}

class cellPhone implements radioWithBattery {
  switchRadio() {

  }
  checkBatteryStatus() {

  }
}