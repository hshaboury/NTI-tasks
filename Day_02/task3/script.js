//1
let temp = Number(prompt("Enter the temperature:"));
// 2 using ternary 
let condition =
  temp < 0 ? "Freezing cold" :
  temp <= 15 ? "Cold" :
  temp <= 25 ? "Mild" :
  temp <= 35 ? "Warm" :
  "Hot";
//3 Using if/else 
let safetyStatus = "";
if (temp < -5 || temp > 40) {
  safetyStatus = "Dangerous temperature";
} else {
  safetyStatus = "Safe temperature";
}
//4 using ternary
let advice =
  temp >= 16 && temp <= 25 ? "Perfect for outdoor activities!" : 
  temp > 30 ? "Stay hydrated!" :
  "No advice";
//5
let message = ` Temperature: ${temp}°C \n Condition: ${condition} \n Status: ${safety} \n Advice: ${advice} `;
console.log(message);
alert(message);
document.getElementById("result").innerText = message;
