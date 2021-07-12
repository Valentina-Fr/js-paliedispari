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
var userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

//Stampare risultato
document.getElementById("result").innerText = result(userNumber, userChoice);

//Dichiarare funzione
function result(number, choice) {
    
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    var sum = randomNumber + number;
    var match;

    if (sum % 2 === 0) {
        match = "pari";
    } else {
        match = "dispari";
    }

    if (choice === match) {
        return "Il numero generato dal computer è " + randomNumber + ". Hai vinto!";
    } else {
        return "Il numero generato dal computer è " + randomNumber + ". Hai perso.";
    }  
}




