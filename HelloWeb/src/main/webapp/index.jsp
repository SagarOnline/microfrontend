<%@ taglib tagdir="/WEB-INF/tags/microfrontend" prefix="microfrontend" %>
<html>
<body>
<h2>Hello World!</h2>
<microfrontend:container 
	page="http://localhost:8220/marketdata/index.html"
	baseUrl="http://localhost:8220/marketdata">
</microfrontend:container>
</body>
</html>
