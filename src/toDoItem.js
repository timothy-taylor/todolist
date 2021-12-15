export default function(title, description, dueDate, priority){
    const item = { title, description, dueDate, priority };
    const get = (key) => {
        switch (key) {
            case "title":
                return title;
            case "description":
                return description;
            case "dueDate":
                return dueDate;
            case "priority":
                return priority;
            default:
                return [title, description, dueDate, priority];
        }
    };
    const set = (key,value) => {
        switch (key) {
            case "title":
                title = value;
                break;
            case "description":
                description = value;
                break;
            case "dueDate":
                dueDate = value;
            case "priority":
                priority = value;
                break;
        }
    };

    return { item, get, set };
    }
