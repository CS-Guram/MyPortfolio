
// Text typing effect
var i=0, text;
text="© Student: Guram Kutaladze | Brooklyn College - CUNY | Computer Science | CISC 3610 EM6 Introduction to Multimedia Programming"

function typing(){
  if (i < text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
   }
}
typing();