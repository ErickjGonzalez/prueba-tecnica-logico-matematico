import { invertirPalabras } from '../src/ejercicio1'

test("invierte palabras correctamente", () => {
  var casos = [
    { e: "Hola soy una cadena", s: "aloH yos anu anedac" },
    { e: "Programando ando", s: "odnamargorP odna" },
    { e: "Concatenación", s: "nóicanetacnoC" }
  ]
  for (var i = 0; i < casos.length; i++) {
    expect(invertirPalabras(casos[i].e)).toBe(casos[i].s)
  }
})