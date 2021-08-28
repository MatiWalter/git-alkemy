const numeros = [1,2,3,4,5,6,7,8,9,10];
const sum = (acc, cv) => acc + cv;
numeros.reduce(sum);

const sub = (acc, cv) => acc - cv;
numeros.reduce(sub);

const power = (acc, cv) => acc * cv;
numeros.reduce(power);

const exp = (n) => {
  return n.map((number)=> number ** n);
}

const n = [312,32,643,78,69,45,97];
n.reduce(sub);
n.reduce(sum);
n.reduce(power);

console.log(exp(n));
