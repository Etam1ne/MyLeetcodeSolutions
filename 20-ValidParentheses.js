/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {

    const store = [];
    const parantheses = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    for (let i = 0; i < s.length; i++) { 
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") store.push(s[i]);
        else if (parantheses[store.pop()] !== s[i]) return false;
    }

    return store.length === 0;
};

console.log(isValid("()[]{}"))