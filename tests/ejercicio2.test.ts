import { numerosParesUnicos } from '../src/ejercicio2'

test("retorna pares unicos correctamente", () => {
  var casos = [
    { e: [2,7,9,12,33,15,22,12,4], s: [2,12,22,4] },
    { e: [1,2,3,4,5,6,7,2,4,6,8,6], s: [2,4,6,8] }
  ]
  for (var i = 0; i < casos.length; i++) {
    expect(numerosParesUnicos(casos[i].e)).toEqual(casos[i].s)
  }
})