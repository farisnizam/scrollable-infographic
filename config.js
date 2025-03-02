const ScrollRevealAnimations = {
    BOTTOM: "bottom",
    TOP: "top",
    LEFT: "left",
    RIGHT: "right"
};

const sectionsData = [
    {
        title: "Stage 1: Growing",
        text: "Coffee beans start as seeds planted in fertile soil, requiring optimal climate conditions to thrive.",
        image: "assets/growing_coffee.webp",
        background: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
        tooltip: "Coffee plants grow best in tropical climates with high rainfall and rich soil.",
        animation: ScrollRevealAnimations.BOTTOM,
        reset: true,
        duration: 700
    },
    {
        title: "Stage 2: Harvesting",
        text: "After several months of growth, the coffee cherries are carefully harvested, either by hand or machine.",
        image: "assets/harvesting_coffee.webp",
        background: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
        tooltip: "Hand-picking ensures only ripe cherries are selected, improving quality.",
        animation: ScrollRevealAnimations.TOP,
        reset: true,
        duration: 700 
    },
    {
        title: "Stage 3: Processing & Drying",
        text: "The harvested cherries go through processing methods like washed, natural, or honey processing, followed by drying.",
        image: "assets/processing_coffee.webp",
        background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
        tooltip: "Different processing methods impact the final flavor profile of the coffee.",
        animation: ScrollRevealAnimations.LEFT,
        reset: true,
        duration: 700
    },
    {
        title: "Stage 4: Roasting & Brewing",
        text: "The dried coffee beans are roasted to bring out flavors and aromas before being ground and brewed into the perfect cup.",
        image: "assets/roasting_coffee.webp",
        background: "linear-gradient(to left, #fbc2eb, #a6c1ee)",
        tooltip: "Roasting temperature and time determine the strength and taste of the coffee.",
        animation: ScrollRevealAnimations.RIGHT,
        reset: true,
        duration: 700
    }
];
