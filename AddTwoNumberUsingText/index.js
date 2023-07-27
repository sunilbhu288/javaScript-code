function calculate(){
const firstNumber = document.getElementById("firstNumber").value;
const secondNumber = document.getElementById("secondNumber").value;
const total = parseInt(firstNumber)+parseInt(secondNumber);
 const ans = document.getElementById("total").innerText = total;
}