function trackParkedCars(arr){
    let paringLot = [];

    for (const car of arr) {
        let [direction, carNumber] = car.split(', ');
        
        if(direction === 'IN' && !paringLot.includes(carNumber)){
            paringLot.push(carNumber);
        }
        else if(direction === 'OUT'&& paringLot.includes(carNumber)){
            let index = paringLot.indexOf(carNumber)
            paringLot.splice(index, 1);
        }
    }

    if(paringLot.length <= 0){
        console.log(`Parking Lot is Empty`);
    } else {
        let sorted = paringLot.sort((a, b) => a.localeCompare(b));
        
        for (const cars of sorted) {
            console.log(cars);
        }
    }
}

trackParkedCars(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

trackParkedCars(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])