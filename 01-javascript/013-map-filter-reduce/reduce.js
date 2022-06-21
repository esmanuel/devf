const arrayNumeros= [1,2,3,400,59,6987];

const valorInicial=0;

const sumarNumeros = function(acumulador, valorActual){
return acumulador + valorActual;
};

const resultado = arrayNumeros.reduce(sumarNumeros,valorInicial);
console.log(resultado);