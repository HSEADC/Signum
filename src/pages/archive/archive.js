import "./archive.scss";

const tiltElements = document.querySelectorAll(".tilt");

tiltElements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
        const { offsetWidth, offsetHeight } = element;
        const { left, top } = element.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const xMove = ((x / offsetWidth) * 2 - 1) * 20;
        const yMove = ((y / offsetHeight) * 2 - 1) * -20;

        element.style.transform = `perspective(500px) rotateY(${xMove}deg) rotateX(${yMove}deg)`;
    });

    element.addEventListener("mouseleave", () => {
        element.style.transform =
            "perspective(500px) rotateY(0deg) rotateX(0deg)";
    });
});
