# Scrollable Infographic - Lifecycle of Coffee Beans

## 📜 Overview
This project is a **scrollable infographic** that dynamically displays the lifecycle of coffee beans using **JavaScript, CSS, and HTML**. It features smooth **ScrollReveal animations**, **hotspot tooltips**, and a modular structure that allows easy customization.

---

## 🚀 Running the Project

### **1️⃣ Clone or Download the Repository**
```
git clone https://github.com/your-repo/scrollable-infographic.git
cd scrollable-infographic
```

### **2️⃣ Open the `index.html` file**
Simply open `index.html` in your browser:
- **Double-click** on `index.html`
---

## 🎨 Features Implemented
✅ **Dynamic Section Loading** - All content (text, images, background, tooltips) loads from `config.js`, making the infographic **easily customizable**.  
✅ **Scroll-Based Animations** - Uses **ScrollReveal.js** to animate sections as the user scrolls.  
✅ **Snap Scrolling** - Each section aligns to the screen for a clean scrolling experience.  
✅ **Hotspot Tooltips** - Each section has a `?` button that reveals additional information when clicked.  
✅ **Click-Outside Behavior** - Clicking anywhere outside the tooltip **closes it automatically**.  
✅ **Responsive Design** - Works seamlessly across **desktop & mobile devices**.

---

## ⚠️ Assumptions & Limitations
🔹 **Assumption:** The content structure will follow the `config.js` format for easy updates.  
🔹 **Assumption:** The project will be run in a modern browser that supports **CSS scroll snapping** & **JavaScript animations**.  
🔹 **Limitation:** The tooltip **does not support rich formatting** (only plain text for now).  
🔹 **Limitation:** No backend integration (this is a static frontend-only project).  

---

## 📂 Project Structure
```
📁 scrollable-infographic
│── 📄 index.html      # Main HTML file
│── 📄 styles.css      # Styles for layout & responsiveness
│── 📄 script.js       # JavaScript for animations & interactions
│── 📄 config.js       # Configuration file for sections & tooltips
```

---

## 🛠️ Customization
To modify content, **edit `config.js`**:
```javascript
const sectionsData = [
    {
        title: "Stage 1: Growing",
        text: "Coffee beans start as seeds planted in fertile soil...",
        image: "growing_coffee.webp",
        tooltip: "Coffee plants take about 3-4 years to bear fruit.",
        background: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)"
    }
];
```
