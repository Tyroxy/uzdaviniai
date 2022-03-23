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
 
console.log('Sugeneruotas dvisluoksnis masyvas:', arr21);






console.log('*****************************');


/*
22.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10,
 o reikšmės atsitiktiniai skaičiai nuo 1 iki 17.
*/

console.log('------ 3.22 Uzduotis ------')






console.log('*****************************');

/*
23.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis
 nuo 5 iki 18, o reikšmės – skaičiai nuo 1 iki masyvo ilgio
*/

console.log('------ 3.23 Uzduotis ------')




console.log('*****************************');

/*
24.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis
 nuo 5 iki 18, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 30
*/

console.log('------ 3.24 Uzduotis ------')




console.log('*****************************');

/*
25.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 18,
o reikšmės – atsitiktiniai skaičiai nuo 5 iki 75. Surasti didžiausią skaičių visame didžiajame masyve.
*/

console.log('------ 3.25 Uzduotis ------')




console.log('*****************************');

/*
26.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 18,
 o reikšmės – atsitiktiniai skaičiai nuo 5 iki 75. Surasti mažiausią skaičių visame didžiajame
masyve ir kiek kartų jis pasikartojo.
*/


console.log('------ 3.26 Uzduotis ------')






console.log('*****************************');


/*
27.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės
atsitiktiniai skaičiai nuo 1 iki 17. Išrykiuoti vidinių masyvų reikšmes didėjančia tvarka.
*/

console.log('------ 3.27 Uzduotis ------')




console.log('*****************************');

/*
28.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės
atsitiktiniai skaičiai nuo 1 iki 17. Perrikiuoti vidinius masyvus pagal vidinių masyvų reikšmių
sumas didėjančia tvarka.
*/

console.log('------ 3.28 Uzduotis ------')


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