/* eslint-disable */
// Basic Types
//let name: string = 'Rafael'; // String
let age: number = 22; // Numbers including decimals
let adult: boolean = true; // True or False
let symbol: symbol = Symbol('qualquer-symbol'); // Symbol
//let big: bigint = 10;  // Big int


// Arrays
let numbersArray: Array<number> = [1, 2, 3];
let stringArray: Array<string> = ['1',' 2', '3'];

let numbersArray2: number[] = [7, 6, 5];

// Objects
// The ?  before : turns the attribute optional
let person: {name: string, age: number, adult?: boolean}  = {
    name: 'Rafael',
    age: 23,
    adult: true,
};

console.log(person.name);


// Functions
function sum (x: number, y: number) {
    return x + y;
}

console.log(sum(3, 5));


// When the type is (any) that's because it couldn't place a type for the attribute
