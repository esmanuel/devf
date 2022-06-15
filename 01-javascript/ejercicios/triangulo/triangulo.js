function matematica(base,altura){
    const triangulo= base*altura
    return triangulo;
}

function obtenerAreaTriangulo(){
    let datoBase=document.getElementById('base');
    let valorDeBase= Number(datoBase.value);

    let datoAltura=document.getElementById('altura');
    let valorDeAltura=Number(datoAltura.value);

    let area=matematica(valorDeBase,valorDeAltura);

    let areaTriangulo= area/2;

    let elementoArea = document.getElementById('area');
    elementoArea.value =areaTriangulo;
}