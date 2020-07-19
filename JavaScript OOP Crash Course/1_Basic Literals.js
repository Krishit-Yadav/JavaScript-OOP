// const s = 'Hello';
// console.log(s.toUpperCase());

/*
// STRING //
const s1 = 'Hello';
console.log(typeof s1);

// OBJECT //
const s2 = new String('Hello');
console.log(typeof s2);
*/

/*
console.log(window);
alert(123);
*/
// console.log(navigator.appVersion);

// OBJECT LITERALS //
const project1 = {
    title: 'Hydraulic Arm',
    head: 'Suraj Kanojiya',
    type: 'Mechanical-Manually',
    members: '5',
    daysSpent: '60',
    year: '2016',

    getSummary: function() {
        return `${this.title} was made by ${this.members} members and the head of the group was ${this.head},the days spent on the project are ${this.daysSpent} in the year of ${this.year} `;
    }
};

/*
console.log(project1.title);
console.log(project1.getSummary());
*/

const project2 = {
    title: 'Artificial Breathing Ventilator',
    head: 'Sudeep Jana',
    type: 'Mechanical-Automated',
    members: '8', 
    daysSpent: '80',
    year: '2020',

    getSummary: function() {
        return `${this.title} was made by ${this.members} members and the head of the group was ${this.head},the days spent on the project are ${this.daysSpent} in the year of ${this.year} `;
    }
};

// console.log(project2.getSummary());

// console.log(Object.values(project2));
// console.log(Object.keys(project2));