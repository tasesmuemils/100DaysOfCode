export class Card {
    constructor(item, modal) {
        this.item = item;
        this.modal = modal;
        this.cardDesign(this.modal, this.item);
        this.closeModal(this.modal);
    }

    cardDesign(modalContent, itemObject) {
        console.log(itemObject.id, itemObject.first_name);
        const cardContent = document.createElement("div");
        cardContent.classList.add("modal-content");
        cardContent.innerHTML = `
            <form action="">
                <div class="input-wrapper">
                    <label for="">ID</label>
                    <input type="number" value=${itemObject.id}>
                </div>
                <div class="input-wrapper">
                    <label for="">Name</label>
                    <input type="text" value=${itemObject.first_name}>
                </div>
                <div class="input-wrapper">
                    <label for="">Last name</label>
                    <input type="text" value=${itemObject.last_name}>
                </div>
                <div class="input-wrapper">
                    <label for="">Birth date</label>
                    <input type="text" value=${itemObject.birth_date}>
                </div>
                <div class="input-wrapper">
                    <label for="">Gender</label>
                    <input type="text" value=${itemObject.gender}>
                </div>
                <div class="input-wrapper">
                    <label for="">Mothers name</label>
                    <input type="text" value=${itemObject.mothers_name}>
                </div>
                <div class="input-wrapper">
                    <label for="">Mother phone number</label>
                    <input type="text" value=${itemObject.mothers_phone}>
                </div>
                <div class="input-wrapper">
                    <label for="">Fathers name</label>
                    <input type="text" value=${itemObject.fathers_name}>
                </div>
                <div class="input-wrapper">
                    <label for="">Fathers phone number</label>
                    <input type="text" value=${itemObject.fathers_phone}>
                </div>
                <div class="input-wrapper">
                    <label for="">Notes</label>
                    <textarea type="text" name="notes" cols="40" rows="2">${itemObject.notes}</textarea>
                </div>
                <div class="forms-buttons">
                    <button type="button" class="close-card" id="closeCard">Close</button>
                </div>
            </form>
        `
               
        modalContent.style.visibility = "unset";
        modalContent.appendChild(cardContent);
    }

    closeModal(modal) {
        const closeButton = document.getElementById("closeCard");

        closeButton.addEventListener("click", () => {
            modal.style.visibility = "hidden";
            modal.innerHTML = "";
        });
    }
}
