// create closure or "wrapper" function
function parent() {
    // create a variable available anywhere inside this closure
    var message = "Hello world";

    // create a nested / child function
    function child() {
        console.log(message);
    }

    // return the child function
    return child;
}

// execute the function
var childFunction = parent();
childFunction();
