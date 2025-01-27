// create teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// directors interface extends teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

//creation of an object of type teacher
const Teacher1: Teacher = {
    firstName: "Nour",
    lastName: "Nourmal",
    fullTimeEmployee: true,
    location: "Bordeaux",
    contract: false,
};

// modification of properties and add dynamic property
Teacher1.fullTimeEmployee = false;
Teacher1["departement"] = "French";

console.log(Teacher1);

// print teacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// implementation of printteacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("Nounoush", "Nono"));

// student class constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

// description of student class
interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

// implementation of the student class
class StudentClass implements StudentInterface {
    private firstName: string;
    private lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student: StudentInterface = new StudentClass("Nour", "NChaouch");
console.log(student.workOnHomework());
console.log(student.displayName());
