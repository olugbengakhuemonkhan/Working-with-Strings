var focusName = 'I Want To Become A Good Web Developer';

var str = "\"W\" is at index " + focusName.indexOf("W") + "<br>";

str += "\"c\" is at index " + focusName.indexOf('c') + "<br>";

str += "The first space is at index " + focusName.indexOf(' ') + "<br>";

str += "The last \"e\" is at index " + focusName.lastIndexOf('e') + "<br>";

str += "The second space is at index " + focusName.indexOf(' ', 2) + "<br>";

str += "The first \"e\" after index 7 is at index " + focusName.indexOf('e', "7") + "<br>";

str += "The substring \"Become\" begins at index " + focusName.indexOf("Become");







document.getElementById("output").innerHTML=str;