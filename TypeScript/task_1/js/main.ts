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
