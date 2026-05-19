function countPrimeNumbers(){
    let count = 0;

    for (let i = 2; i <= 100; i++) {
        let isPrime = true;

        // Check if i is divible be an other number
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        // If the number is prime
        if (isPrime) {
            count++;
        }
    }

    return count
}

// Start chrono
const start = performance.now();

// setTimeout do most of the calculation at the end of the execution stack
setTimeout (() => {
    for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
    }
}, 0);


// End chrono
const end = performance.now();

// total time
const timeUsed = end -start;

console.log ("Execution time of calculating prime numbers 100 times was " + timeUsed + " milliseconds.");
