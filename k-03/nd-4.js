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


function iterptih1 (text) {
  let h1 = document.getElementById('title');  // <h1 id="title"></h1> ; let h1 = document.getElementById(querySelector('h1'));
  h1.innerTEXT = text;  
}

console.log('*****************************');


/*
32. Parašyti funkciją, kuri priima du kintamuosius. Patikrina ar jie yra skaičiai.
Grąžina tų skaičių sumą.
*/

console.log('------ 4.32 Uzduotis ------')

// console.log('------------ 1 var.------------')

function suma(a, b) {
  if ( typeof a !== `number`) {
      return `ERROR: pirmas parametras ne skaicius.`
  }
  if ( typeof b !== `number`) {
      return `ERROR: antras parametras ne skaicius.`
  }
  const rez = a + b;
  return rez;
}
// const a = 5;
// const b = 7;

// const r2 = suma(a, b);
// console.log(a, b, ' = ', r2);


// console.log('------------ 2 var.------------')


const suma1 = (c, d) =>  {
  if ( typeof c !== `number`) {
    return `ERROR`;
  }
  if ( typeof d !== `number`) {
    return `ERROR`;
  }  
    return c + d;
}

// const c = 8;
// const d = 19;

// console.log(c, d, ' = ', suma1(c, d));

console.log('*****************************');

/*
33. Parašyti funkciją, kuri priima du kintamuosius. Patikrina ar jie yra skaičiai. Palygina tuos
 du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis,ar antras,ar jie yra lygūs.
*/

console.log('------ 4.33 Uzduotis ------')


function palyg(e, f) {
  if ( typeof e !== `number` ) {
    return `ERROR: pirmas parametras ne skaicius.`
  }
  if ( typeof f !== `number` ) {
    return `ERROR: antras parametras ne skaicius.`
  }
  if ( e > f ){
    return `${e} > ${f} (e daugiau uz f)`;
  }
  if ( e < f ){
    return `${e} < ${f} (e maziau uz f)` ;
  }
  if ( e === f ){
    return `${e} = ${f} (e lygu f)`;
  }
}

// const e = 8;
// const f = 19;

// const r3 = palyg(e, f);
// console.log(e, f, r3);





console.log('*****************************');

/*
34. Parašyti funkciją, kuri priimtų vieną kintamajį.Turi patikrinti, ar tai yra skaičius
ir, ar tai yra keturženklis skaičius. Turi būti grąžinamas rezultatas, ar tie metai yra keliemieji.
*/

console.log('------ 4.34 Uzduotis ------')


function year (y) {
  if ( typeof y !== `number` ) {
    return `ERROR: parametras yra ne skaicius.`
  }
 
  if ( y.toString().length != 4 ){
    return `skaicius nera keturzenklis`;
  }
 
 if ( y.toString().length == 4 &&  y % 4 == 0 ){
    return `skaicius yra keturzenklis ir tai yra keliamieji metai`;
  }  else {
    return `skaicius yra keturzenklis, bet tai nera keliamieji metai`;
  }
}

// const y = 2024;

// const r4 = year(y);
// console.log(y, r4);



console.log('*****************************');

/*
35. Parašyti funkciją, kuri priimtų vieną kintamajį. Turi būti patikrinimas ar tas kintamasis yra skaičius.
Funkcija turi grąžinti skaičių, kur įvesto skaičiaus skaitmenys būtų išrikiuoti didėjimo tvarka.
*/

console.log('------ 4.35 Uzduotis ------')

function did (k) {
  if ( typeof k !== `number` ) {
    return `ERROR: parametras yra ne skaicius.`
  }
 
            // let result = Number(String(k).split('').sort().join(''));               // neitraukia skaiciaus 0
            // let sortNumber1 = +Array.from(k.toString()).sort().reverse().join('')   // reversas, ir neitraukia skaiciaus 0
            // let sortNumber3 = Array.from(k.toString()).sort().join('');             // string with 0
            // return sortNumber3
  let b = Array.from(k.toString()).map(Number);       // map int into array
  let stringResult = b.sort().join(' ');              // sort in ascending, then reverse & join
  let intResult = +stringResult;                      // +stringResult - made number without 0 / stringResult - made string with 0;
  return intResult;

  }

// const k = 202485875785963;

// const r5 = did(k);
// console.log(k, r5);

console.log('*****************************');

/*
36. Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos
(išskyrus vienetą ir patį save) Argumentą užrašykite taip, kad būtų galima įvesti tik sveiką skaičių.
*/

console.log('------ 4.36 Uzduotis ------')

function dal (p) {
  if ( typeof p !== `number` ) {
    return `ERROR: parametras yra ne skaicius.`
  }
  if (p % 1 !== 0) {
    return `ERROR: parametras yra ne sveikasis skaicius.`;
  }
  if (p < 1) {
    return `ERROR: parametras negali buti 0 arba neigiamas skaicius.`;
  }
  let count = 0;
  let half = Math.floor(p / 2);
  for (let i = 2; i <= half; i++) {
      if (p % i === 0) {
        count++;
        // arr36.push(i);   
      }    
  }
  return count;
}


// const p = 24;

// let arr36 =[];
// const r6 = dal(p);
// console.log('Skaicius yra:', p, ', o jo sveikieji dalikliai (isskyrus 1 ir ji pati) yra:', r6);
// console.log(arr36);



console.log('*****************************');


/*
37. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį. Turi būti patikrinimas,
kad kintamasis yra masyvas, kad jo visi elementai yra skaičiai ir, kad jo ilgis yra 10. 
Funkcija turi grąžinti telefono numerį tokiu formatu -"(XXX) XXX-XXXX".
*/

console.log('------ 4.37 Uzduotis ------')

function telefonoNumeris(t) {
  if (!Array.isArray(t)) {
      return `ERROR: kintamasis nera masyvas.`
  }
  if (t.length !== 10) {
      return `ERROR: netinkamas elementu kiekis. Elementu turi buti 10.`
  }

  for (let i = 0; i < t.length; i++) {
      if (typeof t[i] !== `number`) {
          return `ERROR: kazkuris elementas (ar elementai) nera skaicius.`
      }
      if (t[i] > 9) {
        return `ERROR: elementai turi buti vienzenkliai skaiciai.`
      }
      if (t[i] % 1 !== 0) {
        return `ERROR: elementas yra ne sveikasis skaicius.`;
        }
      if (t[i] < 0) {
        return `ERROR: elementas negali buti neigiamas skaicius.`;
      }
         
  }
  return `(${t[0]}${t[1]}${t[2]}) ${t[3]}${t[4]}${t[5]}-${t[6]}${t[7]}${t[8]}${t[9]}`;
}

// console.log(telefonoNumeris([3, 7, 0, 6, 4, 5, 6, 1, 9, 2]));
// console.log(telefonoNumeris([3, 17, 0, 6, 1, 2, 7, 8, 9, 10]));

console.log('*****************************');

/*
38. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas,
kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis
( pirminisskaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)
*/

console.log('------ 4.38 Uzduotis ------')

function pirminisSkaicius (s) {
  if (typeof s !== `number` || !isFinite(s)) {
      return `ERROR: parametras yra ne skaicius.`
  }
  if (s === 1) {
      return `Skaicius yra nei pirminis nei sudetinis`;
  }
  for (let i = 2; i < s; i++) {
      if (s % i === 0) {
          return `Skaicius yra sudetinis.`
      }
  }
  return `Skaicius yra pirminis.`
}

// const s = 7;
// const r8 = pirminisSkaicius(s);

// console.log(s, pirminisSkaicius(7));

// console.log(s, r8);

console.log('*****************************');


/*
39. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji.
Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius,
kitas masyvas).Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - 
grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė.
*/

console.log('------ 4.39 Uzduotis ------')

function lygineSuma(v, z) {
  if (!((Array.isArray(v) && Array.isArray(z)) || ((typeof v === 'number' && typeof z === 'number')))) {
      return `ERROR: kintamieji neatitinka salygos - abu turi buti arba skaičiai, arba masyvai.`;
  }
  if(Array.isArray(v)) {
      if((v.length + z.length) % 2 === 0) {
          return v.length + z.length;
      } else {
          return `ERROR: masyvu ilgiu suma yra nelygine.`;
      }
  } else {
      if((v + z) % 2 === 0) {
          return a + b;
      } else {
          return `ERROR: skaiciu suma yra nelygine.`;
      }
  }
}

// console.log(lygineSuma([`stalas`,`spinta`], [`medis`,`gele`]));
// console.log(lygineSuma(5, 8));
// console.log(lygineSuma(10, []));


console.log('*****************************');


/*
40. Funkcija turi priimti du kintamuosius.Vienas turi būti skaičius, kitas - masyvas su skaičiais
ir minimum 7 elementais. Funkcija turi grąžinti true, jei skaičius yra masyve, ir false,
jei nėra tokio skaičiaus masyve.
*/

console.log('------ 4.40 Uzduotis ------')

function tikrina (q, r) {
  if (!((Array.isArray(q) && typeof r === 'number') || ((typeof q === 'number' && Array.isArray(r))))) {
      return `ERROR: kintamieji neatitinka salygos - vienas turi buti skaičus, o kitas - masyvas.`;
  }
  if (q.length < 7 || r.length < 7) {
      return `ERROR: netinkamas elementu kiekis. Elementu masyve turi buti daugiau negu 7.`;
  }
  if ((Array.isArray(q) && q.some(item => typeof item !== 'number') || (Array.isArray(r) && r.some(item => typeof item !== 'number')))) {
    return `ERROR: masyve turi buti tik skaiciai.`;
  }

  if(Array.isArray(q)) {
    for (let i = 0; i < q.length; i++) {
      if (q[i] === r) {
          return true;
      }
    }
  return false;
  }
     
  if(Array.isArray(r)) {
    for (let i = 0; i < r.length; i++) {
      if (r[i] === q) {
          return true;
      }
    }
  return false;
  }
}


console.log(tikrina([8, 5, 3, -9, 'hi', 0, 25, 'ei', 8, 1], 5));
console.log(tikrina(5, [8, 5, 3, -9, -52.3, 0, 25, 65, 8, 1]));


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
40. Funkcija turi priimti du kintamuosius.Vienas turi būti skaičius, kitas masyvas su skaičiais
ir minimum 7 elementais. Funkcija turi grąžinti true, jei skaičius yra masyve, ir false,
jei nėra tokio skaičiaus masyve.

*/








/*

function descendingOrder(a){
    let b = Array.from(a.toString()).map(Number);       // map int into array
    let stringResult = b.sort().reverse().join("");     // sort in ascending, then reverse & join
    let intResult = ~~stringResult;                     // double bitwise operator to turn str to int
    return intResult;                                   // return final int
}

*/

/*
function did (kint) {
  if ( typeof kint !== `number` ) {
    return `ERROR: parametras yra ne skaicius.`
  }
 
  // let result = Number(String(kint).split('').sort().join(''));   // neitraukia skaiciaus 0
  // return result
  // let sortNumber = Number([...('' + kint)].sort().reverse().join(''));
  // let sortNumber1 = +Array.from(kint.toString()).sort().reverse().join('')
  // let sortNumber2 = Array.from(kint.toString()).sort().reverse().join('');
  // let sortNumber3 = Array.from(kint.toString()).sort().join('');

  // return sortNumber3

  let b = Array.from(kint.toString()).map(Number);       // map int into array
  let stringResult = b.sort().reverse().join("");     // sort in ascending, then reverse & join
  let intResult = +stringResult;                     // (double bitwise operator to turn str to int - is not)
  return intResult;

    
  }

  const kint = 202485875785963;
  
  const rez5 = did(k);
  console.log(kint, rez5);


-------------------------------------------------------------------------------------------------------------------------

Написать функцию, возвращающую количество делителей числа

function getDivisors(number = 1) {
    if (!Number.isInteger(number) || number < 1) {
        alert("number должен быть целым числом и больше нуля!");
        return;
    }
    // Проще перебирать делители от 1 до половины числа
    // (округлим в меньшую сторону),
    // а затем само число считается делителем.
    let half = Math.floor(number / 2), // Точная половина числа
        count = 1; // Само число уже считается делителем
    for (let i = 1; i <= half; i++) {
        if (!(number % i))
            ++count;
    }
 
    return count;
}
 
console.log(getDivisors(4)); //  = 3  // 1, 2, 4
console.log(getDivisors(5)); //   = 2  // 1, 5
console.log(getDivisors(12)); //  = 6  // 1, 2, 3, 4, 6, 12
console.log(getDivisors(30)); //  = 8  // 1, 2, 3, 5, 6, 10, 15, 30


---------------------------------------------

function findDividers(start, end) {

  var dividers = [];
  for (let i = start + 1; i < end; i++) {
    dividers.push(i);
  }
  console.log(dividers);
}

findDividers(200, 500);

*/


