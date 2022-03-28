function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('============ Uzdaviniai 2 dalis ===========')


// PASTABA!!!     == ir === skiriasi.... kad == tikrina tik reikšmes, === tikrina ir kintamųjų tipus
// 5 != '5' false
// 5 !== '5' true

/*
! -- 
> -- <=
< -- >=
== -- !=
&& -- ||
false -- true
*/


// 11. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol jų suma bus lygi arba didesnė 150. 

console.log('------ 2.11 Uzduotis ------')

let sum11 = 0;
while (sum11 < 150) {
    let s11 = rand (1, 10);
    sum11 += s11;
    console.log(s11);
}
console.log('Suma:', sum11);


// console.log('---------------------------')

// console.log('--- 2 var. (Audriaus) ----')

// let suma11 = 0;
// while (suma11 <= 150) {
//     suma11 += rand (1, 10);
// }

// console.log('Suma atsitiktinių skaičių nuo 1 iki 10 (daugiau arba lygu 150):', suma11);


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

// 13. Generuoti atsitiktinius skaičius nuo 1 iki 15 tol, kol jų suma bus lygi arba didesnė 175.
// Surasti didžiausią ir mažiausią skaičių.

console.log('------ 2.13 Uzduotis ------')

let arr13 = []; 
let sum13 = 0;

while (sum13 <= 175) {
    let s13 = rand (1, 15);
    sum13 += s13;
    arr13.push(s13);
}


console.log('Sugeneruoti skaiciai:', arr13);
console.log('Suma:', sum13);
console.log('Didziausias masyvo skaicius yra:', Math.max(...arr13));
console.log('Maziausias masyvo skaicius yra:', Math.min(...arr13));


console.log('*****************************');

// 14. Generuoti atsitiktinius skaičius nuo 1 iki 15 tol, kol jų suma bus lygi arba didesnė 200.
// Surasti skaičių vidurkį.

console.log('------ 2.14 Uzduotis ------')


let arr14 = []; 
let sum14 = 0;

while (sum14 <= 200) {
    let s14 = rand (1, 15);
    sum14 += s14;
    arr14.push(s14);
}

console.log('Sugeneruoti skaiciai:', arr14);
console.log('Suma:', sum14);
console.log('Masyvo ilgis:', arr14.length);
console.log('Skaiciu vidurkis', sum14/arr14.length);




console.log('*****************************');

//15. Sukurti masyvą, kurio ilgis būtų 100, o reikšmės – skaičiai nuo 1 iki 100.

console.log('------ 2.15 Uzduotis ------')

let arr15 = []; 

for (let i = 1; i <= 100; i++){
    arr15.push(i);
}

console.log('Sugeneruotu skaiciu masyvas nuo 1 iki 100:', arr15);


console.log('*****************************');

// 16. Sukurti masyvą, kurio ilgis būtų 100, o reikšmės – atsitiktiniai skaičiai nuo 10 iki 25.


console.log('------ 2.16 Uzduotis ------')

let arr16 = []; 

for (let i = 0; i < 100; i++){
    arr16.push(rand(10, 25));
}

console.log('Sugeneruotu atsitiktiniu skaiciu nuo 10 iki 25 skaiciu masyvas:', arr16);


console.log('*****************************');


// 17. Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.

console.log('------ 2.17 Uzduotis ------')

let arr17 = []; 

for (let i = 0; i < rand(40, 60); i++){
    arr17.push(i + 1);
}

console.log('Sugeneruotas atsitiktinio ilgio skaiciu masyvas:', arr17);


console.log('*****************************');


// 18. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 80 iki 120,
// o reikšmės – atsitiktiniai skaičiai nuo 5 iki 47.

console.log('------ 2.18 Uzduotis ------')

let arr18 = []; 

for (let i = 0; i < rand(80, 120); i++){
    arr18.push(rand(5, 47));
}

console.log('Sugeneruotas atsitiktinio ilgio skaiciu masyvas:', arr18);


console.log('*****************************');


// 19. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės D, E, F, G, H.

console.log('------ 2.19 Uzduotis ------')

let arr19 = [];
let char = 'DEFGH';
  
for (let i = 0; i < 100; i++){
    arr19.push(char.charAt(Math.floor(Math.random() * char.length)));
}
    
console.log('Sugeneruotas D, E, F, G, H raidziu masyvas:',arr19);


/*
console.log('-----------------------------------')

console.log('--- 2 var. (Audriaus) ----')


const masyv = [];
const raidmas = ['D', 'E', 'F', 'G', 'H'];

for (let b = 0; b < 100; b++) {
    masyv.push(raidmas[Math.floor(Math.random() * raidmas.length)]);
}

console.log('Masyvas, kurio ilgis 100, su reikšmėm - D, E, F, G, H', masyv);



console.log('-------------------------------------')

console.log('--- 3 var. Funkcijos sukurimas ----')


let characters = 'DEFGH';
let charactersLength = characters.length;

function generateArray(length) {

     let result = [];
     for (let i = 0; i < 100; i++) {
          result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
     }
     return result;
}

let generatedArray = generateArray(5);
// let uniqueArray = [...new Set(generatedArray)];


console.log(generatedArray);
// console.log(uniqueArray);
*/

console.log('*****************************');


// 20. Sukurti masyvą, kurioilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.

console.log('------ 2.20 Uzduotis ------')

let arr20 = [];
let char2 = 'MNOP';

for (let i = 0; i < 100; i++){
    arr20.push(char2.charAt(Math.floor(Math.random() * char2.length)));
}

console.log('Sugeneruotas M, N, O, P raidziu masyvas:',arr20);

console.log('-------------------------------------')


const arr222 = []; 
arr222.push(arr20);
arr222[arr20.sort()];
console.log('Isrusiuotas M, N, O, P raidziu masyvas:', ...arr222);

console.log('-------------------------------------')

const arr20m = ['M'];
const arr20n = ['N'];
const arr20o = ['O'];
const arr20p = ['P'];

const arr200 =[];
const arr201 =[];


let m = 0;
let n = 0;
let o = 0;
let p = 0;

for (let i = 0; i < arr20.length; i++){
if (arr20[i] == 'M'){
    m++;
} 
if (arr20[i] == 'N'){
    n++;
}
if (arr20[i] == 'O'){
    o++;
}
if (arr20[i] == 'P'){
    p++;
}

}
arr20m.push(m);
arr20n.push(n);
arr20o.push(o);
arr20p.push(p);


console.log(arr20m);
console.log(arr20n);
console.log(arr20o);
console.log(arr20p);

console.log('-------------------------------------')

arr200.push(arr20m);
arr200.push(arr20n);
arr200.push(arr20o);
arr200.push(arr20p);

console.log(arr200);

console.log('-------------------------------------')

arr201.push(...arr20m, ...arr20n, ...arr20o, ...arr20p);


console.log(arr201);

let maxar = ['', 0];


if (arr20m[1] > arr20n[1] && arr20m[1] > arr20o[1] && arr20m[1] > arr20p[1]){
    maxar = arr20m;
} else if (arr20n[1] > arr20m[1] && arr20n[1] > arr20o[1] && arr20n[1] > arr20p[1]){
    maxar = arr20n;
} else if (arr20o[1] > arr20m[1] && arr20o[1] > arr20n[1] && arr20o[1] > arr20p[1]){
    maxar = arr20o;
} else if (arr20p[1] > arr20m[1] && arr20p[1] > arr20n[1] && arr20p[1] > arr20o[1]){
    maxar = arr20p;
}

if (arr20m === maxar){
    console.log('Daugiausia buvo raidziu', maxar);
}
if (arr20n === maxar){
    console.log('Daugiausia buvo raidziu', maxar);
}
if (arr20o === maxar){
    console.log('Daugiausia buvo raidziu', maxar);
}
if (arr20p === maxar){
    console.log('Daugiausia buvo raidziu', maxar);
}





// !!! NEBAIGTA

// Kurios raidės daugiausia? Nueinate i konsole ir pasiziurite...

// Arba galima suskaiciuoti - yra isrusiuotas masyvas :)


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