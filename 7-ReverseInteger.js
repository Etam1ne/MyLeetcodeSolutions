/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    if (x > Math.pow(2, 31) || x < -Math.pow(2, 31)) return 0;

    let temp = Math.abs(x).toString().split("").reverse().join("");

    return x > 0 ? temp : -temp;
};

console.log(reverse(-2147483412))