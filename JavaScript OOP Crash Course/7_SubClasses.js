class Project {
    constructor(title, head, type, members, daysSpent, year) {
        this.title = title;
        this.head = head;
        this.type = type;
        this.members = members;
        this.daysSpent = daysSpent;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was made by ${this.members} members and the head was ${this.head} of ${this.institution},the days spent on the project are ${this.daysSpent} in the year of ${this.year} `;
    }

}

// PATENT SUB-CLASS //
class Patent extends Project {
    constructor(title, head, type, members, daysSpent, year, institution) {
        super(title, head, type, members, daysSpent, year);
        this.institution = institution;

    }
}

// INSTANTIATE PATENT //
const patent2 = new Patent('Variable Fuel IC Engine', 'Raju Rastogi', 'Automotive', '2', '365', '2015', 'IIT Bombay');

console.log(patent2);
console.log(patent2.getSummary());

