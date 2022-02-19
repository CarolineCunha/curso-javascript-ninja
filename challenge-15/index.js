function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function getFullName(){
        return this.name + ' ' + this.lastName;
    };
    this.getAge = function getAge(){
        return this.age;
    }
    this.addAge = function addAge(){
        this.age += arguments[0];
        return this;
    }
}

var carol = new Person('Carol', 'Batista', 28);
var maria = new Person('Maria', 'Silva', 30);
console.log(carol.getFullName());
console.log(carol.getFullName() + 'tem ' + carol.getAge() + ' anos');
carol.addAge(1).getAge();
