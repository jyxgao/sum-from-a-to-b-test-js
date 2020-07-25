/* Function that sums a range of numbers - assuming a is smaller than toN */
const sum = function(a, toN) {
  if (a === toN) {
    return a;
  }
  // Sum all the values from fromN up to toN
  return a + sum(a+1, toN)
}

module.exports = sum;
