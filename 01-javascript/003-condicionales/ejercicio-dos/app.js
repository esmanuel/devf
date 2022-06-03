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
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src='https://img.ltwebstatic.com/images3_pi/2021/11/10/1636509285d8ee6f05b42f7c87e10f4319377da9ec_thumbnail_900x.webp'>
                        `)
                    }
                    else        //MUJER FROMAL DIA VESTIDO 
                    {
                        outfit = document.write(`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
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
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src='https://img.ltwebstatic.com/images2_pi/2019/09/10/15681032773990028841_thumbnail_900x1199.webp'>
                        `)
                        
                    }
                    else        //MUJER VESTIDO
                    {
                        outfit = document.write
                        (`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
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
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src='https://i.pinimg.com/originals/97/30/92/973092c30779225aa748a986adce5218.jpg'>
                        `);
                        

                    }
                    else        //MUJER CASUAL DIA CALOR
                    {
                        outfit = document.write
                        (`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
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
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit</h2><br>"
                        <img src='https://www.okchicas.com/wp-content/uploads/2017/10/15-outfits-para-vestir-botas-ensima-de-la-rodillla-1-467x700.jpg'>
                        `);
                        

                    }
                    else        //MUJER CASUAL NOCHE CALOR
                    {
                        outfit = document.write
                        (`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
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
            let evento = prompt('¿Esta vestimenta es para un evento formal? escribe la letra "S"(Si) ó "N"(No)');

            if (evento.toUpperCase(evento.substring(1.1)) === 'S')       //HOMBRE EVENTO FORMAL
            {
                console.log(evento)
                dia_noche = prompt('¿El evento es de día o de noche? escribe la letra "D" (Día) ó "N" (Noche)');

                if (dia_noche.toUpperCase(dia_noche.substring(1.1)) === 'D')    //HOMBRE EVENTO FORMAL DE DIA
                {
                    console.log(dia_noche)
                    decisionOutfitFinal = prompt('¿Prefieres traje o smoking? escribe la letra "T" (Traje) ó "S" (Smoking)');

                    if (decisionOutfitFinal.toUpperCase(decisionOutfitFinal.substring(1.1)) === 'T') //HOMBRE FORMAL DIA TRAJE
                    {
                        console.log(decisionOutfitFinal)
                        outfit = document.write(`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit es muy original, serás el alma de la fiesta: </h2><br>"
                        <img src='https://i.pinimg.com/564x/47/4e/14/474e14895ec578a33d4194f6da7cd615.jpg'>
                        `)
                    }
                    else        //HOMBRE FROMAL DIA SMOKING 
                    {
                        outfit = document.write(`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit para un evento formal de día, el bigote lo es todo: </h2><br>"
                        <img src='https://blogs.infobae.com/like/files/2013/08/151.jpg'>
                        `)
                        
                    };
                }
                else    //HOMBRE EVENTO FORMAL NOCHE
                {
                    decisionOutfitFinal = prompt('¿Prefieres traje o smoking? escribe la letra "T" (Traje) ó "S" (Smoking)');

                    if (decisionOutfitFinal.toUpperCase(decisionOutfitFinal.substring(1.1)) === 'T') //HOMBRE NOCHE TRAJE
                    {
                        console.log(decisionOutfitFinal)
                        outfit = document.write
                        (`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente traje para un evento formal de noche: </h2><br>
                        <img src='https://scontent.fntr6-4.fna.fbcdn.net/v/t1.6435-9/83448324_641164143356701_2033684495172894720_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=5hN9HynwasIAX-wPA-t&_nc_ht=scontent.fntr6-4.fna&oh=00_AT9QM6aTHc207VVTwwCqKFPkGihzb0dWfZory0dI4Dgr6w&oe=62C10BB9'>
                        `)
                        
                    }
                    else        //HOMBRE NOCHE SMOKING
                    {
                        outfit = document.write
                        (`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente smoking para un evento formal de noche:</h2><br>
                        <img src='https://i0.wp.com/www.sinembargo.mx/wp-content/uploads/2019/09/1-81.jpg?w=1100&quality=80&strip=all&ssl=1'>
                        `)

                    };
                };
            }
            else        //MUJER EVENTO CASUAL
            {
                console.log(evento)
                dia_noche = prompt('¿El evento es de día o de noche? escribe la letra "D" (Día) ó "N" (Noche)');

                if (dia_noche.toUpperCase(dia_noche.substring(1.1)) === 'D')    //HOMBRE  CASUAL DIA
                {
                    console.log(dia_noche)
                    decisionOutfitFinal = prompt('¿Prefieres outfit para frío o calor? escribe la letra "F" (Frío) ó "C" (Calor)');

                    if (decisionOutfitFinal.toUpperCase(decisionOutfitFinal.substring(1.1)) === 'F') //HOMBRE CASUAL DIA FRIO
                    {
                        console.log(decisionOutfitFinal)
                        outfit = document.write
                        (`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit para un evento casual, de día y con frío:</h2><br>
                        <img src='https://static.simpsonswiki.com/images/2/2b/Pie_Man.png'>
                        `);
                        

                    }
                    else        //HOMBRE CASUAL DIA CALOR
                    {
                        outfit = document.write
                        (`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit para un evento casual, de día y caluroso: </h2><br>
                        <img src='https://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065105-1024-768.gif'>
                        `);
                        console.log(decisionOutfitFinal)
                    };
                }
                else    //HOMBRE EVENTO CASUAL NOCHE
                {
                    decisionOutfitFinal = prompt('¿Prefieres outfit para frío o calor? escribe la letra "F" (Frío) ó "C"= (Calor)');

                    if (decisionOutfitFinal.toUpperCase(decisionOutfitFinal.substring(1.1)) === 'F') //HOMBRE CASUAL NOCHE FRIO
                    {
                        console.log(decisionOutfitFinal)
                        outfit = document.write
                        (`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit para un evento casual de noche y con frío: </h2><br>
                        <img src='https://static.wikia.nocookie.net/simpsons/images/d/de/GABF21_Salamander.jpg/revision/latest?cb=20191026211157'>
                        `);
                        

                    }
                    else        //HOMBRE CASUAL NOCHE CALOR
                    {
                        outfit = document.write
                        (`
                        <h1>¡Tu evento será genial ${nombre}! </h1><br>
                        <h2>Te recomendamos el siguiente outfit para un evento casual de noche y caluroso: </h2><br>
                        <img src= 'https://i.pinimg.com/originals/19/9b/82/199b82ca6a03685c1b9fd90be1deb85d.jpg'>
                        `);
                        
                        console.log(decisionOutfitFinal)
                    };
                };
            };
        };

// }else{
//     conclusion = `Lo siento, alguno de los datos que introdujiste no son correctos`
// }












