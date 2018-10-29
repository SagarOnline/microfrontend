<%@ attribute name="page" required="true"%>
<%@ attribute name="baseUrl" required="true"%>

<!-- <script type="text/javascript" src="microfrontend.js"></script> -->

<script type="text/javascript">

var MicrofrontendRenderer = /** @class */ (function () {
    function MicrofrontendRenderer() {
    }
    MicrofrontendRenderer.prototype.render = function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            	var scriptsToBeLoadedInGivenOrder = false;
                processResponse(this.responseText, scriptsToBeLoadedInGivenOrder);
            }
        };
        xhttp.open("GET", '${page}', true);
        //xhttp.open("GET", 'http://localhost:8220/marketdata/index.html', true);
        xhttp.send();
        function processResponse(html, scriptsToBeLoadedInGivenOrder) {
            var div = document.createElement('div');
            div.setAttribute("id", "container");
            div.innerHTML = html;
            document.body.appendChild(div);
            if(scriptsToBeLoadedInGivenOrder){
            	loadScriptsInGivenOrder();
            }else{
            	loadScriptsInParallel();
            }
            
        }
        
        function loadScriptsInParallel(){
        	var scriptElements = [];
            var scriptNodes = document.getElementById("container").querySelectorAll('script');
            for (var i = 0; i < scriptNodes.length; i++) {
                var scriptNode = scriptNodes[i];
                var hrefExtractorRegEx = /\/[^\/]+$/;
                //const scriptName = hrefExtractorRegEx.exec(scriptNode.src)[1];
                var scriptName = hrefExtractorRegEx.exec(scriptNode.src)[0];
                var baseUrl = "${baseUrl}";
                scriptNode.src = baseUrl + scriptName;
                // Create a new script element so HTML5 will execute it upon adding to DOM
                var scriptElement = document.createElement('script');
                // Copy all the attributes from the original script element
                for (var aI = 0; aI < scriptNode.attributes.length; aI++) {
                    scriptElement.attributes.setNamedItem(scriptNode.attributes[aI].cloneNode());
                }
                // Add any content the original script element has
                var scriptContent = document.createTextNode(scriptNode.textContent);
                scriptElement.appendChild(scriptContent);
                // Remove the original script element
                scriptNode.remove();
                // add the new element to the list
                scriptElements.push(scriptElement);
            }
            
            // Add the new script elements to the DOM
            for (var i = 0; i < scriptElements.length; i++) {
                document.body.appendChild(scriptElements[i]);
            }
        	
        }
        function processResponse_sync(html) {
            var div = document.createElement('div');
            div.setAttribute("id", "container");
            div.innerHTML = html;
            document.body.appendChild(div);
            loadScriptsInGivenOrder();
        }
        function loadScriptsInGivenOrder() {
            var scriptNodes = document.getElementById("container").querySelectorAll('script');
            var firstscriptElement = getScriptElement(scriptNodes[0]);
            scriptNodes[0].remove();
            if (scriptNodes.length > 1) {
            	// all script elements are loaded one after another, 
            	//so that the scripts will be loaded in the order specified in origin microfrontend html.
            	//for that below code adds onload event on script element which loads next script.
                firstscriptElement.onload = loadScriptsInGivenOrder;
            }
            document.body.appendChild(firstscriptElement);
        }
        /*
        Script node returned by microfrontend has relative path. This method uses this script node to create new Script element with absolute path of the script.
        Returned element must be added on document body in order to load this script.
        */
        function getScriptElement(scriptNode) {
            updateMicroFrontEndScriptUrl(scriptNode);
            var scriptElement = document.createElement('script');
            // Copy all the attributes from the original script element
            for (var aI = 0; aI < scriptNode.attributes.length; aI++) {
                scriptElement.attributes.setNamedItem(scriptNode.attributes[aI].cloneNode());
            }
            // Add any content the original script element has
            var scriptContent = document.createTextNode(scriptNode.textContent);
            scriptElement.appendChild(scriptContent);
            return scriptElement;
        }
        /*
        This function updates the script node scr by prefixing it with baseUrl set on container tag.
        */
        function updateMicroFrontEndScriptUrl(scriptNode) {
            var localScriptUrl = scriptNode.src;
            var hrefExtractorRegEx = /\/[^\/]+$/;
            var baseUrl = "${baseUrl}";
            //const baseUrl = "http://localhost:8220/marketdata";
            var scriptName = hrefExtractorRegEx.exec(localScriptUrl)[0];
            scriptNode.src = baseUrl + scriptName;
        }
    };
    return MicrofrontendRenderer;
}());
var renderer = new MicrofrontendRenderer();
renderer.render();



</script>


<div id="demo"></div>