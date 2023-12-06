// Global scope
var a = 1;
let b = 2;
const c = 3;

function test() {
    // Complete different variables than the globals
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Function scope: ', a, b, c);
}

test();

// Block scope
if (true) {
    var a = 7; // Same as the global a
    let b = 8; // Different than the global b
    const c = 9; // Different than the global c

    console.log('Block scope: ', a, b, c);
}

console.log('Global scope: ', a, b, c);