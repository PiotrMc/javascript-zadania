function f1 () {console.log("Udało się!");}

f1();


function f2 (cos) {console.log(cos);}

f2("parametr");


f2 ([1,2,3,4]);

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function f4 (napis) {
    let i=0;
    while (i++<5) {
        sleep(3000);
        console.log(napis);
    }
    console.log("Koniec");
}

f4("fbdfbsddf");