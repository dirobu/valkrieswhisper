#!/usr/bin/env nodejs
// Set: Var
var msg = '';
var fs = require("fs");
var http = require('http');
var user_update = require('./libs/user_update.js');
var user_keypress = require('./libs/user_keypress.js');
var users = {
	'127.0.0.10':	{name: 'bryku'	  , time: '', lvl: '1', hp: '100', hp_current: '75', mp: '100', mp_current: '50', exp: '1', speed: '3', class: 'warrior', outfit: 'noob', facing: 'd', move: '1', attack: '0', canvas_x: '100', canvas_y: '100',},
};



// Config
fs.writeFileSync('./data/users.json',JSON.stringify(users))



// Run
	http.createServer(function (request, response) {

		console.log(request.url);
		if(request.url.indexOf('/keypress/') !== -1)
		{
			console.log('/keypress/');
			var temp = request.url.split('/keypress/');
			var keypress = temp[Number(temp.length) - 1];
			var user = request.connection.remoteAddress.replace(/[^0-9.]/g, "");
			if(user in users)
			{
				users[user] = user_keypress[keypress](users[user]);
				fs.writeFileSync('./data/users.json',JSON.stringify(users));
			}
		}
		if(request.url.indexOf('/update/users') !== -1)
		{
			console.log('/update/users');
			msg = fs.readFileSync('./data/users.json');
		}
		else if(request.url.indexOf('/start/') !== -1)
		{
			var temp = request.url.split('/start/');
			var username = temp[Number(temp.length) - 1];

			var user = request.connection.remoteAddress.replace(/[^0-9.]/g, "");
			if(user in users)
			{
				delete users[user];
			}
			var d = new Date;
			var timestamp = d.getFullYear() +''+ d.getMonth() +''+ d.getDay() +''+ d.getHours() +''+ d.getMinutes();
			users[user] = {name: username, date: timestamp, lvl: '1', hp: '100', hp_current: '75', mp: '100', mp_current: '50', exp: '1', speed: '3', class: 'warrior', outfit: 'noob', facing: 'a', move: '0', attack: '0', canvas_x: '100', canvas_y: '100',};
			msg = 'connect';
		}
		response.writeHead(200, {
			'Access-Control-Allow-Origin': "*",
			'Access-Control-Allow-Methods': "POST, GET, PUT, DELETE, OPTIONS",
			'Access-Control-Allow-Credentials': false,
			'Access-Control-Max-Age': 86400,
			'Content-Type': 'application/json',
		});
		response.end(msg);
	}).listen(8080);
	setInterval(function(){
		users = user_update.move(users);
		fs.writeFileSync('./data/users.json',JSON.stringify(users));
	}, 200);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');
