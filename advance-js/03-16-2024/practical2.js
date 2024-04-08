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


function getTopperStudentBySubject(sub) {
    let studentbysub;
    let student = school.map((e, i) => {        
        marksdata =  e.markSheet.filter((e)=>{
            return e.subject == sub ? e.marks : 0;
        })        
        studentbysub = {name: e.name,mark:marksdata[0].marks};
        return studentbysub;
    })
    student.sort((s1,s2)=> s2.mark - s1.mark);
    let studentTopperBySub = student.slice(0,1);
    return studentTopperBySub[0].name;
    
}
console.log("🚀 ~ getTopperStudentBySubject('hindi'):", getTopperStudentBySubject("hindi"))
