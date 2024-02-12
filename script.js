// loop through all numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    
    // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz.")
    }
    // If a number is divisible by 3, log “Fizz.”
    else if (i % 3 == 0) {
        console.log("Fizz.")
        continue;
    }
    // If a number is divisible by 5, log “Buzz.”
    else if (i % 5 == 0) {
        console.log("Buzz.")
        continue;
    }

    console.log(i)
}

