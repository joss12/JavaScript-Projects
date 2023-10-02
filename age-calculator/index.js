

const  dobInput = document.getElementById('dob');
const  calculateBtn = document.getElementById('calculate-btn');
const  resultDiv = document.getElementById('result');

calculateBtn.addEventListener("click", function(){
    const dob = new Date(dobInput.value);
    const ageInMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

 // Number of days unit birthday
    const inputYear = dob;
    inputYear.setFullYear(inputYear.getFullYear() + age);
    
    var date1 = inputYear;
    var date2 = Date.now();
    var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); 

    if(diffDays < 365 && diffDays > -366) {

       brithDay = (diffDays - 365) * (-1) ;
       
    } else {

      alert("Pease enter a valid date")
    }
 
    resultDiv.innerHTML = `Your age is ${age} years.
    you brithdays ${brithDay} days ago 🎂 .`

});
    
    resultDiv.innerHTML = `Your age is ${age} years.`
})
