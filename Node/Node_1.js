//This is passed to the V8 to function

sayHello=(name) => console.log('Hello', name)

sayHello('Andrew')

//console.log(window)// No window or document objects.  This is now a browser
//A single node server can hold 200,000 connections whereas a single Apache server tops out at around 20,000 connections.
//if logic is required before entering the event loop, Node’s performance will decline dramatically. Similarly, Node is often used with noSQL databases such as MongoDB

//Using nodemon instead of the node command in your terminal will automatically re-run your JavaScript file or project whenever you save something. That means no more manual server restarts!

//npm install -g nodemon (may require sudo)

//now run nodemon Node_1.js

//To manage our front-end dependencies, we'll be using another package manager called bower. This will save us from having to hunt down the perfect CDN for important libraries like jQuery and Bootstrap. There are many alternatives to bower, but we recommend using it for this course. Let's go ahead and install it globally

//npm install -g bower (may require sudo)

// uninstall packages using npm uninstall

//Make a directory, navigate to it via terminal and run the following commands

//bower install jquery

//npm install jquery

// The FS module allows us to do exactly what we need: read and write content from files, and it is by default included in Node.js. It is very rare that you will see the HTTP module used without the fs module.  The HTTP module is the module that allows us to build a web server that accepts HTTP requests and can serve responses. Combining the fs and http modules, we can create simple web servers quite easily.

//------------------Additional Notes

//console.log() //global objects belong to the window

// setTimeout()
// clearTimeout()
// setInterval()
// clearInterval()

//instead of window we have global
let message='Oh Hi Mark'
global.console.log(message) //this works
console.log(global.message) //this is undefined because Node is modular

//----------------------------------------------Next Section

// var sayHello2= function(){}

//app.js is main module

console.log(module)// all functions are scoped to this module

//---------------------How to create and load a new module

var url ='http://myrequest.io/log'  //scoped to this module assume this is logger.js

function log(message){  //to make this public use the exports: {} object
	console.log(message)
}
module.exports.log=log;

// in app js

var logger=require('./logger.js') // or require('/logger.js')











