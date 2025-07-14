//1
let name = prompt("Name?");
let birthYear = prompt("Birth year?");
let Student = confirm("Student?");

//2
let thisYear = new Date().getFullYear();
let age = thisYear  - birthYear; 
let category = "";

if (age < 13) {
  category = "Kid";
} else if (age >= 13 && age <= 17) {
  category = "Teen";
} else if (age >= 18 && age <= 59) {
  category = "Adult";
} else {
  category = "Senior";
}

 let message = `Hello ${name}, you are ${age} years old and an ${category}.`;

if (Student) {
  message = message +  "Don't forget to study hard!";

console.log(message);
alert(message);
document.getElementById("output").innerText = message;
}


