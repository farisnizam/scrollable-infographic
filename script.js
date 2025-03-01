document.addEventListener("DOMContentLoaded", () => {
    initializeInfographic();
    setupScrollReveal();
});

// 🛠️ Builds sections dynamically
function initializeInfographic() {
    const content = document.getElementById("content");

    sectionsData.forEach((section, index) => {
        let sectionElement = document.createElement("section");
        sectionElement.style.backgroundImage = section.background;

        sectionElement.innerHTML = `
            <div class="animation">
                <div class="slide-up box">
                    <h1>${section.title}</h1>
                    <p>${section.text}</p>
                    <img src="${section.image}" alt="${section.title}">
                    <button class="hotspot" onclick="toggleTooltip(event, ${index})">?</button>
                    <div class="tooltip" id="tooltip-${index}">${section.tooltip}</div>
                </div>
            </div>
        `;
        content.appendChild(sectionElement);
    });

    // Close tooltips when clicking outside
    document.addEventListener("click", (event) => {
        if (!event.target.classList.contains("hotspot") && !event.target.classList.contains("tooltip")) {
            document.querySelectorAll(".tooltip").forEach(t => t.classList.remove("active"));
        }
    });
}

// 🎬 Initializes ScrollReveal animations
function setupScrollReveal() {
    ScrollReveal().reveal('.slide-up', {
        distance: '10%',
        origin: 'bottom',
        delay: 500,
        duration: 700,
        easing: 'ease',
        opacity: 0,
        reset: true,
        scrollProgress: true,
    });
}

// ℹ️ Handles tooltip toggling
function toggleTooltip(event, index) {
    event.stopPropagation(); 
    let tooltip = document.getElementById(`tooltip-${index}`);

    document.querySelectorAll(".tooltip").forEach(t => {
        if (t !== tooltip) t.classList.remove("active");
    });

    tooltip.classList.toggle("active");
}
