function heroInfo(arr){

    const heroes = arr.map((el)=>{
        const[heroName, heroLevel, items] = el.split(' / ');
        return {heroName, heroLevel:Number(heroLevel), items};
    })
    .sort((a, b) => a.heroLevel - b.heroLevel)
    .forEach((el)=> console.log(`Hero: ${el.heroName}\nlevel => ${el.heroLevel}\nitems => ${el.items}`));
}

heroInfo([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])