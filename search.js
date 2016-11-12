
var all = document.getElementById("btn1").setAttribute("all","true");

 function def(){
                 var str = document.getElementById("txt").value;
                if (str.length == 0) { 
                    document.getElementById("txt").innerHTML = "";
                    return;
                    } 
                    else{
                        var xmlhttp = new XMLHttpRequest();
                        xmlhttp.onreadystatechange= function(){
                        if (this.readyState === 4 && this.status === 200){
                             document.getElementById("result").innerHTML= this.responseText;
                          }
                    };
                 xmlhttp.open("GET","request.php?q="+str.toLowerCase(), true);
                 xmlhttp.send();
                    }
                 
                 }

function GetAll() {

	var result =document.getElementById('result');
	var list = document.createElement('ol');
	result.innerHTML ='<h3> Result </h3>';
    
    if (window.XMLHttpRequest) {
	    var xmlhttp =new XMLHttpRequest();
    }
	else 
		var xmlhttp =new window.ActiveXObject('Microsoft.XMLHTTP');
    
    xmlhttp.onreadystatechange = function(){
	if (this.readyState === 4 && this.status === 200) {
		 	var response = this.responseXML;
		 	var defns =response.getElementsByTagName('definition');
            result.appendChild(list);
         
            for (var i = 0; i < defns.length; i++) {

            	var definition =document.createElement('li');
            	var heading =document.createElement('h3');
            	var p1 =document.createElement('p');
            	var p2 =document.createElement('p');

            	var word =document.createTextNode(defns[i].getAttribute('name'));
            	heading.appendChild(word);
				
				var meaning =document.createTextNode(defns[i].childNodes[0].nodeValue);
            	p1.appendChild(meaning);

            	var author =document.createTextNode('-'+defns[i].getAttribute('author'));
            	p2.appendChild(author);

                definition.appendChild(heading);
                definition.appendChild(p1);
                definition.appendChild(p2);
                list.appendChild(definition);
            } 
		}
		else {
			response ='ERROR COULD NOT GET DEFINITONS';
		}
	};
	xmlhttp.open("GET","request.php?q="+all.getAttribute("all"), true);
    xmlhttp.send();
}
