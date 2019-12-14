import { Card } from "./cards/Card.js";

export class ListItem {
    constructor (data, table) {
        this.data = data;
        this.table = table;
        this.loadTable(data);
        console.log(this.data);

    }

    loadTable(dataArray) {
        const tableBody = document.createElement("tbody");
        for (let i = 0; i < dataArray.length; i++) {
            const dataObject = dataArray[i];
            const valuesArray = Object.values(dataObject);
    
            const tableBodyRow = document.createElement("tr");
            tableBodyRow.addEventListener("click", () => {
                const modalWrapper = document.getElementById("modalCard");
                new Card(dataObject, modalWrapper);
            });

            for (let i = 0; i < 5; i++) {
                const tableCell = document.createElement("td");
                tableCell.textContent = valuesArray[i];
                tableBodyRow.appendChild(tableCell);
            }
    
            tableBody.appendChild(tableBodyRow);
            this.table.appendChild(tableBody);
        }
    }
}


