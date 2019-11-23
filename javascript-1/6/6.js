/*1. Игра в выживание птичек. Цель игры: выяснить, какая птичка съест больше всего своих сородичей.
Алгоритм решения:
1. Создайте класс Bird.
2. Добавьте птичке свойства name, points, wasEaten.
3. Создайте 10 птичек с именами Bird 1, Bird 2, ..... Bird 3.
4. Запустите цикл: до тех пор, пока не останется только одна живая птичка.
Цикл должен выбирать случайным образом одну из живых птиц и скармливать ей любую другую
(та, которая съедена, становится wasEaten=true, а та, которую покормили, — point++).
 */
class Bird {
    constructor(name) {
        this.name = name;
        this.point = 0;
        this.wasEaten = false;
    }
}

let birds = [];
for(let i = 1; i < 11; i++){
    birds.push( new Bird('Bird ' + i) );
}

function game(arr) {
    let deads = [];
    while (arr.length > 1) {
        let killer = Math.floor(Math.random() * arr.length);
        let dead = Math.floor(Math.random() * arr.length);
        if (arr[killer] != arr[dead]) {
            arr[killer]['point'] += 1;
            arr[dead]['wasEaten'] = true;
            deads.push(arr[dead]);
            arr.splice(dead, 1);
        } else {
            dead = Math.floor(Math.random() * arr.length);
        }
    }
    console.log('Победитель');
    console.log(arr);
    console.log('Съеденные');
    console.log(deads);
}

game(birds);






//Predator[0] = Birds[randomElementPredator];
//birdsLunch = Birds.splice(randomElementPredator, 1);
//let randomElementLunch = Math.floor(Math.random() * birdsLunch.length);
//if (birdsLunch[randomElementLunch]['wasEaten'] == true) {
//    birdsLunch[randomElementLunch]['wasEaten'] = false;