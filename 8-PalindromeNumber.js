console.time()
var isPalindrome = function(x) {
  let xRevesed = x.toString().split("").reverse().join("")
  if (x == xRevesed) return true;
  return false;
}
console.timeEnd()

console.log(isPalindrome(-12321));
