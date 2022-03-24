function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('============ Uzdaviniai 3 dalis ===========')


// PASTABA!!!     == ir === skiriasi.... kad == tikrina tik reikšmes, === tikrina ir kintamųjų tipus
// 5 != '5' false
// 5 !== '5' true




/*
21.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10,
 o reikšmės skaičiai nuo 1 iki 10 ([1,2,3,4,5,6,7,8,9,10])
*/

console.log('------ 3.21 Uzduotis ------')


const arr21 = []; 

for (let i = 0; i < 20; i++){
    const temp21 = []; 
    for (let j = 1; j < 11; j++){
        temp21.push(j);     
}
  arr21.push(temp21);
}
 
console.log('Sugeneruotas dvisluoksnis masyvas su reiksmemis nuo 1 iki 10:', arr21);


console.log('*****************************');


/*
22.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10,
 o reikšmės atsitiktiniai skaičiai nuo 1 iki 17.
*/

console.log('------ 3.22 Uzduotis ------')

const arr22 = []; 

for (let i = 0; i < 20; i++){
    const temp22 = []; 
    for (let j = 0; j < 10; j++){
        temp22.push(rand(1, 17));     
}
  arr22.push(temp22);
}

console.log('Sugeneruotas dvisluoksnis masyvas su reiksmemis nuo 1 iki 17:', arr22);


console.log('*****************************');

/*
23.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis
 nuo 5 iki 18, o reikšmės – skaičiai nuo 1 iki masyvo ilgio
*/

console.log('------ 3.23 Uzduotis ------')

const arr23 = []; 

for (let i = 0; i < 20; i++){
    const temp23 = []; 
    for (let j = 0; j < rand(5, 18); j++){
        temp23.push(j + 1);     
}
  arr23.push(temp23);
}

console.log('Sugeneruotas dvisluoksnis masyvas su reiksmemis nuo 1 iki masyvo ilgio:', arr23);


console.log('*****************************');

/*
24.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis
 nuo 5 iki 18, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 30.
*/

console.log('------ 3.24 Uzduotis ------')

const arr24 = []; 

for (let i = 0; i < 20; i++){
    const temp24 = []; 
    for (let j = 0; j < rand(5, 18); j++){
        temp24.push(rand(5, 30));     
}
  arr24.push(temp24);
}

console.log('Sugeneruotas dvisluoksnis masyvas su reiksmemis nuo 5 iki 30:', arr24);


console.log('*****************************');

/*
25.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 18,
o reikšmės – atsitiktiniai skaičiai nuo 5 iki 75. Surasti didžiausią skaičių visame didžiajame masyve.
*/

console.log('------ 3.25 Uzduotis ------')

const arr25 = []; 
const arr251 = []; 

for (let i = 0; i < 20; i++){
    const temp25 = []; 
    for (let j = 0; j < rand(5, 18); j++){
        temp25.push(rand(5, 75));     
}
  arr25.push(temp25);
  arr251.push(...temp25);
}


console.log('Sugeneruotas dvisluoksnis masyvas su reiksmemis nuo 5 iki 75:', arr25);
//console.log('Sugeneruotas paprastas masyvas su reiksmemis nuo 5 iki 75:', [...arr251]);
console.log('Didziausia viso didziojo masyvo skaiciaus reiksme:', Math.max(...arr251));

console.log('*****************************');

/*
26.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 18,
 o reikšmės – atsitiktiniai skaičiai nuo 5 iki 75. Surasti mažiausią skaičių visame didžiajame
masyve ir kiek kartų jis pasikartojo.
*/


console.log('------ 3.26 Uzduotis ------')


const arr26 = []; 
const arr261 = []; 

for (let i = 0; i < 20; i++){
    const temp26 = []; 
    for (let j = 0; j < rand(5, 18); j++){
        temp26.push(rand(5, 75));     
}
  arr26.push(temp26);
  arr261.push(...temp26);
}
let m = 0;
for (let i = 0; i < arr261.length; i++){
    if (arr261[i] === Math.min(...arr251)){
        m++;
    } 
}
console.log('Sugeneruotas dvisluoksnis masyvas su reiksmemis nuo 5 iki 75:', arr26);
// console.log('Sugeneruotas paprastas masyvas su reiksmemis nuo 5 iki 75:', [...arr261]);
console.log('Maziausia viso didziojo masyvo skaiciaus reiksme:', Math.min(...arr261));
console.log('Maziausio skaiciaus kiekis masyve:', m);
//console.log('Masyvas su su ikeltomis i vienmatyti masyva ir isrusiuotomis reiksmemis:', [...arr261].map((_, i) => i));

const arr2611 = []; 
arr261.sort((a, b) => a - b);

console.log('Masyvas su su ikeltomis i vienmatyti masyva ir isrusiuotomis reiksmemis:', arr261);


console.log('*****************************');


/*
27.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės
atsitiktiniai skaičiai nuo 1 iki 17. Išrykiuoti vidinių masyvų reikšmes didėjančia tvarka.
*/

console.log('------ 3.27 Uzduotis ------')


const arr27 = []; 
const arr271 = []; 

for (let i = 0; i < 20; i++){
    const temp27 = [];
    for (let j = 0; j < 10; j++){
        temp27.push(rand(1, 17));
}
    const temp271 = [...temp27];
    arr27.push(temp27);
    arr271.push(temp271.sort((a, b) => a - b));
}

console.log('Sugeneruotas dvisluoksnis masyvas su reiksmemis nuo 1 iki 17:', arr27);
console.log('Masyvas su isrusiuotomis vidiniu masyvu reiksmemis:', arr271);


console.log('*****************************');

/*
28.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės
atsitiktiniai skaičiai nuo 1 iki 17. Perrikiuoti vidinius masyvus pagal vidinių masyvų reikšmių
sumas didėjančia tvarka.
*/

console.log('------ 3.28 Uzduotis ------')

// const arr28 = []; 
// const arr281 = []; 

// for (let i = 0; i < 20; i++){
//     const temp28 = [];
//     for (let j = 0; j < 10; j++){
//         temp28.push(rand(1, 17));
// let sum = 0;
// for (k = 0; k < temp28.length; k++){
//    sum[k] += temp28[k];
// }

// }

//     const temp281 = [sum];
//     arr28.push(temp28);
//     arr281.push(temp281);
//     //arr281.push(temp281.sort((a, b) => a - b));
// }

// console.log('Sugeneruotas dvisluoksnis masyvas su reiksmemis nuo 1 iki 17:', arr28);
// console.log('Masyvas su isrusiuotomis vidiniu masyvu reiksmemis:', arr281);







console.log('*****************************');


/*
29.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės
atsitiktiniai skaičiai nuo 1 iki 17. Iš dvimačio masyvo sukurti vieną vienmatį masyvą – visas
dvimačio masyvo masyvų reikšmes perkelti į naują masyvą.
*/

console.log('------ 3.29 Uzduotis ------')


console.log('*****************************');


/*
30.Papildyti 29 uždavinį taip, kad surastų skaičių vidurkį ir palygintų jį su vidurinia reikšme,
kuris didesnis. Jei elementų yra nelyginis skaičius, pvz 9, tai vidurinė reikšmė bus 5-as
elementas, jei elementų yra lyginis skaičius, pvz 8, tai vidurinė reikšmė bus 4-os ir 5-os reikšmės
aritmetinis vidurkis.
*/

console.log('------ 3.30 Uzduotis ------')


console.log('*****************************');



/*
21. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai,kurių ilgis 10,
o reikšmės skaičiainuo 1 iki 10 ([1,2,3,4,5,6,7,8,9,10]).
22.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės –masyvai,kurių ilgis 10, o reikšmės atsitiktiniai skaičiai
nuo 1 iki 17.
23. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai,kurių ilgis atsitiktinis
nuo 5 iki 18, o reikšmės –skaičiai nuo 1 iki masyvo ilgio.
24. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės –masyvai,kurių ilgis atsitiktinis nuo 5 iki 18,
o reikšmės –atsitiktiniai skaičiai nuo 5 iki 30.
25. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai,kurių ilgis atsitiktinis nuo 5 iki 18,
o reikšmės –atsitiktiniai skaičiai nuo 5 iki 75.Surasti didžiausią skaičių visame didžiajame masyve.
26. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės –masyvai,kurių ilgis atsitiktinis nuo 5 iki 18,
o reikšmės –atsitiktiniai skaičiai nuo 5 iki 75.Surasti mažiausiąskaičių visame didžiajame masyve
ir kiek kartų jis pasikartojo.
27. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai,kurių ilgis 10,
o reikšmės atsitiktiniaiskaičiai nuo 1 iki 17.Išrykiuoti vidinių masyvų reikšmes didėjančia tvarka.
28. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai,kurių ilgis 10, o reikšmės atsitiktiniai
skaičiai nuo 1 iki 17.Perrikiuoti vidinius masyvus pagal vidinių masyvų reikšmių sumas didėjančia tvarka.
29. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai,kurių ilgis 10,
o reikšmės atsitiktiniaiskaičiai nuo 1 iki 17. Iš dvimačio masyvo sukurti vieną vienmatį masyvą – visas dvimačio
masyvo masyvų reikšmes perkelti į naują masyvą.
30. Papildyti 29 uždavinį taip, kad surastųskaičių vidurkį ir palygintų jį su vidurinia reikšme, kuris didesnis.
Jei elementų yra nelyginis skaičius, pvz 9, tai vidurinė reikšmė bus 5-as elementas,
jei elementų yra lyginis skaičius, pvz 8, tai vidurinė reikšmė bus 4-os ir 5-os reikšmės aritmetinis vidurkis.


*/

