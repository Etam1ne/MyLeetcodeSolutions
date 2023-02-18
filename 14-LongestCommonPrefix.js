let longestCommonPrefix = function(strs) {
    strs.sort((a, b) => a.length - b.length);
    let result = "";
    for (let i = 0; i < strs[0].length; i++) {
        let j = 0;
        for (j; j < (strs.length - 1); j++) {
            if(strs[j][i] !== strs[j + 1][i]) return result;
        }
        result += strs[j][i];
    }
    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))