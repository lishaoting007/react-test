class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log('早上好');
  }
}
// 使用extends继承后要么不写constructor,要写就一定要优先调用super
class American extends Person {
  constructor(name, age) {
    super(name, age);
  }
}
class Chinese extends Person {
  constructor(name, age, IDNumber) {
    super(name, age);
    this.IDNumber = IDNumber;
  }
}
let Jack = new American('Jack', 20);
console.log(Jack);
// Jack.sayHello();
let z3 = new Chinese('张三', 20, '1405*************4');
console.log(z3);
// z3.sayHello();
