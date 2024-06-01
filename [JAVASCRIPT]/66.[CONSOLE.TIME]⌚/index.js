// console.time() = Start a timer you can use to
//                  track how long an operation takes
//                  Give each timer a unique name.

// start
console.time('Response Time')

alert('CLICK OK TO CONTINUE')
setTimeout(() => console.log('Hello World!'), 3000)

// end
console.timeEnd('Response Time')
