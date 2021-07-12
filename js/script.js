/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//Chiedere all'utente una parola
var userWord = isPalindrome(prompt("Inserisci una parola"));
document.getElementById("palindrome").innerText = userWord;

//Creare funzione
function isPalindrome(word) {
    var backward = word.split("").reverse().join("");
    var result = "La parola non è palindroma";
    if (word === backward) {
        result = "La parola è palindroma";
    } 
    return result;
}
