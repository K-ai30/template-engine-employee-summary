const Employee = require("./employee");

class Intern extends Employee {
    constructor (name, id, title, school) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.school = school;
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

    // Overridden to return 'Intern'
    getRole() {
        return this.title;
    }

    getSchool() {

    }
}