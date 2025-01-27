// interface student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// creation of 2 student object
const Student1: Student = {
    firstName: "Nour",
    lastName: "Nourmal",
    age: 25,
    location: "Bordeaux",
};

const Student2: Student = {
    firstName: "Robert",
    lastName: "De Niro",
    age: 60,
    location: "San Francisco",
};

// store two student in an array
const studentsList: Student[] = [Student1, Student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

// creation of table headers
const headers = ["First Name", "Location"];
headers.forEach(headerText => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
});

// Append rows for each student
table.appendChild(headerRow);

studentsList.forEach(student => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
});

// Append table to the doc body
document.body.appendChild(table);
