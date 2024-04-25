function printSongs(arr){

    let songs = [];
    class Song {
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = arr.shift();
    let typeOfSong = arr.pop();
  
    
    
    for(let i = 0; i < numberOfSongs; i++){
        let[type, name, time] = arr[i].split('_');
        let newSong = new Song(type, name, time);
        songs.push(newSong);
    }  

    if(typeOfSong === 'all'){
        songs.forEach((el)=> console.log(el.name));
    } else {
        let filteredSongs = songs.filter((el) => el.type === typeOfSong);
        filteredSongs.forEach((el)=> console.log(el.name));
    }
    //console.log(songs[0]);
    

   
}
printSongs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);