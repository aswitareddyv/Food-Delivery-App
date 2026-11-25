/* ================= RESTAURANTS & FOOD ITEMS DATA ================= */
const RESTAURANTS = [
  {
    id: 1,
    name: "Royal Spice Kitchen",
    type: "North Indian",
    rating: 4.8,
    deliveryTime: "25–30 mins",
    costForTwo: "₹500 for two",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    items: [
      { id: 101, name: "Hyderabadi Chicken Dum Biryani", price: 280, veg: false, desc: "Aromatic basmati rice slow-cooked with saffron and marinated chicken.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80" },
      { id: 102, name: "Paneer Butter Masala + 2 Butter Naan", price: 240, veg: true, desc: "Velvety tomato gravy with soft paneer cubes and tandoori butter naan.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80" },
      { id: 103, name: "Dal Makhani & Jeera Rice", price: 210, veg: true, desc: "Slow-simmered black lentils served with cumin-tempered rice.", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: 2,
    name: "Burger Craft House",
    type: "Burgers",
    rating: 4.7,
    deliveryTime: "20–25 mins",
    costForTwo: "₹400 for two",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    items: [
      { id: 201, name: "Double Cheese Smash Burger", price: 220, veg: false, desc: "Double seared patty with cheddar cheese, caramelized onions, and house sauce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80" },
      { id: 202, name: "Crispy Paneer Supreme Burger", price: 185, veg: true, desc: "Crunchy spiced paneer patty with crisp lettuce and chipotle mayo.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=300&q=80" },
      { id: 203, name: "Peri-Peri French Fries", price: 110, veg: true, desc: "Golden crisp fries tossed with spicy peri-peri seasoning.", image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: 3,
    name: "Milano Woodfire Pizza",
    type: "Pizza",
    rating: 4.8,
    deliveryTime: "30–35 mins",
    costForTwo: "₹600 for two",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    items: [
      { id: 301, name: "Farmhouse Veggie Pizza (Medium)", price: 340, veg: true, desc: "Bell peppers, mushrooms, olives, sweet corn, and melted mozzarella.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=300&q=80" },
      { id: 302, name: "BBQ Chicken & Pepperoni Pizza", price: 420, veg: false, desc: "Wood-fired crust topped with smoky BBQ chicken and pepperoni.", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=300&q=80" },
      { id: 303, name: "Cheesy Garlic Breadsticks", price: 150, veg: true, desc: "Freshly baked garlic breadsticks with herb butter and cheese.", image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: 4,
    name: "Udupi Tiffin Express",
    type: "South Indian",
    rating: 4.9,
    deliveryTime: "15–20 mins",
    costForTwo: "₹250 for two",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80",
    items: [
      { id: 401, name: "Ghee Roast Masala Dosa", price: 120, veg: true, desc: "Crisp golden dosa roasted in pure ghee with potato masala and chutneys.", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=300&q=80" },
      { id: 402, name: "Idli Vada Combo (2 Idli + 1 Vada)", price: 90, veg: true, desc: "Steamed fluffy idlis and crisp medu vada served with hot sambar.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80" },
      { id: 403, name: "Filter Coffee", price: 50, veg: true, desc: "Traditional frothy South Indian filter coffee.", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: 5,
    name: "Dragon Wok Bowl",
    type: "Chinese",
    rating: 4.6,
    deliveryTime: "25–30 mins",
    costForTwo: "₹450 for two",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    items: [
      { id: 501, name: "Veg Hakka Noodles & Manchurian", price: 210, veg: true, desc: "Wok-tossed noodles paired with crisp vegetable Manchurian.", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=300&q=80" },
      { id: 502, name: "Chicken Schezwan Fried Rice", price: 240, veg: false, desc: "Spicy Schezwan fried rice tossed with chicken and spring onions.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: 6,
    name: "Sweet Bliss Patisserie",
    type: "Desserts",
    rating: 4.9,
    deliveryTime: "20–25 mins",
    costForTwo: "₹350 for two",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
    items: [
      { id: 601, name: "Belgian Chocolate Truffle Pastry", price: 145, veg: true, desc: "Rich dark chocolate ganache layered with moist chocolate sponge.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80" },
      { id: 602, name: "Hot Chocolate Fudge Brownie", price: 165, veg: true, desc: "Warm walnut brownie drizzled with melted chocolate sauce.", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=300&q=80" }
    ]
  }
];

/* ================= STATE ================= */
let user = null;
let selectedType = "All";
let searchQuery = "";
let cart = [];
let paymentMethod = "UPI";
let currentOrder = null;

/* ================= INITIALIZE EVENTS ================= */
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderRestaurants();
  renderCart();

  document.getElementById("brandBtn").addEventListener("click", () => {
    selectedType = "All";
    searchQuery = "";
    document.getElementById("searchInput").value = "";
    renderCategories();
    renderRestaurants();
  });

  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderRestaurants();
  });

  document.getElementById("openLoginBtn").addEventListener("click", () => openModal("loginModal"));
  document.getElementById("demoLoginBtn").addEventListener("click", () => {
    user = { name: "Ananya Reddy", email: "ananya@example.com" };
    updateNavbarUser();
    showToast("Signed in as Ananya Reddy");
  });

  document.getElementById("openCartBtn").addEventListener("click", () => toggleCart(true));
  document.getElementById("trackOrderNavBtn").addEventListener("click", () => {
    if (currentOrder) {
      updateTrackingUI();
      openModal("trackingModal");
    }
  });

  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.getAttribute("data-close")));
  });
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  document.getElementById("loginForm").addEventListener("submit", handleLogin);

  document.getElementById("menuViewCartBtn").addEventListener("click", () => {
    closeModal("menuModal");
    toggleCart(true);
  });

  document.getElementById("closeCartBtn").addEventListener("click", () => toggleCart(false));
  document.getElementById("cartOverlay").addEventListener("click", () => toggleCart(false));
  document.getElementById("clearCartBtn").addEventListener("click", clearCart);
  document.getElementById("proceedToPayBtn").addEventListener("click", openPaymentModal);

  document.querySelectorAll(".pay-card").forEach((btn) => {
    btn.addEventListener("click", () => selectPaymentMethod(btn.getAttribute("data-method"), btn));
  });
  document.getElementById("paymentForm").addEventListener("submit", placeOrder);

  document.getElementById("nextStageBtn").addEventListener("click", advanceOrderStage);
  document.getElementById("cancelOrderBtn").addEventListener("click", cancelOrder);
  document.getElementById("orderMoreBtn").addEventListener("click", () => closeModal("trackingModal"));
});

/* ================= 1. LOGIN ================= */
function handleLogin(e) {
  e.preventDefault();
  const name = document.getElementById("loginName").value.trim();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const errorEl = document.getElementById("loginError");

  if (!name || !email.includes("@") || password.length < 4) {
    errorEl.textContent = "Please enter a valid name, email, and password (min 4 characters).";
    errorEl.classList.remove("hidden");
    return;
  }

  errorEl.classList.add("hidden");
  user = { name, email };
  updateNavbarUser();
  closeModal("loginModal");
  showToast(`Welcome, ${user.name}`);
}

function updateNavbarUser() {
  const area = document.getElementById("userStatusArea");
  if (user) {
    area.innerHTML = `
      <div class="user-pill">
        <span>${user.name.split(" ")[0]}</span>
        <button type="button" class="link-danger" id="logoutBtn">Logout</button>
      </div>
    `;
    document.getElementById("logoutBtn").addEventListener("click", () => {
      user = null;
      updateNavbarUser();
      showToast("Signed out");
    });
  } else {
    area.innerHTML = `<button type="button" class="btn btn-ghost" id="openLoginBtn">Login</button>`;
    document.getElementById("openLoginBtn").addEventListener("click", () => openModal("loginModal"));
  }
}

/* ================= 2. RESTAURANTS & FOOD ITEMS ================= */
function renderCategories() {
  const types = ["All", "North Indian", "Burgers", "Pizza", "South Indian", "Chinese", "Desserts"];
  const container = document.getElementById("categoryTabs");
  container.innerHTML = "";

  types.forEach((type) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `cat-btn ${selectedType === type ? "active" : ""}`;
    btn.textContent = type;
    btn.addEventListener("click", () => {
      selectedType = type;
      renderCategories();
      renderRestaurants();
    });
    container.appendChild(btn);
  });
}

function renderRestaurants() {
  const grid = document.getElementById("restaurantsGrid");
  grid.innerHTML = "";

  const filtered = RESTAURANTS.filter((rest) => {
    const matchesType = selectedType === "All" || rest.type === selectedType;
    const matchesSearch =
      rest.name.toLowerCase().includes(searchQuery) ||
      rest.type.toLowerCase().includes(searchQuery) ||
      rest.items.some((item) => item.name.toLowerCase().includes(searchQuery));
    return matchesType && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="muted-text">No kitchens matched your search.</p>`;
    return;
  }

  filtered.forEach((rest) => {
    const card = document.createElement("div");
    card.className = "rest-card";
    card.innerHTML = `
      <div class="rest-cover">
        <img src="${rest.image}" alt="${rest.name}" />
        <span class="rest-tag">${rest.type}</span>
      </div>
      <div class="rest-body">
        <div class="rest-top">
          <h3>${rest.name}</h3>
          <span class="rating-pill">★ ${rest.rating}</span>
        </div>
        <p class="muted-text">${rest.items.map((i) => i.name).join(" • ")}</p>
        <div class="rest-meta">
          <span>${rest.deliveryTime}</span>
          <span>${rest.costForTwo}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openMenuModal(rest.id));
    grid.appendChild(card);
  });
}

function openMenuModal(restId) {
  const rest = RESTAURANTS.find((r) => r.id === restId);
  if (!rest) return;

  document.getElementById("menuRestCategory").textContent = rest.type.toUpperCase();
  document.getElementById("menuRestName").textContent = rest.name;
  document.getElementById("menuRestMeta").textContent = `★ ${rest.rating} • ${rest.deliveryTime} • ${rest.costForTwo}`;

  const list = document.getElementById("menuItemsList");
  list.innerHTML = "";

  rest.items.forEach((food) => {
    const row = document.createElement("div");
    row.className = "menu-item";
    row.innerHTML = `
      <div class="menu-item-info">
        <span class="veg-badge ${food.veg ? "veg" : "non-veg"}">${food.veg ? "VEG" : "NON-VEG"}</span>
        <h4>${food.name}</h4>
        <p class="muted-text">${food.desc}</p>
        <div class="food-price">₹${food.price}</div>
      </div>
      <div class="menu-item-right">
        <img src="${food.image}" alt="${food.name}" />
      </div>
    `;

    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "btn btn-accent";
    addBtn.textContent = "+ Add";
    addBtn.addEventListener("click", () => addToCart(rest.id, food.id));

    row.querySelector(".menu-item-right").appendChild(addBtn);
    list.appendChild(row);
  });

  openModal("menuModal");
}

/* ================= 3. ADD TO CART ================= */
function addToCart(restId, foodId) {
  const rest = RESTAURANTS.find((r) => r.id === restId);
  const food = rest.items.find((f) => f.id === foodId);

  if (cart.length > 0 && cart[0].restId !== restId) {
    const ok = confirm(`Replace items from "${cart[0].restName}" with "${rest.name}"?`);
    if (!ok) return;
    cart = [];
  }

  const existing = cart.find((item) => item.id === foodId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: food.id,
      name: food.name,
      price: food.price,
      qty: 1,
      restId: rest.id,
      restName: rest.name
    });
  }

  renderCart();
  showToast(`Added "${food.name}"`);
}

function changeQty(foodId, delta) {
  const index = cart.findIndex((item) => item.id === foodId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
  showToast("Cart cleared");
}

function getTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = cart.length > 0 ? 40 : 0;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + gst;
  return { subtotal, delivery, gst, total };
}

function renderCart() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").textContent = totalCount;

  const body = document.getElementById("cartItemsBody");
  const footer = document.getElementById("cartFooter");
  const clearBtn = document.getElementById("clearCartBtn");
  const banner = document.getElementById("cartRestaurantBanner");

  body.innerHTML = "";

  if (cart.length === 0) {
    body.innerHTML = `<p class="muted-text" style="text-align:center; margin-top:44px;">Your bag is empty. Select a kitchen to add dishes.</p>`;
    footer.classList.add("hidden");
    clearBtn.classList.add("hidden");
    banner.classList.add("hidden");
    return;
  }

  footer.classList.remove("hidden");
  clearBtn.classList.remove("hidden");
  banner.classList.remove("hidden");
  banner.textContent = `Kitchen: ${cart[0].restName}`;

  cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <div class="muted-text">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</div>
      </div>
    `;

    const qtyBox = document.createElement("div");
    qtyBox.className = "qty-box";

    const minusBtn = document.createElement("button");
    minusBtn.type = "button";
    minusBtn.textContent = "−";
    minusBtn.addEventListener("click", () => changeQty(item.id, -1));

    const countSpan = document.createElement("span");
    countSpan.textContent = item.qty;

    const plusBtn = document.createElement("button");
    plusBtn.type = "button";
    plusBtn.textContent = "+";
    plusBtn.addEventListener("click", () => changeQty(item.id, 1));

    qtyBox.append(minusBtn, countSpan, plusBtn);
    row.appendChild(qtyBox);
    body.appendChild(row);
  });

  const { subtotal, delivery, gst, total } = getTotals();
  document.getElementById("billSubtotal").textContent = `₹${subtotal}`;
  document.getElementById("billDelivery").textContent = `₹${delivery}`;
  document.getElementById("billTax").textContent = `₹${gst}`;
  document.getElementById("billTotal").textContent = `₹${total}`;
}

function toggleCart(open) {
  document.getElementById("cartSidebar").classList.toggle("open", open);
  document.getElementById("cartOverlay").classList.toggle("hidden", !open);
}

/* ================= 4. PAYMENT ================= */
function openPaymentModal() {
  if (cart.length === 0) {
    showToast("Your cart is empty");
    return;
  }

  if (!user) {
    toggleCart(false);
    openModal("loginModal");
    showToast("Please sign in to proceed");
    return;
  }

  const { total } = getTotals();
  document.getElementById("finalPayAmount").textContent = `₹${total}`;
  document.getElementById("paymentError").classList.add("hidden");

  toggleCart(false);
  openModal("paymentModal");
}

function selectPaymentMethod(method, activeBtn) {
  paymentMethod = method;
  document.querySelectorAll(".pay-card").forEach((btn) => {
    btn.classList.remove("active");
    btn.querySelector(".radio-mark").textContent = "○";
  });
  activeBtn.classList.add("active");
  activeBtn.querySelector(".radio-mark").textContent = "●";

  document.getElementById("upiBox").classList.toggle("hidden", method !== "UPI");
  document.getElementById("cardBox").classList.toggle("hidden", method !== "Card");
  document.getElementById("codBox").classList.toggle("hidden", method !== "COD");
}

function placeOrder(e) {
  e.preventDefault();
  const address = document.getElementById("deliveryAddress").value.trim();
  const errorEl = document.getElementById("paymentError");

  if (!address) {
    errorEl.textContent = "Please enter your delivery address.";
    errorEl.classList.remove("hidden");
    return;
  }

  if (paymentMethod === "UPI" && !document.getElementById("upiInput").value.trim()) {
    errorEl.textContent = "Please enter a valid UPI ID.";
    errorEl.classList.remove("hidden");
    return;
  }

  if (paymentMethod === "Card" && !document.getElementById("cardInput").value.trim()) {
    errorEl.textContent = "Please enter your card number.";
    errorEl.classList.remove("hidden");
    return;
  }

  errorEl.classList.add("hidden");

  const { total } = getTotals();
  currentOrder = {
    id: "#QB-" + Math.floor(1000 + Math.random() * 9000),
    customer: `${user.name} (${user.email})`,
    restaurant: cart[0].restName,
    items: cart.map((i) => `${i.qty}x ${i.name}`).join(", "),
    address,
    payment: paymentMethod === "COD" ? "Cash on Delivery" : `Paid via ${paymentMethod}`,
    amount: `₹${total}`,
    stage: 1,
    cancelled: false
  };

  cart = [];
  renderCart();

  document.getElementById("trackOrderNavBtn").classList.remove("hidden");
  updateTrackingUI();

  closeModal("paymentModal");
  closeModal("menuModal");
  openModal("trackingModal");
  showToast("Order is placed");
}

/* ================= 5. ORDER PLACED, TRACKING & CANCEL ================= */
function advanceOrderStage() {
  if (!currentOrder || currentOrder.cancelled) return;

  if (currentOrder.stage < 4) {
    currentOrder.stage += 1;
    updateTrackingUI();
    if (currentOrder.stage === 4) {
      showToast("Order delivered");
    }
  } else {
    showToast("Order already delivered");
  }
}

function cancelOrder() {
  if (!currentOrder || currentOrder.cancelled) return;

  if (currentOrder.stage >= 4) {
    showToast("Delivered orders cannot be cancelled");
    return;
  }

  const ok = confirm(`Cancel order ${currentOrder.id}?`);
  if (!ok) return;

  currentOrder.cancelled = true;
  updateTrackingUI();
  showToast(`Order ${currentOrder.id} cancelled`);
}

function updateTrackingUI() {
  if (!currentOrder) return;

  document.getElementById("trackOrderId").textContent = currentOrder.id;
  document.getElementById("trackCustomer").textContent = currentOrder.customer;
  document.getElementById("trackRestaurant").textContent = currentOrder.restaurant;
  document.getElementById("trackItems").textContent = currentOrder.items;
  document.getElementById("trackAddress").textContent = currentOrder.address;
  document.getElementById("trackAmount").textContent = currentOrder.amount;

  const heading = document.getElementById("trackHeading");
  const banner = document.getElementById("statusBanner");
  const icon = document.getElementById("statusIcon");
  const title = document.getElementById("statusTitle");
  const subtitle = document.getElementById("statusSubtitle");
  const progressSection = document.getElementById("trackingProgressSection");
  const paymentEl = document.getElementById("trackPayment");
  const nextBtn = document.getElementById("nextStageBtn");
  const cancelBtn = document.getElementById("cancelOrderBtn");

  if (currentOrder.cancelled) {
    heading.textContent = "Order Cancelled";
    banner.className = "status-banner cancelled";
    icon.textContent = "✕";
    title.textContent = "Order Cancelled";
    subtitle.textContent = "Any paid amount will be refunded shortly.";
    progressSection.classList.add("hidden");
    paymentEl.textContent = "Cancelled / Refund Initiated";
    paymentEl.style.color = "#b91c1c";
    nextBtn.disabled = true;
    cancelBtn.disabled = true;
    return;
  }

  banner.className = "status-banner placed";
  progressSection.classList.remove("hidden");
  paymentEl.textContent = currentOrder.payment;
  paymentEl.style.color = "#1f7a4c";

  const stages = {
    1: { head: "Order is Placed!", icon: "✓", title: "Confirmed by Kitchen", sub: "Estimated arrival in 25 mins", width: "25%" },
    2: { head: "Preparing Your Meal", icon: "🍳", title: "Chef is Cooking Fresh", sub: "Carefully preparing your items", width: "52%" },
    3: { head: "Out for Delivery", icon: "→", title: "Courier on the Way", sub: "Heading to your delivery address", width: "80%" },
    4: { head: "Order Delivered!", icon: "✓", title: "Delivered at Doorstep", sub: "Enjoy your meal", width: "100%" }
  };

  const info = stages[currentOrder.stage];
  heading.textContent = info.head;
  icon.textContent = info.icon;
  title.textContent = info.title;
  subtitle.textContent = info.sub;
  document.getElementById("progressBarFill").style.width = info.width;

  for (let i = 1; i <= 4; i++) {
    document.getElementById(`step${i}`).classList.toggle("active", i <= currentOrder.stage);
  }

  nextBtn.disabled = currentOrder.stage >= 4;
  cancelBtn.disabled = currentOrder.stage >= 4;
}

/* ================= MODAL & TOAST HELPERS ================= */
function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 2500);
}