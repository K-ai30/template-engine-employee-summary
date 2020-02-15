const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, title, officeNumber) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.officeNumber = officeNumber;
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

    // Overridden to return 'Manager'
    getRole() {
        return this.title;
    }
}