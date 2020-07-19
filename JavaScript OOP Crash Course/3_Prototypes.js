// Constructor //
function Project(title, head, type, members, daysSpent, year) {
    // console.log('Project Initialized....');
    this.title = title;
    this.head = head;
    this.type = type;
    this.members = members;
    this.daysSpent = daysSpent;
    this.year = year;

}

// getSummary Prototype //
Project.prototype.getSummary = function() {
    return `${this.title} was made by ${this.members} members and the head of the group was ${this.head},the days spent on the project are ${this.daysSpent} in the year of ${this.year} `;
};

// getAgeOfProject Prototype //
Project.prototype.getAge = function() {
    const years = new Date().getFullYear() -  this.year;
    return `${this.title} is ${years} years old`; 
};
 
// Revised Edition / Changed Year //
Project.prototype.revise = function(moreDaysSpent) {
    this.daysSpent = moreDaysSpent;
    this.revised = true;
};
 
// Instatiating an Object // 

const project1 = new Project('Hydraulic Arm', 'Suraj Kanojiya',     'Mechanical-Manually', '5', '60', '2016');
const project2 = new Project('Artificial Breathing Ventilator', 'Sudeep Jana', 'Mechanical-Automated', '8', '80', '2020'); 

// console.log(project1.title);
// console.log(project1);
// console.log(project1.getSummary());
// console.log(project2.getSummary()); 
// console.log(project1.getAge());

console.log(project1);

project1.revise('75');
console.log(project1);
