import React, { useState } from "react";

const slides = [
  {
    image: "/Hero.svg",
    title: "Timeless Elegance",
    subtitle: "Kundan • Meena • Diamond",
    text: "Traditional craftsmanship with a modern expression.",
  },
  {
    image: "/Hero2.svg",
    title: "Royal Kundan",
    subtitle: "Crafted for Royalty",
    text: "Discover the beauty of handcrafted Kundan jewellery.",
  },
  {
    image: "/Hero3.svg",
    title: "Meena Collection",
    subtitle: "Artistry in Every Detail",
    text: "Colours, craftsmanship and heritage come together.",
  },
  {
    image: "/Hero4.svg",
    title: "Diamond Collection",
    subtitle: "Forever Brilliant",
    text: "Elegant designs created for unforgettable moments.",
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[activeSlide];

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logoArea}>
          <div style={styles.logo}>L</div>
          <div>
            <div style={styles.brand}>LAKSHYAM</div>
            <div style={styles.brandSub}>JEWELLERY</div>
          </div>
        </div>

        <nav style={styles.nav}>
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
  href="https://wa.me/916377562064?text=Hello%20Lakshyam%20Jewellery"
  style={styles.whatsapp}
>
  WhatsApp
</a>
      </header>

      {/* HERO */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroImageWrap}>
          <img
            src={slide.image}
            alt={slide.title}
            style={styles.heroImage}
          />

          <button onClick={prevSlide} style={{ ...styles.arrow, left: 20 }}>
            ‹
          </button>

          <button onClick={nextSlide} style={{ ...styles.arrow, right: 20 }}>
            ›
          </button>

          <div style={styles.dots}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                style={{
                  ...styles.dot,
                  opacity: index === activeSlide ? 1 : 0.45,
                }}
              />
            ))}
          </div>
        </div>

        <div style={styles.heroContent}>
          <div style={styles.smallText}>{slide.subtitle}</div>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>

          <div style={styles.buttons}>
            <a href="#collections" style={styles.primaryButton}>
              Explore Collection
            </a>

            <a href="#contact" style={styles.secondaryButton}>
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="collections" style={styles.section}>
        <div style={styles.sectionHeading}>
          <div style={styles.smallText}>OUR COLLECTIONS</div>
          <h2>Crafted With Royal Elegance</h2>
          <p>
            Explore our world of traditional and contemporary jewellery.
          </p>
        </div>

        <div style={styles.cards}>
          <CategoryCard
            image="/Hero.svg"
            title="Kundan"
            description="Traditional handcrafted Kundan jewellery."
          />

          <CategoryCard
            image="/Hero2.svg"
            title="Meena"
            description="Beautiful Meenakari craftsmanship."
          />

          <CategoryCard
            image="/Hero3.svg"
            title="Diamond"
            description="Elegant diamond jewellery for every occasion."
          />

          <CategoryCard
            image="/Hero4.svg"
            title="Bridal"
            description="Royal pieces made for unforgettable moments."
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.about}>
        <div style={styles.aboutImage}>
          <img src="/Hero2.svg" alt="Lakshyam Jewellery" />
        </div>

        <div style={styles.aboutContent}>
          <div style={styles.smallText}>ABOUT LAKSHYAM</div>
          <h2>Tradition Meets Timeless Design</h2>
          <p>
            Lakshyam Jewellery brings together the richness of Indian
            craftsmanship with elegant modern design.
          </p>
          <p>
            Our focus is on Kundan, Meena and Diamond jewellery crafted with
            attention to detail and a passion for timeless beauty.
          </p>

          <a href="#contact" style={styles.primaryButton}>
            Know More
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.contact}>
        <div style={styles.smallText}>GET IN TOUCH</div>
        <h2>Let's Create Something Beautiful</h2>
        <p>
          For product enquiries, wholesale requirements or business
          collaborations, contact Lakshyam Jewellery.
        </p>

        <div style={styles.contactButtons}>
          <a href="tel:+916377562064" style={styles.primaryButton}>
            Call Us
          </a>

          <button
  onClick={() => {
    window.location.href =
      "https://wa.me/916377562064?text=" +
      encodeURIComponent("Hello Lakshyam Jewellery");
  }}
  style={{
    ...styles.secondaryButton,
    cursor: "pointer",
  }}
>
  WhatsApp Enquiry
</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div>
          <div style={styles.footerBrand}>LAKSHYAM JEWELLERY</div>
          <div style={styles.footerTagline}>
            Kundan • Meena • Diamond
          </div>
        </div>

        <div style={styles.footerCopy}>
          © {new Date().getFullYear()} Lakshyam Jewellery. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function CategoryCard({ image, title, description }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardImageWrap}>
        <img src={image} alt={title} style={styles.cardImage} />
      </div>

      <div style={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#contact">Enquire →</a>
      </div>
    </div>
  );
}

const styles = {
  page: {
    margin: 0,
    background: "#faf8f4",
    color: "#1c1814",
    fontFamily:
      "Georgia, 'Times New Roman', serif",
    minHeight: "100vh",
  },

  header: {
    height: 78,
    padding: "0 6%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fffdf9",
    borderBottom: "1px solid #e7dfd3",
    position: "sticky",
    top: 0,
    zIndex: 20,
    boxSizing: "border-box",
  },

  logoArea: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  logo: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    border: "1px solid #b5965c",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 23,
    color: "#9a783d",
  },

  brand: {
    letterSpacing: 4,
    fontSize: 18,
    fontWeight: "bold",
  },

  brandSub: {
    letterSpacing: 3,
    fontSize: 9,
    color: "#9a783d",
    marginTop: 2,
  },

  nav: {
    display: "flex",
    gap: 30,
  },

  navLink: {
    color: "#1c1814",
  },

  whatsapp: {
    textDecoration: "none",
    color: "#fff",
    background: "#92713c",
    padding: "11px 18px",
    borderRadius: 3,
    fontSize: 13,
  },

  hero: {
    position: "relative",
    minHeight: "calc(100vh - 78px)",
    display: "flex",
    alignItems: "stretch",
    background: "#eee7dc",
    overflow: "hidden",
  },

  heroImageWrap: {
    width: "58%",
    position: "relative",
    minHeight: 560,
  },

  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 42,
    height: 42,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,.7)",
    background: "rgba(0,0,0,.25)",
    color: "#fff",
    fontSize: 30,
    cursor: "pointer",
  },

  dots: {
    position: "absolute",
    bottom: 22,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    padding: 0,
    border: 0,
    borderRadius: "50%",
    background: "#fff",
    cursor: "pointer",
  },

  heroContent: {
    width: "42%",
    padding: "70px 6%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
  },

  smallText: {
    color: "#9a783d",
    letterSpacing: 3,
    fontSize: 12,
    fontWeight: "bold",
  },

  heroContentH1: {},

  heroContent: {
    width: "42%",
    padding: "70px 6%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
  },

  buttons: {
    display: "flex",
    gap: 12,
    marginTop: 18,
    flexWrap: "wrap",
  },

  primaryButton: {
    display: "inline-block",
    textDecoration: "none",
    color: "#fff",
    background: "#92713c",
    padding: "13px 22px",
    borderRadius: 3,
    fontSize: 13,
    letterSpacing: 0.5,
  },

  secondaryButton: {
    display: "inline-block",
    textDecoration: "none",
    color: "#6f542c",
    background: "transparent",
    border: "1px solid #92713c",
    padding: "12px 22px",
    borderRadius: 3,
    fontSize: 13,
  },

  section: {
    padding: "90px 6%",
    background: "#fffdf9",
  },

  sectionHeading: {
    textAlign: "center",
    maxWidth: 650,
    margin: "0 auto 45px",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 22,
    maxWidth: 1250,
    margin: "0 auto",
  },

  card: {
    background: "#faf8f4",
    border: "1px solid #e7dfd3",
    overflow: "hidden",
  },

  cardImageWrap: {
    height: 280,
    overflow: "hidden",
  },

  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  cardBody: {
    padding: 20,
  },

  about: {
    display: "flex",
    alignItems: "center",
    gap: 60,
    padding: "90px 10%",
    background: "#eee7dc",
  },

  aboutImage: {
    width: "48%",
  },

  aboutContent: {
    width: "52%",
  },

  contact: {
    textAlign: "center",
    padding: "90px 20px",
    background: "#fffdf9",
  },

  contactButtons: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginTop: 25,
    flexWrap: "wrap",
  },

  footer: {
    padding: "35px 6%",
    background: "#17130f",
    color: "#eee",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    flexWrap: "wrap",
  },

  footerBrand: {
    letterSpacing: 3,
    fontSize: 15,
  },

  footerTagline: {
    color: "#b5965c",
    fontSize: 11,
    marginTop: 6,
    letterSpacing: 1,
  },

  footerCopy: {
    fontSize: 11,
    opacity: 0.7,
  },
};

export default App;
