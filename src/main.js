export default function(project,ix,size) {
    const main = document.createElement('MAIN');
    main.id = 'content';
   
    if (project) {
        const h2 = document.createElement('H2');
        h2.innerText = (parseInt(ix) + 1) + "/" + size + ": " + project.get("title");

        const ul = document.createElement('UL');
        const list = project.get("list")
        list.forEach((item,i) => {
            const li = document.createElement('LI');
            const head = document.createElement('H3');
            head.innerHTML = item.get('title');
            const date = document.createElement('H4');
            date.innerHTML = item.get('dueDate');
            const body = document.createElement('P');
            body.innerHTML = item.get('description');
            const remove = document.createElement('BUTTON');
            remove.innerHTML = "done / delete";
            remove.id = i;
            li.appendChild(head);
            li.appendChild(date);
            li.appendChild(body);
            li.appendChild(remove);

            ul.appendChild(li);
        });

        main.appendChild(h2);
        main.appendChild(ul);
    } else {
        const h2 = document.createElement('H2');
        h2.innerTEXT = "no existing projects";
        main.appendChild(h2);
    }
    return main;
}
