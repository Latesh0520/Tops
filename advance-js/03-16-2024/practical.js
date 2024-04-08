
let school = [
    {
      name: "student-1",
      markSheet: [
        { subject: "hindi", marks: 58 },
        { subject: "english", marks: 85 },
        { subject: "maths", marks: 82 },
      ],
    },
    {
      name: "student-2",
      markSheet: [
        { subject: "hindi", marks: 88 },
        { subject: "english", marks: 91 },
        { subject: "maths", marks: 88 },
      ],
    },
    {
      name: "student-3",
      markSheet: [
        { subject: "hindi", marks: 77 },
        { subject: "english", marks: 65 },
        { subject: "maths", marks: 66 },
      ],
    },
  ];
  

function getFirstStudent(){
    let studentData = school.map((e,i)=>{        
        total = 0;
        e.markSheet.forEach((e)=>{
            total += e.marks;
        })    
        e.percentage = total / e.markSheet.length;
        return e;
    })
    // console.log(studentData)
    studentData.sort((s1,s2)=> s2.percentage - s1.percentage)
    
    let gettopper = studentData.slice(0,1);
    return gettopper[0].name;
}
console.log("🚀 ~ getFirstStudent():", getFirstStudent())

