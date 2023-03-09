/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function(s, t) {
    if (convertString(s) === convertString(t)) return true;

    return false;
};

/**
 * @param {string} string
 * @return {string} 
 */

function convertString(string) {
    const chars = new Set();
    for (let i = 0; i < string.length; i++) {
        chars.add(string[i])
    }

    let i = 1;
    for (const letter of chars.values()) {
        string = string.replaceAll(letter, i)
        i++;
    }
    return string;
}

console.log(isIsomorphic("xdd", "dxx")) // Very slow solution