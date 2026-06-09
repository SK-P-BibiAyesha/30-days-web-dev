function studentMarks() {

  let stu_mar = Number(document.getElementById("student_marks").value);

  let result;

  if (stu_mar <= 100 && stu_mar >= 90) {
    result = "A";
  } 
  else if (stu_mar < 90 && stu_mar >= 75) {
    result = "B";
  } 
  else if (stu_mar < 75 && stu_mar >= 60) {
    result = "C";
  } 
  else if (stu_mar < 60 && stu_mar >= 40) {
    result = "D";
  } 
  else {
    result = "Fail";
  }

  document.getElementById("result").textContent =
    `Student Grade is: ${result}`;
}