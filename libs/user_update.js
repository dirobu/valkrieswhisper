// var_update.js
// ------------
module.exports = {
	move: function(users)
	{
		for (var key in users)
		{
			var distance = 6;
			var speed = Number(users[key]["speed"]) / 12;
			if(Number(users[key]["move"]) >= speed)
			{
				users[key]["move"] = Number(users[key]["move"]) - Number(speed);
				if(users[key]["facing"] == "w"){users[key]["canvas_y"] = Number(users[key]["canvas_y"]) - distance;}
				if(users[key]["facing"] == "s"){users[key]["canvas_y"] = Number(users[key]["canvas_y"]) + distance;}
				if(users[key]["facing"] == "a"){users[key]["canvas_x"] = Number(users[key]["canvas_x"]) - distance;}
				if(users[key]["facing"] == "d"){users[key]["canvas_x"] = Number(users[key]["canvas_x"]) + distance;}
			}
			else if(Number(users[key]["move"]) > 0)
			{
				users[key]["move"] = 0;
				if(users[key]["facing"] == "w"){users[key]["canvas_y"] = Number(users[key]["canvas_y"]) - distance;}
				if(users[key]["facing"] == "s"){users[key]["canvas_y"] = Number(users[key]["canvas_y"]) + distance;}
				if(users[key]["facing"] == "a"){users[key]["canvas_x"] = Number(users[key]["canvas_x"]) - distance;}
				if(users[key]["facing"] == "d"){users[key]["canvas_x"] = Number(users[key]["canvas_x"]) + distance;}
			}
		}
		return users;
	},
	active: function(users)
	{
		for (var key in users)
		{
			var d = new Date;
			var timestamp = d.getFullYear() +''+ d.getMonth() +''+ d.getDay() +''+ d.getHours() +''+ d.getMinutes();
			var difference = Number(timestamp) - Number(users[key]['time']);
			if(difference > 5)
			{
				delete users[key];
			}
		}
	}
}
