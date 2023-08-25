//Jasvascript

function calcul(){
    //get input values from the elements
    const principle = parseFloat(document.getElementById('principle').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    //Perform the calculation
    const maturityAmount = principle * (principle * rate * tenure) /100;
    
    // display
    document.getElementById('result').innerText = `Maturity Amount: ${
        maturityAmount.toFixed(2)
    }`

}

//Attach the even listener to the calculate Button
document.getElementById('calculBtn').addEventListener('click', calcul)

