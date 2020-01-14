// use a closure so the function and variable are only created once & persist
function closedFunction() {
    var counter = 0;

    // use a nested function and assign it to a variable
    var increment = function() {
        // add 1 and display the current value
        counter++;
        console.log(counter);
    }

    // the closure now returns the 2nd variable
    return increment
}

// create the closure and counter in memory once
var countMe = closedFunction()

// execute the function more than once
countMe();
countMe();
