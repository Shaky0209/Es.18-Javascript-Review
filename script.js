// 1. crea una funzione che controlli due numeri interi. Ritorna "true"se uno dei due è 50 o se la somma dei due è 50.

// const isFifty =(n1, n2)=>{

//     let sum = n1 + n2;

//     if(n1 == 50 || n2 == 50 || sum == 50){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }

// isFifty(10, 40);

// 2. crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. passa la stringa e la
// posizione come parametri e ritorna la stringa modificata.

// const newString = (string, n)=>{
//     n = n - 1; //per introdurre la posizione della lettera da rimuovere senza considerare la posizione 0.
//     let nString = [];
//     string = string.split("");

//     for(let i = 0; i < string.length; i++){
//         if(!(i == n)){
//             nString.push(string[i]);
//         }
//     }
//     nString = nString.join("");
//     console.log(nString);
// }

// newString("mattonella", 6);

// 3. crea una funzione che controlli se due numeri siano compresi tra 40 o 60  o tra 70 e 100. Ritorna "true"
// se specchiano queste condizioni.

// const lesVerify = (n1, n2)=>{
//     if(n1 >= 40 && n1 <=60 && n2 >= 40 && n2 <=60 || n1 >= 70 && n1 <=100 && n2 >= 70 && n2 <=100){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }

// lesVerify(70, 100);

// 4. crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "los" o "new"
// altrimenti ritorni "false".

// const ifCityIncludes = (string)=>{

//     string = string.toLowerCase();

//     if(string.includes("los") || string.includes("new")){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }

// ifCityIncludes("Santo Domingo de Los Colorados");

// 5. crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come paramentro.

// const numbers = [3, 5, 2, 7, 12, 15, 9, 22];

// const arraySum = (array)=>{

//     let result = 0;

//     array.forEach(element => {
//         result += element;        
//     });

//     console.log(result);
// }

// arraySum(numbers);

// 6. crea una funzione che controlli che un array non contenga i numeri 1 o 3. se non contiene ritorna "true" altrimenti ritonra "false".

// const numbers = [0, 7, 9, 12, 27, 45, 8, 3];

// const verifyNumbers = (array)=>{

//     let result = true;
//     let i = 0;
    
//     while(result == true && i < array.length){
//         if(!(array[i] == 1 || array[i] == 3)){
//             result = true;
//         }else{
//             result = false;
//         }
//         i++
//     }
//     console.log(result);
// }

// verifyNumbers(numbers);

// 7. crea una funzione pèer trovare il tipo di un angolo i cui gradi sono passati come paramentro.
// angolo acuto: meno di 90° => ritorna "acuto"
// angolo ottuso: tra i 90° ed i 180° => ritorna "ottuso"
// angolo retto: 90° => ritorna "retto"
// angolo piatto: 180° => ritorna "piatto"

// let result = "";
// let angle = 91;

// const angleCheck = (angle)=>{

//     if(angle < 90){
//         result = "acuto";
//     }else if(angle == 90){
//         result = "retto";
//     }else if(angle > 90 && angle < 180){
//         result = "ottuso";
//     }else if(angle == 180){
//         result = "piatto";
//     }else if(angle > 180){
//         result = "L'angolo non rientra nei parametri predefiniti";
//     }
//     console.log(result);
// }

// angleCheck(angle);


// 8. crea una funzione che crei un acronimo a partire da una frase. es. "fabbrica italiana automobili torino" deve ritornare "fiat"

// let string = "fabbrica italiana automobili torino";

// const acronym = (string)=>{
//     let array = [];
//     string = string.split(" ");

//     string.forEach(element => {
//         array.push(element.slice(0, 1));
//     });
//     string = array.join(".").toUpperCase() + ".";
//     console.log(string);
// }

// acronym(string);




// Esercizi extra
// NOTA: tutti gli esercizi devono essere svolti usando le funzioni
// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.

// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
// Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].

// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

// let string = "ingegni";


// const isPalindrome = (string)=>{
//     stringReverse = string.split("");
//     stringReverse = stringReverse.reverse();
//     stringReverse = stringReverse.join("");
//     if(string == stringReverse){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }

// isPalindrome(string);

// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

// let number = 2024;

// const numberReverse = (number)=>{
//     number = Number(number.toString().split("").reverse().join(""));
//     console.log(number);
// }

// numberReverse(number);

// 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
// Es.
// X = 2
// '# '
// '##'
// X = 3
// '# '
// '## '
// '###'

// let scaleNumber = 50;
// let step = "#"

// const makeScale = (scaleNumber)=>{
//     let output = [];
//     for(i = scaleNumber; i > 0; i--){

//         if(i < scaleNumber){
//             output = output.split("")
//         }

//         output.push(step);
//         output = output.join("");
//         console.log(output);
//     }
// }

// makeScale(scaleNumber);

// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

// let string = "pallino";


// const stringReverse = (string)=>{
//     reverse = string.split("").reverse().join("");
//     console.log(reverse)
// }

// stringReverse(string);

// 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
// let y = 4;

// const arrayPartition = (array)=>{
//     let tempArray = [];
//     let outArray = [];
//     let condition = Math.ceil(array.length /y);

//     for(let i = 0; i < condition; i++){
//         tempArray = array.splice(0, y);
//         outArray.push(tempArray);
//     }
//     console.log(outArray);
// }

// arrayPartition(array);

// 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
// Es.
// X = 3
// ' # '
// ' ### '
// '#####'

// let layerNumber = 25;
// let brick = "#"

// const makePyramid = (layerNumber)=>{
//     let layer = [];
//     for(i = layerNumber; i > 0; i--){

//         if(i < layerNumber){
//             layer = layer.split("")
//         }

//         layer.push(brick);
//         layer = layer.join("");
//         console.log(layer);
//     }
// }

// makePyramid(layerNumber);

// 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
// Es. N = 2
// [[1, 2],[4, 3]]
// N = 3
// [[1, 2, 3],[8, 9, 4],[7, 6, 5]]
// N = 4
// [[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]