// не совсем понял условие "вторая цифра - 2", поэтому сделал два варианта

//Вариант 1: "Условие 'Вторая цифра - 2' относиться к числу которое выводим\перебираем.
let variantOne = [];
let n = 10000;
while (n < 150000) {
    if (((n-1) + (n-2) + (n-3)) % 100 === 52) {
        if (String(n)[1] == 2) {
            variantOne.push(n);
        }
    }
    n++;
}
console.log("Вариант 1 \n" + variantOne.join(", ") + "\nВсего элементов: " + variantOne.length);

// Вариант 2: "Условие 'вторая цифра - 2' относиться к сумме трех предыдущих
let variantTwo = [];
n = 10000;
while (n < 150000) {
    if (((n-1) + (n-2) + (n-3)) % 100 === 52) {
        if (String(((n-1) + (n-2) + (n-3)))[1] == 2) {
            variantTwo.push(n);
        }
    }
    n++;
}
console.log("\nВариант 2 \n" + variantTwo.join(", ") + "\nВсего элементов: " + variantTwo.length);





// len n = 0;
// while (n < stopValue) {}

// for (let n = 0; n < stopValue; n++) {}
// for (let n of object) {} Перебирает элементы (массивы, строки)
// for (let n in object) {} Перебирает индексы или ключи
// array.map(n => n['new key'] = array2[key] перезаписываем массив
// array.forEach(n => действие);  работаем с данными не перезаписывая