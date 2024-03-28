var merseneCheckedNumber = document.getElementById("mersene-checked-number");

var resultMerseneChecking = document.getElementById("result-of-mersene-checking");

function isPrime(number) {
    for (var i = 2; i < Math.floor(number/2); i++) {
        if (number% i == 0) {
            return false;
        }
    }
    return true;
}

function merseneCheck(value) {
    var num = Math.pow(2, value) - 1;
    return isPrime(num);
}

merseneCheckedNumber.addEventListener("input", function(event) {
    var tmp = merseneCheckedNumber.value.trim();

    var numericRegex = /^[0-9]+$/;
    if (numericRegex.test(tmp)) {
        tmp = parseInt(tmp);
        if (tmp <= 200 && merseneCheck(tmp)) {
            resultMerseneChecking.textContent = "Mersenne number";
        }
        else if (tmp > 200) {
            resultMerseneChecking.textContent = "Please enter the value under 200";
        }
        else {
            resultMerseneChecking.textContent = "That's not!";
        }
    }
    else {
        resultMerseneChecking.textContent = "Invalid number.";
    }
});