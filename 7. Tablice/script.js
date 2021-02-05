//#### Zadanie 1
//Stwórz tablicę z dowolnymi elementami a następnie wypisz je w konsoli.

var tablica1 = ["dsf", 2, 5.01,"sdfs",true,"366.36 zł"];
tablica1.forEach (element => console.log(element));
console.log("\n");

//#### Zadanie 2
//Stwórz tablicę z dowolnymi elementami a następnie w konsoli wypisz:
//1. Pierszy i drugi element
//2. Ostatni element
//3. Wszystkie elementy
//4. Co drugi element
//5. Wszystkie stringi
//6. Wszystkie numbery 


var tablica2 = ["dsf", 2, 5.01,"sdfs",true,"366.36 zł"];
console.log(tablica2[0]);
console.log(tablica2[1]);
console.log("");
console.log(tablica2[tablica2.length-1]);
console.log("");
tablica2.forEach (element => console.log(element));
console.log("");

tablica2.forEach ((element, index) => {if (!(index%2)) console.log(element)});
console.log("");

tablica2.forEach (element => {if (typeof(element)=='string') console.log(element)});
console.log("");

tablica2.forEach (element => {if (typeof(element)=='number') console.log(element)});
console.log("");



//#### Zadanie 3
//Stwórz tablicę tylko z elementami typu number. W konsoli wypisz:
/*
1. sumę wszystkich elementów
2. różnicę wszystkich elementów
3. średnią wszystkich elementów
4. elementy parzyste
5. elementy nieparzyste
6. największą liczbę
7. najmniejszą liczbę
8. wypisz tablicę od tyłu

* nie rozpatrujemy warunków brzegowych. Liczby nie powtarzają się.
** Nie używamy obiektu Math
*/

let tablica3 = [5, 3, 4,55,24,36];
let suma=0;
tablica3.forEach(number => suma+=number);
console.log(suma);
console.log("");

tablica3.forEach(number1 => {tablica3.forEach(number2 => console.log(number1+"-"+number2+"="+(number1-number2)))});
console.log("");

//let 
suma=0;
tablica3.forEach(number => suma+=number);
console.log(suma/tablica3.length);
console.log("");


tablica3.forEach ((element, index) => {if (!(index%2)) console.log(element)}); //nieparzyste
console.log("");

tablica3.forEach ((element, index) => {if (index%2) console.log(element)});
console.log("");

let searNum = 0;

searNum = tablica3[0];
tablica3.forEach (element => {if(element>searNum) searNum=element});
console.log("największa "+searNum);
console.log("");

searNum = tablica3[0];
tablica3.forEach (element => {if(element<searNum) searNum=element});
console.log("najmniejsza "+searNum);
console.log("");

tablica3.forEach ((element,index) => console.log(tablica3[tablica3.length-index-1]));
console.log("");



//#### Zadanie 4
//Napisz funkcję która przyjmie jako parametr tablice liczb. Zwróć do konsoli sumę wszystkich liczb.

function sumArray(arrNum)
{
    let suma=0;
    arrNum.forEach(element => suma+=element);
    return suma;
}
console.log(sumArray(tablica3));
console.log("-");

//#### Zadaie 5
//Napisz funkcję która przyjmuje jako parametr tablicę liczb. Następnie wypisz w konsoli wszystkie elementy tej tablicy pomnożone przez średnią tablicy

function avgMulArray(arrNum)
{
    let suma=0;
    arrNum.forEach(element => suma+=element);
    let avgArray=suma/tablica3.length;
//    console.log(avgArray);
    arrNum.forEach(element => console.log(element*avgArray));
    return 0;
}
avgMulArray(tablica3);
console.log("**");



//#### Zadanie 6
//Napisz funkcję która zwraca średnią liczb parzystych z tablicy którą przekażesz jako parametr tej funkcji.

function avgEvenArray(arrNum)
{
    let sum=0;
    let count=0;

    arrNum.forEach(element => 
        {if (element%2==0) 
            {
            sum+=element;
            count++;
            }
        })
    let avgArray=sum/count;
    return avgArray;
}

console.log(avgEvenArray(tablica3));

console.log("=> 7.");

//#### Zadanie 7
//Posortuj tablicę przekazaną jako parametr do funkcji. Wypisz ją w konsoli

function sortArray(arrNum)
{
//    arrNum.sort(); - alfabetycznie
    arrNum.sort(function(a, b){return a - b});
    arrNum.forEach (element => console.log(element));
    return 0;
}
sortArray(tablica3);


//#### Zadanie 8  
//Napisz funkcję która będzie zwracać tablicę która będzie sumą indeksów dwóch tablic przekazanych jako parametry funkcji.

console.log("=>8.");

let tablica4=[1,2,3,4,5,6];

function sumArrays(arrNum,arrum2)
{
    let arrTmp=[];
    arrNum.forEach ((element,index) =>  arrTmp.push(arrNum2[index]+element));
    return (arrTmp);
}
negNumArray(tablica3,tablica4).forEach (element => console.log(element));


//#### Zadanie 9
//Napisz funkcję która przyjmuje jako parametr tablicę z numberami a następnie zwraca nową tablicę na podstawie parametru gdzie każdy element tablicy ma odwrotny znak.

console.log("=>9.");

function negNumArray(arrNum)
{
    arrNum.forEach ((element,index) =>  arrNum[index]=element*-1);
    return (arrNum);
}
negNumArray(tablica3).forEach (element => console.log(element));