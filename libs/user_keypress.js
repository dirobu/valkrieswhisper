// user_keypress.js
// ------------
module.exports = {
	w: function(user){
		var d = new Date;
		var timestamp = d.getFullYear() +''+ d.getMonth() +''+ d.getDay() +''+ d.getHours() +''+ d.getMinutes();
		user['facing'] = 'w';
		user['move'] = 1;
		user['date'] = timestamp;
		return user;
	},
	a: function(user){
		var d = new Date;
		var timestamp = d.getFullYear() +''+ d.getMonth() +''+ d.getDay() +''+ d.getHours() +''+ d.getMinutes();
		user['facing'] = 'a';
		user['move'] = 1;
		user['date'] = timestamp;
		return user;
	},
	s: function(user){
		var d = new Date;
		var timestamp = d.getFullYear() +''+ d.getMonth() +''+ d.getDay() +''+ d.getHours() +''+ d.getMinutes();
		user['facing'] = 's';
		user['move'] = 1;
		user['date'] = timestamp;
		return user;
	},
	d: function(user){
		var d = new Date;
		var timestamp = d.getFullYear() +''+ d.getMonth() +''+ d.getDay() +''+ d.getHours() +''+ d.getMinutes();
		user['facing'] = 'd';
		user['move'] = '1';
		user['move'] = 1;
		user['date'] = timestamp;
		return user;
	},
}
