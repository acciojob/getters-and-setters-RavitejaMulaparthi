class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage:
const person1 = new Person("John", 30);
console.log(`Name: ${person1.name}`);
console.log(`Age: ${person1.age}`);
person1.age = 35; // You can set the age using the setter
console.log(`Updated Age: ${person1.age}`);

const student1 = new Student("Alice", 20);
console.log(`Name: ${student1.name}`);
student1.study(); // This will call the study method specific to the Student class

const teacher1 = new Teacher("Mr. Smith", 40);
console.log(`Name: ${teacher1.name}`);
teacher1.teach(); // This will call the teach method specific to the Teacher class
