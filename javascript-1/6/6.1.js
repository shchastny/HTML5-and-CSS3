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
let Birds = [];
for(let i = 1; i < 11; i++){
    Birds.push( new Bird('Bird ' + i) );
}
//let arrRandomSort = arr.sort(function () {return Math.floor(Math.random() * arr.length);});
function game() {
    let Predator = [];
    let birdsLunch = [];
    let eaten = 0;
    while (eaten < 9) {
        let randomElementPredator = Math.floor(Math.random() * Birds.length);
        Predator[0] = Birds[randomElementPredator];
        birdsLunch = Birds.splice(randomElementPredator, 1);
        let randomElementLunch = Math.floor(Math.random() * birdsLunch.length);
        if (Predator[0]['wasEaten'] == false) {
            if (birdsLunch[randomElementLunch]['wasEaten'] == true) {
                birdsLunch[randomElementLunch]['wasEaten'] = false;
                Predator[0]['point']++;
                eaten++;
                Birds.push(Predator[0]);
            } else {
                while (birdsLunch[randomElementLunch]['wasEaten'] == false) {
                    randomElementLunch = Math.floor(Math.random() * birdsLunch.length);
                }
            }
        }
    }
    }

game();
console.log(Birds);


