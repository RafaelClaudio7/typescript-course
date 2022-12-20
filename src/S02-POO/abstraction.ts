/* eslint-disable */
export abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} está atacando`);
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  bordao(): void {
    console.log('Bordão da Guerreira');
  }
}
export class Monstro extends Personagem {
  bordao(): void {
    console.log('Bordão do Monstro');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monster = new Monstro('Monstro', 123, 1000);

monster.atacar(guerreira);
monster.atacar(guerreira);
monster.atacar(guerreira);

guerreira.atacar(monster);
