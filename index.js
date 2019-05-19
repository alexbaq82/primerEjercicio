function promedio(nota_uno, nota_dos, nota_tres){
    let resultado=nota_uno+nota_dos+nota_tres;
    console.log(resultado);
}

promedio(2,3,4);

let promedio2 = (nota1, nota2, nota3)=>{
    setTimeout(function(){
        let resultado = (nota1 + nota2 + nota3)/3;
        return resultado;
    },2000);
}

console.log('El promedio es: ', promedio2 (2,3,4));

let promedio3 = (nota1, nota2, nota3, callback)=>{
    setTimeout(function(){
        let resultado = (nota1 + nota2 + nota3)/3;
        callback(resultado);
    },0);
}

promedio3(5,4,5, function(resultado){
    console.log(resultado);
})