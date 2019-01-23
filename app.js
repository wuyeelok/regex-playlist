const vaxhackerPatterns = {
    dot: /XY..Y/
}

console.log(vaxhackerPatterns.dot.test("XY1Y"))
console.log(vaxhackerPatterns.dot.test("XY12Y"))
console.log(vaxhackerPatterns.dot.test("XY#$Y"))
console.log(vaxhackerPatterns.dot.test("XY Y"))
console.log(vaxhackerPatterns.dot.test("XY  Y"))