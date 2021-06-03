
alert("welcome")

var doganswer = prompt("do you like dogs?")
alert("thankfully" + doganswer )
 
 document.write('<h3>' + "are you a dog lover" + '</h3>')
 
 
if (doganswer== 'yes') {
  document.write('<h3>' + doganswer + '</h3>')
  }
  
  else if (doganswer == 'no'){
    document.write('<h3>' + doganswer + '</h3>')
    }
  
  
else {
  alert("please type a correct answer")
  
  
}
var x = prompt("how many dogs do you like?");
if(x >4 ){
  alert("this is a huge number")
  document.write('<h6>' + "oh great you like" + x + '</h6>')
  
  
}
else
{
  for(var d = 1 ; d <= x;d++){
    document. write("<h7>"+"woof"+ "</h7>")
    console.log(d)
  }
}

document.write('<div>' + "guess what is the most loving dog breed" +'</div>')
var guess = "golden retriever"
    var ask = prompt ("guess what is the most loving dog breed");
    var attempt = 2;
    for(var i = 0 ; i< attempt;i++){
      if(ask == guess){
        break;
        
      }
      
      ask = prompt ("guess what is the most loving dog breed");
      
    }
document.write('<h6>' + "golden retriever" +'</h6>')

