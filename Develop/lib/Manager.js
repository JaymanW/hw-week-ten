const Employee = require('./Employee');

class Manager extends Employee {
    constructor(ID, name, email, officeNum) {
        this.position = "Manager",
        this.officeNum = school,
        super(ID, name, email)
    }

    getPosition() {
        return this.position;
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;