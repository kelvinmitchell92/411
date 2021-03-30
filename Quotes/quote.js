async function get(){
  var x = document.forms["myForm"]["length"].value;
  if(x==1){
  var file = "https://api.quotable.io/random?maxLength=100";
  }
  if(x==2){
    var file = "https://api.quotable.io/random?minLength=101&maxLength=200";
    }
  if(x==3){
      var file = "https://api.quotable.io/random?minLength=201";
  }

 var response = await  fetch(file);
 var json =  await response.json();
  
 document.getElementById("quote").innerHTML = JSON.stringify(json.content);
 document.getElementById("author").innerHTML = JSON.stringify(json.author);
  }
