const StudentForm = document.getElementById("studentForm");
StudentForm.addEventListener("submit", e => {
    e.preventDefault();

    const FullName = document.getElementById("fullName").value;
    const Email = document.getElementById("email").value;
    const CoursName = document.getElementById("coursName").value;

    console.log("Full name: ", FullName);
    console.log("Email: ", Email);
    console.log("selected course: ", CoursName);
    
    
})

// Assingment 2

const CourseEnquiryForm = document.getElementById("courseEnquiryForm");
CourseEnquiryForm.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(CourseEnquiryForm);
    const FN  = formData.get("fullName");
    const Email = formData.get("email");
    const PN = formData.get("phoneNumber");
    const IC = formData.get("interestedCourse");

    for(const[key, value] of formData.entries()){
        console.log(key, ":", value);
        
    }
});