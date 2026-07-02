//Given a number n, determine whether it is a prime number or not.
let n: number = 7; //change the input here and check if 25 and 1 are prime numbers
let isPrime: boolean = true;

if (n <= 1) {
  isPrime = false;
} else {
  for (let i: number = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(isPrime);
