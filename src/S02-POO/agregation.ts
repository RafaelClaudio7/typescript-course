/* eslint-disable */
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void{
    for(const produto of produtos) {
        this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => {
        return (soma + produto.preco);

    },0)
  }
}

export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const prod1 = new Produto('Camisa', 109.9);

const carrinho = new CarrinhoDeCompras();
carrinho.inserirProduto(prod1, prod1, prod1);
console.log(carrinho.valorTotal().toFixed(2));
