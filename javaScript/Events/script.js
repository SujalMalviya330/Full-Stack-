function ShowAlert(){
    alert("hii i am sujal")
}

document.getElementById("clickButton").addEventListener("click", ShowAlert2);

function ShowAlert2(){
    alert("hii i am sujal by js")
}

// document.getElementById("box").addEventListener("click", () => {
//     document.getElementById("box").innerText = "This box was click";
// })

document.getElementById("box").addEventListener("click",()=> {
    document.getElementById("box").innerText ="the box is clicked"
})

//mouse 
document.getElementById("paragraph").addEventListener("mousedown",()=>{
    document.getElementById("paragraph").innerText="mouse button pressed"
})

document.getElementById("double").addEventListener("dblclick",() => {
    document.getElementById("double").innerText="you double-clicked this paragraph"
})

document.getElementById("move").addEventListener("mousemove",() =>{
    document.getElementById("move").innerText="mouse pointer is moveing over this text"
})

// ------------------------------

document.getElementById("nameSubmit").addEventListener("click", () =>{
    console.log(document.getElementById("fullName").value.trim());
    
});

document.getElementById("fullName").addEventListener("keydown", (e) => {
  e.key === "Enter" &&
    console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("LoginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Login Done");
});

