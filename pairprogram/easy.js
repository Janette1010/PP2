/* EASY (1) */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


let isOdd = (n => n % 2); // % = mod/remainder
let odd = arr.filter(isOdd);

let isEven = n => n % 2 == 0;
let even = arr.filter(isEven);

let number = {
    odd,
    even,
} //obj literal: explicitly stating the keys and values


console.log(`numbers`, number);



/* EASY (2) */
function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false
            }
        } return true;
    }
}
let isPrime = checkPrime(5); console.log(isPrime); // let isAlsoPrime=arr.filter(checkPrime) //
//console.log(isAlsoPrime)