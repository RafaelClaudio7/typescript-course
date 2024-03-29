const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(array.filter((value) => value < 5));

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

function myFilter<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) novoArray.push(array[i]);
  }

  return novoArray;
}

console.log(myFilter(array, (value) => value < 7));
