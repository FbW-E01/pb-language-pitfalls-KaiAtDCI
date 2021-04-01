// 1
const s = "hello";
// 1.1
console.log(`(1.1): typeof %s => %s`, s, typeof string);
// Answer: No (undefined)
// 1.2
console.log(`(1.2): (%s === NaN) => `,s, s === NaN);
// Answer: No, comparision with NaN always results in false!
// 1.3
console.log(`(1.3): typeof NaN => `, typeof NaN);
// Answer: JS sees NaN as a number

// 2
let n = 0.1 * 0.2;
console.log(`(2): Math.round(%f * 100) / 100 => %f`, n, Math.round(n * 100) / 100);

// 3
console.log(`(3.1): Infinity / 0 =>`, Infinity / 0);
console.log(`(3.2): Infinity / Infinity => %f`, Infinity / Infinity);
console.log(`(3.3): 1 / 0 => %f`, 1 / 0);