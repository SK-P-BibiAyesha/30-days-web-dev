
function bmicalculator(){

  let height = document.getElementById("height").value
let width = document.getElementById("width").value

if(height === ""){
  alert('enter valid number')
  return
}

let bmi = width / (height * height) // body mass index

document.getElementById("result").textContent = "bmi is: "+ bmi



}