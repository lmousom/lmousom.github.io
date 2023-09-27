function playBackgroundMusic() {
    const backgroundMusic = document.getElementById("backgroundMusic");
    if (backgroundMusic && typeof backgroundMusic.play === 'function') {
        backgroundMusic.play();
    }
}

// Add a click event listener to play the background music on user interaction
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", playBackgroundMusic, { once: true });

});

function popElement(elementId) {
    const element = document.getElementById(elementId);
    element.style.animation = "pop 0.5s ease";
    setTimeout(() => {
        element.style.animation = "";
    }, 500); // Reset the animation after 0.5 seconds
}

document.getElementById("balloon1").addEventListener("click", function () {
    popElement("balloon1");
});

document.getElementById("cake1").addEventListener("click", function () {
    popElement("cake1");
});
