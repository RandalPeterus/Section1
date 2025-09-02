const button = document.querySelector("#check-btn")
const input = document.getElementById("text-input");
const result = document.getElementById("result");



const checkIfEmpty = () => {
  const checker = input.value.trim();

  if(checker === "") {
    alert("Please input a value.");
    return
  } else {
    palindromeChecker();
    return
  };
}
const palindromeChecker = () => {
  const check = input.value.trim().toLowerCase();
  const cleanInput = check.replace(/[^a-z0-9]/g, "");
  const reverseInput = cleanInput.split("").reverse().join("");

  if (cleanInput === reverseInput) { 
    result.textContent = input.value + " is a palindrome.";
  } 
  else { 
    result.textContent =  input.value + " is not a palindrome.";
  }
}
button.addEventListener("click", checkIfEmpty);