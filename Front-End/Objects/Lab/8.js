function printCats(arr){

    let cats = [];
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(const element of arr){
        const[name, age] = element.split(' ');
        const newCat = new Cat(name, age)
        cats.push(newCat);
        newCat.meow();  
    }
    //console.log(cats[0]);

}
printCats(['Mellow 2', 'Tom 5'])