const studentForm = document.getElementById("StudentForm");

studentForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const formData = new FormData(StudentForm);
    const user = formData.get("userName");
    const email = formData.get("email");
    const phone = formData.get("phoneNo");


    
    // console.log(/^[A-Za-z1-9]{4,10}$/.test(nm) ? "valid" : "inValid");
    // console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "valid" : "inValid");
    // console.log(/^[0-9]{10}$/.test(phone) ? "valid" : "inValid");

    const userPettern = /^[A-Za-z ]+$/;
    const emailPettern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePettern = /^[0-9]{10}$/;

    const isUserValid = userPettern.test(user);
    const isEmailValid = emailPettern.test(email);
    const isPhoneValid = phonePettern.test(phone);

    if(isUserValid){
        console.log("User name is valid");
    }else{
        console.log("User name is invalid");
    }

    if(isEmailValid){
        console.log("Email name is valid");
    }else{
        console.log("Email name is invalid");
    }

    if(isPhoneValid){
        console.log("Phone name is valid");
    }
    else{
        console.log("Phone name is invalid");
    }

    if (isUserValid && isEmailValid && isPhoneValid){
        console.log("Student registration details are valid.");
    }else{
        console.log("Student registration details are invalid.");
    }

});

// assingment-2
const studentForm2 = document.getElementById("StudentForm2");

studentForm2.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(StudentForm2);
    const CourseCode = formData.get("courseCode");
    const NumberCode = formData.get("nocode");
    const Message = formData.get("message");

    const CoursePettern = /^[A-Z]{3}$/;
    const NumberPettern = /^[0-9]+$/;
    const MessagePettern = /Course/i;

    const isValidCousre = CoursePettern.test(CourseCode);
    const isValidNumber = NumberPettern.test(NumberCode);
    const isValidMessage = MessagePettern.test(Message);


     if(isValidCousre){
        console.log("Course code is valid");
    }else{
        console.log("Course code is invalid");
    }

    if(isValidNumber){
        console.log("Number code is valid");
    }else{
        console.log("Number code is invalid");
    }

    if(isValidMessage){
        console.log("message is valid");
    }
    else{
        console.log("message is invalid");
    }

})

