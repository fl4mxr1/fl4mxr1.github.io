var root = {
  wavecolor: {  
    r: 10,
    g: 255,
    b: 20
    },
    rainbowSpeed: 0.5,
    rainbow: false,
    matrixspeed: 1
};

var c = document.getElementById("c");
var ctx = c.getContext("2d");

var hueFw = false;
var hue = -0.01;

// making the canvas full screen
c.height = window.innerHeight;
c.width = 9999;

// the characters
var konkani  = "゠アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレワヰヱヲンヺ・ーヽヿ0123456789"
// converting the string into an array of single characters
var characters = konkani.split("");
var font_size = 16;
var columns = c.width/font_size;    // number of columns for the rain
var gradient = ctx.createLinearGradient(0,10, 0,200);
// an array of drops - one per column
var drops = [];
// x below is the x coordinate
// 1 = y-coordinate of the drop (same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

// drawing the characters
function draw() {
	// Get the BG color based on the current time i.e. rgb(hh, mm, ss)
	// translucent BG to show trail

	ctx.fillStyle = "rgba(0,0,0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.fillStyle = "#BBB"; // grey text
	ctx.font = font_size + "px 'Fira Mono'";

	// looping over drops
	for (var i = 0; i < drops.length; i++)
	{
			// background color
			ctx.fillStyle = "rgba(10,10,10, 1)";
			ctx.fillRect(i * font_size, drops[i] * font_size,font_size,font_size);
			// a random chinese character to print
			var text = characters[Math.floor(Math.random() * characters.length)];
			// x = i * font_size, y = value of drops[i] * font_size

			if (root.rainbow) {
				hue += (hueFw) ? 0.01 : -0.01;
				var rr = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 0) + 128);
				var rg = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 2) + 128);
				var rb = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 4) + 128);
				ctx.fillStyle = 'rgba(' + rr + ',' + rg + ',' + rb + ')';
			} else {
				ctx.fillStyle = 'rgba(' + root.wavecolor.r + ',' + root.wavecolor.g + ',' + root.wavecolor.b + ')';
			}

			ctx.fillText(text, i * font_size, drops[i] * font_size);
			// Incrementing Y coordinate
			drops[i]++;
			// sending the drop back to the top randomly after it has crossed the screen
			// adding randomness to the reset to make the drops scattered on the Y axis
		 if (drops[i] * font_size > c.height && Math.random() > 0.975)
				drops[i] = 0;
	}
}

// window.onresize=()=>{
//     location.reload();
// }

let olditv = setInterval(draw, root.matrixspeed);
setTimeout(() => {
	root.matrixspeed = 30
	clearInterval(olditv)
	setInterval(draw, root.matrixspeed)
}, 100);

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

