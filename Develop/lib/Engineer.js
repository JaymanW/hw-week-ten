const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(ID, name, email, github) {
        this.position = "Engineer",
        this.github = github,
        super(ID, name, email)
    }

    getPosition() {
        return this.position;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;