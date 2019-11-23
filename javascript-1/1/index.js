const a = 100500; // 1
let s = "Ы"; // 2
s = s + a; // 3
let b = 1234; // 4
b = b + 1; // 5.1
b++; // 5.2
b = ++b; // 5.3
console.log(b); // 5 вывод
let li = [1,2,3,4,5,6,7,8]; // 6
li.splice(3,3, 10, 5e9); // 7, 8
console.log(li); // 7, 8 вывод
let ob = {
    numbers: "",
}; // 9
console.log("тип значения с ключем numbers - " + typeof(ob['numbers'])); // 9 вывод
ob['numbers'] = li.join(';'); // 10
console.log(ob); // 10 вывод
ob['newNumbers'] = li.join(';') + ";" + li[4] + ";" + li[4]; // 11
console.log(ob); // 11 вывод