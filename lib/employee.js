class Employee {
    constructor (name, id, title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    // Returns 'Employee'
    getRole() {
        return this.title;
    }
}

module.exports = Employee;