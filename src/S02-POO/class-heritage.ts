/* eslint-disable */
class Company {
  public readonly name: string;
  protected readonly cnpj: string;
  private ceo: string;
  public location: string;

  constructor(name: string, cnpj: string, ceoName: string, location: string) {
    this.name = name;
    this.cnpj = cnpj;
    this.ceo = ceoName;
    this.location = location;
  }
}

class SubCompany extends Company {
  get _name() {
    return this.location;
  }
}

const myCompany = new Company(
  "Rafael's Company",
  '62.607.859/0001-10',
  'Rafael Claudio',
  'Brazil',
);

const subCompany = new SubCompany(
  'Second Company',
  '14610177692',
  'Rafael Tula',
  'Eua',
);

console.log(subCompany._name);
console.log(myCompany.name);

class Base {
  public k: number;

  constructor() {
    this.k = 5;
  }
}

class Derived extends Base {
  constructor(n: number) {
    super();
    this.k = n;
    console.log(this.k);
  }
}

const derived = new Derived(15);

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log('ping!');
  }
}

/*
You can use an implements clause to check that a class satisfies a particular interface.
An error will be issued if a class fails to correctly implement it:
 */
