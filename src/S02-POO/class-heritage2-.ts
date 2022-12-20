/* eslint-disable */

export class Pessoa {
  public nome: string;
  public sobrenome: string;
  private idade: number;
  protected cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  get idade_(): number {
    return this.idade;
  }

  get cpf_(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
    public sala: string;

    constructor(nome: string, sobrenome: string, idade: number, cpf: string, sala: string) {
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    }

    getNomeCompleto(): string {
        console.log('Doing something before');
        return super.getNomeCompleto();
    }
}

const aluno = new Aluno('Rafael', 'Tula', 23, '146.101.776-92', '0001')
console.log(aluno.getNomeCompleto());

export class Cliente extends Pessoa {

}
