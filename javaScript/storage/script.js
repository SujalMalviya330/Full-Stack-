const data = [
  {
    name1: "sujal",
    age: 20,
    course:"cse",
    gender: "male",
    study:[{projectname:"Cravings", timeline:2, role:"frond-end"}],
  },
  
//   {
//     name3: "sagar",
//     age: 20,
//     course:"mech",
//     gender: "male",
//     study:[{projectname:"newOne", timeline:6, role:"ppt"}],
//   },
  
];

const dataReadyToStore = JSON.stringify(data);

localStorage.setItem("myNewData", dataReadyToStore);
localStorage.setItem("myName", "RohitKushwah");
localStorage.setItem("your name","sujal")

const getLSData = localStorage.getItem("myNewData");
localStorage.removeItem("your")

document.querySelector("body").appendChild((document.createElement("div").innerText =getLSData));