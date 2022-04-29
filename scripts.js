window.addEventListener('DOMContentLoaded', function () {
    const newP = document.createElement("p");
    const pContent = document.createTextNode("First script worked!!");
    newP.appendChild(pContent);

    document.body.appendChild(newP);
});
