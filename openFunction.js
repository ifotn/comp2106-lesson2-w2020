// create a function to be called multiple times without a closure
function openFunction() {
    var counter = 0;

    // add 1 to the counter and display the value
    counter++;
    console.log(counter);
}

// call the function more than once
openFunction();
openFunction();
