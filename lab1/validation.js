const yInput = document.getElementById("y-input");
const errorBox = document.getElementById("error-box");

function validateY() {
    hideError();
    const rawValue = yInput.value.trim().replace(',', '.');

    if (rawValue === "") {
        showError("Поле Y не должно быть пустым");
        return false;
    }

    const val = Number(rawValue);
    if (isNaN(val)) {
        showError("Y должен быть числом");
        return false;
    }

    if (val <= -5 || val >= 3) {
        showError("Y должен быть в диапазоне от -5 до 3 (не включая границы)");
        return false;
    }

    return val;
}

function showError(msg) {
    if (errorBox) {
        errorBox.textContent = msg;
        errorBox.style.display = "block";
    }
}

function hideError() {
    if (errorBox) {
        errorBox.textContent = "";
        errorBox.style.display = "none";
    }
}

if (yInput) {
    yInput.addEventListener("input", () => {
        validateY();
    });
}