export class Card {
    constructor(item, modal) {
        this.item = item;
        this.cardDesign(modal, item);
    }

    cardDesign(modalContent, itemObject) {
        const cardContentWrapper = document.createElement("form");
        cardContentWrapper.style.display = "grid";
        Object.entries(itemObject).forEach(pair => {

            const inputLabel = document.createElement("label");
            const keyString = (pair[0].replace("_", " "));
            inputLabel.textContent = keyString.charAt(0).toUpperCase() + keyString.slice(1);
            cardContentWrapper.appendChild(inputLabel);

            const inputField = document.createElement("input");
            inputField.value = pair[1];
            cardContentWrapper.appendChild(inputField);
        })
    

        modalContent.appendChild(cardContentWrapper);
        modalContent.style.visibility = "unset";
    }
}