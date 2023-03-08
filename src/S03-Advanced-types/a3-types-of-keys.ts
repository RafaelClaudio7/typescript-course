type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

type Car2 = Veiculo & {
  name: string;
};

const carro: Car2 = {
  marca: 'Ford',
  ano: '2020',
  name: 'Ka',
};

console.log(carro);
