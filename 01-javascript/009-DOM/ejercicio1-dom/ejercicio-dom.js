
const parrafo = document.createElement('p');
//parrafo.innerHTML('Avatar la leyenda de Korra');
const nodoDeTexto = document.createTextNode('Avatar la leyenda de Korra');
//a parrafo agregale un hijo texto
parrafo.appendChild(nodoDeTexto);
parrafo.style.color = "red";
parrafo.style.fontFamily = "courier";
//usamos getelementbyid con el id
const padre = document.getElementById("padre");
padre.appendChild(parrafo);

//crear elemento a (hipervinculo),añadir texto y atributo href,

// <a></a>
const hipervinculo = document.createElement('a');

// 'Este es un hipervinculo'
const texto = document.createTextNode('Este es un hipervinculo');

// <a>Este es un hipervinculo</a> Juntamos texto con hipervinculo
hipervinculo.appendChild(texto);

// href="" construimos atributo
const linked = document.createAttribute('href');

//"https://www.google.com" construimos contenido de atributo (href='' en este caso)
linked.value ="https://www.google.com";

//<a href="https://www.google.com">Este es un hipervinculo</a> 
hipervinculo.setAttributeNode(linked);

// Se añade lo creado a div padre
padre.appendChild(hipervinculo);

//obener la clase circulo
//obtener el atributo color
//añadir valor a atributo con colores.value='color en ingles'
//usar colores.setAttributeNode()para fijar atributo





//getter obtener
// setter poner algo