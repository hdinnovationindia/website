const droneContainer = document.getElementById("drone-sky");

const droneColors = [
    "#00E5FF",
    "#A020F0",
    "#FF3CAC",
    "#4DFFFF",
    "#FFD700",
    "#00FF88",
    "#FF6B35",
    "#FFFFFF"
];

const TOTAL_DRONES = 50;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createDrone() {

    const drone = document.createElement("div");

    drone.classList.add("drone-fly");

    drone.innerHTML = "✦";

    droneContainer.appendChild(drone);

    animateDrone(drone);
}

function animateDrone(drone) {

    const startX = random(0, window.innerWidth);
    const startY = random(0, window.innerHeight);

    const moveX = random(-400, 400);
    const moveY = random(-300, 300);

    const duration = random(10, 25);

    drone.style.left = startX + "px";
    drone.style.top = startY + "px";

    drone.style.color =
        droneColors[
            Math.floor(Math.random() * droneColors.length)
        ];

    drone.style.fontSize =
        random(4, 10) + "px";

    drone.style.opacity = "0";

    drone.animate(
        [
            {
                transform: "translate(0px,0px)",
                opacity: 0
            },
            {
                opacity: 1,
                offset: 0.2
            },
            {
                transform:
                    `translate(${moveX}px,${moveY}px)`,
                opacity: 1,
                offset: 0.8
            },
            {
                opacity: 0
            }
        ],
        {
            duration: duration * 1000,
            easing: "linear"
        }
    );

    setTimeout(() => {

        animateDrone(drone);

    }, (duration + 3) * 1000);
}

for(let i = 0; i < TOTAL_DRONES; i++){

    createDrone();
}