var list1 = [];
var list2 = [];
function valid() {
  var x = document.forms["myForm"]["input"].value;
  var y = document.forms["myForm"]["list"].value;
  if (x == "") {
    alert("Word must be filled out");
    return false;
  }
  if( y != "1" && y != "2"){
    alert("List Must be 1 or 2");
    return false;
  }
if(y=="1"){
  list1.push(x);
}
if(y== "2"){
  list2.push(x);
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