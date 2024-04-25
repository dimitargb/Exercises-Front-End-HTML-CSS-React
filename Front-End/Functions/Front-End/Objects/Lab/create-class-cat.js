function createCat(arr){

   
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        };
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let catInfo of arr){
        let[name, age] = catInfo.split(' ');
        
        let newCat = new Cat(name,age);
        newCat.meow();
    }   
}
createCat(['Candy 1', 'Poppy 3', 'Nyx 2'])