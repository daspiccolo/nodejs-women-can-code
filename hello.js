const http = require('http');
const servidor = http.createServer(function(req,res) => { 

let html ='';
if (req.url =='/'){
  html = `
     <html>
	<head>
	<meta charset=utf-8>
	</head>
	<body>
	  <h1>Wome Can Code </h1>
	</body>
     </html> ` ;
}else if(req.url == '/musicas'){
 html = `
 <html>
 	<head>
		<meta charset="utf-8">
	</head>
	<body>
	    <h1>Listagem de músicas</h1>
	</body>
  </html>
  }
  resp.end(html);
});
servidor.listen(3000);
