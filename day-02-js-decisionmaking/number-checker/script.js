function checkNumber() {

    let number = document.getElementById("numberInput").value;

    let result = document.getElementById("result");

    if (number === "") {
        result.textContent = "Please enter a number";
        result.style.color = "orange";
    }
    else if (number > 0) {
        result.textContent = "Positive Number 😊";
        result.style.color = "green";
    }
    else if (number < 0) {
        result.textContent = "Negative Number 😔";
        result.style.color = "red";
    }
    else {
        result.textContent = "Zero 😐";
        result.style.color = "blue";
    }

}