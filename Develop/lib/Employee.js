class Employee {
    constructor(ID, name, email) {
        this.position = "",
        this.ID = ID,
        this.name = name,
        this.email = email
    }

    getPosition() {
        return this.position;
    }

    getID() {
        return this.ID;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee;