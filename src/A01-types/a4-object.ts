/* eslint-disable */

const objA: {
    keyA: string;
    keyB: string;
    keyC ?: string;
    [key: string]: unknown;  // index signature
} =  {
    keyA: 'value A',
    keyB: 'value B',
};


const bike: {
    readonly price: number;
    readonly name: string;
} = {
    price: 500,
    name: 'caloi 300'
};

// bike.name = 'monark';
console.log(bike.name + ' ' + bike.price)


objA.keyA = 'Other value';
console.log(objA.keyA);

// Down below we see a line that works on js but not in typescricpt
// Is not possible create new keys for the object by dot notation
objA.keyC = 'new Key';
console.log(objA.keyC);
