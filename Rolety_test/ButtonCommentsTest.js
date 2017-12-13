
var net = require('net');

var HOST = '192.168.0.13';
var PORT = 10001;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('POLACZONO ZE STEROWNIKIEM: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client 



setTimeout(function(){client.write(';W0001\r\n'); }, 1000); 

setTimeout(function(){client.write(';W0002\r\n'); }, 2000);  //metoda settimeout odczekuje 2000ms i wykonuje funcje client.write

setTimeout(function(){client.write(';W0004\r\n'); }, 3000); 

setTimeout(function(){client.write(';W0008\r\n'); }, 4000); 

setTimeout(function(){client.write(';W0016\r\n'); }, 5000); 
 
setTimeout(function(){client.write(';W0032\r\n'); }, 6000); 

setTimeout(function(){client.write(';W0064\r\n'); }, 7000); 

setTimeout(function(){client.write(';W0128\r\n'); }, 8000); 

setTimeout(function(){client.write(';W0000\r\n'); }, 9000); 

setTimeout(function(){client.write(';W11\r\n'); }, 10000); 

setTimeout(function(){client.write(';W12\r\n'); }, 11000); 

setTimeout(function(){client.write(';W14\r\n'); }, 12000); 
 
setTimeout(function(){client.end(); }, 12050); 
	
});
