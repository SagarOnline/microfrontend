class Renderer{
	 render(){
		let xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		     processResponse_sync(this.responseText);
		     
		    }
		  };
		  //xhttp.open("GET", '${page}', true);
		  xhttp.open("GET", 'http://localhost:8220/marketdata/index.html', true);
		  
		  xhttp.send();
		  
		  function processResponse_sync(html){
				const div = document.createElement('div');
				div.setAttribute("id", "container");
			    div.innerHTML = html;
			    document.body.appendChild(div);
			    processScriptNode();
			    
		  }
		  
		  function processScriptNode(){
			  const scriptNodes = document.getElementById("container").querySelectorAll('script');
			  const firstscriptElement = getScriptElement(scriptNodes[0]);
			  scriptNodes[0].remove();
			  if(scriptNodes.length > 1){
				  firstscriptElement.onload = processScriptNode;  
			  }
			  document.body.appendChild(firstscriptElement);
			  
		  }
		  
		  
		  	function updateMicroFrontEndScriptUrl(scriptNode){
		  		const localScriptUrl = scriptNode.src;
		  		const hrefExtractorRegEx = /\/[^\/]+$/
				//const baseUrl = "${baseUrl}";
		  		const baseUrl = "http://localhost:8220/marketdata";
		  		const scriptName = hrefExtractorRegEx.exec(localScriptUrl)[0];
		  		scriptNode.src=  baseUrl+ scriptName;
		  	}
		  	function getScriptElement(scriptNode){
		  		
		  		updateMicroFrontEndScriptUrl(scriptNode);
		  		
		  		const scriptElement = document.createElement('script');
			      // Copy all the attributes from the original script element
			      for (let aI = 0; aI < scriptNode.attributes.length; aI++) {
			        scriptElement.attributes.setNamedItem(scriptNode.attributes[aI].cloneNode());
			      }
			      // Add any content the original script element has
			      const scriptContent = document.createTextNode(scriptNode.textContent);
			      scriptElement.appendChild(scriptContent);
			      return scriptElement;
		  	}
		  
	}
}

let renderer = new Renderer();
renderer.render();