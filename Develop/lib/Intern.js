const Employee = require('./Employee');

class Intern extends Employee {
    constructor(ID, name, email, school) {
        this.position = "Intern",
        this.school = school,
        super(ID, name, email)
    }

    getPosition() {
        return this.position;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;