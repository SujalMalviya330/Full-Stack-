const From1  = document.getElementById("from1");

From1.addEventListener("submit", (e) =>{
    e.preventDefault();
    const formData = new FormData(From1);
//      if (FormData.get("input")==="@") {
//     document.getElementById("inputError").innerText =
//       "input Must Contain error";
//   }
    const nm = formData.get("fullName");

    let isValid = true;
  

    for(var i=0 ; i<nm.length ; i++){
        if((nm.charAt(i)>="A" && nm.charAt(i)<="Z") || (nm.charAt(i)>="a" && nm.charAt(i)<="z") || nm.charAt(i)===" "){
            isValid=true;
        }
        else{
            isValid=false;
            break;
        }
    }

    
    console.log(isValid ? "Valid" : "InValide");

    
    
})