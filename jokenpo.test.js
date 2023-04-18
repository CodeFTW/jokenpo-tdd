import {jokenpo} from './index';

test('Jokenpo Papel Papel', () => {
  let resultado = jokenpo('papel', 'papel');
  let esperado = 0;

  expect(resultado).toBe(esperado);
});

test('Jokenpo Papel Pedra', () => {
  let resultado = jokenpo('papel', 'pedra');
  let esperado = 1;

  expect(resultado).toBe(esperado);
});

test('Jokenpo Papel Tesoura', () => {
  let resultado = jokenpo('papel', 'tesoura');
  let esperado = 2;

  expect(resultado).toBe(esperado);
});

test('Jokenpo Pedra Papel', () => {
  let resultado = jokenpo('pedra', 'papel');
  let esperado = 2;

  expect(resultado).toBe(esperado);
});

test('Jokenpo Pedra Tesoura', () => {
  let resultado = jokenpo('pedra', 'tesoura');
  let esperado = 1;

  expect(resultado).toBe(esperado);
});

test('Jokenpo Pedra Pedra', () => {
  let resultado = jokenpo('pedra', 'pedra');
  let esperado = 0;

  expect(resultado).toBe(esperado);
});

test('Jokenpo Tesoura Papel', () => {
  let resultado = jokenpo('tesoura', 'papel');
  let esperado = 1;

  expect(resultado).toBe(esperado);
});

test('Jokenpo Tesoura Pedra', () => {
  let resultado = jokenpo('tesoura', 'pedra');
  let esperado = 2;

  expect(resultado).toBe(esperado);
});
