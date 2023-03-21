interface IProtocolPerson<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

const student: IProtocolPerson<string, number> = {
  name: 'Rafael',
  lastName: 'Tula',
  age: 23,
};

console.log(student);
