//toLocaleString() = returns a string with a language sensitive representation
//                                                    of this this number

// number.toLocalString(locale, {options});

// 'locale' = specify that language (undefined = default)
// 'options' = object with formatting options

let myNum = 1500.45

// myNum = myNum.toLocaleString('en-US') // US English
// myNum = myNum.toLocaleString('de-DE') // German
// myNum = myNum.toLocaleString('hi-IN') // Hindi (India)

// myNum = myNum.toLocaleString('lt-LT', { style: 'currency', currency: 'EUR' }) // Lithuanian (Lithuania)

// myNum = myNum.toLocaleString(undefined, { style: 'percent' }) // 150,045%

myNum = myNum.toLocaleString(undefined, { style: 'unit', unit: 'celsius' })

console.log(myNum)
