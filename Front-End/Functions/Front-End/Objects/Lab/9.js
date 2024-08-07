function printSongs(arr) {
    class Song {
      constructor(type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time;
      }
    }
  
    let songs = [];
    let numberOfSongs = arr.shift();
    let typeOfSongs = arr.pop();
    
  
    for (let i = 0; i < numberOfSongs; i++) {
      let [type, name, time] = arr[i].split("_");
      let song = new Song(type, name, time);
      songs.push(song);
    }
  
    if (typeOfSongs === "all") {
      songs.forEach((el) => console.log(el.name));
    } else {
      let filtered = songs.filter((el) => el.type === typeOfSongs);
      filtered.forEach((el) => console.log(el.name));
    }
}
printSongs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])