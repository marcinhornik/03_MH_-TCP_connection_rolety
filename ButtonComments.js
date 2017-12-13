

  function ipRead(){
    ipNumber = document.getElementById("ipAddress").value;


  }

let ipNumber;

let net = require('net');

let HOST;
let PORT = 10001;



function W0000(){

HOST = ipNumber;
var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W0000\r\n');
	client.end();
});
}

function W0001(){

HOST = ipNumber;
var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W0001\r\n');
	client.end();
});
}

function W0002(){


HOST = ipNumber;
var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W0002\r\n');
	client.end();
});
}

function W0004(){

HOST = ipNumber;
var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W0004\r\n');
	client.end();
});
}

function W0008(){

HOST = ipNumber;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W0008\r\n');
	client.end();
});
}

function W0016(){
HOST = ipNumber;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W0016\r\n');
	client.end();
});
}

function W0032(){

HOST = ipNumber;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W0032\r\n');
	client.end();
});
}

function W0064(){

HOST = ipNumber;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W0064\r\n');
	client.end();
});
}

function W0128(){
HOST = ipNumber;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W0128\r\n');
	client.end();
});
}


function W14(){

HOST = ipNumber;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W14\r\n');
	client.end();
});
}

function W11(){

HOST = ipNumber;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W11\r\n');
	client.end();
});
}

function W12(){
HOST = ipNumber;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

client.write(';W12\r\n');
	client.end();
});
}

function testAll(){

HOST = ipNumber;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client


setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie...."; }, 10);
setTimeout(function(){client.write(';W0001\r\n'); }, 50);
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 12 sek."; }, 500);
setTimeout(function(){client.write(';W0002\r\n'); }, 1000);  //metoda settimeout odczekuje 2000ms i wykonuje funcje client.write
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 11 sek."; }, 1500);
setTimeout(function(){client.write(';W0004\r\n'); }, 2000);
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 10 sek."; }, 2500);
setTimeout(function(){client.write(';W0008\r\n'); }, 3000);
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 9 sek."; }, 3500);
setTimeout(function(){client.write(';W0016\r\n'); }, 4000);
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 8 sek."; }, 4500);
setTimeout(function(){client.write(';W0032\r\n'); }, 5000);
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 7 sek."; }, 5500);
setTimeout(function(){client.write(';W0064\r\n'); }, 6000);
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 6 sek."; }, 6500);
setTimeout(function(){client.write(';W0128\r\n'); }, 7000);
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 5 sek."; }, 7500);
setTimeout(function(){client.write(';W0000\r\n'); }, 8000);
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 4 sek."; }, 8500);
setTimeout(function(){client.write(';W11\r\n'); }, 9000);
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 3 sek."; }, 9500);
setTimeout(function(){client.write(';W12\r\n'); }, 10000);
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 2 sek."; }, 10500);
setTimeout(function(){client.write(';W14\r\n'); }, 11000);
setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Proszę czekać trwa testowanie....Pozostało 1 sek."; }, 11500);
setTimeout(function(){client.end(); }, 11050);

setTimeout(function(){document.getElementById("testInProcess").innerHTML = "Test zakończony"; }, 11500);

});
}
