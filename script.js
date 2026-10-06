/* ==========================================================================
   Curry Me Away - JavaScript (script.js)
   ========================================================================== */

/* --------------------------------------------------------------------------
   BEGINNER OVERVIEW:
   JavaScript is what makes a webpage "alive" and interactive!
   - Arrays [] and Objects {} store our data (dishes, locations).
   - document.querySelector / document.getElementById finds HTML elements.
   - addEventListener listens for user actions (like clicks or form submits).
   -------------------------------------------------------------------------- */

// Wait for the HTML document to fully load before running our script
document.addEventListener('DOMContentLoaded', () => {

  // ========================================================================
  // 1. DATA: WEEKLY SCHEDULE
  // Beginner Note: You can easily edit the locations, times, or days here!
  // ========================================================================
  const weeklySchedule = [
    {
      dayIndex: 0, // Sunday
      dayName: "Sunday",
      location: "Private Events & Kitchen Prep",
      address: "Book us for your weekend party!",
      hours: "Available for Catering",
      isOpen: false
    },
    {
      dayIndex: 1, // Monday
      dayName: "Monday",
      location: "Financial District Plaza",
      address: "Corner of 4th & Market St",
      hours: "11:30 AM – 2:00 PM",
      isOpen: true
    },
    {
      dayIndex: 2, // Tuesday
      dayName: "Tuesday",
      location: "Medical Center Courtyard",
      address: "850 Health Sciences Way",
      hours: "11:30 AM – 2:30 PM",
      isOpen: true
    },
    {
      dayIndex: 3, // Wednesday
      dayName: "Wednesday",
      location: "Tech Campus Innovation Hub",
      address: "100 Silicon Boulevard",
      hours: "11:30 AM – 2:30 PM",
      isOpen: true
    },
    {
      dayIndex: 4, // Thursday
      dayName: "Thursday",
      location: "Arts District Food Truck Lot",
      address: "420 Gallery Row",
      hours: "12:00 PM – 3:00 PM & 5:00 PM – 8:00 PM",
      isOpen: true
    },
    {
      dayIndex: 5, // Friday
      dayName: "Friday",
      location: "Waterfront Brewery & Park",
      address: "Harbor Promenade Pier 7",
      hours: "12:00 PM – 8:30 PM (Late Night!)",
      isOpen: true
    },
    {
      dayIndex: 6, // Saturday
      dayName: "Saturday",
      location: "Downtown Farmers Market",
      address: "Town Square Main Pavilion",
      hours: "10:00 AM – 3:30 PM",
      isOpen: true
    }
  ];

  // ========================================================================
  // 2. DATA: MENU ITEMS (Placeholders ready to customize!)
  // Beginner Note: To add or edit dishes, just modify or copy an object below.
  // ========================================================================
  const menuItems = [
    {
      id: 1,
      name: "Velvety Butter Chicken",
      category: "curry",
      price: "$14.50",
      icon: "🍗",
      description: "Tender tandoori chicken simmered in a luscious tomato, butter, and fenugreek cream sauce. Served with basmati rice.",
      spice: "🌶️ Mild",
      tags: ["gf"],
      tagLabels: [{ text: "GF", class: "tag-gf" }]
    },
    {
      id: 2,
      name: "Slow-Braised Lamb Rogan Josh",
      category: "curry",
      price: "$15.95",
      icon: "🥩",
      description: "Fork-tender lamb shoulder braised in aromatic Kashmiri chili, crushed cardamom, cloves, and ginger gravy. Served with basmati rice.",
      spice: "🌶️🌶️ Medium",
      tags: ["gf"],
      tagLabels: [{ text: "GF", class: "tag-gf" }]
    },
    {
      id: 3,
      name: "Golden Chickpea Curry (Chana Masala)",
      category: "curry",
      price: "$12.75",
      icon: "🌱",
      description: "Hearty chickpeas simmered with roasted cumin, tangy dry mango, fresh coriander, and caramelized onions. Served with basmati rice.",
      spice: "🌶️🌶️ Medium",
      tags: ["vegan", "gf", "veg"],
      tagLabels: [
        { text: "Vegan", class: "tag-vegan" },
        { text: "GF", class: "tag-gf" }
      ]
    },
    {
      id: 4,
      name: "Smoky Paneer Tikka Masala",
      category: "curry",
      price: "$13.50",
      icon: "🧀",
      description: "Char-grilled artisan cottage cheese cubes tossed in a rich, spiced bell pepper and tomato masala. Served with basmati rice.",
      spice: "🌶️ Mild",
      tags: ["veg", "gf"],
      tagLabels: [
        { text: "Vegetarian", class: "tag-veg" },
        { text: "GF", class: "tag-gf" }
      ]
    },
    {
      id: 5,
      name: "Crispy Spiced Potato Samosas",
      category: "street",
      price: "$6.00",
      icon: "🥟",
      description: "Two golden, flaky handmade pastry pyramids stuffed with spiced potatoes and green peas. Served with sweet tamarind and fresh mint chutneys.",
      spice: "🌶️ Mild",
      tags: ["vegan", "veg"],
      tagLabels: [
        { text: "Vegan", class: "tag-vegan" },
        { text: "2 Pieces", class: "tag-veg" }
      ]
    },
    {
      id: 6,
      name: "Curry Street Masala Fries",
      category: "street",
      price: "$5.50",
      icon: "🍟",
      description: "Crispy double-cooked potato fries dusted in house-ground chaat masala spices. Served with a side of curry dipping mayo.",
      spice: "🌶️🌶️ Medium",
      tags: ["vegan", "gf", "veg"],
      tagLabels: [
        { text: "Vegan", class: "tag-vegan" },
        { text: "GF", class: "tag-gf" }
      ]
    },
    {
      id: 7,
      name: "Garlic Butter Naan",
      category: "bread",
      price: "$4.00",
      icon: "🫓",
      description: "Warm, pillowy clay-oven style flatbread brushed generously with minced garlic, fresh cilantro, and melted butter.",
      spice: "None",
      tags: ["veg"],
      tagLabels: [{ text: "Vegetarian", class: "tag-veg" }]
    },
    {
      id: 8,
      name: "Chili Cheese Stuffed Naan",
      category: "bread",
      price: "$5.25",
      icon: "🧀",
      description: "Fluffy handmade naan stuffed with melted cheddar, chopped serrano chilies, and herbs. Cut into dipping triangles.",
      spice: "🌶️🌶️ Medium",
      tags: ["veg"],
      tagLabels: [{ text: "Vegetarian", class: "tag-veg" }]
    },
    {
      id: 9,
      name: "Alphonso Mango Lassi",
      category: "drinks",
      price: "$5.00",
      icon: "🥭",
      description: "Refreshing creamy yogurt smoothie blended with sweet sun-ripened Alphonso mango pulp and a touch of fragrant green cardamom.",
      spice: "None",
      tags: ["veg", "gf"],
      tagLabels: [
        { text: "Vegetarian", class: "tag-veg" },
        { text: "Chilled", class: "tag-gf" }
      ]
    },
    {
      id: 10,
      name: "Brewed Masala Chai",
      category: "drinks",
      price: "$3.50",
      icon: "☕",
      description: "Slow-simmered Assam black tea with whole crushed green cardamom, cinnamon bark, fresh ginger, and whole milk.",
      spice: "Aromatic",
      tags: ["veg", "gf"],
      tagLabels: [
        { text: "Vegetarian", class: "tag-veg" },
        { text: "Hot", class: "tag-gf" }
      ]
    }
  ];

  // ========================================================================
  // 3. FEATURE: DYNAMIC TODAY'S LOCATION TRACKER
  // Beginner Note: Date().getDay() returns 0 for Sunday, 1 for Monday, etc.
  // ========================================================================
  const currentDayIndex = new Date().getDay();
  const todaySchedule = weeklySchedule.find(s => s.dayIndex === currentDayIndex) || weeklySchedule[1];

  // Update Top Navigation Bar Status
  const liveStatusBadge = document.getElementById('liveStatusText');
  if (liveStatusBadge) {
    if (todaySchedule.isOpen) {
      liveStatusBadge.textContent = `Open Today at ${todaySchedule.location} (${todaySchedule.hours})`;
    } else {
      liveStatusBadge.textContent = `Kitchen Prep Day • Catering Available`;
    }
  }

  // Update the Highlighted "Today's Stop" Card
  const todayDayNameEl = document.getElementById('todayDayName');
  const todayLocationNameEl = document.getElementById('todayLocationName');
  const todayAddressEl = document.getElementById('todayAddress');
  const todayHoursEl = document.getElementById('todayHours');
  const directionsLinkEl = document.getElementById('directionsLink');

  if (todayDayNameEl) todayDayNameEl.textContent = todaySchedule.dayName;
  if (todayLocationNameEl) todayLocationNameEl.textContent = todaySchedule.location;
  if (todayAddressEl) todayAddressEl.textContent = todaySchedule.address;
  if (todayHoursEl) todayHoursEl.textContent = `🕒 ${todaySchedule.hours}`;
  
  if (directionsLinkEl) {
    // Generate a Google Maps search link based on the truck's address
    const mapsQuery = encodeURIComponent(`${todaySchedule.location} ${todaySchedule.address}`);
    directionsLinkEl.href = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  }

  // Render the Full Weekly Schedule Grid
  const weeklyScheduleGrid = document.getElementById('weeklyScheduleGrid');
  if (weeklyScheduleGrid) {
    weeklyScheduleGrid.innerHTML = ''; // Clear placeholder content

    weeklySchedule.forEach(item => {
      const isToday = item.dayIndex === currentDayIndex;
      const dayCard = document.createElement('div');
      dayCard.className = `schedule-day-card ${isToday ? 'is-today' : ''}`;
      
      dayCard.innerHTML = `
        <div class="day-header">
          <span class="day-name">${item.dayName}</span>
          ${isToday ? '<span class="today-indicator-tag">Today</span>' : ''}
        </div>
        <div class="day-location">${item.location}</div>
        <div class="day-address">📍 ${item.address}</div>
        <div class="day-time">🕒 ${item.hours}</div>
      `;

      weeklyScheduleGrid.appendChild(dayCard);
    });
  }

  // ========================================================================
  // 4. FEATURE: RENDER & FILTER MENU ITEMS
  // ========================================================================
  const menuGrid = document.getElementById('menuGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Function to render items to the page
  function renderMenuItems(itemsToRender) {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';

    if (itemsToRender.length === 0) {
      menuGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No dishes found in this category.</p>`;
      return;
    }

    itemsToRender.forEach(dish => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      
      // Build dietary badge pills
      const badgesHtml = dish.tagLabels.map(tag => 
        `<span class="tag ${tag.class}">${tag.text}</span>`
      ).join('');

      card.innerHTML = `
        <div>
          <div class="menu-card-top">
            <div class="dish-icon">${dish.icon}</div>
            <div class="dish-price">${dish.price}</div>
          </div>
          <h4 class="dish-name">${dish.name}</h4>
          <p class="dish-description">${dish.description}</p>
        </div>
        <div class="dish-meta">
          <div class="diet-tags">
            ${badgesHtml}
          </div>
          <div class="dish-spice">${dish.spice}</div>
        </div>
      `;

      menuGrid.appendChild(card);
    });
  }

  // Initial render: show all items
  renderMenuItems(menuItems);

  // Setup click listeners on each category filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons, add to clicked button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-category');

      if (selectedCategory === 'all') {
        renderMenuItems(menuItems);
      } else if (selectedCategory === 'vegan') {
        // Filter dishes tagged with 'vegan' or 'veg'
        const veganItems = menuItems.filter(item => 
          item.tags.includes('vegan') || item.tags.includes('veg')
        );
        renderMenuItems(veganItems);
      } else {
        // Filter by specific category (curry, street, bread, drinks)
        const filtered = menuItems.filter(item => item.category === selectedCategory);
        renderMenuItems(filtered);
      }
    });
  });

  // ========================================================================
  // 5. FEATURE: CATERING INQUIRY FORM SIMULATION
  // ========================================================================
  const cateringForm = document.getElementById('cateringForm');
  const successAlert = document.getElementById('cateringSuccessAlert');
  const alertMessage = document.getElementById('alertMessage');

  if (cateringForm) {
    cateringForm.addEventListener('submit', (e) => {
      // Prevent browser from reloading the page
      e.preventDefault();

      // Collect user input values
      const clientName = document.getElementById('clientName').value.trim();
      const clientEmail = document.getElementById('clientEmail').value.trim();
      const eventDate = document.getElementById('eventDate').value;
      const guestCount = document.getElementById('guestCount').value;

      // Format date nicely (e.g., Oct 15, 2026)
      let formattedDate = eventDate;
      if (eventDate) {
        const parts = eventDate.split('-');
        if (parts.length === 3) {
          formattedDate = `${parts[1]}/${parts[2]}/${parts[0]}`;
        }
      }

      // Display friendly personalized confirmation
      if (alertMessage) {
        alertMessage.innerHTML = `
          Thank you, <strong>${clientName}</strong>! We have recorded your catering inquiry for 
          <strong>${guestCount}</strong> on <strong>${formattedDate}</strong>. 
          A quote and custom curry menu proposal will be sent to <strong>${clientEmail}</strong> within 24 hours!
        `;
      }

      if (successAlert) {
        successAlert.classList.remove('hidden');
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Reset form fields
      cateringForm.reset();
    });
  }

  // ========================================================================
  // 6. FEATURE: MOBILE MENU TOGGLE
  // ========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('nav-open');
    });

    // Close mobile nav when clicking any nav link
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('nav-open');
      });
    });
  }

  // Set the current year in the footer dynamically
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

});
