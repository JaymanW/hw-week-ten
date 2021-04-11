const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(ID, name, email, github) {
        super(ID, name, email),
        this.position = "Engineer",
        this.github = github
    }

    getPosition() {
        return this.position;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;