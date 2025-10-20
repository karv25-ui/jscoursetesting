// Global Scope 
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    // Block Scope
    var blockVar = "i'm a blocked-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a global constant";
}

// Global Scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

// Block Scope
console.log(blockVar);
console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const fucntionCost = "I'm a bloack-scoped const";
}
show();

console.log(funcitonVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionCost); // Throws ReferenceError

console.log(blockVar); // console.log(blockVar);
console.log(blockLet); // console.log(blockLet);