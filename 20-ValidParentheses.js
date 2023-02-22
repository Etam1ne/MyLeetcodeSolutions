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
    // const Parantheses = [["(", "{", "["],
    //                      [")", "}", "]"]];
    // let currentParantheses = Parantheses[0].indexOf(s[0]);

    // for (let i = 1; i < s.length; i++) {
    //     if (currentParantheses !== Parantheses[1].indexOf(s[i])) return false;
    //     currentParantheses = Parantheses[0].indexOf(s[i])
    // }
    // return true;
};

console.log(isValid("()[]{}"))