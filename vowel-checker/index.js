

function checkVowels(){
    
    let text = document.getElementById("inputText").value;
    let vowelCount = 0;

    //convert it into lowercase
    text = text.toLowerCase();

    for(let i = 0; i < text.length; i++){
        let char = text.charAt(i); // 0
        if(isVowels(char)){
            vowelCount++;
        }
    }

    let result = document.getElementById("result");
    result.textContent = "Total Vowels" + vowelCount;

}

function isVowels(char){
    let vowels = ["a", "e", "i", "o", "u", "y"];
    return vowels.includes(char);
}
