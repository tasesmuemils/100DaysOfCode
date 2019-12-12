export class Card {
    constructor(item, modal) {
        this.item = item;
        this.modal = modal;
        this.cardDesign(this.modal, item);
    }

    cardDesign(modalContent, itemObject) {
        const cardContentWrapper = document.createElement("form");
        cardContentWrapper.style.display = "grid";
        Object.entries(itemObject).forEach(pair => {

            const inputLabel = document.createElement("label");
            const keyString = (pair[0].replace("_", " "));
            inputLabel.textContent = keyString.charAt(0).toUpperCase() + keyString.slice(1);

            const inputField = document.createElement("input");
            inputField.value = pair[1];

            const inputLabelWrapper = document.createElement("div");
            inputLabelWrapper.classList.add("input-wrapper");
            inputLabelWrapper.appendChild(inputLabel);
            inputLabelWrapper.appendChild(inputField);
            cardContentWrapper.appendChild(inputLabelWrapper);
        })
    
        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.textContent = "Close";
        closeButton.classList.add("close-card");
        modalContent.style.visibility = "unset";
        closeButton.addEventListener("click", () => {
            modalContent.style.visibility = "hidden";
            modalContent.innerHTML = "";
        });
        cardContentWrapper.appendChild(closeButton);

        modalContent.appendChild(cardContentWrapper);
        
    }
}