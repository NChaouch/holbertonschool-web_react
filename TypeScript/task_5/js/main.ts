// creation interface of major and minor
interface MajorCredits {
    credits: number;
    brand: "Major";
}

interface MinorCredits {
    credits: number;
    brand: "Minor";
}

// fucntion sum crdits of major and minor
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits, brand: "Major" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits, brand: "Minor" };
}

// examples
const major1: MajorCredits = { credits: 10, brand: "Major" };
const major2: MajorCredits = { credits: 15, brand: "Major" };

const minor1: MinorCredits = { credits: 9, brand: "Minor" };
const minor2: MinorCredits = { credits: 3, brand: "Minor" };

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2)); 
