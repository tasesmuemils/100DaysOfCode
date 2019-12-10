import { ListItem } from "./ListItem.js";

export class ListTable {
    constructor(element) {
        this.element = element;
    }

    downloadData() {
        const dataUrl = "https://tasesmuemils.github.io/json_test/kg_data.json";
        fetch(dataUrl)
            .then(response => response.json())
            .then(data => this.downloadDone(data));
    }

    downloadDone(responseData) {
        const createItem = new ListItem(responseData, this.element);
    }
}