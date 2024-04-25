function calculateWagons(arr) {
  let waognsWithPassengers = arr.shift().split(" ").map(Number);
  const maxCapacity = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let currentRow = arr[i].split(" ");

    if (currentRow[0] === "Add") {
      let newWagonsWithPassenger = Number(currentRow[1]);
      waognsWithPassengers.push(newWagonsWithPassenger);
    } else {
      for (let k = 0; k < waognsWithPassengers.length; k++) {
        let passenegrsInCurrentwagon = waognsWithPassengers[k];
        if (passenegrsInCurrentwagon + Number(currentRow[0]) <= maxCapacity) {
          waognsWithPassengers[k] += Number(currentRow[0]);
          break;
        }
      }
    }
  }

  console.log(waognsWithPassengers.join(" "));
}
calculateWagons([
  "32 54 21 12 4 0 23",
  "75",
  "Add 10",
  "Add 0",
  "30",
  "10",
  "75",
]);
