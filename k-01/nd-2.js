function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('============ Uzdaviniai 2 dalis ===========')


// PASTABA!!!     == ir === skiriasi.... kad == tikrina tik reikšmes, === tikrina ir kintamųjų tipus
// 5 != '5' false
// 5 !== '5' true




// 11. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol jų suma bus lygi arba didesnė 150. 

console.log('------ 2.11 Uzduotis ------')

let sum11 = 0;
while (sum11 < 150) {
    let s11 = rand (1, 10);
    sum11 += s11;
    console.log(s11);
}
console.log('Suma:', sum11);



console.log('*****************************');


// 12. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol jų suma bus lygi arba didesnė 120.
// Suskaičiuoti kiek skaičių buvo sugeneruota.

console.log('------ 2.12 Uzduotis ------')

let i = 0;
let sum12 = 0;
while (sum12 <= 120) {
    let s12 = rand (1, 10);
    sum12 += s12;
    console.log(s12);
    i++;
}
console.log('Suma:', sum12);
console.log('Sugeneruota skaiciu', i);




console.log('*****************************');

// 13. Generuoti atsitiktinius skaičius nuo 1 iki 15tol, kol jų suma bus lygi arba didesnė 175.
// Surasti didžiausią ir mažiausią skaičių.

console.log('------ 2.13 Uzduotis ------')




console.log('*****************************');

// 14. Generuoti atsitiktinius skaičius nuo 1 iki 15tol, kol jų suma bus lygi arba didesnė 200.
// Surasti skaičių vidurkį.

console.log('------ 2.14 Uzduotis ------')




console.log('*****************************');

//15. Sukurti masyvą, kurio ilgis būtų 100, o reikšmės –skaičiai nuo 1 iki 100.

console.log('------ 2.15 Uzduotis ------')




console.log('*****************************');

// 16. Sukurti masyvą, kurio ilgis būtų 100, o reikšmės–atsitiktiniai skaičiai nuo 10 iki 25.


console.log('------ 2.16 Uzduotis ------')






console.log('*****************************');


// 17. Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.

console.log('------ 2.17 Uzduotis ------')




console.log('*****************************');

// 18. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 80 iki 120,
// o reikšmės – atsitiktiniai skaičiai nuo 5 iki 47.

console.log('------ 2.18 Uzduotis ------')


console.log('*****************************');


// 19. Sukurti masyvą, kurioilgis 100, o reikšmės –raidės D, E, F, G, H.

console.log('------ 2.19 Uzduotis ------')


console.log('*****************************');


// 20. Sukurti masyvą, kurioilgis 100, o reikšmės –raidės M,N,O,P.Suskaičiuoti, kurios raidės buvo daugiausia.

console.log('------ 2.20 Uzduotis ------')


console.log('*****************************');



/*
11. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol jų suma bus lygi arba didesnė 150. 
12. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol jų suma bus lygi arba didesnė 120.
Suskaičiuoti kiek skaičių buvo sugeneruota.
13. Generuoti atsitiktinius skaičius nuo 1 iki 15tol, kol jų suma bus lygi arba didesnė 175.
Surasti didžiausią ir mažiausią skaičių.
14. Generuoti atsitiktinius skaičius nuo 1 iki 15tol, kol jų suma bus lygi arba didesnė 200.
Surasti skaičių vidurkį.
15. Sukurti masyvą, kurio ilgis būtų 100, o reikšmės –skaičiai nuo 1 iki 100.
16. Sukurti masyvą, kurio ilgis būtų 100, o reikšmės–atsitiktiniai skaičiai nuo 10 iki 25.
17. Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.
18. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 80 iki 120,
 o reikšmės –atsitiktiniai skaičiai nuo 5 iki 47.
19. Sukurti masyvą, kurioilgis 100, o reikšmės –raidės D, E, F, G, H.
20. Sukurti masyvą, kurioilgis 100, o reikšmės –raidės M,N,O,P.Suskaičiuoti, kurios raidės buvo daugiausia.

*/