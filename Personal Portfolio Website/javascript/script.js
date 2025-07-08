// script.js

// Subtle background floating particles animation on home page
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("main")) {
    createFloatingOrbs();
  }
});

function createFloatingOrbs() {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.pointerEvents = "none";
  container.style.zIndex = "0";
  document.body.appendChild(container);

  const orbsCount = 25;
  for (let i = 0; i < orbsCount; i++) {
    const orb = document.createElement("div");
    orb.classList.add("floating-orb");
    orb.style.position = "absolute";
    orb.style.borderRadius = "50%";
    orb.style.background = "rgba(255, 219, 110, 0.4)";
    orb.style.boxShadow = "0 0 15px 5px rgba(255, 219, 110, 0.7)";
    orb.style.width = `${randomRange(10, 25)}px`;
    orb.style.height = orb.style.width;
    orb.style.left = `${randomRange(0, 100)}vw`;
    orb.style.top = `${randomRange(0, 100)}vh`;
    orb.style.animation = `floatOrb ${randomRange(15, 30)}s ease-in-out infinite`;
    orb.style.animationDelay = `${randomRange(0, 30)}s`;
    container.appendChild(orb);
  }
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}
