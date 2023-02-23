/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function(x) {
    if (x < 2) return x;
    let result = 0;
    let start = 1;
    let end = x / 2;

    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let sqr = mid * mid;
        
        if (sqr == x) return mid;
        else if (sqr < x) { 
            start = mid + 1; 
            result = mid;
        }
        else end = mid - 1;
    }

    return result;
};

console.log(mySqrt(8));