console.log("Hello world!")

//-------------------------------------------------------------------------------------
/* Module / Function management- Here we have defined our function in some other module 
and we want to use it in this hello.js module */

const {sub,add} = require('./math')


console.log(sub(5,2))
console.log(add(2,3))