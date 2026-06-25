export function invertirPalabras(cadena: string): string {
  var palabras = cadena.split(" ")
  var resultado = ""
  for (var i = 0; i < palabras.length; i++) {
    var palabra = palabras[i]
    var invertida = ""
    for (var j = palabra.length - 1; j >= 0; j--) {
      invertida += palabra[j]
    }
    resultado += invertida
    if (i < palabras.length - 1) {
      resultado += " "
    }
  }
  return resultado
}