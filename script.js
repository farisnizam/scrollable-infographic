document.addEventListener("DOMContentLoaded", () => {
    initializeInfographic();
    setupScrollReveal();
});

// 🛠️ Builds sections dynamically
function initializeInfographic() {
    const content = document.getElementById("content");

    // ✅ Add Loading Screen FIRST
    const loadingScreen = document.createElement("div");
    loadingScreen.id = "intro";
    loadingScreen.classList.add("is-loading");
    loadingScreen.innerHTML = `<h1 class="page-title">${introTitle}</h1>`;
    document.body.prepend(loadingScreen); // ✅ Ensures it's at the top

    // ✅ Remove "is-loading" class after 100ms
    setTimeout(() => {
        document.getElementById("intro").classList.remove("is-loading");
        window.scrollTo(0, 0); // ✅ Force scroll to top after the animation
    }, 100);


    // ✅ Loop through lifecycle sections and add them
    sectionsData.forEach((section, index) => {
        let sectionElement = document.createElement("section");
        sectionElement.style.backgroundImage = section.background;

        sectionElement.innerHTML = `
            <div class="animation">
                <div class="box" data-animation="${section.animation}" data-reset="${section.reset}" data-duration="${section.duration}">
                    <h1 class="section-title">${section.title}</h1>
                    <p class="section-paragraph">${section.text}</p>
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
            document.querySelectorAll(".tooltip").forEach((t) => t.classList.remove("active"));
        }
    });
}


// Initializes ScrollReveal animations based on each section's config
function setupScrollReveal() {
    document.querySelectorAll(".box").forEach((box) => {
        let animationType = box.dataset.animation;
        let resetValue = box.dataset.reset === "true"; // Convert string to boolean
        let durationValue = parseInt(box.dataset.duration); // Convert string to number

        ScrollReveal().reveal(box, {
            distance: "50px",
            origin: animationType,
            delay: 300,
            duration: durationValue,
            easing: "ease",
            opacity: 0,
            reset: resetValue,
        });
    });
}

function toggleTooltip(event, index) {
    event.stopPropagation(); 
    let tooltip = document.getElementById(`tooltip-${index}`);

    document.querySelectorAll(".tooltip").forEach(t => {
        if (t !== tooltip) t.classList.remove("active");
    });

    tooltip.classList.toggle("active");
}
