const WHATSAPP = "916377562064";

const categories = [
  "Jadau Jewellery",
  "Thappa Jewellery",
  "Open Setting Jewellery",
  "Silver Jewellery"
];

const subcategories = [
  "Bangles & Bracelet",
  "Borla",
  "Earrings",
  "Mang Tikka",
  "Matha Patti",
  "Necklace Sets",
  "Nose Rings",
  "Pendant Sets",
  "Rings"
];

const products = [];

categories.forEach((category, ci) => {
  subcategories.forEach((sub, si) => {
    products.push({
      id: `${ci}-${si}`,
      name: `${sub} - ${category}`,
      category: category,
      subcategory: sub,
      image: `assets/hero${ci === 0 ? "" : ci + 1}.svg`
    });
  });
});

let wishlist = JSON.parse(localStorage.getItem("lakshyamWishlist") || "[]");

function saveWishlist() {
  localStorage.setItem("lakshyamWishlist", JSON.stringify(wishlist));
}

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
  } else {
    wishlist.push(id);
  }

  saveWishlist();
  renderProducts();
}

function enquiry(product) {
  const message =
    `Hello Lakshyam Jewellery,%0A%0A` +
    `I am interested in:%0A` +
    `${product.name}%0A` +
    `Category: ${product.category}%0A` +
    `Type: ${product.subcategory}`;

  window.open(`https://wa.me/${WHATSAPP}?text=${message}`, "_blank");
}

function renderProducts(list = products) {
  const container =
    document.querySelector("#productGrid") ||
    document.querySelector(".product-grid") ||
    document.querySelector("#products");

  if (!container) return;

  container.innerHTML = list.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <button class="wishlist-btn"
          onclick="toggleWishlist('${product.id}')">
          ${wishlist.includes(product.id) ? "♥" : "♡"}
        </button>
      </div>

      <div class="product-info">
        <span>${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.subcategory}</p>
        <button onclick='enquiry(${JSON.stringify(product)})'>
          Enquire on WhatsApp
        </button>
      </div>
    </article>
  `).join("");
}

function filterCategory(category) {
  if (!category || category === "All") {
    renderProducts();
    return;
  }

  renderProducts(
    products.filter(p =>
      p.category.toLowerCase() === category.toLowerCase() ||
      p.subcategory.toLowerCase() === category.toLowerCase()
    )
  );
}

function setupSearch() {
  const search =
    document.querySelector("#searchInput") ||
    document.querySelector(".search-input") ||
    document.querySelector('input[type="search"]');

  if (!search) return;

  search.addEventListener("input", e => {
    const q = e.target.value.toLowerCase().trim();

    if (!q) {
      renderProducts();
      return;
    }

    renderProducts(
      products.filter(p =>
        `${p.name} ${p.category} ${p.subcategory}`
          .toLowerCase()
          .includes(q)
      )
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupSearch();

  document.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      filterCategory(btn.dataset.category);
    });
  });
});
