const vaxhackerPatterns = {
    dot: /XY..Y/,
    bracket: /[ABC][AT]T/
}

/*
console.log(vaxhackerPatterns.dot.test("XY1Y"))
console.log(vaxhackerPatterns.dot.test("XY12Y"))
console.log(vaxhackerPatterns.dot.test("XY#$Y"))
console.log(vaxhackerPatterns.dot.test("XY Y"))
console.log(vaxhackerPatterns.dot.test("XY  Y"))
*/

console.log(vaxhackerPatterns.bracket.test("CAT"))
console.log(vaxhackerPatterns.bracket.test("BBT"))