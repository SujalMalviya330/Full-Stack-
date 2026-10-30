const students =[{
    name:"sujal",
    class:"4th",
    branch:"Data Science",
    course:"b.tech",
    project:[{project:"abc", timeLine:2, role:"df"}],
},
{
    name:"rohit",
    class:"4th",
    branch:"computer Science",
    course:"b.tech",
    project:[{project:"abc", timeLine:2, role:"df"},
             {project:"rtu", timeLine:3, role:"bn"},
    ],
},
{
    name:"raja",
    class:"4th",
    branch:"computer Science",
    course:"b.tech",
    project:[{project:"abc", timeLine:2, role:"df"},
             {project:"rtu", timeLine:3, role:"bn"},
    ],
},
]

students[0].class="5th";
students[0].project.timeLine=200;
students[1].project[1].timeLine=1000;

console.log(students);

students.forEach((students) => {
  console.log(students);
});

// JSON to String
const a =JSON.stringify(students);
console.log(a);

// uses of Literal 
var name = "sujal";
var mark = "99.99%";

console.log(`my name is ${name} and my marks ${mark}`);


