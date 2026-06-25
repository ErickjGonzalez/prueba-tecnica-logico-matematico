import { existeCombinacion } from '../src/ejercicio4'

test("determina si existe combinacion que sume el objetivo", () => {
  var casos = [
    { arr: [2,5,8,44,1,7], obj: 9, esperado: true },
    { arr: [55,3,8,11,45,1], obj: 12, esperado: true },
    { arr: [4,8,48,44,1], obj: 11, esperado: false }
  ]
  for (var i = 0; i < casos.length; i++) {
    expect(existeCombinacion(casos[i].arr, casos[i].obj)).toBe(casos[i].esperado)
  }
})