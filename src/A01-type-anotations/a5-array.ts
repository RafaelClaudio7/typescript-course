/* eslint-disable */

// Array <T> - T[]
export function multiplyArgs(...args: Array<number>): number{
    return args.reduce((ac, value) => ac * value, 1);
}

export function concatArgs(...args: string[]): string{
    return args.reduce((ac, value) => ac + value, '');
}

export function toUpperCase(...args: string[]): string[]{
    return args.map((value: string) => value.toUpperCase())
}

const result: number = multiplyArgs(1, 4, 7, 5);
const res2 = concatArgs('Eu ', 'Sou ', 'o ', 'Milior ');

console.log(result + '\n' + res2 + '\n' + res2.toUpperCase());
