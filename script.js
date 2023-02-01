
let div = [];
let hexString = "0123456789abcdef";
makeDivs(16);

 container = document.querySelector("#container")
popup = document.querySelector("#popup");
erase = document.querySelector("#erase");


let numOfDivs;
let color = document.querySelector("input");



popup.addEventListener("click", function()
{
    numOfDivs = prompt("Enter desired size of sketch pad: ");
    while(numOfDivs>100)
        {
            numOfDivs = prompt("Max size is 100*100.Please enter again.");
        }
    deleteDivs();
    makeDivs(numOfDivs);
});

erase.addEventListener("click", function()
{
    for(let i = 0;i<div.length;i++)
    {
        div[i].style.backgroundColor = "white";
    }
});



function rndColor()
{
    let colorString = "#";
    colorString[0] = "#";
    for(let i = 1;i<5;i++)
    {
        let rnd = Math.floor(Math.random() * hexString.length);
        colorString += hexString[rnd];
    }
    return colorString;
}

function makeDivs(a)
{
    container.style.gridTemplateColumns = `repeat(${a},auto)`;
    container.style.gridTemplateRows = `repeat(${a},auto)`;

    for(let i = 0;i<a*a;i++)
    {
      div[i]= document.createElement("div");
        container.appendChild(div[i]);
        div[i].classList.add("div");
        div[i].addEventListener("mouseover", function()
        {
            div[i].style.backgroundColor = `${rndColor()}`;
        });
        

    }
    
    
}

function deleteDivs()
{
    for(let i = 0;i<div.length;i++)
    {
        div[i].remove();
    }
}





//const divs = Array.from(document.querySelectorAll(".div"));

// divs.forEach(div => div.addEventListener("mouseover", () => div.classList.add("color")));