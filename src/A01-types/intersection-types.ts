/* eslint-disable */
type HasName = { name: string };

type HasLastName = { lastName: string };

type HasAge = { age: number };

type Person = HasName & HasLastName & HasAge;

const p1: Person = {
    name: 'Rafael',
    lastName: 'Tula',
    age: 23,
};

console.log(p1);


export default 1;
