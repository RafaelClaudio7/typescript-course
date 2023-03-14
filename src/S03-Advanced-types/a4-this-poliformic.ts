export class Calculadora {
  constructor(public number: number) {}

  add(num: number): this {
    this.number += num;
    return this;
  }

  sub(num: number): this {
    this.number -= num;
    return this;
  }

  div(num: number): this {
    this.number /= num;
    return this;
  }

  mul(num: number): this {
    this.number *= num;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(num: number): this {
    this.number **= num;
    return this;
  }
}

const calculadora = new SubCalculadora(10);

calculadora.add(5).mul(2).div(2).sub(1).pow(2);
console.log(calculadora.number);

// Builder - GoF
export class RequestBuilder {
  private method: 'post' | 'get' | null = null;
  private url: string | null = null;

  setMethod(method: 'post' | 'get'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();

request.setMethod('post').setUrl('http://localhost:5557').send();
