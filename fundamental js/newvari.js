
// variable
function add()
{

    {
        let num=100;
        num=20+30
        console.log(num);
    }

    {
      const rollNumber=12;
      console.log(rollNumber);
    }

    {
        var lastName="Nikam";
    }

    {
        console.log(lastName);
    }
}
add();

// datatypes Premitive

let rollNo=234;
let firstName="Poonam";
let lastName='Nikam';

console.log(rollNo);
let mySelf=`My name is ${firstName} ${lastName}`;

console.log(mySelf);

let ispassed=35;
console.log(ispassed);
// undefined

let num=null;
console.log(num);
// null

let passed=true;
console.log(passed);
// boolean


// non-premetive:object

let student={
    firstName:"Poonam",
    middleName:"Manoj",
    lastName:"Nikam",
    rollNo:2,
    result:"passed",
    ispassed:"true"
}

console.log(student);

// array

let colors =["Red","Blue","Pink","Orange","Black","Skyblue"]

console.log(colors);

// operator

// unary

let a=20;
// let b=a++;
let b=++a;
console.log(b);

// binary

// addition opretor

let maths=60;
let eng=50;
let marathi=80;
let result=maths+eng+marathi;
console.log(`Addition of three subject:`+result);

// multiplication opretor

let val=6;
let val1=453;
let val3=val1*val;
console.log(`Multiply of three value:`+val3);

// and
let marks=65;
let marks1=45;
let marks3=marks>35&&marks<35;
console.log(marks3);

let userName="sam";
let password=1234;
let login=userName=="sam" && password==1234;
console.log(login);

// or
let value=120;
let value1=306;
let value3=value>100||value1>=400;
console.log(value3);

// not
let tax=3400;
let ab=tax!=3400;
console.log(ab);

// ternary
let sales=3500;
let res=sales<3000 ?"applicable" :"not applicable";

console.log(`The employ is ` +res);









