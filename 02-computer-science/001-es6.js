function farenheitToCelsius(tempF){
    let conversionC = Math.floor((tempF-32)/1.8);
    return `${conversionC}ºC.`;
};
console.log(farenheitToCelsius(90));

const FarenheitToCelsius = tempF => {
    Math.floor((tempF-32)/1.8)
}
console.log(farenheitToCelsius(120));

const palindromos = word => {
    let palindromo= word.split('').reverse().join('').toLowerCase()
    if(word === palindromo){
        return true
    }else{
        return false
    }
};
console.log(palindromos('ojo'));


function imprimeTodo(...todo){
    return console.log(todo);
};
imprimeTodo('hola','como', 'estas', 'ser humano?');





function longestCountry(...paises){

    let masPalabras=[]

    for(let i = 0; i<paises.length; i++){
        let paisLongitud = paises[i].length;
        masPalabras.push(paisLongitud);
        
    }
masPalabras.sort();
return console.log(masPalabras.pop());
}
longestCountry('usa','dinamarca','mexico');

let arrNum = [1,2,3,4]

arrNum.forEach(el => {
    console.log(el*2);
});
    
