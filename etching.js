const pad = document.querySelector("#pad");

for (let i = 0; i <16; i +=1) {
    const pRow = document.createElement("div");
    console.log(i);
    pRow.style.display = "flex";
    for (let y = 0; y < 16; y +=1) {
        const pixel = document.createElement("div");
        pixel.style.padding = "5px"
        pRow.appendChild(pixel);
    }
    pad.appendChild(pRow);
}