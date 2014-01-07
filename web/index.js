$(document).ready(function () {
    var c = document.getElementById("canvas");
    var context = c.getContext("2d");

    // begin custom shape
    context.beginPath();
    context.moveTo(170, 80);
    context.bezierCurveTo(130, 100, 130, 150, 230, 150);
    context.bezierCurveTo(250, 180, 320, 180, 340, 150);
    context.bezierCurveTo(420, 150, 420, 120, 390, 100);
    context.bezierCurveTo(430, 40, 370, 30, 340, 50);
    context.bezierCurveTo(320, 5, 250, 20, 250, 50);
    context.bezierCurveTo(200, 5, 150, 20, 170, 80);

    // complete custom shape
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.strokeStyle = 'blue';
    context.stroke();

    //context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(200, 200, 100, 0, 2*Math.PI);

    context.closePath();
    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.fillStyle = '#ff0000';
    context.fill();
    context.stroke();
});
