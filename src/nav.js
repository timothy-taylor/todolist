export default function(itemModal, projectModal, viewAllModal, renameProject){
    const nav = document.createElement('UL');
    nav.id = "nav";
   
    const links = [
        "New task", 
        "Rename current project", 
        "Delete current project", 
        "Choose project", 
        "New project"
    ];
    links.forEach((link) => {
        const li = document.createElement('LI');
        const btn = document.createElement('BUTTON');
        btn.innerHTML = link;
        btn.id = link;
        btn.onclick = (e) => {
            switch (e.target.id) {
                case links[0]:
                    itemModal.style.display = "block";
                    break;
                case links[1]:
                    renameProject.style.display = "block";
                    break;
                case links[2]:
                    // delete project
                    break;
                case links[3]:
                    viewAllModal.style.display = "block";
                    break;
                case links[4]:
                    projectModal.style.display = "block";
                    break;
            }
        }
        li.appendChild(btn);
        nav.appendChild(li);
    });

    window.addEventListener('click', (e) => {
        if ([itemModal, projectModal, viewAllModal, renameProject].includes(e.target)) {
            itemModal.style.display = "none";
            projectModal.style.display = "none";
            viewAllModal.style.display = "none";
            renameProject.style.display = "none";
        }
    });

    return nav;
}
