// const = a variable that can't be changed

const PI = 3.14159
let radius
let circumference

radius = window.prompt('Enter the radius of the circle: ')
radius = Number(radius)

circumference = 2 * PI * radius

console.log('The circumference of the circle is', circumference)
