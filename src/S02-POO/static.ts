export class Person {
  static standardAge = 0;
  static standardCpf = '000.000.000-00';

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  public static sayHi(): void {
    console.log('Hi');
  }

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.standardAge, Person.standardCpf);
  }
}

const person = new Person('Rafael', 'Tula', 23, '146.101.776-92');
console.log(person);
Person.sayHi();
