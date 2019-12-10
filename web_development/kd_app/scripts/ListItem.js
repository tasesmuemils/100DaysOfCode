export class ListItem {
    constructor (data, table) {
        this.data = data;
        this.table = table;
        this.loadTable(data);
        this.openCard(this.table.lastChild.childNodes);
    }

    loadTable(dataArray) {
        const tableBody = document.createElement("tbody");
        for (let i = 0; i < dataArray.length; i++) {
            const dataObject = dataArray[i];
            const valuesArray = Object.values(dataObject);
    
            const tableBodyRow = document.createElement("tr");
            
            for (let i = 0; i < 5; i++) {
                const tableCell = document.createElement("td");
                tableCell.textContent = valuesArray[i];
                tableBodyRow.appendChild(tableCell);
            }
    
            tableBody.appendChild(tableBodyRow);
            this.table.appendChild(tableBody);
        }
    }

    openCard(rows) {
        rows.forEach(row => {
            row.addEventListener("click", () => alert("hi"))
        });
    }
}


