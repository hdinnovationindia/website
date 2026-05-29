document.addEventListener("DOMContentLoaded", function () {
    const droneContainer = document.getElementById("drone-sky");
    if (!droneContainer) return;

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

    const TOTAL_DRONES = 35;

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
        const startX = random(-120, window.innerWidth + 120);
        const startY = random(-120, window.innerHeight + 120);

        const moveX = random(-420, 420);
        const moveY = random(-320, 320);
        const duration = random(10, 25);

        drone.style.left = startX + "px";
        drone.style.top = startY + "px";
        drone.style.color = droneColors[Math.floor(Math.random() * droneColors.length)];
        drone.style.fontSize = random(6, 12) + "px";
        drone.style.opacity = "0";
        drone.style.transform = "translate(0, 0)";

        const animationFrames = [
            { transform: "translate(0px, 0px)", opacity: 0 },
            { transform: "translate(0px, 0px)", opacity: 1, offset: 0.15 },
            { transform: `translate(${moveX}px, ${moveY}px)`, opacity: 1, offset: 0.8 },
            { transform: `translate(${moveX + 20}px, ${moveY + 15}px)`, opacity: 0 }
        ];

        const animationOptions = {
            duration: duration * 1000,
            easing: "ease-in-out",
            fill: "forwards"
        };

        if (typeof drone.animate === "function") {
            drone.animate(animationFrames, animationOptions);
        } else {
            drone.style.transition = `transform ${duration}s ease-in-out, opacity ${duration}s ease-in-out`;
            requestAnimationFrame(function () {
                drone.style.opacity = "1";
                drone.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
            setTimeout(function () {
                drone.style.opacity = "0";
            }, duration * 1000 * 0.8);
        }

        setTimeout(function () {
            animateDrone(drone);
        }, duration * 1000 + 800);
    }

    for (let i = 0; i < TOTAL_DRONES; i++) {
        createDrone();
    }
});