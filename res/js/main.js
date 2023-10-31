const startGame = document.getElementById("startGame");
const point = document.getElementById("point");
const timeInfo= document.getElementById("timeInfo")

let pointInterval;

startGame.onclick = () => {
    startPointInterval();
    startGame.style.display = "none";
}

const movePoint = (element, x, y) => {
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;

}

const getRandomNumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const startPointInterval = () => {
    clearInterval(pointInterval);
    setPointClick(point);
    pointInterval = setInterval(() => {
        setSize(point, getRandomNumber(70, 100))
        movePoint(point, getRandomNumber(parseFloat(point.style.width), window.innerWidth - parseFloat(point.style.width)), getRandomNumber(parseFloat(point.style.height), window.innerHeight - parseFloat(point.style.height)));
    }, 1000)
}
let timeStart =0;
const setPointClick = (point) => {
    point.onclick = () => {
        if (timeStart == 0) {
            timeStart = performance.now();
        } else {
            let timeEnd = performance.now();
            let resault = timeEnd - timeStart
            timeInfo.innerText = `Time: ${resault} ms`
        }
        point.innerText++;
        movePoint(point, getRandomNumber(parseFloat(point.style.width), window.innerWidth - parseFloat(point.style.width)), getRandomNumber(parseFloat(point.style.height), window.innerHeight - parseFloat(point.style.height)));
    }
}

const setSize = (point, size) => {
    point.style.width = `${size}px`;
    point.style.height = `${size}px`;
}