const personajes = getInhabitants();

// 1 Mostrar en pantalla al/los personajes mas pequeños de "Brastlewark"

const personajesMasPequeños = () => {

  let menor = personajes[0];
  
  for(let i = 0; i < personajes.length - 1; i++) {
    // const p1 = personajes[i].height;
    let p2 = personajes[i+1].height
    
    if(menor.height > p2){
      menor.height = p2
    }
  }
  return menor;
}


// 2 Crear una funcion que devuelva los personajes por ID en base a un rango numerico.

const rangoId = (inicio, final) =>{

  const personajesRango = [];

  for(let i = inicio; i <= final; i++){

    personajesRango.push(personajes[i]);

  }

  return personajesRango;
}
//rangoId(4, 34);


// 3 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.

function colorCabello(color){
  const personajesColorCabello = personajes.filter((personaje=> personaje.hair_color === color))
  return personajesColorCabello
}

// console.table(colorCabello('Pink'));

// 4 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" en base a una propiedad y 
// un valor enviados como parámetros.

const lista = (key, value) => {
  const array = [];
  for (const personaje of personajes) {
      if (personaje[key] === value) {
          array.push(personaje.name)
      }
  }
  return array;
}
console.log(lista('age', 240))



// 5 Crear una funcion que devuelva al mas alto, al mas bajo, al mas anciano, al mas joven o al mas ancho de "Brastlewark".













  // 6 Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.

const buscandoAFizwood = () =>{
  for(let i = 0; i < personajes.length; i++){
      if(personajes.name === 'Fizwood Mysttink'){
          return personajes.name

      }
  }
}
console.log(buscandoAFizwood())