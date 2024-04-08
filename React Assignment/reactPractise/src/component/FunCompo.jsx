let data = [
    {
        name:  'Latesh',
        age: 22
    },
    ,{
        name:  'Nayan',
        age: 25
    },
    {
        name:  'Urvish',
        age: 22
    },
];
export default function FunCompo(){
    return (
        <div>
            {
            data.map((e) => {
              return (
                  <p>My name is {e.name}, age is {e.age}</p>
                  );
                })
            }
        </div>
    );
}