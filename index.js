import polskaCheking from 'node_plsk'

console.log(polskaCheking('15 9 + 10 - 14 - 7 * 5 14 * 14 - *'),
  polskaCheking('8 2 15 * + 8 - 13 * 15 - 6 6 13 + + -'),
  polskaCheking('4 9 + 1 - 2 6 13 8 0 6 9 * - - + + - *'),
  polskaCheking('6 1 - 14 * 11 + 3 - 2 12 5 - * +'),
  polskaCheking('2 11 6 * - 6 * 7 - 7 + 14 + 8 10 * +'),
  polskaCheking('13 3 14 * 10 + * 12 4 + + 8 *'),
  polskaCheking('10 3 11 - + 7 + 2 - 10 - 10 -'),
  polskaCheking('4 9 - 1 14 - - 12 + 2 1 - - 8 -'),
  polskaCheking('2 11 0 * * 13 15 - + 0 - 4 * 1 *'),
  polskaCheking('4 8 6 10 * * * 0 11 * -'));