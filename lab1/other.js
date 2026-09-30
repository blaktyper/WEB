let selectedX = null;
let selectedR = 1;

const xButtons = document.querySelectorAll(".x-btn");
xButtons.forEach(xButton => {
    xButton.addEventListener("click", function (e) {
        e.preventDefault();

        xButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        selectedX = Number(this.value);
        console.log("Выбран X:", selectedX);
    });
});

const rSelect = document.getElementById("R");
if (rSelect) {
    selectedR = Number(rSelect.value);

    rSelect.addEventListener("change", function (e) {
        selectedR = Number(this.value);
        console.log("Выбран R:", selectedR);

        if (typeof draw === "function") {
            draw();
        }
    });
}