function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('============ Uzdaviniai 4 dalis ===========')


// PASTABA!!!     == ir === skiriasi.... kad == tikrina tik reikšmes, === tikrina ir kintamųjų tipus
// 5 != '5' false
// 5 !== '5' true




/*
31. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą.
*/

console.log('------ 4.31 Uzduotis ------')




console.log('*****************************');


/*
32. Parašyti funkciją, kuri priima du kintamuosius. Patikrina ar jie yra skaičiai.
Grąžina tų skaičių sumą.
*/

console.log('------ 4.32 Uzduotis ------')



console.log('*****************************');

/*
33. Parašyti funkciją, kuri priima du kintamuosius. Patikrina ar jie yra skaičiai. Palygina tuos
 du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis,ar antras,ar jie yra lygūs.
*/

console.log('------ 4.33 Uzduotis ------')




console.log('*****************************');

/*
34. Parašyti funkciją, kuri priimtų vieną kintamajį.Turi patikrinti ar tai yra skaičiu
ir ar tai yra keturženklis skaičius. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.
*/

console.log('------ 4.34 Uzduotis ------')




console.log('*****************************');

/*
35. Parašyti funkciją, kuri priimtų vieną kintamajį. Turi būti patikrinimas ar tas kintamasis yra skaičius.
Funkcija turi grąžinti skaičių, kur įvesto skaičiaus skaitmenys būtų išrikiuoti didėjimo tvarka.
*/

console.log('------ 4.35 Uzduotis ------')

const arr25 = []; 

for (let i = 0; i < 20; i++){
    const temp25 = []; 
    for (let j = 0; j < rand(5, 18); j++){
        temp25.push(rand(5, 75));     
}
  arr25.push(temp25);
}

console.log('Sugeneruotas dvisluoksnis masyvas su reiksmemis nuo 5 iki 30:', arr25);
console.log('Didziausia viso didziojo masyvo skaiciaus reiksme:', Math.max(...temp25);

console.log('*****************************');

/*
36. Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos
(išskyrus vienetą ir patį save) Argumentą užrašykite taip, kad būtų galima įvesti tik sveiką skaičių.
*/


console.log('------ 4.36 Uzduotis ------')






console.log('*****************************');


/*
37. Parašyti funkcijątelefonoNumeris, kuri priima vieną kintamąjį. Turi būti patikrinimas,
kad kintamasis yra masyvas, kad jo visi elementai yra skaičiai ir, kad jo ilgis yra 10. 
Funkcija turi grąžinti telefono numerį tokiu formatu -"(XXX) XXX-XXXX".
*/

console.log('------ 4.37 Uzduotis ------')




console.log('*****************************');

/*
38. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas,
kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis
( pirminisskaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)
*/

console.log('------ 4.38 Uzduotis ------')


console.log('*****************************');


/*
39. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji.
Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius,
kitas masyvas).Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - 
grąžinti masyvų ilgių sumą. Jei suma nelyginė -grąžinti tekstą, kad suma nelyginė.
*/

console.log('------ 4.39 Uzduotis ------')


console.log('*****************************');


/*
40. Funkcija turi priimti du kintamuosius.Vienas turi būti skaičius, kitasmasyvas su skaičiais
ir minimum 7 elementais. Funkcija turi grąžinti true, jei skaičius yra masyve, ir false,
jei nėra tokio skaičiaus masyve.
*/

console.log('------ 4.40 Uzduotis ------')


console.log('*****************************');



/*
31. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą.
32. Parašyti funkciją, kuri priima du kintamuosius. Patikrina ar jie yra skaičiai.
Grąžina tų skaičių sumą.
33. Parašyti funkciją, kuri priima du kintamuosius. Patikrina ar jie yra skaičiai. Palygina tuos
 du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis,ar antras,ar jie yra lygūs.
34. Parašyti funkciją, kuri priimtų vieną kintamajį.Turi patikrinti ar tai yra skaičiu
ir ar tai yra keturženklis skaičius. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.
35. Parašyti funkciją, kuri priimtų vieną kintamajį. Turi būti patikrinimas ar tas kintamasis yra skaičius.
Funkcija turi grąžinti skaičių, kur įvesto skaičiaus skaitmenys būtų išrikiuoti didėjimo tvarka.
36. Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos
(išskyrus vienetą ir patį save) Argumentą užrašykite taip, kad būtų galima įvesti tik sveiką skaičių.
37. Parašyti funkcijątelefonoNumeris, kuri priima vieną kintamąjį. Turi būti patikrinimas,
kad kintamasis yra masyvas, kad jo visi elementai yra skaičiai ir, kad jo ilgis yra 10. 
Funkcija turi grąžinti telefono numerį tokiu formatu -"(XXX) XXX-XXXX".
38. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas,
kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis
( pirminisskaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)
39. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji.
Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius,
kitas masyvas).Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - 
grąžinti masyvų ilgių sumą. Jei suma nelyginė -grąžinti tekstą, kad suma nelyginė.
40. Funkcija turi priimti du kintamuosius.Vienas turi būti skaičius, kitasmasyvas su skaičiais
ir minimum 7 elementais. Funkcija turi grąžinti true, jei skaičius yra masyve, ir false,
jei nėra tokio skaičiaus masyve.



*/