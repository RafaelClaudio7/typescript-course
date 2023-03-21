const arrNum: number[] = [0, 50, 4, 7, 45];

const arrNum2: Array<number> = [0, 50, 4, 7, 45];

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

promiseAsync()
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
