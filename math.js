const numbers = [2,4,6,8,10,12,14];
const suma = (acc, cv) => acc + cv;
numbers.reduce(suma);

const resta = (acc, cv) => acc - cv;
numbers.reduce(resta);

const multiplicar = (acc, cv) => acc * cv;
numbers.reduce(multiplicar);

const exp = (n) => {
  return numbers.map((number)=> number ** n);
}

let a =9
let b =12
let c = a+b
console.log(c)

