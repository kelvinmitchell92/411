async function get(){
  var x = document.forms["myForm"]["length"].value;
  if(x==1){
  var file = "https://api.quotable.io/random?tags=life";
  }
  if(x==2){
    var file = "https://api.quotable.io/random?tags=happiness";
    }
  if(x==3){
      var file = "https://api.quotable.io/random?tags=religion";
  }

 var response = await  fetch(file);
 var json =  await response.json();
  
 document.getElementById("quote").innerHTML = JSON.stringify(json.content);
 document.getElementById("author").innerHTML = JSON.stringify(json.author);
  }
