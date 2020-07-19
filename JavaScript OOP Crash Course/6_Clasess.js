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
        return `${this.title} was made by ${this.members} members and the head of the group was ${this.head},the days spent on the project are ${this.daysSpent} in the year of ${this.year} `;
    }

    getAge() {
        const years = new Date().getFullYear() -  this.year;
        return `${this.title} is ${years} years old`; 
    }

    revise(moreDaysSpent) {
            this.daysSpent = moreDaysSpent;
            this.revised = true;
    }

    static topProject(){
        return 'Automated Sanitizing Device';
    }
}

// INSTANTIATE AN OBJECT //
const project4 = new Project('Micro-QuadCopter', 'Sourav Mahato', 'Mechanical-Automated', '3', '150', '2017');

/*
console.log(project4);
project4.revise('170');
console.log(project4);
*/

console.log(Project.topProject());

