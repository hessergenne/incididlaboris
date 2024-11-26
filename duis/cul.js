function initialize(init) {
    if (typeof init === 'string') {
        // Handle the case where `init` is a string
        console.log("Initializing with a string:", init);
    } else if (Array.isArray(init)) {
        // Handle the case where `init` is an array
        console.log("Initializing with an array:", init);
    } else if (isFunction(init)) {
        // Handle the case where `init` is a function
        console.log("Initializing with a function");
        init();  // Call the function
    } else {
        // Handle other cases
        console.log("Unsupported type");
    }
}

// Utility function to check if a value is a function
function isFunction(value) {
    return typeof value === 'function';
}

// Example usage
initialize("Hello, world!");
initialize([1, 2, 3]);
initialize(function() {
    console.log("This is a function.");
});
initialize(42);
