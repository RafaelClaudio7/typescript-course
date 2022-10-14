/* eslint-disable */

// Tuple type

const userData: readonly [number, string] = [1, 'rafael'];
const userData2: [number, string, string?] = [1, 'cleiton'];

// When you have a set of known types at the beginning
// of a tuple and then several positions with unknown types,
// you can use the spread operator to indicate that it can
// have any length and the additional positions will be of some
// specific type.
const userData3: [number, string, ...string[]] = [2, 'jose', 'A', 'C0'];
// userData[0] = 0;
console.log(userData);
console.log(userData3);

// Tuples are a specific typescrict type to connect different datas, like numbers and strings
// at the same array

// implicit tuple
const failResponse = ['Not Found', 404];

// explicit tuple
const sucessResponse: [string, number] = ["{}", 200];

if(sucessResponse[1] === 200) {
    const localInfo = JSON.parse(sucessResponse[0]); // JSON.parse converts a a JSON string to a object
    console.log(typeof(localInfo));
}

// A tuple is a great standard to small peaces of data connecteds or to fixtures

// defining personalized type
type ColaboratorCount = readonly [number, string, string, string?];

const colaborators: ColaboratorCount[] = [
    [0, 'manoel', 'mano@email.com'],
    [1, 'jose', 'jose@ema'],
    [2, 'carlos', 'carlin@gmail.com', 'Supervisor'],
];

