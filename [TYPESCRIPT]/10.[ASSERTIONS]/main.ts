// assertions is when we dont know the type of a variable and we want to tell the compiler what type it is

const inputElement = document.querySelector('input')
const value1 = (inputElement as HTMLInputElement).value
const value2 = (<HTMLInputElement>inputElement).value
