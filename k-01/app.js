function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// PASTABA!!!     == ir === skiriasi.... kad == tikrina tik reikšmes, === tikrina ir kintamųjų tipus
// 5 != '5' false
// 5 !== '5' true




// Uzduotis. parašyti kodą, kuris palygintų du skaičius ir atspausdintų, kuris didesnis - skaicius a, skaicius b, ar jie yra lygūs

const a = 2;
const b = 5;

if ( a > b){
    console.log(a, 'daugiau uz', b);
}
if ( a < b){
    console.log(a, 'maziau uz', b);
}
if ( a === b){
    console.log(a, 'lygu', b);
}

console.log('*****************************');

// Uzduotis. naudojant for ciklą atspausdint skaičius nuo 1 iki 10

let sk = 0;

for (i = 1; i < 11; i++){
    sk++;
    console.log(sk)
}

/*
for (let i = 1; i < 11; i++) {
    console.log(i);
}
*/

console.log('*****************************');

// Uzduotis. dabar atspausdinti 10 atsitiktinių skaičių, naudojant for ciklą. rand nuo iki 0, 20

for (let i = 1; i < 11; i++){
      console.log(rand(0, 20));
}

console.log('*****************************');

// Uzduotis. generuoti atsitiktinius skaičius, kol jų suma viršys 150, atsitikniai skaiciai nuo 5 iki 20



let sum = 0;
do {
    const sk = rand(5, 20);
    sum += sk;
}
while (sum < 151);

console.log(sum);


/*
let sum = 0;
while (sum < 150) {
    sum += rand (5, 20);
}
console.log('Suma:', sum);
*/

console.log('*****************************');

// Uzduotis.  generuoti atsitiktinius skaičius nuo 1 iki 15, kol bus sugeneruotas skaičius, dalus iš 7

let sk1;
while (sk1 % 7 !== 0) {
    sk1 = rand(1, 15)
    console.log(sk1);
}

console.log('*****************************');


// Uzduotis.  sukurti masyva, kurio ilgis atsitiktinis skaičius nuo 20 iki 30, o reikšmės - atsitiktiniai skaičiai nuo 1 iki 5.


const arr1 = [];

for (let i = 0; i < rand(20,30); i++) {
    arr1.push(rand(1, 5));
}
console.log(arr1);


console.log('*****************************');

// Uzduotis.  visas masyvo lygines reikšmes padalinti iš 2, o nelygines padauginti iš dviejų

const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0){
        arr2[i] = arr1[i] / 2;
    } else {
        arr2[i] = arr1[i] * 2;
}
}
console.log(arr2);

console.log('------- 2 var. (Audriaus) --------');

const newArray = [];

for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] % 2 !== 0) {
        newArray.push(arr1[i] * 2);
    } else {
        newArray.push(arr1[i] / 2);
    }
}

console.log(newArray);

console.log('*****************************');