class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email= email;
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        //returns Employee
        return "employee"
    }
}

module.exports = Employee;