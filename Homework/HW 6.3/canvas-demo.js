// canvas-demo.js

const demoCanvas = document.getElementById(’canvas-demo’).getContext(’2d’);

window.onload = function() {// make sure to use onload
   
demoCanvas.beginPath();
/* Draw horizontal subpaths (shapes) in one path. */

// Draw a pattern of vertically stack horizontal
// lines.
demoCanvas.moveTo(10, 10);// start at (10,10)
demoCanvas.lineTo(110, 10);
demoCanvas.moveTo(10, 20);// 10 pts below
demoCanvas.lineTo(180, 20);
demoCanvas.moveTo(10, 30);
demoCanvas.lineTo(150, 30);
demoCanvas.moveTo(10, 40);
demoCanvas.lineTo(160, 40);
demoCanvas.moveTo(10, 50);
demoCanvas.lineTo(130, 50);

// try removing this moveTo, the quad-curve will then
// start from from (130, 50), due to the lineTo.
demoCanvas.moveTo(10, 100);// quad-curve starts from here
demoCanvas.quadraticCurveTo(110, 55, 210, 100);// curve upward
demoCanvas.moveTo(10, 100);// back here, let's draw one below
demoCanvas.quadraticCurveTo(110, 145, 210, 100);// curve below
// that forms the eye outline

demoCanvas.moveTo(132.5, 100);// remove this, a horizontal line will be
// drawn from (210, 100) to (132.5, 100) because arc() connects the last
// point to the start of the arc.

demoCanvas.arc(110, 100, 22.5, 0, 2*Math.PI, false);// pupil (circle)

/* We'll talk about this shortly */
demoCanvas.stroke();// draws (by outlining our shapes in the path)
    
    demoCanvas.closePath();// this is required if you want to draw
// in a separate path later
    
}