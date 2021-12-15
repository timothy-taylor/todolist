export default function() {
    const header = document.createElement('HEADER');
    header.id = "header";

    const h1 = document.createElement('H1');
    h1.innerText = "todos";
    header.appendChild(h1);

    return header;
}
