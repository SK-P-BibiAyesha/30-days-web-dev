// learn variables
let name ="Ayesha"
console.log(name)


// learn data types

let age = 20
let isStudent = true
let hobbies = ["reading", "coding"]
let address = {

    street : "123 Main st"

}

let skill;
let salary = null

// learn operators 

let a=10
let b=5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)


function calculateAge() {
    let birthYear = document.getElementById("birthYear").value 

    if(birthYear === ""){

        alert("please enter your birth year")
        return 
    }

    let currentYear = new Date().getFullYear()

    if( birthYear > currentYear){

        alert("please enter a valid year")
        return
    }

    let age = currentYear - birthYear

    document.getElementById("result").textContent = "Your age is: " + age

}





