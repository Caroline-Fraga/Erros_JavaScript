function validaArray(arr, num){
    try{
        if (!arr && !num ) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') 
            throw new TypeError("Array tem de ser do tipo object");

        if(typeof arr !== 'number') 
            throw new TypeError("Array tem de ser do tipo number");

        if(arr.length !== num) 
            throw new RangeError("Tamanho inválido");

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("É um erro referenceError");
            console.log(e.message);
        }   else if (e instanceof TypeError) {
            console.log("É um erro TypeError");
            console.log(e.message);    
        }   else if (e instanceof RangeError) {
            console.log("É um erro RangeError")
            console.log(e.message);
        }   else {
            console.log("É um erro não esperado:" + e);
        }
    }
}

console.log(validaArray(9, 7));