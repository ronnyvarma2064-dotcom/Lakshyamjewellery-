const SUPABASE_URL = "https://vcpqckhwesozzeordxys.supabase.co";
const SUPABASE_KEY = "sb_publishable_KB4RfDvMXOBlSuBtvx1KHA_RBCMDbpB"
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function loadProducts() {
  const { data, error } = await supabaseClient
    .from("products")
    .select("*");

  if (error) {
    console.error("Products load error:", error);
    return;
  }

  console.log("Products:", data);
}

loadProducts();
const slides = [
  {
    image: "hero.svg",
    small: "KUNDAN • MEENA • DIAMOND",
    title: "Jewellery that<br>tells a story.",
    text: "Discover refined Indian jewellery crafted for discerning buyers and jewellery businesses."
  },
  {
    image: "hero2.svg",
    small: "ROYAL KUNDAN",
    title: "The beauty of<br>timeless craft.",
    text: "Traditional Kundan artistry presented with a sophisticated modern expression."
  },
  {
    image: "hero3.svg",
    small: "MEENA COLLECTION",
    title: "Artistry in<br>every detail.",
    text: "Rich colour, intricate detail and Indian heritage come together beautifully."
  },
  {
    image: "hero4.svg",
    small: "DIAMOND COLLECTION",
    title: "Brilliance,<br>beautifully refined.",
    text: "Elegant diamond designs created for memorable occasions and modern collections."
  }
];

let currentSlide = 0;

const heroImage = document.getElementById("heroImage");
const heroSmall = document.getElementById("heroSmall");
const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");

function showSlide(index) {

  currentSlide = (index + slides.length) % slides.length;

  const slide = slides[currentSlide];

  heroImage.src = slide.image;
  heroSmall.textContent = slide.small;
  heroTitle.innerHTML = slide.title;
  heroText.textContent = slide.text;

  document.querySelectorAll(".slider-dots button").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

document.getElementById("next").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

document.getElementById("prev").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

document.querySelectorAll(".slider-dots button").forEach((dot) => {

  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slide));
  });

});

setInterval(() => {
  showSlide(currentSlide + 1);
}, 6000);


/* MOBILE MENU */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("nav-open");

  menuButton.textContent =
    nav.classList.contains("nav-open") ? "×" : "☰";
});


document.querySelectorAll(".nav a").forEach((link) => {

  link.addEventListener("click", () => {
    nav.classList.remove("nav-open");
    menuButton.textContent = "☰";
  });

});


/* CLOSE MENU WHEN CLICKING OUTSIDE */

document.addEventListener("click", (event) => {

  if (
    !nav.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    nav.classList.remove("nav-open");
    menuButton.textContent = "☰";
  }

});
