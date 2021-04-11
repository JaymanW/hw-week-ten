const Employee = require('./Employee');

class Manager extends Employee {
    constructor(ID, name, email, officeNum) {
        super(ID, name, email),
        this.position = "Manager",
        this.officeNum = officeNum
    }

    getPosition() {
        return this.position;
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;