const projectProtos = {
    getSummary: function() {
        return `${this.title} was made by ${this.members} members and the head of the group was ${this.head},the days spent on the project are ${this.daysSpent} in the year of ${this.year} `;
    },

getAge: function() {
        const years = new Date().getFullYear() -  this.year;
        return `${this.title} is ${years} years old`; 
    }
     
}

// CREATE OBJECT //
/*
const project3 = Object.create(projectProtos);
project3.title =  'Automated Sanatizing Device';
project3.head = 'Ankit Dwivedi';
project3.type = 'Mechanical-Automated';
project3.members = '4';
project3.daysSpent = '40';
project3.year =  '2020';

console.log(project3);
*/

const project3 = Object.create(projectProtos, {
    title: {value: 'Automated Sanatizing Device'},
     head: {value: 'Ankit Dwivedi'},
    type: {value: 'Mechanical-Automated'},
   members: {value: '4'},
    daysSpent: {value: '40'},
    year: {value: '2020'},
});

console.log(project3);
