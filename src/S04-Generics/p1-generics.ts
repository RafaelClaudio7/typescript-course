function Identity<Type>(arg: Type): Type {
  return arg;
}

function loggingIdentity<Type>(arg: Type[]): Array<Type> {
  console.log(arg.length);
  return arg;
}

loggingIdentity([2, 3, 8, 8]);

const output = Identity('mystring');

console.log(output);

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// const myIdentity: <Type>(arg: Type) => Type = identity;

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// const myIdentity: <Input>(arg: Input) => Input = identity;

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// const myIdentity: { <Type>(arg: Type): Type } = identity;

// interface GenericIdentityFn {
//   <Type>(arg: Type): Type;
// }

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// const myIdentity: GenericIdentityFn = identity;

// This way i thought thats is better

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

const myIdentity: GenericIdentityFn<number> = identity;

// Constraints

interface Lengthwise {
  length: number;
}

function loggingIdentity2<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdentity2('2');

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  console.log(typeof key);
  return obj[key];
}

const s = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(s, 'a'));

// getProperty(x, 'm');
