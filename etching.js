const pad = document.querySelector("#pad");

let pixelCount = 16;
let pixelSIze = Math.floor(500/pixelCount)

for (let i = 0; i <pixelCount; i +=1) {
    const pRow = document.createElement("div");
    console.log(i);
    pRow.style.display = "flex";
    pRow.style.flex = "1";
    pRow.style.flexDirection = "row";
    for (let y = 0; y < pixelCount; y +=1) {
        const pixel = document.createElement("div");
        pixel.style.width = pixelSIze + "px";
        pixel.style.height = pixelSIze + "px";
        pixel.style.border = "solid 1px black";
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "grey";
        });
        pRow.appendChild(pixel);
    }
    pad.appendChild(pRow);
}