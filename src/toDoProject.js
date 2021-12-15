export default function (title, list = []) {
    const project = { title, list };
    const rename = (name) => {
        project.title = name;
    };
    const add = (item) => {
        list.push(item);
    };
    const remove = (ix) => {
        list.splice(ix, 1);
    };
    const get = (key) => {
        switch (key) {
            case "title":
                return title;
            case "list":
                return list;
            default:
                return [title, list];
        }
    };

    return { project, rename, get, add, remove };
}
