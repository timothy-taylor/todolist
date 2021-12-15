import Library from "./library.js";
import Project from "./toDoProject.js";
import Item from "./toDoItem.js";

const load = (storage) => {
    if (storage) {
        const library = JSON.parse(storage);
        const projects = library["projects"].map((e) => {
            const list = e.project.list.map((e) =>
                Item(
                    e.item.title,
                    e.item.description,
                    e.item.dueDate,
                    e.item.priority
                )
            );
            return Project(e.project.title, list);
        });
        return Library(projects, library["active_project_ix"]);
    } else {
        return Library();
    }
};

export default function () {
    return load(localStorage.getItem("todo-library"));
}
