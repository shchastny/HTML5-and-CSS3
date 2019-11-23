let result = 1;
function foo(a) {
    if (a === undefined) {
        return result;
    }
    result = result * a;
    return foo;
}

console.log (foo(5)(5)(5)());