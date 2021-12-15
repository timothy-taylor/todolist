import Project from "./toDoProject.js";

export default function (
    projects = [Project("starter project")],
    active_project_ix = 0
) {
    const add = (item) => projects.push(item);
    const remove = (ix) => projects.splice(ix, 1);
    function save() {
        localStorage.setItem("todo-library", JSON.stringify(this));
    }
    return { projects, active_project_ix, add, remove, save };
}
