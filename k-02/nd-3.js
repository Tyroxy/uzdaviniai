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


/*
console.log('---------------------------')

console.log('--- 2 var. (pusiau Audriaus :) ) ----')

const arr27a = [];
const arr271a = [];

for (let j = 0; j < 10; j++) {
    let temp27a = [];
    let temp271a = [];
    for (let i = 0; i < 10; i++) {
        temp27a.push(rand (1, 17));
        temp271a = [...temp27a];
    }
    
    temp27a.sort(function(a, b){return a-b});
    arr271a.push(temp271a);
    arr27a.push(temp27a);
}

console.log(arr271a);
console.log(arr27a);
*/

console.log('*****************************');

/*
28.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės
atsitiktiniai skaičiai nuo 1 iki 17. Perrikiuoti vidinius masyvus pagal vidinių masyvų reikšmių
sumas didėjančia tvarka.
*/

console.log('------ 3.28 Uzduotis ------')

/*
console.log('------------ 1 var.------------')

const arr28 = []; 
let arr281 = []; 
let temp281 = []; 
let temp2811 = []; 

for (let i = 0; i < 10; i++){
    const temp28 = [];
    for (let j = 0; j < 10; j++){
        temp28.push(rand(1, 17));
        temp28.sort(function(a, b){return a-b});
    }
    temp281.push(temp28.reduce((a, b) => a + b, 0));
    console.log('Suma masyvo', temp28, 'reiksmiu yra lygi', temp281[i]);
    arr28.push(temp28);

    temp2811 = [...temp281];
    

    temp2811.sort(function(a, b){return a-b});


}

console.log('----------------------------------------------------------------------')

for (let i = 0; i < temp281.length; i++){
    for (let j = 0; j < temp281.length; j++){
       if (temp2811[i] == temp281[j]) {
           arr281.push(arr28[j]);   
       }
       
   }

   
   console.log('Suma isrusiuoto masyvo', arr281[i], 'reiksmiu yra lygi', temp2811[i]); 
}

// Reikia "shustro" metodo:
//arr281 = [...arr28];

// [...arr281].sort((a,b)=>a-b).reduce((a,c)=>a+c,0);


// arr281[i].reduce((a, b) => a + b, 0) => {
//     arr281.sort((a, b) => {return a-b})};

//arr281.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));


console.log('----------------------------------------------------------------------')


console.log(arr28);
//console.log('Masyvas su isrusiuotomis vidiniu masyvu reiksmemis:', arr281);




*/

console.log('---------------------------')

console.log('------------ 2 var.------------')

const arr28a = [];
let temp281a = [];
let obj28a = {};
const arr_28a = [];
let temp281a1 = [];

for (let j = 0; j < 10; j++) {
    let temp28a = [];
   
    for (let i = 0; i < 10; i++) {
        temp28a.push(rand (1, 17));
        
    }
    //console.log(temp28a);
    temp281a.push(temp28a.reduce((a, b) => a + b, 0));
    //console.log(temp281a[j]);

    obj28a[temp28a] = temp281a[j];

    console.log('Suma masyvo', temp28a, 'reiksmiu yra lygi', temp281a[j]);

    temp281a1 = [...temp281a];
    

    temp281a1.sort(function(a, b){return a-b});
          

    arr28a.push(temp28a);
    
}

console.log('----------------------------------------------------------------------')

for (let i = 0; i < temp281a.length; i++){
     for (let j = 0; j < temp281a.length; j++){
        if (temp281a1[i] == temp281a[j]) {
            arr_28a.push(arr28a[j]);   
        }
        
    }

    
    console.log('Suma isrusiuoto masyvo', arr_28a[i], 'reiksmiu yra lygi', temp281a1[i]); 
}

console.log('----------------------------------------------------------------------')

console.log(obj28a);

console.log('----------------------------------------------------------------------')

console.log(temp281a);

console.log('----------------------------------------------------------------------')

console.log(temp281a1);

// console.log('----------------------------------------------------------------------')

// console.log(arr28a);

// console.log('----------------------------------------------------------------------')

// console.log(arr_28a)



console.log('*****************************');


/*
29.Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės
atsitiktiniai skaičiai nuo 1 iki 17. Iš dvimačio masyvo sukurti vieną vienmatį masyvą – visas
dvimačio masyvo masyvų reikšmes perkelti į naują masyvą.
*/

console.log('------ 3.29 Uzduotis ------')


const arr29 = []; 
let arr291 = [];
let arr292 = [];

for (let i = 0; i < 10; i++){
    const temp29 = [];
    for (let j = 0; j < 10; j++){
        temp29.push(rand(1, 17));
}
    
    arr29.push(temp29);
    
    arr292.push(...(temp29));
}

arr291 = arr29.flat(1)

console.log('Pradinis dvisluoksnis masyvas su reiksmemis nuo 1 iki 17:', arr29);
console.log('----------------------------------------------------------------------')
console.log('Transformuotas (su flat) vienmatis masyvas:', arr291);
console.log('----------------------------------------------------------------------')
console.log('Kitu budu (su spread) transformuotas vienmatis masyvas:', arr292);




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

/*

How to find the sum of an array of numbers

const arr = [1, 2, 3, 4];


1) Using built-in reduce()

function total(arr) {
  if(!Array.isArray(arr)) return;
  return arr.reduce((a, v)=>a + v);
}

2) Using for loop

function total(arr) {
  if(!Array.isArray(arr)) return;
  let totalNumber = 0;
  for (let i=0,l=arr.length; i<l; i++) {
     totalNumber+=arr[i];
  }
  return totalNumber;
}

3) Using while loop

function total(arr) {
  if(!Array.isArray(arr)) return;
  let totalNumber = 0, i=-1;
  while (++i < arr.length) {
     totalNumber+=arr[i];
  }
  return totalNumber;
}

4) Using array forEach

function total(arr) {
  if(!Array.isArray(arr)) return;
  let sum=0;
  arr.forEach(each => {
    sum+=each;
  });
  return sum;
};

and call it like this:

total(arr); //return 10





*/

/* EXAMPLES
const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); // 6

----------------------------------------------------------------

console.log( [1, 2, 3, 4].reduce((a, b) => a + b, 0) );
console.log( [].reduce((a, b) => a + b, 0) );
---------------------------------------------------------------
function sumArray(arr) {
    let total = 0;
    arr.forEach(function(element){
        total += element;
    })
    return total;
}
let sum = sumArray([1,2,3,4])
console.log(sum)
------------------------------------------------------------------

const numbers = [1,2,3,4];
let total = 0;
for (let x = 0; x < numbers.length; x++) {
    total += numbers[x];
}
console.log(total); //10 (1+2+3+4)

------------------------------------------------------------------

let arr = [1, 2, 3, 4];
let sum = arr.reduce((v, i) => (v + i));
console.log(sum);

-------------------------------------------------------------------

const array = [1, 2, 3];
for (let i = 0, sum = 0; i < array.length;
     sum += array[i++]);

---------------------------------------------------------------------

Daugiasluoksniams masyvams:
arr= [ [ [1,2,3,4],[1,2,3,4],[1,2,3,4] ],
       [ [1,2,3,4],[1,2,3,4],[1,2,3,4] ] ];
      
sum = arr.flat(Infinity).reduce((a,c)=> a+c,0);

console.log(sum);  // 60

----------------------------------------------------------------------

const array = [1, 2, 3, 4];
let result = 0;
array.forEach(number => {
  result += number;
})
console.log(result); // Should give 10

-----------------------------------------------------------------------

const array = [10, 20, 30, 40];
const add = (a, b) => a + b
const result = array.reduce(add);

console.log(result); // Should give 100

------------------------------------------------------------------------

array = [1, 2, 3, 4];
sum = _.sum(array); // sum == 10

------------------------------------------------------------------------

const massiv = [1, -1, 111, 2, -2]
massiv.map(i => x += i, x = 0).reverse()[0]

console.log(massiv);
111

-----------------------------------------------------------------------

function sum (x){
   let s = 0;
   for (i = 0; i < x.length; i++){
      s += x[i]
   }
   return s
}

---------------------------------------------------------------------------

function summArrayElements(arr){
  let x = 0;
  return arr.map(i=>x+=i, x).reverse()[0]
}

---------------------------------------------------------------------------

let array = [10, 20, 30, 40, 50]
let total = 0

for(let i in array)
{
    total += array[i]
}

console.log(total)

---------------------------------------------------------------------------

let array = [10, 20, 30, 40, 50]
let total = array.reduce((x, y) => x + y)
console.log(total)

-----------------------------------------------------------------------------


With reduce()

[1, 2, 3, 4].reduce((a, b) => a + b, 0); // 10
----------------------------------------------------------------
With forEach()

let sum = 0;
[1, 2, 3, 4].forEach(n => sum += n);
sum; // 10
-----------------------------------------------------------------
With Parameter

function arrSum(arr) { 
  sum = 0;  
  arr.forEach(n => sum += n); 
  return sum; 
}

arrSum([1, 2, 3, 4]) // 10

-----------------------------------------------------------------------------

let arr = ["A", "B", "C", "D", "E", "F"];
let ind = [4, 0, 5, 2, 1, 3];
let obj = {}
for(let i=0;i<arr.length;i++)
    obj[ind[i]]=arr[i];
console.log(obj);

------------------------------------------------------------------------------

let arr = ["A", "B", "C", "D", "E", "F"];
let ind = [4, 0, 5, 2, 1, 3];

function rearrange(arr, ind){
  let map = [];
  for (let i = 0; i < arr.length; i++)   map[ind[i]] = arr[i];
  for (let i = 0; i < arr.length; i++)   arr[i] = map[i];
}

rearrange(arr, ind);

console.log(arr);

---------------------------------------------------------------------------------



*/



/*

Sort array and start sum form smallest numbers (snippet shows difference with nonsort)

[...arr].sort((a,b)=>a-b).reduce((a,c)=>a+c,0)


arr=[.6,9,.1,.1,.1,.1]

sum     =                       arr.reduce((a,c)=>a+c,0)
sortSum = [...arr].sort((a,b)=>a-b).reduce((a,c)=>a+c,0)

console.log('sum:     ',sum);
console.log('sortSum:',sortSum);
console.log('sum==sortSum :', sum==sortSum);

// we use .sort((a,b)=>a-b) instead .sort() because
// that second one treat elements like strings (so in wrong way)
// e.g [1,10,9,20,93].sort() -->  [1, 10, 20, 9, 93]

-------------------------------------------------------------------------------------

For multidimensional array of numbers use arr.flat(Infinity)

Hide code snippet

arr= [ [ [1,2,3,4],[1,2,3,4],[1,2,3,4] ],
       [ [1,2,3,4],[1,2,3,4],[1,2,3,4] ] ];
      
sum = arr.flat(Infinity).reduce((a,c)=> a+c,0);

console.log(sum);  // 60


---------------------------------------------------------------------------------------

function bubbleSortConcept1(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}


--------------------------------------------------------------------------------------------

  do {
    swapped = false;
    console.log(arr);
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        // Save the value to a variable so we don't lose it
        let temp = item;
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    })
  } while (swapped);
}

---------------------------------------------------------------------------------------------------


function bubbleSort(arr) {    
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
                if (arr[j] > arr[j + 1]) {
                var swap = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                }
            }
        }    
    return arr;
}


------------------------------------------------------------------------------------------------------

// исходный массив
var arr = [3,1,9,8,11,6]

// определяем количество прогонов
// перебирать будем всё до предпоследнего элемента, каждый раз сдвигая его ближе к началу
for (let j = arr.length - 1; j > 0; j--) {
    // основной цикл внутри каждого прогона
    // перебираем все элементы от первого до последнего в прогоне, который мы определили выше
    for (let i = 0; i < j; i++) {
      // если текущий элемент больше следующего
      if (arr[i] > arr[i + 1]) {
        // запоминаем значение текущего элемента
        let temp = arr[i];
        // записываем на его место значение следующего
        arr[i] = arr[i + 1];
        // а на место следующего ставим значение текущего, тем самым меняем их местами
        arr[i + 1] = temp;
      }
      // выводим текущее состояние массива в консоль
      // это необязательный шаг, он здесь для наглядности
      console.log(arr);
    }
  }

------------------------------------------------------------------------


array.forEach(callback(currentValue, index, arr),thisValue) 
array.forEach(value, i, arr) 


------------------------------------------------------------------------

Двойной цикл FOR


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}

-----------------------------------------------------------------------------------


const array = [1, [2, [3]]];

array.flat();
// [1, 2, [3]]


array.flat(1);
// [1, 2, [3]]


array.flat(Infinity);
// [1, 2, 3]


------------------------------------------------------------------------------------

const duplicate = x => [x, x];
[2, 3, 4].map(duplicate);
// [[2, 2], [3, 3], [4, 4]]


[2, 3, 4].map(duplicate).flat(); 
// [2, 2, 3, 3, 4, 4]


[2, 3, 4].flatMap(duplicate); 
// [2, 2, 3, 3, 4, 4]


*/


