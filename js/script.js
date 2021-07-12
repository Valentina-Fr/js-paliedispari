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
    var wordArray = word.split("");
    var backwardArray = [];
    for (var i = wordArray.length - 1; i >= 0; i--) {
        backwardArray.push(wordArray[i]);
    }
    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray [i] == backwardArray[i]) {
        return "La parola è palindroma";
        } else {
        return "La parola non è palindroma";
        }
    } 
}

/*  
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//Chiedere all'utente di scegliere
var userChoice = prompt("pari o dispari?", "pari");
var userNumber = parseInt(prompt("Scegli un numero da 1 a 5", "1"));

//Generare numero random
var cpuNumber = randomNumber();
var sum = cpuNumber + userNumber;

//Stabilire se la somma è pari o dispari
var result = evenOdd(sum);

var message = "Il numero generato dal computer è " + cpuNumber + ". La somma dei due numeri è " + result;
var resultMessage; 

//Dichiarare chi vince
if (result === userChoice){
    resultMessage = ". Hai vinto!";
} else {
    resultMessage = ". Non hai vinto.";
}

document.getElementById("result").innerText = message + resultMessage;

//Funzione numero random da 1 a 5
function randomNumber(){
   return Math.floor(Math.random() * 5) + 1;
}

//Funzione per stabilire se pari o dispari
function evenOdd(num) {
    if (num % 2 === 0) {
        return  "pari";
    } else {
        return "dispari";
    }
}