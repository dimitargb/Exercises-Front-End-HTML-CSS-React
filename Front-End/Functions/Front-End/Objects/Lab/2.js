function printInfo(obj){

    // { name, area, population, country, postcode }
    // деструктуриране:
    const { name, area, population, country, postcode } = obj;
    //console.log(name);
    for (const elements of Object.entries(obj)) {
        const [key, value] = elements;
        console.log(`${key} -> ${value}`)
        //console.log(elements.join(' -> '));
    }

}
printInfo({name: "Sofia",
area: 492,
population: 1238438,
country: "Bulgaria",
postCode: "1000"})