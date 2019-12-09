const dataUrl = "https://tasesmuemils.github.io/json_test/kg_data.json";

function downloadData() {
    fetch(dataUrl)
        .then(response => response.json())
        .then(data => loadTable(data))
}

downloadData();

function loadTable(dataArray) {
    console.log(dataArray);
    for (let i = 0; i < dataArray.length; i++) {
        const dataObject = dataArray[i];
        const valuesArray = Object.values(dataObject);

        const tableBodyRow = document.createElement("tr");
        const tableBody = document.createElement("tbody");

        for (let i = 0; i < 5; i++) {
            const tableCell = document.createElement("td");
            tableCell.textContent = valuesArray[i];
            
            tableBodyRow.appendChild(tableCell);
            
        }
       

        const dataTable = document.getElementById("group-table");
        tableBody.appendChild(tableBodyRow); 
        dataTable.appendChild(tableBody);
       
      
    }
}