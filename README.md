# 🍛 Curry Me Away — Food Truck Web Demo

Welcome to your local web page demo for **Curry Me Away**! This project was built from scratch with pure HTML, CSS, and JavaScript so you can easily understand, edit, and experiment with it.

---

## 🚀 Quick Start (How to View the Website)

You have two easy ways to open and see your website:

### Option 1: View in Any Browser (Direct File)
1. Open your computer's file manager and go to the folder:  
   `/home/shock/curry-me-away`
2. Double-click [index.html](file:///home/shock/curry-me-away/index.html) to open it right in Chrome, Firefox, or any web browser.

### Option 2: Using the Local Web Server
The server is already running for you in the background! Just open your browser to:  
👉 **[http://localhost:3000](http://localhost:3000)**

To run or stop the server manually at any time:
```bash
# Start server
node server.js

# To stop: press Ctrl + C in the terminal
```

---

## 📁 File Structure & How It Works

| File | What It Does | Beginner Explanation |
| :--- | :--- | :--- |
| [index.html](file:///home/shock/curry-me-away/index.html) | Home Page | Main landing page: hero, live schedule tracker, and interactive menu. |
| [catering.html](file:///home/shock/curry-me-away/catering.html) | Catering Page | Dedicated private events page: packages, 3-step process, and quote form. |
| [styles.css](file:///home/shock/curry-me-away/styles.css) | Colors & Styling | Controls the warm spice theme, fonts, card layouts, and mobile responsiveness. |
| [script.js](file:///home/shock/curry-me-away/script.js) | Interactivity & Logic | Automatically highlights today's schedule, filters the menu, and handles catering inquiries. |
| [server.js](file:///home/shock/curry-me-away/server.js) | Local Web Server | A lightweight script that serves the files locally on port 3000. |

---

## ✏️ How to Customize Your Truck's Details

### 1. Updating Dishes & Prices
Open [script.js](file:///home/shock/curry-me-away/script.js#L75-L160) and find the `menuItems` list. Each dish is an object you can easily edit:

```javascript
{
  id: 1,
  name: "Velvety Butter Chicken",
  category: "curry",       // curry, street, bread, or drinks
  price: "$14.50",
  icon: "🍗",              // any emoji or image
  description: "Tender tandoori chicken simmered in a luscious tomato...",
  spice: "🌶️ Mild",
  tags: ["gf"],
  tagLabels: [{ text: "GF", class: "tag-gf" }]
}
```

### 2. Changing Truck Stops & Weekly Schedule
Open [script.js](file:///home/shock/curry-me-away/script.js#L20-L73) and find `weeklySchedule`. You can change the locations, addresses, and hours for each day of the week.

### 3. Changing Theme Colors
Open [styles.css](file:///home/shock/curry-me-away/styles.css#L10-L35) at the very top under `:root`:
- `--primary-spice`: Saffron orange highlight color
- `--spice-red`: Deep chili terracotta
- `--bg-cream`: Warm cream background

---

## 📱 Testing Mobile View
Most customers look up food trucks on their smartphones while on the go! To see how it looks on mobile:
1. Open [http://localhost:3000](http://localhost:3000) in Chrome or Firefox.
2. Press **F12** (or right-click anywhere and select **Inspect**).
3. Click the **Device Toggle button** (icon of a phone/tablet, or press `Ctrl + Shift + M`).
4. Select iPhone or Android to preview touch navigation, compact cards, and mobile menus!
