<script>
    // Adiciona evento de clique nas linhas da tabela
    var table = document.getElementById("bandTable");
    var rows = table.getElementsByTagName("tr");
    for (var i = 0; i  rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler = function(row) {
            return function() {
                var cell = row.getElementsByTagName("td")[0];
                alert("Clicou na banda: " + cell.innerHTML);
            };
        };
        currentRow.onclick = createClickHandler(currentRow);
    }
</script>