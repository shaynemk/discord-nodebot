// this is the way to load a package with NodeJS
var express = require( "express" );

// create an express object: a Web server
var app = express();

const PORT = process.env.PORT || 5000

// When our server receives a certain request, it needs to know what it should respond,
// so we are defining "routes" the server follows to return the right data.
// When the server gets a request for the "root" route of this domain: "/"
// here: "https://hello-node-server.glitch.me/"
app.get( "/", function( request, response ) {
  response.send( "<h1>Hello :)</h1><p><a href='/about'>About</a></p>" ); // we tell the server to respond with some HTML
} );

// when the server gets a request for "https://hello-node-server.glitch.me/about"
app.get( "/about", function( request, response ) {
  response.send( "<h1>This is my about page</h1><a href='/'>Home</a></p>" );
} );

// the server needs to listen for requests on a specified port:
// a port can be thought of as an access on device to communicate data
// and computers have thousands of ports
// on Glitch we can use "process.env.PORT" which corresponds to port 3000

const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I\'m baaaaaaaaaaack!');
});

client.on('message', msg => {
  if (msg.author.username != "NodeBot") {//make sure we dont talk back to ourself
    switch (true) {
      case msg.content.includes('hello'):
        msg.channel.send('oh hello, ' + msg.author + '!');
        break;
      case msg.content.startsWith(`${config.prefix}test`):
        msg.channel.send('testing, testing, 1, 2, 3.');
        break;
      case msg.content.includes('lol'):
        msg.channel.send('haha, that\'s like, so totally funny.');
        break;
      case msg.content.includes('hmm'):
        msg.channel.send('so speculative...');
      default:
        break;
    }
  } else {
    switch (msg.content) {
      case "haha, that\'s like, so totally funny.":
        msg.channel.send('Really? Was it though?');
        break;
      case "Really? Was it though?":
        msg.channel.send('Yea, i thought so.');
        break;
      case "Yea, i thought so.":
        msg.channel.send('Interesting definition of funny.');
        break;
      case "Interesting definition of funny.":
        msg.channel.send('And what is that supposed to mean?');
        break;
      case "And what is that supposed to mean?":
        msg.channel.send('I dunno...bite me!');
        break;
      default:
        break;
    }
  }
});


client.login(config.BOT_TOKEN);


// finally we set the server to listen for requests :)
//app.listen( process.env.PORT );
app.listen( PORT );
