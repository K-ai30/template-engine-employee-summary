const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, title, github) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.github = github;
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

    // Overridden to return 'Engineer'
    getRole() {
        return this.title;
    }

    getGithub() {

    }
}