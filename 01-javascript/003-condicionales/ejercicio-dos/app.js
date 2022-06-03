//nombre
// hombre o mujer
// frio o calor
// formal o casual
//
//

// != '' || isnan(variable numerica)
// let evento = prompt('¿Esta vestimenta es para un evento formal? S = Si N = No');
let vacaciones;
let dia_noche;
let conclusion;
let decisionOutfitFinal;
let outfit;
let todomal = 'todo anda mal'
let nombre = prompt('¿Como te llamas?');
// if(nombre === 'string' || genero === 'f' || genero === 'm'|| evento === 's' || evento === 'n'){
        
        let genero = prompt('¿Cual es el genero? F= Femenino M= Masculino');
        let mensaje = `<h1>Hola ${nombre}!! Nuestra sugerencia de vestuario es este fabuloso outfit.</h1>`

        if (genero.toUpperCase(genero.substring(1.1)) === 'F') {             //ES MUJER
            console.log(genero);
            let evento = prompt('¿Esta vestimenta es para un evento formal? S = Si N = No');

            if (evento.toUpperCase(evento.substring(1.1)) === 'S')       //MUJER EVENTO FORMAL
            {
                console.log(evento)
                dia_noche = prompt('¿El evento es de día o de noche? Día = D Noche = N');

                if (dia_noche.toUpperCase(dia_noche.substring(1.1)) === 'D')    //MUJER EVENTO FORMAL DE DIA
                {
                    console.log(dia_noche)
                    decisionOutfitFinal = prompt('¿Prefieres traje o vestido? T= Traje V=Vestido');

                    if (decisionOutfitFinal.toUpperCase(decisionOutfitFinal.substring(1.1)) === 'T') //MUJER FORMAL DIA TRAJE
                    {
                        console.log(decisionOutfitFinal)
                        outfit = document.write(`
                        <h1>¡Tu eventó será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src='https://img.ltwebstatic.com/images3_pi/2021/11/10/1636509285d8ee6f05b42f7c87e10f4319377da9ec_thumbnail_900x.webp'>
                        `)
                    }
                    else        //MUJER FROMAL DIA VESTIDO 
                    {
                        outfit = document.write(`
                        <h1>¡Tu eventó será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src='https://img.ltwebstatic.com/images3_pi/2021/01/18/16109432512f73a0fa8c3c0ab9aeb0ea64c765a268_thumbnail_900x.webp'>
                        `)
                        
                    };
                }
                else    //MUJER EVENTO FORMAL NOCHE
                {
                    decisionOutfitFinal = prompt('¿Prefieres traje o vestido? T= Traje V=Vestido');

                    if (decisionOutfitFinal.toUpperCase(decisionOutfitFinal.substring(1.1)) === 'T') //MUJER TRAJE
                    {
                        console.log(decisionOutfitFinal)
                        outfit = document.write
                        (`
                        <h1>¡Tu eventó será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src='https://img.ltwebstatic.com/images2_pi/2019/09/10/15681032773990028841_thumbnail_900x1199.webp'>
                        `)
                        
                    }
                    else        //MUJER VESTIDO
                    {
                        outfit = document.write
                        (`
                        <h1>¡Tu eventó será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src='https://img.ltwebstatic.com/images3_pi/2021/11/17/1637130987e338478a0d95dffbc080db52d476fc32_thumbnail_900x.webp'>
                        `)

                    };
                };
            }
            else        //MUJER EVENTO CASUAL
            {
                console.log(evento)
                dia_noche = prompt('¿El evento es de día o de noche? Día = D Noche = N');

                if (dia_noche.toUpperCase(dia_noche.substring(1.1)) === 'D')    //MUJER  CASUAL DIA
                {
                    console.log(dia_noche)
                    decisionOutfitFinal = prompt('¿Prefieres outfit para frío o calor? F= Frío C= Calor');

                    if (decisionOutfitFinal.toUpperCase(decisionOutfitFinal.substring(1.1)) === 'F') //MUJER CASUAL DIA FRIO
                    {
                        console.log(decisionOutfitFinal)
                        outfit = document.write
                        (`
                        <h1>¡Tu eventó será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src='https://i.pinimg.com/originals/97/30/92/973092c30779225aa748a986adce5218.jpg'>
                        `);
                        

                    }
                    else        //MUJER CASUAL DIA CALOR
                    {
                        outfit = document.write
                        (`
                        <h1>¡Tu eventó será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src='https://www.cutypaste.com/wp-content/uploads/2014/09/21.png'>
                        `);
                        console.log(decisionOutfitFinal)
                    };
                }
                else    //MUJER EVENTO CASUAL NOCHE
                {
                    decisionOutfitFinal = prompt('¿Prefieres outfit para frío o calor? F= Frío C= Calor');

                    if (decisionOutfitFinal.toUpperCase(decisionOutfitFinal.substring(1.1)) === 'F') //MUJER CASUAL NOCHE FRIO
                    {
                        console.log(decisionOutfitFinal)
                        outfit = document.write
                        (`
                        <h1>¡Tu eventó será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src='https://www.okchicas.com/wp-content/uploads/2017/10/15-outfits-para-vestir-botas-ensima-de-la-rodillla-1-467x700.jpg'>
                        `);
                        

                    }
                    else        //MUJER CASUAL NOCHE CALOR
                    {
                        outfit = document.write
                        (`
                        <h1>¡Tu eventó será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src= 'https://img.ltwebstatic.com/images3_pi/2020/08/15/159746302359a2098258ae7275f7df601cfefad729_thumbnail_900x.webp'>
                        `);
                        
                        console.log(decisionOutfitFinal)
                    };
                };
            };
        }
        else            // AQUI COMIENZAN CONDICONALES PARA HOMBRE
        {
            
        };

// }else{
//     conclusion = `Lo siento, alguno de los datos que introdujiste no son correctos`
// }












