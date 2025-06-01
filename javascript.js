const container=document.querySelector("#container");

function getRandomColor() {
  const r = Math.floor(Math.random() * 100);     
  const g = Math.floor(128+Math.random() * 128);    
  const b = Math.floor(128 + Math.random() * 128);
  
  return `rgb(${r}, ${g}, ${b})`;
}


for(let i=1;i<=16*16;i++)
{
    const square=document.createElement("div");
    square.classList.add("square")
    square.addEventListener("mouseover",()=>{
        square.style.backgroundColor=getRandomColor();
    });
    container.appendChild(square);
}

const btn=document.querySelector("#dim");
btn.addEventListener("click",()=>{
    let ip=prompt("Enter dimension of grid(1 to 100)");
    let dim=parseInt(ip);
    container.innerHTML = "";
    for(let i=1;i<=dim*dim;i++)
    {
        document.documentElement.style.setProperty('--grid-size', dim);
        const square=document.createElement("div");
        square.classList.add("square")
        square.addEventListener("mouseover",()=>{
            square.style.backgroundColor=getRandomColor();
        });
        container.appendChild(square);
    }
});


