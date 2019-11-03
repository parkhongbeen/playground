
// const Person = (function (){
//   function Person(name){
//     this.name = name;
//   }

//   Person.prototype.sayHi = function() {
//     console.log(`Hi! My name is ${this.name}`);
//   };

//   Person.sayHello = function() {
//     console.log('Hello');
//   };
//   return Person;
// }());

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  static sayHello() {
    console.log('Hello!');
  }
}

// 인스턴스 생성
const me = new Person('Lee');

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
// 프로토타입 메소드 호출
me.sayHi(); // Hi! My name is Lee
// 정적 메소드 호출
Person.sayHello(); // Hello!