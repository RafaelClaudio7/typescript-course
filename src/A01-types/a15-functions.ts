/* eslint-disable */
type MapStringsCalback = (item: string) => string;


function mapStrings(array: string[], callbackfn: MapStringsCalback): string[] {
    const newArray: string[] = [];

    for(let i = 0; i < array.length; i++){
        newArray.push(callbackfn(array[i]));
    }

    return newArray;
}

const abc = ['a','b', 'c'];
const abcMapped = mapStrings(abc, (item) => {
    return item.toLowerCase();
});

console.log(abcMapped);
