document.getElementById('prod').addEventListener('change', (event) => {
    const code = document.getElementById('prod').value;
    document.getElementById('towns').length = 0;
    dataTowns.filter(town => town.producto == code).forEach(townAux => {
        document.getElementById('towns').add(new Option( townAux.name, townAux.code));
    })
});
