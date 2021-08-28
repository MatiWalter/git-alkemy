const numbers = [1,2,3,4,5,6,7,8,9,10];
const suma = (acc, cv) => acc + cv;
numbers.reduce(suma);

const resta = (acc, cv) => acc - cv;
numbers.reduce(resta);

const exp = (n) => {
  return numbers.map((number)=> number ** n);
}