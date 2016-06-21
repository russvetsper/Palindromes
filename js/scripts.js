$ (document).ready(function(){

$("form#input").submit(function(event){
  event.preventDefault();
var originalString=$("#wework").val().toLowerCase();//"Woo" ====>"woo"
var b=originalString.split("");// ["W","O","O"]
var c=b.reverse();
var d=c.join("");
if(originalString===d){
  console.log("we are okay");
}else{
  console.log("it is not okay");
}
});



});
