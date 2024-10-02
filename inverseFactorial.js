function inverseFactorial(k) {
  // Проверяем введено ли число
  if (typeof k !== 'number') {
    throw new Error('k must be a number')
  }

  // Если число меньше 1 или не целое, то возвращаем -1
  if (k < 1 || !Number.isInteger(k)) {
    return -1
  }

  let n = 2

  while (k > 1) {
    // Если k деленное на n не целое число значит n не существует
    if (!Number.isInteger(k % n)) {
      return -1
    }
    k /= n
    n++
  }

  // Уменьшаем n на 1, так как на последнем шаге оно увеличилось
  return n - 1
}

module.exports = { inverseFactorial }
