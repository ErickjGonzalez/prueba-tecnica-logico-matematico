import { primosGemelos } from '../src/ejercicio3'

test("encuentra primos gemelos en el rango", () => {
  var casos = [
    { ini: 0, fin: 10, esperado: "(3, 5), (5, 7)" },
    { ini: 100, fin: 150, esperado: "(101, 103), (107, 109), (137, 139)" },
    { ini: 700, fin: 800, esperado: "0" }
  ]
  for (var i = 0; i < casos.length; i++) {
    expect(primosGemelos(casos[i].ini, casos[i].fin)).toBe(casos[i].esperado)
  }
})