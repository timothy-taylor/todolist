import load from './load.js';

const library = load();

function chooseProjectModal() {
    const viewAllModal = document.createElement('DIV');
    viewAllModal.classList.add('modal');
    viewAllModal.id = "viewAllModal";

    const content = document.createElement('FORM');
    content.name = "chooseform";
    const label = document.createElement('LABEL');
    label.for = "Projects";

    const select = document.createElement('SELECT');
    select.id = "Projects";

    library.projects.forEach( (proj,i) => {
        const option = document.createElement('OPTION');
        option.value = i;
        option.innerHTML = proj.get('title');
        select.appendChild(option);
    });

    const submit = document.createElement('INPUT');
    submit.value = "Load";
    submit.type = "submit";
    submit.id = "submit";

    content.appendChild(label);
    content.appendChild(select);
    content.appendChild(submit);
    viewAllModal.appendChild(content);

    return viewAllModal;
}

function projectModal() {
    const projectModal = document.createElement('DIV');
    projectModal.classList.add('modal');
    projectModal.id = "projectModal";

    const projectModalForm = document.createElement('FORM');
    projectModalForm.name = "projform";
    const projectModalH2 = document.createElement('H2');
    projectModalH2.innerHTML = "New project";

    const projectModalTitle = document.createElement('INPUT');
    projectModalTitle.required = true;
    projectModalTitle.placeholder = "Title";
    projectModalTitle.maxLength = 25;

    const submit = document.createElement('INPUT');
    submit.value = "Create";
    submit.type = "submit";
    submit.id = "submit";

    projectModalForm.appendChild(projectModalH2);
    projectModalForm.appendChild(projectModalTitle);
    projectModalForm.appendChild(submit);
    projectModal.appendChild(projectModalForm);

    return projectModal;
}

function renameProject(project) {
    const rename = document.createElement('DIV');
    rename.classList.add('modal');
    rename.id = "renameProject";

    const renameForm = document.createElement('FORM');
    renameForm.name = "renameform";
    const renameFormH2 = document.createElement('H2');
    renameFormH2.innerHTML = "Rename project";

    const newTitle = document.createElement('INPUT');
    newTitle.placeholder = project.get("title");
    newTitle.maxLength = 25;

    const submit = document.createElement('INPUT');
    submit.value = "Rename";
    submit.type = "submit";
    submit.id = "submit";

    renameForm.appendChild(renameFormH2);
    renameForm.appendChild(newTitle);
    renameForm.appendChild(submit);
    rename.appendChild(renameForm);

    return rename;
}

function itemModal() {
    const itemModal = document.createElement('DIV');
    itemModal.classList.add('modal');
    itemModal.id = "itemModal";

    const itemModalForm = document.createElement('FORM');
    itemModalForm.name = "itemform";
    const itemModalH2 = document.createElement('H2');
    itemModalH2.innerHTML = "New task";

    const itemModalTitle = document.createElement('INPUT');
    itemModalTitle.required = true;
    itemModalTitle.placeholder = "Title";
    itemModalTitle.maxLength = 25;

    const itemModalDescript = document.createElement('TEXTAREA');
    itemModalDescript.placeholder = "Description";

    const itemModalDueDate = document.createElement('INPUT');
    itemModalDueDate.type = "date";

    const prioLabel = document.createElement('LABEL');
    prioLabel.for = "priority";
    prioLabel.innerHTML = "Priority:";
    const itemModalPriority = document.createElement('INPUT');
    itemModalPriority.type = "range";
    itemModalPriority.name = "priority";

    const submit = document.createElement('INPUT');
    submit.value = "Create";
    submit.type = "submit";
    submit.id = "submit";

    itemModalForm.appendChild(itemModalH2);
    itemModalForm.appendChild(itemModalTitle);
    itemModalForm.appendChild(itemModalDescript);
    itemModalForm.appendChild(itemModalDueDate);
    itemModalForm.appendChild(prioLabel);
    itemModalForm.appendChild(itemModalPriority);
    itemModalForm.appendChild(submit);

    itemModal.appendChild(itemModalForm);

    return itemModal;
}

export default function(project){
    const modals = document.createElement('DIV');
    modals.id = "mostmodals";

    modals.appendChild(itemModal());
    modals.appendChild(projectModal());
    modals.appendChild(renameProject(project));
    modals.appendChild(chooseProjectModal());

    return modals;
}
