export function existeCombinacion(arr: number[], objetivo: number): boolean {
    
  function buscar(indx: number, suma: number): boolean {
    if (suma == objetivo) return true
    if (indx >= arr.length || suma > objetivo) return false

    if (buscar(indx + 1, suma + arr[indx])) return true
    return buscar(indx + 1, suma)
  }
  return buscar(0, 0)
}