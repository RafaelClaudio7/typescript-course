/* eslint-disable*/

// Like on cpp,  void is when a function or a method haven't a return

function withoutReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
    name: 'Rafa',
    lastname: 'Tula',

    showName(): void {
        console.log(this.name)
    }
};

person.showName();

withoutReturn('Rafael', 'Claudio');

export  {person}
