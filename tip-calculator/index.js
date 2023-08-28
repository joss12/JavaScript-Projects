function calculateTip(){

    //get the input values
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);


    //calculate the tip percentage
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = tipAmount + billAmount;

    //Display the Results
    document.getElementById("tip-amount").textContent = '$' + tipAmount.toFixed(2);
    document.getElementById("total-amount").textContent = '$' + totalAmount.toFixed(2);

}