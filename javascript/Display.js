class Display {
  constructor(valorAnterior, valorActual) {
    this.valorActual = valorActual;
    this.valorAnterior = valorAnterior;
    this.calculador = new Calculadora();
    this.tipoOperacion = undefined;
    this.valActual = '';
    this.valAnterior = '';
    this.signos = {
      sumar: '+',
      restar: '-',
      multiplicar: 'x',
      dividir: '/',
    };
  }

  borra() {
    this.valActual = this.valActual.toString().slice(0, -1);
    this.imprimirValores();
  }
  borraTodo() {
    this.valAnterior = '';
    this.valActual = '';
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }
  computar(tipo) {
    this.tipoOperacion !== 'igual' && this.calcular();
    this.tipoOperacion = tipo;
    this.valAnterior = this.valActual || this.valAnterior;
    this.valActual = '';
    this.imprimirValores();
  }
  agregarNumero(numero) {
    if (numero === '.' && this.valActual.includes('.')) return;
    this.valActual = this.valActual.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    this.valorActual.textContent = this.valActual;
    this.valorAnterior.textContent = `${this.valAnterior} ${
      this.signos[this.tipoOperacion] || ''
    }`;
  }

  calcular() {
    const valAnterior = parseFloat(this.valAnterior);
    const valActual = parseFloat(this.valActual);

    if (isNaN(valActual) || isNaN(valAnterior)) return;
    this.valActual = this.calculador[this.tipoOperacion](
      valAnterior,
      valActual
    );
  }
}
