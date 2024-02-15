const studentDetail = () =>{
    student_Obj = {
        name : 'Latesh',
        age: 22,
        address: 'Dindoli, Surat',
        education: {
            '10th':{
                percentage:78.00,
                school_collage_name:'Sheth V K Shah Vidymandir Shahada',
                passing_year:2017
            },
            '12th':{
                percentage:67.00,
                school_collage_name:'Kai sau G F patil jr college, shahada',
                passing_year:2019
            },
            'bvoc':{
                percentage:7,
                school_collage_name:'R N G Patel Institute of techonlogy',
                passing_year:2022
            }
        }
    }
    return student_Obj;
}

let {name,age,education} = studentDetail();
// console.log("🚀 ~ education:", education)
// console.log("🚀 ~ age:", age)
// console.log("🚀 ~ name:", name)

// ===========================================================================================

const returnArr = () =>{
    return [100,200,900];
}
let [a,c,b] = returnArr();
console.log("🚀 ~ a:", a)
console.log("🚀 ~ c:", c)
console.log("🚀 ~ b:", b)
