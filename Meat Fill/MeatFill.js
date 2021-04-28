

 async function meat(){
   var a = document.forms["myForm"]["paras"].value;
   var file = "https://pokeapi.co/api/v2/pokemon/butterfree";

  var response = await  fetch(file);
  var json =  await response.json();
  
  document.getElementById("raw").innerHTML = JSON.stringify(json);


  document.getElementById("format").innerHTML = JSON.stringify(json.name);
}
 
