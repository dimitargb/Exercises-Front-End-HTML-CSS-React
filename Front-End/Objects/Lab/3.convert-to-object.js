// function convertToObject(string){

//     const result = JSON.parse(string);
    
//     for(let element of Object.entries(result)){
//         const[key, value] = element;

//         console.log(`${key}: ${value}`);
        
//     }

// }
// convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')

// Second solution => arrow Function

const convertToObject = (string) => {
    const result = JSON.parse(string);

    Object.entries(result).forEach((element) => {
     //console.log(element);
       const key = element[0];
       const value = element[1];

       console.log(`${key}: ${value}`);
    });

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')