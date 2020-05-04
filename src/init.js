const init = () =>  {
    document.body.innerHTML += `
        <div class="container"></div>
        <button> click me</button>    
    `;
    document.querySelector("button").addEventListener("click", () => {
    const myElem = document.getElementById("my-component");
    if (myElem) {
        document.querySelector(".container").removeChild(myElem);
    } else {
        const div = document.createElement("div");
        div.id = "my-component";
        div.innerText = "Hello!";
        document.querySelector(".container").appendChild(div);
    }
});};

init();
