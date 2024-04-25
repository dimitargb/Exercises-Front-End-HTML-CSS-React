const person = {
    name: 'Dimi',
    age: 51,
    occupatuion: 'Web Developer'
};

for(const properties in person){
    console.log(person[properties]);
}