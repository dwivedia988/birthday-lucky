const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function checkBirthdayLucky(){
    const date = dateOfBirth.value;
    const lucky = luckyNumber.value;
    const dob = date.replaceAll("-", "");
    
    const dateSum = calculateSum(dob);
    calculate(dateSum,lucky);
}

function calculateSum(dob) {
    let sum = 0;
    for (let i = 0;  i <= dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function calculate(dateSum,lucky) {
    if( dateSum % lucky === 0) {
        outputBox.innerText ="Your Number is lucky. 🤩";
    } else {
        outputBox.innerText ="Your Number is not lucky. 😔";
    }
}

checkNumber.addEventListener("click", checkBirthdayLucky);
