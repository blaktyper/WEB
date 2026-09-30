function checkHit(x, y, r) {
    const halfR = r / 2;
    const inRectangle = (x <= 0 && x >= -r) && (y <= 0 && y >= -halfR);
    const inTriangle = (x >= 0) && (y >= 0) && (x + y <= r);
    const inSector = (x <= 0 && y >= 0) && (x * x + y * y <= halfR * halfR);
    return inRectangle || inTriangle || inSector;
}

function drawPoint(x, y, r, isHit) {
    if (typeof centerX === "undefined" || typeof centerY === "undefined" || typeof R === "undefined" || typeof ctx === "undefined") {
        return;
    }

    const pixelX = centerX + (x / r) * R;
    const pixelY = centerY - (y / r) * R;

    ctx.beginPath();
    ctx.arc(pixelX, pixelY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = isHit ? "#2ecc71" : "#e74c3c";
    ctx.fill();
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}

const form = document.getElementById("form_id");
const resultBody = document.getElementById("result_body");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (selectedX === null) {
            if (typeof showError === "function") {
                showError("Пожалуйста, выберите значение X");
            }
            return;
        }

        const yValue = typeof validateY === "function" ? validateY() : false;
        if (yValue === false) {
            return;
        }

        const isHit = checkHit(selectedX, yValue, selectedR);

        if (typeof draw === "function") {
            draw();
        }
        drawPoint(selectedX, yValue, selectedR, isHit);

        let resultText = isHit ? "Попадание" : "Промах";
        let resultColor = isHit ? "green" : "red";
        const now = new Date().toLocaleTimeString();

        if (resultBody) {
            const row = document.createElement("tr");
            row.innerHTML = "<td>" + selectedX + "</td>" +
                "<td>" + yValue + "</td>" +
                "<td>" + selectedR + "</td>" +
                "<td>" + now + "</td>" +
                "<td style='color: " + resultColor + "'>" + resultText + "</td>";

            resultBody.appendChild(row);
        }

        saveResult(selectedX, yValue, selectedR, now, resultText, resultColor);
    });
}

function saveResult(x, y, r, time, hitText, hitColor) {
    let history = JSON.parse(localStorage.getItem("results")) || [];
    history.push({ x: x, y: y, r: r, time: time, text: hitText, color: hitColor });
    localStorage.setItem("results", JSON.stringify(history));
}

function loadHistory() {
    if (!resultBody) return;

    let history = JSON.parse(localStorage.getItem("results")) || [];
    for (let i = 0; i < history.length; i++) {
        let item = history[i];
        let row = document.createElement("tr");
        row.innerHTML = "<td>" + item.x + "</td>" +
            "<td>" + item.y + "</td>" +
            "<td>" + item.r + "</td>" +
            "<td>" + item.time + "</td>" +
            "<td style='color: " + item.color + "'>" + item.text + "</td>";
        resultBody.appendChild(row);
    }
}

loadHistory();