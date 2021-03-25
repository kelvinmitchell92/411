/*This caesarShift code was sourced from 
https://gist.github.com/EvanHahn/2587465#file-gistfile1-js-L42
*/
function caesarShift(str, amount) {
  // Wrap the amount
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }

  // Make an output variable
  let output = "";

  // Go through each character
  for (var i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    let c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      let code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    // Append
    output += c;
  }

  // All done!
  return output;
}
/* This function is a simple substitution cipher. It varies from a Ceasar's cipher slightly in that it doesn't shift the entire alphabet over x amount, but rather reverses the order of the alphabet such that A=z B=y and so forth. THis could be decrypted by using the exact same algorithm that i am using to encrypt it, so this is not secure at all. It was very much inspired by the function above that was sourced from https://gist.github.com/EvanHahn/2587465#file-gistfile1-js-L42 */ 
function simpleCipher(str){

    // Make an output variable
    let output = "";

    // Go through each character
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      let c = str[i];
  
      // If it's a letter...
      if (c.match(/[a-z]/i)) {
      // Get its code
      let code = str.charCodeAt(i);
      //Reverse the order 
      c = String.fromCharCode(187-code);
      }
        // Append
        output += c;
      }
    
      // All done!
      return output;
    }

 
 async function meat(){
  var a = document.forms["myForm"]["paras"].value;
  var file ="";
  if(document.forms["myForm"]["link"].value == 1){
    var file = "https://baconipsum.com/api/?type=all-meat&paras="+a;
  }else{
    var file = "https://baconipsum.com/api/?type=meat-and-filler&paras="+a;
  }

  var response = await  fetch(file);
  var json =  await response.json();
  
  document.getElementById("raw").innerHTML = JSON.stringify(json);

  var y ="";
  for(i in json){
  y +=  "<p>"+ json[i]+"</p>";
  
  }
  document.getElementById("format").innerHTML = y;


  var final = "";
  if(document.forms["myForm"]["cipher"].value == 1){
  final = caesarShift(y,7);
}else{
  final = simpleCipher(y);
}

 document.getElementById("encrypt").innerHTML = final;

}


 
