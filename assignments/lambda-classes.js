// CODE here for your Lambda Classes //

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

// Class Students //
class Student extends Person {
    constructor(personAttributes) {
        super(personAttributes);
        this.previousBackground = personAttributes.previousBackground;
        this.className = personAttributes.className;
        this.favSubjects = personAttributes.favSubjects;
}
   
    listsSubjects() {

        console.log(`Here is a list of ${this.name}'s favorite subjects.`)
        var subArray = [];
        var item = 0;
        subArray = this.favSubjects
        for(item in subArray) {
        console.log(`subject: ${subArray[item]}`);
        
        }
    }

    PRAssignment(student,subject) {

        console.log(`${student} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(student,subject) {

        console.log(`${student} has begun sprint challenge on ${subject}.`);

    }

}

const William = new Student({
    name: 'William',
    location: 'Chicago, IL',
    age: 23,
    previousBackground: 'Design & Photography',
    className: 'Web21',
    favSubjects: ['Graphic Design', 'CSS3', 'Javascript', 'Business']
});

// Class Instructor //
class Instructor extends Person {
    constructor(personAttributes){
        super(personAttributes);
        this.specialty = personAttributes.specialty;
        this.favLanguage = personAttributes.favLanguage; 
        this.catchPhrase = personAttributes.catchPhrase;
    }

    demo(subject) {

        console.log(`Today we are learning about ${subject}.`);

    }

    grade(student,subject) {

        console.log(`${student} receives a perfect score on ${subject}.`);

    }
}
const Dan = new Instructor({
    name: 'Dan Levy',
    location: 'San Francisco, CA',
    age: 32,
    specialty: 'Swimming',
    favLanguage: 'NodeJS',
    catchPhrase: 'Kittens for life'
});

// Class Project Manager //
class ProjectManager extends Person {
    constructor(personAttributes) {
        super(personAttributes);
        this.gradClassName = personAttributes.gradClassName;
        this.favInstructor = personAttributes.favInstructor;
    }

    meetingTime(channel){
        console.log(`${this.name} announce to ${channel}, @channel Zoom Link: Time for daily meetup.`);
    }

    gradeCode(student, subject){
        console.log(`${this.name} graded ${student}'s code on Github, student understands ${subject}.`);
    }
}


const Christian = new ProjectManager({
    name: 'Christian',
    location: 'Ft Lauderdale, FL',
    age: 25,
    gradClassName: 'Web19',
    favInstructor: 'Josh Knell',
});

William.speak();
William.listsSubjects();
William.sprintChallenge(William.name, William.favSubjects[2]);
Dan.demo(William.favSubjects[2]);
Dan.grade(William.name, William.favSubjects[2]);
console.log(Dan.catchPhrase);
Christian.meetingTime(William.className);
Christian.gradeCode(William.name, William.favSubjects[2]);
console.log (`${Dan.name} is ${William.name}'s favorite Instructor.`);