// create a closure structure in plain js



function parent() {
    // this variable exists in the entire scope of the parent function, including any child functions
    var message = "Hello world";

    // create a nested or child function
    function child() {
        console.log(message);
    }

    // execute the child function
    child();
}

// now try to execute this
parent();

