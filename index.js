/**
 *
 * @param jogada1 {string} pedra, papel ou tesoura
 * @param jogada2 {string} pedra, papel ou tesoura
 * @returns {number} se for 0, empate, se for 1, jogada1 venceu e se for 2, jogada2 venceu.
 */
export const jokenpo = (jogada1, jogada2) => {
  if (jogada1 === jogada2) {
    return 0;
  }
  if ((jogada1 === 'pedra' && jogada2 === 'tesoura') || (jogada1 === 'tesoura' && jogada2 === 'papel')) {
    return 1;
  }
  if ((jogada1 === 'pedra' && jogada2 === 'papel') || (jogada1 === 'tesoura' && jogada2 === 'pedra')) {
    return 2;
  }
  if (jogada2 === 'pedra') {
    return 1;
  }
  return 2;
}
