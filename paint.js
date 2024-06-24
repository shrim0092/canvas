let pos={x: 0, y: 0};
let canvas=document.getElementById("canvas");
let ctx_handle=canvas.getContext("2d");
ctx_handle.canvas.width=window.innerWidth;
ctx_handle.canvas.height=window.innerHeight;

document.addEventListener('mousemove', drawCanvas);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

function setPosition(e) {
	pos.x=e.clientX;
	pos.y=e.clientY;
}

function drawCanvas(e) {
	if(e.buttons !==1)
		return;

	ctx_handle.lineWidth=5;
	ctx_handle.moveTo(pos.x, pos.y)
	setPosition(e);
	ctx_handle.lineTo(pos.x, pos.y);
	ctx_handle.stroke();
}
