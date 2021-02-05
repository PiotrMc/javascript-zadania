//#### Zadanie 1

//W konsoli stwórz dwie zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej ```if ... else ```, wypisz w konsoli, która z nich jest większa.

// korzystając tylko z if - else nie mozna jednoznaczeni wykonać zadania
// potrzebne są albo dwie instrukcje if bez else, albo if - else if 
// bo brak obsługi przypadku a==b

let a = 50
let b = 12

if (a>b) console.log ("a jest wieksze niż b");
else console.log ("b jest nie mniejsze niż a");

//#### Zadanie 2

//W konsoli stwórz trzy zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej **if**, **else if** i **else**
//wypisz w konsoli, która z nich jest największa.
// w przypadku wartości równych decyduje koleność odwrotna alfabetyczna

a = 3;
b = 5;
let c = 7;

if (a>b) 
  {
  if (a>c) writeln ("najwieksze jest a")
  else writeln ("najwieksze jest c")
  }
else if (b>c) writeln ("najwieksze jest b")
  else writeln ("najwieksze jest c");

//wersja druga, niespełniająca wymogow zadania (brak else if, a bez sensu wstawiać na siłę, ale obsługuje równe wartości)

write ("największe jest:");
if ((a >= b) && (a >= c)) write (" a");
if ((b >= a) && (b >= c)) write (" b");
if ((c >= a) && (c >= b)) write (" c");
writeln ("");



//#### Zadanie 3
//W konsoli stwórz pętle, która 10 razy wypisze w konsoli tekst "Lubię JavaScript".

for (let i = 0; i < 10; i++) writeln ("Lubię JavaScript");

//#### Zadanie 4
//W konsoli stwórz zmienną ```result``` i przypisz do niej liczbę 0. Następnie stwórz pętle, która doda do siebie liczby od 1 do 10.

let result = 0;
for (let i = 1; i<=10 ; i++) result += i;


//#### Zadanie 5
//W konsoli napisz program, który na podstawie wartości zmiennej np. ```var n = 5;``` wypisuje wszystkie liczby od zera do **n**.
//Przy każdej liczbie program ma napisać, czy  liczba jest parzysta czy nie. Np.:
/*
```JavaScript
0 – parzysta
1 – nieparzysta
2 – parzysta
3 – nieparzysta
...
```
*/

var n = 5;

for (let i = 0; i <= n ; i++) 
  {
  write (i);
  if ( i%2 == 0) writeln (" - parzysta")
  else writeln (" - nieparzysta");
  }

//wersja 2

var n = 5;

for (let i = 0; i <= n ; i++) 
  writeln (i + (i%2 == 0?" - parzysta":" - nieparzysta"));




//#### Zadanie 6
//W konsoli stwórz dwie pętle niezależne i wypisz wartości ich liczników w każdej iteracji. Wykorzystaj:konkatenację np.
/*
```JavaScript 
console.log("i= " + i + ", j= " + j);
```
*/

for (let i = 1; i < 10 ; i++)
  for (let j = 1; j < 10; j++)
    console.log("i= " + i + ", j= " + j);


///#### Zadanie 7
//FizzBuzz - wypisz w consoli liczby od 0 do 100. Zamiast każdej podzielnej liczby przez 3 wypisz "Fizz", zamiast każdej podzielnej liczby przez 5 wypisz "Buzz" a zamiast każdej podzielnej liczby przez 3 i przez 5 wypisz "FizzBuzz"
/*
Przykład:

```
0 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ....
```
*/

for (let i = 0; i <=100; i++)
  if (i!=0)
  {
  if (i % 3 == 0) 
    if (i % 5 != 0) write (" Fizz")
    else write (" Fizzbuzz") 
  else if (i % 5 == 0 && i % 3 != 0) write (" Buzz") 
  else write (" "+i);
  }
  else write (" "+i);


//#### Zadanie 8
//Narysuj w konsoli:

/*
a)
```
*
**
***
****
*****
```
*/

for (let i = 1; i <= 5; i++)
  {
  for (let j=1; j <= i; j++)
    write ("*");
  writeln ("");
  }

/*
b)
```
    *
   * *
  * * *
* * * *
* * * * *
```
*/

for (let i = 1; i <= 5; i++)
  {
  for (let j=1; j <= 5-i; j++)
    write (" ");
  for (let j=1; j <= i; j++)
    write ("* ");
  writeln ("");
  }

  /*
c)
```
    *
   ***
  *****
*******
*********
```
*/

for (let i = 1; i <= 9; i+=2)
  {
  for (let j=1; j <= 9-i; j+=2)
    write (" ");
  for (let j=1; j <= i; j++)
    write ("*");
  writeln ("");
  }

  /*
d)
```
*1234
**234
***34
****4
*****
-----
*****
****4
***34
**234
*1234
```
*/

/*
e)
```
    *
   * *
  * * *
* * * *
* * * * *
    *
    *
    *
```
*/

for (let i = 1; i <= 9; i+=2)
  {
  for (let j=1; j <= 9-i; j+=2)
    write (" ");
  for (let j=1; j <= i; j++)
    write ("*");
  writeln ("");
  }



console.log("dsfds");