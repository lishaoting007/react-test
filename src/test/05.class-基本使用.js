function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function() {
  console.log('普通构造函数的实例方法');
};

Person.show = function() {
  console.log('这是普通构造函数的静态方法');
};
// 静态属性
// Person.info = '133';
// console.log(Person.info);
// Person.show(); // 这是普通构造函数的静态方法

let person1 = new Person('王力宏', 30);
// console.log(person1);
// person1.say();
// person1.show(); // 报错
// console.log(person1.info); // undefined
// 通过new出来的实例，访问到的属性，叫做实例属性
// 通过构造含糊直接访问到的属性，叫做静态属性

// --------------华丽丽的分割线------------------
console.log('---------------------------------');
// --------------华丽丽的分割线------------------

// class内部只能写构造器，实例方法，静态属性和静态方法
class Animal {
  //构造器，每当new的时候，必定会优先访问构造器
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static info = '静态属性';
  jiao() {
    console.log('这是class的实例方法');
  }
  static show() {
    console.log('这是class的静态方法');
  }
}

const a1 = new Animal('大黄', 3);
console.log(a1);
// console.log(a1.info); // undefined
// console.log(Animal.info); // '静态属性'
a1.jiao();
