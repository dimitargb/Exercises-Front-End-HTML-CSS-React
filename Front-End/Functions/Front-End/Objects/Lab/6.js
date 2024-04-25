function schedule(arr) {
  const meetings = {};

  for (const element of arr) {
    const [day, name] = element.split(" ");

    if (!meetings.hasOwnProperty(day)) {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }

//   for (const key in meetings) {
//     console.log(`${key} -> ${meetings[key]}`);
//   }

  for(const entry of Object.entries(meetings)){

    const [day, name] = entry;

    console.log(`${day} -> ${name}`)
  }
}
schedule([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
