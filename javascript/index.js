const valorAnterior = document.getElementById('num_anterior');
const valorActual = document.getElementById('num_actual');
const btnNumero = document.querySelectorAll('.numero');
const btnoperador = document.querySelectorAll('.operador');

const display = new Display(valorActual, valorAnterior);

btnNumero.forEach((boton) => {
  boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

btnoperador.forEach((boton) => {
  boton.addEventListener('click', () => display.computar(boton.value));
});
