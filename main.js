deepa = document.getElementById("Deepa");
anwesha = document.getElementById("Anwesha");
rajat = document.getElementById("Rajat");
avishka = document.getElementById("Avishka");

function Anwesha()
{    
if (avishka.style.display === "none") {
  avishka.style.display = "block";
} else {
  avishka.style.display = "none";
}

if (deepa.style.display === "none") {
  deepa.style.display = "block";
} else {
  deepa.style.display = "none";
}

if (rajat.style.display === "none") {
  rajat.style.display = "block";
} else {
  rajat.style.display = "none";
}
   document.getElementById("heading").style.color = "white";
   document.getElementById("backdrop").style.backgroundImage = "url(mountkailash.jpg)";
   document.getElementById("answerAnwesha").innerHTML = "I am Anwesha. I am 12 years old. My favourite color is orange and I like Fried Rice and Manchurian.";
}

function Avishka()
{  
   
document.getElementById("heading").style.color = "white";
   document.getElementById("backdrop").style.backgroundImage = "url(anotherspace.jpg)";
   document.getElementById("answerAvishka").innerHTML = "I am Avishka, Anwesha's sister. I am 7 years old. My favourite color is purple and I like Butter Naan and Paneer Makhanwala.";
}



function Deepa()
{ 
  
document.getElementById("heading").style.color = "pink";
   document.getElementById("backdrop").style.backgroundImage = "url(sunset.jpg)";
   document.getElementById("answerDeepa").innerHTML = "I am Deepa, Anwesha's mother. I am 40 years old. My favourite color is green and I like Bamboo M word and F word fry.";
}



function Rajat()
{  

document.getElementById("heading").style.color = "orange";
   document.getElementById("backdrop").style.backgroundImage = "url(bmw.jpg)";
   document.getElementById("answerRajat").innerHTML = "I am Rajat, Anwesha's father. I am 45 years old. My favourite color is black and I like Grilled C word.";
}

