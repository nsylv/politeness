/**
 * Count all odd prime factors of a given number
 *
 * @param {number} n number to get prime factors for
 */
function countOddPrimeFactors(n) {
  let result = 1;
  let num = n;

  // Eliminate all even prime factors
  while (num % 2 === 0) {
    num = num / 2;
  }

  // The number must be odd at this point, so iterate for only odd numbers until sqrt(n)
  let i = 3;
  while (i * i <= num) {
    let divCount = 0;

    // if i divides num, then start counting of odd divisors
    while (num % i === 0) {
      num = num / i;
      divCount = divCount + 1;
    }

    result = result * divCount + 1;
    i = i + 2;
  }

  // if num odd prime still remains then count it
  if (num > 2) {
    result = result * 2;
  }

  return result;
}

function politeness(n) {
  if (n < 1) throw new Error("Cannot compute politeness of number less than 1");
  return countOddPrimeFactors(n) - 1;
}

module.exports = politeness;
