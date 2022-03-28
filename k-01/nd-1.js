function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('============ Uzdaviniai 1 dalis ===========')


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



// 1.Sugeneruoti keturis atsitiktinius skaičius nuo 0 iki 100. Atspausdinti juos į ekraną.


console.log('------ 1.1 Uzduotis ------')

console.log('--- 1 var. ----')

let num1 = rand(0, 100);
let num2 = rand(0, 100);
let num3 = rand(0, 100);
let num4 = rand(0, 100);

console.log('Keturi atsitiktiniai skaiciai:', num1, num2, num3, num4)

console.log('--------------------------------------------')

console.log('--- 2 var. ----')

console.log('Keturi atsitiktiniai skaiciai:');
for (let i = 0; i < 4; i++) {
    console.log(rand(0, 100));
}

console.log('*****************************');


// 2.Sugeneruoti keturis atsitiktinius skaičius nuo 0 iki 100. Išvesti juos į ekraną.
// Visus nelyginius skaičius padidinti dvigubai. Išvesti visus skaičius į ekraną.

console.log('------ 1.2 Uzduotis ------')

console.log('--- 1 var. ----')

let num21 = rand(0, 100);
let num22 = rand(0, 100);
let num23 = rand(0, 100);
let num24 = rand(0, 100);

console.log('Keturi atsitiktiniai skaiciai:', num21, num22, num23, num24);

console.log('--------------------------------------------')

if (num21 % 2 !== 0) {
    num21 *= 2;
}
if (num22 % 2 !== 0) {
    num22 *= 2;
}
if (num23 % 2 !== 0) {
    num23 *= 2;
}
if (num24 % 2 !== 0) {
    num24 *= 2;
}

console.log('Pakeisti nelyginiai skaiciai:', num21, num22, num23, num24)

console.log('--------------------------------------------')

console.log('--- 2 var. ----')

let s3 = [];
for (let i = 0; i < 4; i++) {
    console.log('Pirminis skaicius:', s3[i] = rand(0, 100));
    if (s3[i] % 2 !== 0) {
        console.log('Pakeistas skaicius:', s3[i] * 2);
    } else {
        console.log('Pakeistas skaicius:', s3[i]);
    }
   console.log('---------------------');
}

console.log('*****************************');


// 3.Sugeneruoti atsitiktinį skaičių nuo 1 iki 7. Atitinkamai pagal skaičių parašyti, kokia tai savaitės diena.

console.log('------ 1.3 Uzduotis ------')

let diena = rand(1, 7);
    console.log(diena);     

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('treciadienis');
} else if (diena === 4) {
    console.log('ketvirtadienis');
} else if (diena === 5) {
    console.log('penktadienis');
} else if (diena === 6) {
    console.log('sestadienis');
} else if (diena === 7) {
    console.log('sekmadienis');
}
   
console.log('*****************************');


// 4.Trečią uždavinį perdaryti taip, kad rodytų, kokia tai savaitės diena (1-5 –darbo diena, 6-7 –savaitgalis).

console.log('------ 1.4 Uzduotis ------')

if (diena <= 5) {
    console.log('Darbo diena');
} else {   
if (diena === 6 || diena === 7) {
        console.log('Savaitgalis');
    }
}

// console.log('--- 2 var. ----')
/*
switch (diena) {
    case 1: console.log('Darbo diena');
        break;
    case 2: console.log('Darbo diena');
        break;
    case 3: console.log('Darbo diena');
        break;
    case 4: console.log('Darbo diena');
        break;
    case 5: console.log('Darbo diena');
        break;
    case 6: console.log('Savaitgalis');
        break;
    case 7: console.log('Savaitgalis');
        break;
}
*/

console.log('*****************************');

/*
5.Sugeneruoti keturis atsitiktinius skaičius nuo 0 iki 100.Skaičiai dalūs iš 3 turi būti
atvaizduoti žaliai, turintys dalybos iš trijų liekaną vienetą – geltonai,
turintys dalybos iš trijų liekaną dvejetą – raudonai.
*/

console.log('------ 1.5 Uzduotis ------')

console.log('Keturi atsitiktiniai skaiciai:');


let s5 = [];
for (let i = 0; i < 4; i++) {
    //s5[i] = rand(0, 100);
    //console.log(s5[i]);
    console.log(`Pirminis skaicius -${i+1}-:`, (s5[i]) = rand(0, 100));
    
    if ((s5[i]) % 3 === 0) {
        console.log(`%cZalias skaicius ${s5[i]} `, "color: green");
    }    
    if ((s5[i]) % 3 === 1) {
        console.log(`%cGeltonas skaicius ${s5[i]}`, "color: yellow");
    } 
    if ((s5[i]) % 3 === 2) {
        console.log(`%cRaudonas skaicius ${s5[i]}`, "color: red");
    }
    console.log('--------------------------------------------')
}

console.log('*****************************');


// 6.Išvesti į ekraną skaičius nuo 0 iki 100.

console.log('------ 1.6 Uzduotis ------')


for (let i = 0; i < 21; i++) {
    console.log(i);
}

console.log('---------------------------')

console.log('--- 2 var. ---> masyvas ----')

const ar = [];
for (let i = 0; i < 21; i++) {
    ar.push(i);
}
console.log(ar);


console.log('*****************************');


// 7.Išvesti į ekraną visus lyginius skaičius nuo 0 iki 200.

console.log('------ 1.7 Uzduotis ------')

for (let i = 0; i < 51; i+=2) {
    console.log(i);
}

/*
console.log('---------------------------')

console.log('--- 3 var. ----')

for (let i = 0; i < 51; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

console.log('---------------------------')

console.log('--- 2 var. ---> masyvas ----')

const ar1 = [];
for (let i = 0; i < 51; i+=2) {
    ar1.push(i);
}

console.log(ar1);


console.log('*****************************');


// 8. Septinto uždavinio sąlygoje atspausdintus skaičius „pataisyti“, kad dalūs iš 6 būtų atvaizduoti mėlynai.

console.log('------ 1.8 Uzduotis ------')

for (let i = 0; i < 51; i+=2) {
    if (i % 6 === 0){
        console.log(`%c${i} melynas skaicius`, "background-color: yellow; color: blue; font-weight: bold");
    } else {
        console.log(i)
    }
}

console.log('*****************************');


// 9. Generuoti atsitiktinius skaičius nuo 1 iki 50 tol, kol sugeneruotas skaičius bus dalus iš 5.

console.log('------ 1.9 Uzduotis ------')

let sk9;
while (sk9 % 5 !== 0) {
    sk9 = rand(1, 50)
    console.log(sk9);
}

console.log('*****************************');


// +10. Generuoti atsitiktinius skaičius nuo 1 iki 100 tol, kol sugeneruotas skaičius bus dalus iš 5 arba iš 11.

console.log('------ 1.10 Uzduotis ------')

let sk10;
while (sk10 % 11 !== 0 && sk10 % 5 !== 0 ) {       // kodel && , o ne ||   ?????
    sk10 = rand(1, 100)
    console.log(sk10);
}


console.log('*****************************');




/*
1.Sugeneruoti keturis atsitiktinius skaičius nuo 0 iki 100.Atspausdinti juos į ekraną.
2.Sugeneruoti keturis atsitiktinius skaičius nuo 0 iki 100.Išvesti juos į ekraną.
Visus nelyginius skaičius padidinti dvigubai. Išvesti visus skaičius į ekraną.
3.Sugeneruoti atsitiktinį skaičių nuo1 iki 7. Atitinkamai pagal skaičių parašyti, kokia tai savaitės diena.
4.Trečią uždavinį perdaryti taip, kad rodytų, kokia tai savaitės diena (1-5 –darbo diena, 6-7 –savaitgalis).
5.Sugeneruoti keturis atsitiktinius skaičius nuo 0 iki 100.Skaičiai dalūs iš 3 turi būti
atvaizduoti žaliai, turintys dalybos iš trijų liekaną vienetą –geltonai,
turintys dalybos iš trijų liekaną dvejetą –raudonai.
6.Išvesti į ekraną skaičius nuo 0 iki 100.
7.Išvesti į ekraną visus lyginius skaičius nuo 0 iki 200.
8.Septinto uždavinio sąlygoje atspausdintus skaičius „pataisyti“, kad dalūs iš 6 būtų atvaizduoti mėlynai.
9.Generuoti atsitiktinius skaičius nuo 1 iki 50 tol, kol sugeneruotas skaičius bus dalus iš 5.
+10.Generuoti atsitiktinius skaičius nuo 1 iki 100 tol, kol sugeneruotas skaičius bus dalus iš 5 arba iš 11.

*/