function drawGameGrid (board_division) {
	canvas = document.getElementById(board_division); //finds canvas element
	canvas.width = 800;
	canvas.height = 800;
	draw_four_squres(canvas, 0, 0, canvas.width, canvas.height, ["#FF0000", "#00FF00", "#0000FF", "#F0F000"]);
	draw_four_squres(canvas, .05 * .4 * canvas.width, .05 * .4 * canvas.height, .9 * .4 * canvas.width, .9 * .4 * canvas.height, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]);
	draw_four_squres(canvas, .05 * .4 * canvas.width + canvas.width * .6, .05 * .4 * canvas.height, .9 * .4 * canvas.width, .9 * .4 * canvas.height, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]);
	draw_four_squres(canvas, .05 * .4 * canvas.width, .05 * .4 * canvas.height + canvas.width * .6, .9 * .4 * canvas.width, .9 * .4 * canvas.height, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]);
	draw_four_squres(canvas, .05 * .4 * canvas.width + canvas.width * .6, .05 * .4 * canvas.height + canvas.width * .6, .9 * .4 * canvas.width, .9 * .4 * canvas.height, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]);

	//Line 1
	//context.beginPath();
	//context.moveTo(square, 0); //defines starting point of line 1
	//context.lineTo(square, 300); //ending point of line 1
	//context.stroke(); 

	draw_left_grids(canvas, 0, canvas.height * .4, canvas.width * .4, canvas.height * .2, "#FF0000");
	draw_right_grids(canvas, canvas.width * .6, canvas.height * .4, canvas.width * .4, canvas.height * .2, "#F0F000");
	draw_top_grids(canvas, canvas.width * .4, 0, canvas.width * .2, canvas.height * .4, "#00FF00");
	draw_bottom_grids(canvas, canvas.width * .4, canvas.height*.6, canvas.width * .2, canvas.height * .4, "#0000FF");

	draw_center(canvas, canvas.width*.4, canvas.height*.4, canvas.width*.2, canvas.height*.2, "#00F0F0")
}

function draw_center(canvas, ox, oy, width, height, color)
{
	context = canvas.getContext("2d"); //HTML5 Object with many paths for drawing

	context.beginPath();
	//context.lineWidth="6";
	//context.strokeStyle="red";
	context.fillStyle = color;
	context.fillRect(ox,oy,width,height); 
	context.stroke();
}

function draw_four_squres(canvas, ox, oy, width, height, colors)
{
	context = canvas.getContext("2d"); //HTML5 Object with many paths for drawing

	context.beginPath();
	//context.lineWidth="6";
	//context.strokeStyle="red";
	context.fillStyle = colors[0];
	context.fillRect(ox,oy,width * .4,height * .4); 
	context.stroke();

	context.beginPath();
	context.fillStyle = colors[1];
	context.fillRect(ox + width * .6, oy, width * .4, height * .4); 
	context.stroke();

	context.beginPath();
	context.fillStyle = colors[2];
	context.fillRect(ox, oy + width * .6, width * .4, height * .4); 
	context.stroke();

	context.beginPath();
	context.fillStyle = colors[3];
	context.fillRect(ox + width * .6, oy + width * .6, width * .4, height * .4); 
	context.stroke();
}

function draw_left_grids(canvas, ox, oy, width, height, color)
{
	context = canvas.getContext("2d"); //HTML5 Object with many paths for drawing

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		if(i==1)
		{
			context.fillStyle = color;
			context.fillRect(ox+ i * width / 6.0,oy,width / 6.0,height / 3.0);
		}
		else
			context.rect(ox+ i * width / 6.0,oy,width / 6.0,height / 3.0); 
		context.stroke();
	}

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		if(i>0)
		{
			context.fillStyle = color;
			context.fillRect(ox+ i * width / 6.0,oy + height / 3.0,width / 6.0,height / 3.0);
		}
		else
			context.rect(ox+ i * width / 6.0,oy + height / 3.0,width / 6.0,height / 3.0); 
		context.stroke();
	}

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		context.rect(ox+ i * width / 6.0,oy + 2 * height / 3.0,width / 6.0,height / 3.0); 
		context.stroke();
	}
}

function draw_top_grids(canvas, ox, oy, width, height, color)
{
	context = canvas.getContext("2d"); //HTML5 Object with many paths for drawing

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		context.rect(ox,oy+ i * height / 6.0,width / 3.0,height / 6.0);
		context.stroke();
	}

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		if(i>0)
		{
			context.fillStyle = color;
			context.fillRect(ox+width / 3.0,oy+ i * height / 6.0,width / 3.0,height / 6.0);
		}
		else
			context.rect(ox+width / 3.0,oy+ i * height / 6.0,width / 3.0,height / 6.0);
		context.stroke();
	}

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		if(i==1)
		{
			context.fillStyle = color;
			context.fillRect(ox+ 2 * width / 3.0,oy+ i * height / 6.0,width / 3.0,height / 6.0);
		}
		else
			context.rect(ox+ 2 * width / 3.0,oy+ i * height / 6.0,width / 3.0,height / 6.0);
		context.stroke();
	}
}

function draw_bottom_grids(canvas, ox, oy, width, height, color)
{
	context = canvas.getContext("2d"); //HTML5 Object with many paths for drawing

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		if(i==4)
		{
			context.fillStyle = color;
			context.fillRect(ox,oy+ i * height / 6.0,width / 3.0,height / 6.0);
		}
		else
			context.rect(ox,oy+ i * height / 6.0,width / 3.0,height / 6.0);
		context.stroke();
	}

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		if(i<5)
		{
			context.fillStyle = color;
			context.fillRect(ox+width / 3.0,oy+ i * height / 6.0,width / 3.0,height / 6.0);
		}
		else
			context.rect(ox+width / 3.0,oy+ i * height / 6.0,width / 3.0,height / 6.0);
		context.stroke();
	}

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		context.rect(ox+ 2 * width / 3.0,oy+ i * height / 6.0,width / 3.0,height / 6.0);
		context.stroke();
	}
}

function draw_right_grids(canvas, ox, oy, width, height, color)
{
	context = canvas.getContext("2d"); //HTML5 Object with many paths for drawing

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		context.rect(ox+ i * width / 6.0,oy,width / 6.0,height / 3.0); 
		context.stroke();
	}

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		if(i<5)
		{
			context.fillStyle = color;
			context.fillRect(ox+ i * width / 6.0,oy + height / 3.0,width / 6.0,height / 3.0);
		}
		else
			context.rect(ox+ i * width / 6.0,oy + height / 3.0,width / 6.0,height / 3.0); 
		context.stroke();
	}

	for(i=0;i<6;i++)
	{
		context.beginPath();
		//context.lineWidth="6";
		//context.strokeStyle="red";
		if(i==4)
		{
			context.fillStyle = color;
			context.fillRect(ox+ i * width / 6.0,oy + 2 * height / 3.0,width / 6.0,height / 3.0);
		}
		else
			context.rect(ox+ i * width / 6.0,oy + 2 * height / 3.0,width / 6.0,height / 3.0); 
		context.stroke();
	}
}

function draw_board(board_division) {
    var c = document.getElementById(board_division);
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(300, 150);
	ctx.stroke();
}