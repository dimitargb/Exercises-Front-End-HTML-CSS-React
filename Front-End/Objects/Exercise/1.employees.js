function employeesList(arr){
    let list = {};

    for (const employee of arr) {
        //const [name, personalNumber] = employee.split(',');
        
        let personalNumber = employee.length;
        let name = employee;

        list[name]=personalNumber
        
    }
    
    for (const employee in list) {
        console.log(`Name: ${employee} -- Personal Number: ${list[employee]}`);
            // "Name: {employeeName} -- Personal Number: {personalNum}" 
        }
    }

employeesList([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])