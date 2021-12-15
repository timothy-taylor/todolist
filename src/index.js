import Project from './toDoProject.js';
import Item from './toDoItem.js';
import modal from './modals.js';
import main from './main.js';
import header from './header.js';
import footer from './footer.js';
import nav from './nav.js';
import load from './load.js';
import './style.css';

const library = load();
console.log(library);

//
//
// DOM 
const container = document.createElement('DIV');
container.classList.add('container');
document.body.appendChild(container);
container.appendChild(header());
container.appendChild(modal(library.projects[library.active_project_ix]));
const itemModal = document.getElementById("itemModal");
const projectModal = document.getElementById("projectModal");
const viewAll = document.getElementById("viewAllModal");
const renameProject = document.getElementById("renameProject");
container.appendChild(nav(itemModal,projectModal,viewAll,renameProject));
container.appendChild(main(
    library.projects[library.active_project_ix], 
    library.active_project_ix,
    library.projects.length)
);
container.appendChild(footer());

//
//
//
// event listeners
const chooseform = document.forms['chooseform'];
chooseform.addEventListener('submit', () => {
    library.active_project_ix = chooseform.elements[0].value;
    library.save();
});

const itemform = document.forms['itemform'];
itemform.addEventListener('submit', () => {
    const title = itemform.elements[0].value;
    const desc = itemform.elements[1].value;
    const date = itemform.elements[2].value;
    const prio = itemform.elements[3].value;
    const item = Item(title,desc,date,prio);
    library.projects[library.active_project_ix].add(item);
    library.save();
});

const projform = document.forms['projform'];
projform.addEventListener('submit', () => {
    const title = projform.elements[0].value;
    const project = Project(title);
    library.add(project);
    library.active_project_ix = library.projects.length - 1;
    library.save();
});

const rename = document.forms['renameform'];
rename.addEventListener('submit', () => {
    const name = renameform.elements[0].value;
    library.projects[library.active_project_ix].rename(name);
    library.save();
});

const removeProj = document.getElementById("Delete current project");
removeProj.addEventListener('click', () => {
    if (confirm("Are you sure?") && library.projects.length > 1) {
        const old_ix = library.active_project_ix;
        library.active_project_ix = 0;
        library.remove(old_ix);
        library.save();
        window.location.reload();
    };
});

const removeTask = document.getElementById("content");
removeTask.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    } else {
        if (confirm("Are you sure?")) {
            library.projects[library.active_project_ix].remove(e.target.id);
            library.save();
            window.location.reload();
        }
    }
});
