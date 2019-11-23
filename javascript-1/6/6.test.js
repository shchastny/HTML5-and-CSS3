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
function game() {
    let arrRandomSort = Birds.sort(function () {return Math.floor(Math.random() * Birds.length);
    });
    for(bird in Birds) {
        if (Birds[bird].wasEaten == false) {
            for(bidrN in Birds) {
                if (Birds[bird] != Birds[bidrN] && Birds[bidrN].wasEaten == false) {
                    Birds[bidrN].wasEaten = true;
                    Birds[bird].point++;
                }
            }
        }
    }
}

game();

console.log(Birds);