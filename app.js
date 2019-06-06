const http = require("http");
const fs = require("fs");
 
http.createServer(function(request, response){
     
    console.log(`Запрошенный адрес: ${request.url}`);
    if(request.url.startsWith("/public/")){
         
        var filePath = request.url.substr(1);
        fs.readFile(filePath, function(error, data){
            if(error){
				
                response.statusCode = 404;
                response.end("Resourse not found!");
            }   
            else{
                response.setHeader("Content-Type", "text/html");
                response.end(data);
            }
        })
    }
    else{
		
        response.end("ПРИВЕТ МИР");
    }
}).listen(3000);


