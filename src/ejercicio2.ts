export function numerosParesUnicos(arr: number[]): number[] {
  var pares = []
  var vistos: { [key: number]: boolean } = {}
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i]
    if (num % 2 == 0) {
      if (!vistos[num]) {
        vistos[num] = true
        pares.push(num)
      }
    }
  }
  return pares
}