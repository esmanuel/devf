function calcularArea(base, altura) {
    
    return (base * altura);
}
calcularArea();

function obtenerArea() {


    const ladoA = document.getElementById('base');
    const valorDeLaBase = Number(ladoA.value);

    const ladoB = document.getElementById('altura');
    const valorDeLaAltura = Number(ladoB.value);

    const area = calcularArea(valorDeLaBase, valorDeLaAltura);

    const areaElemento= document.getElementById('area');
    areaElemento.value=area;
}

/* function obtenerAreaTriangulo() {


    const ladoA = document.getElementById('base');
    const valorDeLaBase = Number(ladoA.value);

    const ladoB = document.getElementById('altura');
    const valorDeLaAltura = Number(ladoB.value);

    const area = calcularArea(valorDeLaBase, valorDeLaAltura);

    const areaTriangulo= area/2;

    const areaElemento= document.getElementById('area');
    areaElemento.value=areaTriangulo;
} */