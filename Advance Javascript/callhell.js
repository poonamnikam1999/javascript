// callback hell :

// let student={
//     firstName:"pooja",
//     middleName:"kisan",
//     lastName:"more"
// }
// let fName;
// let mName;
// let lName;

// function fullName(){
//     setTimeout(()=>{
//         fName=student.firstName

//         setTimeout(()=>{
//             mName=student.middleName

//             setTimeout(()=>{
//                 lName=student.lastName
//                 console.log(fName,mName,lName)
//             },4000)
//         },2000)
//     },3000)
// }
// fullName()


// eg 2)

// let marks={
//     maths:80,
//     hindi:60,
//     english:70,
//     marathi:85,
//     history:70
// }
// let mat;
// let hin;
// let eng;
// let mara;
// let his;

// function result(){
//   setTimeout(()=>{
//     mat=marks.maths

//     setTimeout(()=>{
//         hin=marks.hindi

//         setTimeout(()=>{
//             eng=marks.english

//             setTimeout(()=>{
//                 mara=marks.marathi

//                 setTimeout(()=>{
//                     his=marks.history
//                     console.log("Result :",(mat+hin+eng+mara+his)/5);
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
//   },2000)
// }
// result()

// eg 3)

// let info={
//     customerName:"pooja more",
//     qualification:"Msc",
//     aadharCard:"3456 8768 7654",
//     DOB:"12 april 1999",
// }

// let cust;
// let quali;
// let aadhar;
// let date;

// function data(){
//     setTimeout(()=>{
//       cust=info.customerName
//       console.log("Customername :",cust);
//     },2000)

//     setTimeout(()=>{
//      quali=info.qualification
//      console.log("Qualification :",quali);
//     },3000)

//     setTimeout(()=>{
//        aadhar=info.aadharCard
//        console.log("Aadharcard Number :",aadhar) ;
//     },4000)

//     setTimeout(()=>{
//         date=info.DOB
//         console.log("Date Of Birth :",date)
//     },5000)
// }
// data()


let student={
    fullName:"pooja more",
    fatherName:"kisan",
    motherName:"anita",
    rollNo :"12",
    std :"10th",
    sscSeatno :"X012345",

}
let full;
let father;
let mother;
let roll;
let stand;
let ssc;

function information(){
    setTimeout(()=>{
        full=student.fullName
        console.log("Student Name :",full);
    },2000)

    setTimeout(()=>{
        father=student.fatherName
        console.log("Father's Name :",father);
    },3000)

    setTimeout(()=>{
        mother=student.motherName
        console.log("Mother's Name :",mother);
    },4000)

    setTimeout(()=>{
        roll=student.rollNo
        console.log("Roll Number :",roll);
    },5000)

    setTimeout(()=>{
        stand=student.std
        console.log("Standard :",stand);
    },6000)

    setTimeout(()=>{
        ssc=student.sscSeatno
        console.log("Seat Number :",ssc);
    },7000)
}
information()