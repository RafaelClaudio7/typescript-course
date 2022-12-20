/* eslint-disable*/

/*
Resumo
Atributos e métodos podem ser Private, Protected e Public
Private -> são visíveis exclusivamente dentro da classe declarada
Protected -> semelhante ao private porém podem ser manipulados por classes derivadas
Public -> são visíveis em qualquer lugar sendo o modificador de acesso padrão

*/
class Product {
  private readonly name: string;
  private readonly category: string;
  private price: number;
  protected units: number;

  constructor(
    nome: string,
    categoria: string,
    preço: number,
    unidades: number,
  ) {
    this.name = nome;
    this.category = categoria;
    this.price = preço;
    this.units = unidades;
  }

  get _nome(): string {
    return this.name;
  }

  set _preco(value: number) {
    this.price = value;
  }

  selled(): void {
    this.units -= 1;
  }
}

const geladeira = new Product('Geladeira Frost Free', 'Eletrônicos', 1500, 20);
console.log(geladeira);
geladeira.selled();
console.log(geladeira);

export default Product;
