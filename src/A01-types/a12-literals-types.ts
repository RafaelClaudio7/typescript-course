/* eslint-disable */
let x = 10;
x = 0b1010;
//x = 'Rafael';

const y = 10;
let a = 100 as const;

const person = {
    name: 'Rafael' as const, // assertion
    lastName: 'Tula',
}

person.lastName = 'Claudio';
console.log(person);
// person.name = 'Thiago';

function chooseColor(color: 'Red'| 'Blue' | 'Yellow'): string {
    return color;
};

console.log(chooseColor('Yellow'));


export default 1;
