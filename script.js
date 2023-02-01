
makeDivs();

 container = document.querySelector("#container");
popup = document.querySelector("#popup");



function makeDivs()
{
    for(let i = 0;i<256;i++)
    {
        let newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.classList.add("div");
        newDiv.addEventListener("mouseover", ()=> newDiv.classList.add("color"));

    }
}





//const divs = Array.from(document.querySelectorAll(".div"));

// divs.forEach(div => div.addEventListener("mouseover", () => div.classList.add("color")));