function meetingsSchedule(arr){

    const meetings = {};

    for(const entry of arr){
        const[weekDay, name] = entry.split(' ');

        if(!meetings.hasOwnProperty(weekDay)){
            meetings[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        } else {
            console.log(`Conflict on ${weekDay}!`);
        } 
        
    }

    for(const meeting in meetings){
        console.log(`${meeting} -> ${meetings[meeting]}`);
    }
    //console.log(meetings);
}

meetingsSchedule(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])