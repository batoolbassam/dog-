
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

<<<<<<< HEAD
function printImg(){
  while (x > 10){
    x = prompt("please enter the number of images you like to see")
  }
  for (var i = 0;i<x;i++){
    document.write("<imgsrc='https://www.google.com/search?q=golden+retriever&oq=go&aqs=chrome.2.69i60j69i57j69i59l2j69i60.1983j0j7&client=ms-android-oppo-rvo3&sourceid=chrome-mobile&ie=UTF-8#imgrc=SUGtiUIRU3v0oM' />" + doganswer)
  }
}

printImg();



=======
 

var img = new Image();
img.src = "./https://en.m.wikipedia.org/wiki/Golden_Retriever#/media/File%3AGolden_Retriever_Carlos_(10581910556).jpg"
for (var i = 0; i< x; i++) {
  document.body.appendChild(img)
}
>>>>>>> c8918daab4797b4cdc2d4281de4d7cbbaf592e52
