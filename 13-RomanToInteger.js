let romanToInt = function(s) {
    let result = 0;

    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let i = 0; i < s.length; i++) {
        let prev = roman[s[i]];
        let next = roman[s[i + 1]];

        if (prev < next) {
            result += next - prev;
            i++;
        }
        else {
            result += prev;
        }
    }

    return result;
};

console.log(romanToInt("MCMXCIV"));