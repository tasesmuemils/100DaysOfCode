export class Card {
    constructor(item, modal) {
        this.item = item;
        console.log(modal);
        this.cardDesign(modal, item);
    }

    cardDesign(modalContent, itemObject) {
        const cardContentWrapper = document.createElement("form");
        cardContentWrapper.style.display = "grid";
        Object.keys(itemObject).forEach(key => {
            const inputLabel = document.createElement("label");
            inputLabel.textContent = key;
            cardContentWrapper.appendChild(inputLabel);
        });
        Object.values(itemObject).forEach(keyValue => {
            const inputField = document.createElement("input");
            inputField.value = keyValue;
            cardContentWrapper.appendChild(inputField);
        });

        modalContent.appendChild(cardContentWrapper);
        modalContent.style.visibility = "unset";
    }
}