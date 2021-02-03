function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

let tablica = [1,2,3,4]//,5,6,7,8,9,0];
sleep(2000);
console.log(tablica);
tablica.forEach(element => {
    sleep (3000); 
    console.log(element);
});

// ------------------------------

let i=0;
while (i++<15) {
    let napis = "Cześć po raz "+i;
    setTimeout(() => console.log(napis), 1000*i)
}

