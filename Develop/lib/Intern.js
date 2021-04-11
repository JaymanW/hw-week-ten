const Employee = require('./Employee');

class Intern extends Employee {
    constructor(ID, name, email, school) {
        super(ID, name, email),
        this.position = "Intern",
        this.school = school
        
    }

    getPosition() {
        return this.position;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;