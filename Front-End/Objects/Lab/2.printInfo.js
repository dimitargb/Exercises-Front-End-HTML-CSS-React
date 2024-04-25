let printObject = (obj) => {

    for(let  entry of Object.entries(obj)){
        let[key, value] = entry;
        console.log(`${key} -> ${value}`);
    }
}

printObject({name: "Plovdiv",
area: 389,
population: 1162358,
country: "Bulgaria",
postCode: "4000"})