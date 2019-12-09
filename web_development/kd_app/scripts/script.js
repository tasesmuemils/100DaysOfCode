const dataUrl = "https://tasesmuemils.github.io/json_test/kg_data.json";

function downloadData() {

    fetch(dataUrl)
        .then(response => response.json());
        console.log(response);
}

downloadData();

// data.forEach(arrayItem => {
            //     console.log(arrayItem);
            //     // for (let i = 0; i < arrayItem.length; i++) {
            //     //     console.log(i);
            //     //     // const tableCell = document.createElement("td");
            //     //     // tableCell.textContent = i;
                    
            //     //     // const tableBodyRow = document.createElement("tr");
            //     //     // tableBodyRow.appendChild(tableCell);

            //     //     // const dataTable = document.getElementById("group-table");
            //     //     // const tableBody = document.createElement("tbody");
                    
        
        

            //     //     // tableBody.appendChild(tableBodyRow); 
            //     //     // dataTable.appendChild(tableBody);
            //     // }
            // }) 