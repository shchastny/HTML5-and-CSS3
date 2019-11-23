function foo(a) {
    let result = a;
    function foo2(b) {
        b === undefined ? result *= 1 : result *= b;
        return foo2;
    }
    foo2.toString = function() {
        return result;
    };
    return foo2;
}


console.log("Результат: " + foo(5)(2)());
console.log("Результат: " + foo(5)());
console.log("Результат: " + foo(2)(1)(3)(4)());


