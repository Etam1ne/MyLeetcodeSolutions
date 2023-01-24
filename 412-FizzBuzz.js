let fizzBuzz = function(n) {
    let result = [];
    let current = "";

    for (let i = 1; i <= n; i++) {

        current = "";

        if (i % 3 === 0) current += "Fizz";
        if (i % 5 === 0) current += "Buzz";
        if (current === "") current += i;

        result.push(current);
    }

    return result;
};

console.log(fizzBuzz(15));