export default function editTask(item) {
    const editItemModal = document.createElement('DIV');
    editItemModal.classList.add('modal');
    editItemModal.id = "editItemModal";

    const editItemModalForm = document.createElement('FORM');
    editItemModalForm.name = "edititemform";
    const editItemModalH2 = document.createElement('H2');
    editItemModalH2.innerHTML = "Edit task";

    const editItemModalTitle = document.createElement('INPUT');
    editItemModalTitle.value = item.get('title');
    editItemModalTitle.maxLength = 25;

    const editItemModalDescript = document.createElement('TEXTAREA');
    editItemModalDescript.placeholder = "Description";

    const editItemModalDueDate = document.createElement('INPUT');
    editItemModalDueDate.type = "date";

    const prioLabel = document.createElement('LABEL');
    prioLabel.for = "priority";
    prioLabel.innerHTML = "Priority:";
    const editItemModalPriority = document.createElement('INPUT');
    editItemModalPriority.type = "range";
    editItemModalPriority.name = "priority";

    const submit = document.createElement('INPUT');
    submit.value = "Edit";
    submit.type = "submit";
    submit.id = "submit";

    editItemModalForm.appendChild(editItemModalH2);
    editItemModalForm.appendChild(editItemModalTitle);
    editItemModalForm.appendChild(editItemModalDescript);
    editItemModalForm.appendChild(editItemModalDueDate);
    editItemModalForm.appendChild(prioLabel);
    editItemModalForm.appendChild(editItemModalPriority);
    editItemModalForm.appendChild(submit);

    editItemModal.appendChild(editItemModalForm);

    return editItemModal;
}


