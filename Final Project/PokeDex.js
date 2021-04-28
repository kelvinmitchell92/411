/*import  './PokeDex.css';*/
import React from 'react';

async function Pokemon(){
  var a = document.forms["myForm"]["input"].value;
  var file = "https://pokeapi.co/api/v2/pokemon/"+a;
  var file1 = "https://pokeapi.co/api/v2/pokemon-species/"+a;

 var response = await  fetch(file);
  var pokemon =  await response.json();

  var response1 = await fetch(file1);
  var pokeSpecies = await response1.json();

  document.getElementById("name").innerHTML = JSON.stringify(pokeSpecies.name);
  document.getElementById("description").innerHTML = JSON.stringify(pokeSpecies.flavor_text_entries.flavor_text);

}

