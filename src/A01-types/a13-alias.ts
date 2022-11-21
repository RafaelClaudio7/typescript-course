/* eslint-disable */
type Age = number;
type Person = {
    name: string;
    lastName: string;
    age: Age;
    street: string;
    colorLoved?: ColorLoved;
};

type colorRGB = 'Red' | 'Green' | 'Blue';
type colorCMYK = 'Ciano' | 'Magenta' | 'Yellow' | 'Black';
type ColorLoved = colorRGB | colorCMYK;


const p1: Person = {
    name: 'Carlos',
    lastName: 'Miguel',
    age: 35,
    street: 'Matutina',
    colorLoved: 'Magenta'
};

console.log(p1);


export default 1;

