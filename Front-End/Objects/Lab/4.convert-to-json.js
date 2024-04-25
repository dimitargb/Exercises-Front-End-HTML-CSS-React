function convertToJson(name, lastName, hairColor){
    let obj = {
        name,
        lastName,
        hairColor
    }

    let convertedObj = JSON.stringify(obj);
    console.log(convertedObj);
}

convertToJson('George', 'Jones', 'Brown');

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}