const input = document.querySelector('#input');
const output = document.querySelector('#output');

// Vamos usar o Intl uma API Global para formatar os números
const formatador = Intl.NumberFormat('en', { notation: 'compact' });

input.addEventListener('keypress', () => {
  const value = input.value || 1;
  const formatado = formatador.format(value);
  output.textContent = formatado;
});