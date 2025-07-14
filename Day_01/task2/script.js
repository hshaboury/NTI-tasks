//1
let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));
let experience = parseInt(prompt("Enter your years of experience:"));
let rating = parseInt(prompt("Rate yourself from 1 to 10:"));


//2
let category = "";
if (experience < 2) {
  category = "Junior";
} else if (experience < 5) {
  category = "Mid-Level";
} else if (experience <= 10) {
  category = "Senior";
} else {
  category = "Expert";
}

//3
let performance = "";
switch (true) {
  case (rating >= 9):
    performance = "Excellent";
    break;
  case (rating >= 7):
    performance = "Good";
    break;
  case (rating >= 5):
    performance = "Average";
    break;
  default:
    performance = "Needs Improvement";
}

//4
let BaseSalary = 10000; 
let BonusPercent = 0;
if (experience <= 2) {
  BonusPercent = 0.10;
} else if (experience <= 5) {
  BonusPercent = 0.15;
} else {
  BonusPercent = 0.20;
}
let Bonus = BaseSalary * BonusPercent;
let FinalSalary = BaseSalary + Bonus;

//5
let CurrentHour = new Date().getHours();
let shift;
if (CurrentHour < 9 || (CurrentHour >= 9 && CurrentHour < 18)) {
  shift = "Day Shift";
} else {
  shift = "Night Shift";
}

//6
let message = "Employee Name: " + name +
              "\nAge: " + age +
              "\nYears of experience: " + experience + 
              "\nSelf Rating: " + rating + 
              "\n-----------------------------" + 
              "\nJob Category: " + category +
              "\n-----------------------------" +
              "\nPerformance Level: " + performance +
              "\n-----------------------------" +
              "\nFinal Salary: " + FinalSalary +
              "\n-----------------------------" +
              "\nWork Shift: " + shift;

console.log(message);
alert(message);
document.getElementById("result").innerText = message;
