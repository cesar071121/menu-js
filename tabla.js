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

    function updateTable() {
        let filas = filasSlider.value;
        let columnas = columnasSlider.value;
        let html = "";
        for (let i = 0; i < filas; i++) {
            html += "<tr>";
            for (let j = 0; j < columnas; j++) {
                html += "<td>fila " + ", columna " +  "</td>";
            }
            html += "</tr>";
        }
        table.innerHTML = html;
    }
