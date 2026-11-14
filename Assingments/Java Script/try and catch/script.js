function calculateResult(marks){
    if(marks<0 || marks>100){
        throw new Error("Marks must be between 0 and 100.")
    }
    if(marks >= 40){
        return "Pass"; 
    }else{
        return "Fail";
    }
}

try {
    console.log(calculateResult(84));
    console.log(calculateResult(114));
} catch(Error) {
    console.error("Unable to calculate result:", Error.message);
}finally{
    console.log("Marks checking completed.");
    
}

// Assingment 2

const StudentFee = -15000;
const NumberOfStudent = 3;

console.log("Student fee: ", StudentFee);
console.log("Number of Student: ", NumberOfStudent);

function checkingInput(StudentFee, NumberOfStudent){
    if(StudentFee<0 || NumberOfStudent<0){
        throw new Error("Student fee and Number of Students must not be negative.")
    }

    const totalFee = StudentFee * NumberOfStudent;

    return totalFee;
}

try{
    const result = checkingInput(StudentFee, NumberOfStudent);
    console.log("total fee: ", result);
}catch(error){
    console.error("Error name: ", error.name);
    console.error("Error message: ", error.message);
}




