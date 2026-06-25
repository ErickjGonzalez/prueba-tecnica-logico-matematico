function esPrimo(n: number): boolean {
  if (n <= 1) return false
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false
  }
  return true
}

export function primosGemelos(inicio: number, fin: number): string {
  var resultado = ""
  var anterior = -1
  for (var i = inicio; i <= fin; i++) {
    if (esPrimo(i)) {
      if (anterior != -1 && i - anterior == 2) {
        if (resultado.length > 0) resultado += ", "
        resultado += "(" + anterior + ", " + i + ")"
      }
      anterior = i
    }
  }
  if (resultado == "") return "0"
  return resultado
}