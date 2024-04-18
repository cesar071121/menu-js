const filasSlider = document.getElementById("filasSlider");
const columnasSlider = document.getElementById("columnasSlider");
const filasOutput = document.getElementById("filasOutput");
const columnasOutput = document.getElementById("columnasOutput");
const table = document.getElementById("myTable");

filasSlider.oninput = function() {
    filasOutput.innerHTML = this.value;
    updateTable();
}

columnasSlider.oninput = function() {
    columnasOutput.innerHTML = this.value;
    updateTable();
}

let colo1 = document.querySelector("#color1");
let colo2 = document.querySelector("#color2");

colo1.oninput = () => {
    updateTable();
};
colo2.oninput = () => {
    updateTable();
};

let color = true;

function updateTable() {
    let filas = filasSlider.value;
    let columnas = columnasSlider.value;
    let html = "";
    let cc1 = colo1.value;
    let cc2 = colo2.value;
    for (let i = 0; i < filas; i++) {
        html += "<tr>";
        for (let j = 0; j < columnas; j++) {
            if (i % 2 === 0) {
                html += "<td bgcolor=" + cc1 + ">" + j + "</td>";
            } else {
                html += "<td bgcolor=" + cc2 + ">" + i + "</td>";
            }
        }
        html += "</tr>";
    }
    table.innerHTML = html;
}
