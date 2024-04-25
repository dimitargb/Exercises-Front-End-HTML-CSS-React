// For in method  е предназначен за итериране по ключ.
// Но можем да вземем и стойност по показания по долу начин.
let obj = {
    name: 'Dimitar',
    age: 24
}

for (const key in obj) {
      //console.log(key);
      let value = obj[key];
      //console.log(value);

      console.log(`${key} -> ${value}`);
};

// For off method се използва за итерация на масиви.

for (const elements of Object.entries(obj)) {
    const [key, value] = elements;
    console.log(`${key} -> ${value}`)
    //console.log(elements.join(' -> '));
}