const vaxhackerPatterns = {
    dot: /(XY..Y)/,
    bracket: /[\^A-Z]+/,
    complex1: /:.*:/,
    oneOrMore: /([aeiou])\1/i
}

/*
console.log(vaxhackerPatterns.dot.test("XY1Y"))
console.log(vaxhackerPatterns.dot.test("XY12Y"))
console.log(vaxhackerPatterns.dot.test("XY#$Y"))
console.log(vaxhackerPatterns.dot.test("XY Y"))
console.log(vaxhackerPatterns.dot.test("XY  Y"))
*/

const find = vaxhackerPatterns.complex1.exec(":asdfas:d:")

console.log((vaxhackerPatterns.bracket.exec("CAT")))
console.log(vaxhackerPatterns.bracket.exec("   BBT").toString())
console.log(vaxhackerPatterns.bracket.exec("^"))
console.log(find.toString())
console.log(vaxhackerPatterns.oneOrMore.exec("bee"))
console.log(vaxhackerPatterns.oneOrMore.exec("ae"))