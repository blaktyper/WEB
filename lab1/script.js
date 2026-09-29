
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const R = 200;
const halfR = R / 2;
const tickSize = 5;

function draw() {

    ctx.clearRect(0, 0, width, height);

    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(width - 20, centerY);
    ctx.lineTo(20, centerX);
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(width - 10, centerY);
    ctx.lineTo(width - 18, centerY - 5);
    ctx.lineTo(width - 18, centerY + 5);
    ctx.closePath();
    ctx.stroke()


    ctx.beginPath();
    ctx.moveTo(centerX, height - 20);
    ctx.lineTo( centerX, 20 );
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(centerX, 10);
    ctx.lineTo(centerX - 5, 18);
    ctx.lineTo(centerX + 5, 18);
    ctx.closePath();
    ctx.stroke()


    ctx.beginPath();

    const xTicks = [-R, -halfR, halfR, R];
    xTicks.forEach(offset => {
        ctx.moveTo(centerX + offset, centerY - tickSize);
        ctx.lineTo(centerX + offset, centerY + tickSize);
    });

    const yTicks = [-R, -halfR, halfR, R];
    yTicks.forEach(offset => {
        ctx.moveTo(centerX - tickSize, centerY - offset);
        ctx.lineTo(centerX + tickSize, centerY - offset);
    });
    ctx.stroke();

    ctx.fillText("-R", centerX - R, centerY + 15);
    ctx.fillText("-R/2", centerX - halfR, centerY + 15);
    ctx.fillText("R/2", centerX + halfR, centerY + 15);
    ctx.fillText("R", centerX + R, centerY + 15);
    ctx.fillText("X", width - 12, centerY + 12);

    ctx.fillText("R", centerX - 25, centerY - R);
    ctx.fillText("R/2", centerX - 25, centerY - halfR);
    ctx.fillText("-R/2", centerX - 25, centerY + halfR);
    ctx.fillText("-R", centerX - 25, centerY + R);
    ctx.fillText("Y", centerX - 12, 12);


    ctx.fillStyle = "rgba(51, 153, 255, 0.5)";
    ctx.fillRect(centerX, centerY, -R, halfR);

    ctx.fillStyle = "rgba(51, 153, 255, 0.5)";
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - R);
    ctx.lineTo(centerX + R, centerY);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, halfR,-Math.PI,-Math.PI/2,false);
    ctx.fillStyle = "rgba(51, 153, 255, 0.5)";
    ctx.closePath();
    ctx.fill()
}
draw();



