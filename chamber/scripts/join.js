const timestampField = document.getElementById("timestamp");
if (timestampField) {
    timestampField.value = new Date().toISOString();
}

const buttons = document.querySelectorAll("[data-modal]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
        const dialog = btn.closest("dialog");
        if (dialog) dialog.close();
    });
});