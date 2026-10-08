import React, { useState } from "react";
import "./App.css";

const slides = [
  {
    image: "/Hero.svg",
    eyebrow: "KUNDAN • MEENA • DIAMOND",
    title: "Timeless Elegance",
    text: "Traditional Indian craftsmanship presented with a refined modern expression.",
  },
  {
    image: "/Hero2.svg",
    eyebrow: "ROYAL KUNDAN",
    title: "Crafted for Royalty",
    text: "Discover handcrafted Kundan jewellery created for a distinctive royal look.",
  },
  {
    image: "/Hero3.svg",
    eyebrow: "MEENA COLLECTION",
    title: "Artistry in Every Detail",
    text: "Rich colours, intricate craftsmanship and Indian heritage come together.",
  },
  {
    image: "/Hero4.svg",
    eyebrow: "DIAMOND COLLECTION",
    title: "Forever Brilliant",
    text: "Elegant jewellery designed for unforgettable moments.",
  },
];

const collections = [
  {
    image: "/Hero.svg",
    title: "Kundan",
    text: "Traditional handcrafted Kundan jewellery with timeless royal appeal.",
  },
  {
    image: "/Hero2.svg",
    title: "Meena",
    text: "Beautiful Meenakari craftsmanship inspired by Indian heritage.",
  },
  {
    image: "/Hero3.svg",
    title: "Diamond",
    text: "Elegant diamond jewellery created for refined occasions.",
  },
  {
    image: "/Hero4.svg",
    title: "Bridal",
    text: "Royal jewellery pieces created for unforgettable celebrations.",
  },
];

const strengths = [
  {
    icon: "✦",
    title: "Premium Craftsmanship",
    text: "Carefully crafted jewellery with attention to detail and finish.",
  },
  {
    icon: "◇",
    title: "Traditional Expertise",
    text: "Indian jewellery heritage combined with contemporary design.",
  },
  {
    icon: "♢",
    title: "B2B Focus",
    text: "Collections and solutions designed for jewellery businesses.",
  },
  {
    icon: "✓",
    title: "Quality & Trust",
    text: "A professional approach focused on long-term business relationships.",
  },
  {
    icon: "◆",
    title: "Elegant Collections",
    text: "Kundan, Meena, Diamond and Bridal jewellery in one destination.",
  },
  {
    icon: "→",
    title: "Business Support",
    text: "Easy enquiry and collaboration support for trade partners.",
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <a href="#home" className="logo-area" onClick={closeMenu}>
          <div className="logo">L</div>

          <div>
            <div className="brand">LAKSHYAM</div>
            <div className="brand-sub">JEWELLERY</div>
          </div>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#collections" onClick={closeMenu}>
            Collections
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#b2b" onClick={closeMenu}>
            B2B / Wholesale
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* WhatsApp kept as current */}
        <button
          className="header-button"
          onClick={() => {
            window.location.href =
              "https://wa.me/916377562064?text=" +
              encodeURIComponent("Hello Lakshyam Jewellery");
          }}
        >
          WhatsApp
        </button>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-image-wrap">
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-image"
            />

            <div className="image-overlay" />

            <button
              className="arrow arrow-left"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>

            <button
              className="arrow arrow-right"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>

            <div className="dots">
              {slides.map((item, index) => (
                <button
                  key={item.title}
                  className={`dot ${
                    index === activeSlide ? "dot-active" : ""
                  }`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hero-content">
            <div className="eyebrow">{slide.eyebrow}</div>

            <h1>{slide.title}</h1>

            <p>{slide.text}</p>

            <div className="buttons">
              <a href="#collections" className="primary-button">
                Explore Collection
              </a>

              <a href="#contact" className="secondary-button">
                Enquire Now
              </a>
            </div>

            <div className="hero-bottom-line">
              <span>Premium Jewellery</span>
              <span>•</span>
              <span>B2B & Wholesale</span>
            </div>
          </div>
        </section>

        {/* COLLECTIONS */}
        <section id="collections" className="section">
          <div className="section-heading">
            <div className="eyebrow">OUR COLLECTIONS</div>

            <h2>Crafted With Royal Elegance</h2>

            <p>
              Explore our world of traditional and contemporary jewellery,
              created for discerning jewellery businesses and elegant
              occasions.
            </p>
          </div>

          <div className="cards">
            {collections.map((item, index) => (
              <CollectionCard
                key={item.title}
                image={item.image}
                title={item.title}
                text={item.text}
                number={`0${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* B2B */}
        <section id="b2b" className="split-section">
          <div className="split-image">
            <img
              src="/Hero2.svg"
              alt="Lakshyam Jewellery B2B collection"
            />
          </div>

          <div className="split-content">
            <div className="eyebrow">FOR JEWELLERY BUSINESSES</div>

            <h2>Wholesale & B2B Jewellery</h2>

            <p>
              Lakshyam Jewellery brings together premium Kundan, Meena,
              Diamond and Bridal jewellery for retailers, wholesalers,
              designers and business partners.
            </p>

            <div className="feature-list">
              <div>✓ Wholesale jewellery</div>
              <div>✓ Retailer requirements</div>
              <div>✓ Kundan & Meena collections</div>
              <div>✓ Diamond & Bridal collections</div>
              <div>✓ Business collaborations</div>
              <div>✓ Custom requirements</div>
            </div>

            <a href="#contact" className="primary-button">
              Discuss Your Requirement
            </a>
          </div>
        </section>

        {/* WHY LAKSHYAM */}
        <section className="section section-alt">
          <div className="section-heading">
            <div className="eyebrow">WHY LAKSHYAM</div>

            <h2>Built Around Craftsmanship & Trust</h2>

            <p>
              A professional jewellery experience focused on quality,
              design and long-term business relationships.
            </p>
          </div>

          <div className="strength-grid">
            {strengths.map((item) => (
              <div className="strength-card" key={item.title}>
                <div className="strength-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="split-section about-section">
          <div className="split-image">
            <img
              src="/Hero3.svg"
              alt="Lakshyam Jewellery craftsmanship"
            />
          </div>

          <div className="split-content">
            <div className="eyebrow">ABOUT LAKSHYAM</div>

            <h2>Tradition Meets Timeless Design</h2>

            <p>
              Lakshyam Jewellery brings together the richness of Indian
              craftsmanship with elegant modern design.
            </p>

            <p>
              Our focus is on Kundan, Meena and Diamond jewellery, with
              collections created for retailers, wholesalers, businesses
              and those looking for timeless jewellery.
            </p>

            <div className="about-points">
              <div>
                <strong>Kundan</strong>
                <span>Royal Indian craftsmanship</span>
              </div>

              <div>
                <strong>Meena</strong>
                <span>Colourful traditional artistry</span>
              </div>

              <div>
                <strong>Diamond</strong>
                <span>Elegant contemporary brilliance</span>
              </div>
            </div>

            <a href="#contact" className="primary-button">
              Know More
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="eyebrow">LAKSHYAM JEWELLERY</div>

          <h2>Jewellery That Speaks of Elegance</h2>

          <p>
            Looking for jewellery collections for your business or your
            next special occasion? Let us discuss your requirement.
          </p>

          <a href="#contact" className="light-button">
            Start an Enquiry
          </a>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="eyebrow">GET IN TOUCH</div>

          <h2>Let's Create Something Beautiful</h2>

          <p className="contact-text">
            For product enquiries, wholesale requirements or business
            collaborations, contact Lakshyam Jewellery.
          </p>

          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">☎</div>

              <div>
                <div className="contact-label">CALL US</div>

                <a
                  href="tel:+916377562064"
                  className="contact-value"
                >
                  +91 63775 62064
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">◆</div>

              <div>
                <div className="contact-label">BUSINESS</div>

                <div className="contact-value">
                  B2B & Wholesale Jewellery
                </div>
              </div>
            </div>
          </div>

          <div className="contact-buttons">
            <a href="tel:+916377562064" className="primary-button">
              Call Us
            </a>

            {/* WhatsApp kept as current */}
            <button
              className="secondary-button"
              onClick={() => {
                window.location.href =
                  "https://wa.me/916377562064?text=" +
                  encodeURIComponent("Hello Lakshyam Jewellery");
              }}
            >
              WhatsApp Enquiry
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              LAKSHYAM JEWELLERY
            </div>

            <div className="footer-tagline">
              Kundan • Meena • Diamond
            </div>

            <p className="footer-description">
              Premium Indian jewellery for modern businesses and
              timeless occasions.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#collections">Collections</a>
            <a href="#about">About</a>
            <a href="#b2b">B2B / Wholesale</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Lakshyam Jewellery. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function CollectionCard({ image, title, text, number }) {
  return (
    <div className="collection-card">
      <div className="card-image-wrap">
        <img
          src={image}
          alt={`${title} jewellery`}
          className="card-image"
        />

        <div className="card-overlay" />
      </div>

      <div className="card-body">
        <div className="card-number">{number}</div>

        <h3>{title}</h3>

        <p>{text}</p>

        <a href="#contact">Enquire →</a>
      </div>
    </div>
  );
}

export default App;
