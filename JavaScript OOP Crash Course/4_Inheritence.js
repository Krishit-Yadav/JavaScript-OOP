// Constructor //
function Project(title, head, type, members, daysSpent, year) {
    this.title = title;
    this.head = head;
    this.type = type;
    this.members = members;
    this.daysSpent = daysSpent;
    this.year = year;

}

// getSummary Prototype //
Project.prototype.getSummary = function() {
    return `${this.title} was made by only ${this.members} members and the head was ${this.head},the days spent on the project are ${this.daysSpent} in the year of ${this.year} `;
};

// PATENT CONSTRUCTOR//
function Patent(title, head, type, members, daysSpent, year, institution) {
    Project.call(this, title, head, type, members, daysSpent, year);
    this.institution = institution;
};

// INHERIT PROTOTYPE //
Patent.prototype = Object.create(Project.prototype);

// INSTANTIATE MAGZINE OBJECT //
const patent1 = new Patent('80% Efficient IC Engine', 'Ranchod Das', 'Automobile', '1', '120', '2019', 'IIT,Kharagpur');


// console.log(patent1);

//console.log(patent1.getSummary());

Patent.prototype.constructor = Patent;
console.log(patent1);
