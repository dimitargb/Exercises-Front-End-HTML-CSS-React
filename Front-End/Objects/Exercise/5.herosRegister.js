function heroRegister(arr){

    let heroes = [];

    for(let elements of arr){
        const [name, level, items] = elements.split(' / ');
         const hero =  {
            name,
             level: Number(level),
             items,
         }

         heroes.push(hero);
    }

    const sorted = heroes.sort((a, b)=> a.level - b.level);
    
    for( let el of sorted){
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    }

}
heroRegister([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ])