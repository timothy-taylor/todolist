export default function () {
    const header = document.createElement("HEADER");
    header.id = "header";

    const h1 = document.createElement("H1");
    h1.innerText = "todos";
    const text = document.createTextNode("Skip links");
    const skip = document.createElement('A');
    skip.appendChild(text);
    skip.class = "skip";
    skip.href = "#content";

    header.appendChild(h1);
    header.appendChild(skip);

    return header;
}
