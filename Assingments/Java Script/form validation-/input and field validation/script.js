const ageInput = document.getElementById("studentAge");
const checkButton = document.getElementById("checkAge");

checkButton.addEventListener("click", 
    function () {
        const age = Number(ageInput.value);

        if(age >= 16 && age <= 60){
            console.log("age is valid.");
        }else{
            console.log("age is outside the range.");
        }
    }
)