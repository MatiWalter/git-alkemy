const cities = [
  {
    name: 'Argentina'
  },
  {
    name: 'Brasil'
  },
  {
    name: 'Chile'
  }
]

// Metodo para invertir un string
const reverseString = (string) => {
  return string.split('').reverse('').join('');
}

cities.map((city) => reverseString(city.name));
