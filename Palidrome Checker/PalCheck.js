var list1 = [];
var list2 = [];
function checkPalindrome(x){
  le = x.length;
   if (le === 0 || le === 1) {
     return true;
   }
   if (x[0] === x[le - 1]) {
     return checkPalindrome(x.slice(1, le - 1) );
   }  
    return false;
}
function valid() {
  var x = document.forms["myForm"]["input"].value;
  var y = document.forms["myForm"]["list"].value;
  var z = document.forms["myForm"]["case"].value;
  var a = x; /* Copy of Original String*/

  if (x == "") {
    alert("Word must be filled out");
    return false;
  }
  if( y != "1" && y != "2"){
    alert("List Must be 1 or 2");
    return false;
  }
  if(z!="Yes" && z!= "No" && z!= "yes" && z!= "no"){
    alert("Case Sensitive must be answered 'Yes' 'yes' 'No' or 'no'")
    return false;
  }

  if(z == "No" || z == "no"){
  x = x.toLowerCase();
  }

  if(y=="1"){
   var reversed = x.split("").reverse().join("");
   if(x==reversed){
     list1.push("<br>"+a+", True, "+z)
   }
   else{
     list1.push("<br>"+a+", False, "+z)
   }
   list1.sort();
  }
  if(y== "2"){
   if(this.checkPalindrome(x)){
    list2.push("<br>"+a+", True, "+z);
   }else{
     list2.push("<br>"+a+", False, "+z);
   }
   list2.sort();
  }

  document.forms["myForm"]["input"].value = "";
  document.forms["myForm"]["list"].value ="";

  document.getElementById("list1").innerHTML = list1;
  document.getElementById("list2").innerHTML = list2;

}

function clearListOne(){
  list1 = [];
  document.getElementById("list1").innerHTML = list1;
}

function clearListTwo(){
  list2 = [];
  document.getElementById("list2").innerHTML = list2;
}
