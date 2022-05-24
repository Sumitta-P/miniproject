let colorBtn = document.getElementById("color-btn");
let faceBtn = document.getElementById("face-btn");
let hornsBtn = document.getElementById("horns-btn");

let docRoot = document.querySelector(":root");

let bodyColors = [
    "#86e3ce", 
    "#bce6ff",
    "#ffca95",
    "#dccbed",
    "#ffcfcb",
    "#fe8fb2",
];

let colors = [...bodyColors, "transparent"];
let [counter1, counter2, counter3] = Array(3).fill(0);

let setCounter = (counter, len) => {
    return counter < len -1 ? counter + 1 : 0;
};

faceBtn.addEventListener("click", () => {
    counter1 = setCounter(counter1, 16);
    document.getElementById("face").setAttribute("src", `face-${counter1}.svg`);
});

colorBtn.addEventListener("click", () => {
    counter2 = setCounter(counter2, bodyColors.length);
    docRoot.style.setProperty("--color-monster", bodyColors[counter2]);
});

hornsBtn.addEventListener("click", () => {
    counter3 = setCounter(counter3, colors.length);
    docRoot.style.setProperty("--color-horns", colors[counter3]);
})