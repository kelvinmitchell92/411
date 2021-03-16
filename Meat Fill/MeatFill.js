

 async function meat(){
   var a = document.forms["myForm"]["paras"].value;
   var file = "https://baconipsum.com/api/?type=meat-and-filler&paras="+a;

  var response = await  fetch(file);
  var json =  await response.json();
  
  document.getElementById("raw").innerHTML = JSON.stringify(json);

  
  alert(file);
  var y ="";
  for(i in json){
  y +=  "<p>"+ json[i]+"</p>";
  
  }
  document.getElementById("format").innerHTML = y;
}
 
