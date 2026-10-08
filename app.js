import React, { useState } from "react";
import "./styles.css";

const whatsapp = "https://wa.me/916377562064";

const categories = [
  {
    title: "Jadau Jewellery",
    subtitle: "Royal craftsmanship",
    image: "/Hero.svg",
  },
  {
    title: "Kundan Jewellery",
    subtitle: "Timeless tradition",
    image: "/Hero2.svg",
  },
  {
    title: "Meena Jewellery",
    subtitle: "Colourful artistry",
    image: "/Hero3.svg",
  },
  {
    title: "Diamond Jewellery",
    subtitle: "Modern brilliance",
    image: "/Hero4.svg",
  },
];

const featured = [
  {
    title: "Royal Kundan",
    category: "KUNDAN COLLECTION",
    image: "/Hero.svg",
  },
  {
    title: "Heritage Meena",
    category: "MEENA COLLECTION",
    image: "/Hero3.svg",
  },
  {
    title: "Signature Diamond",
    category: "DIAMOND COLLECTION",
    image: "/Hero4.svg",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      image: "/Hero.svg",
      small: "KUNDAN • MEENA • DIAMOND",
      title: "Jewellery that tells a story.",
      text: "Discover refined Indian jewellery crafted for discerning buyers and jewellery businesses.",
    },
    {
      image: "/Hero2.svg",
      small: "ROYAL KUNDAN",
      title: "The beauty of timeless craft.",
      text: "Traditional Kundan artistry presented with a sophisticated modern expression.",
    },
    {
      image: "/Hero3.svg",
      small: "MEENA COLLECTION",
      title: "Artistry in every detail.",
      text: "Rich colour, intricate detail and Indian heritage come together beautifully.",
    },
    {
      image: "/Hero4.svg",
      small: "DIAMOND COLLECTION",
      title: "Brilliance, beautifully refined.",
      text: "Elegant diamond designs created for memorable occasions and modern collections.",
    },
  ];

  const nextSlide = () => {
    setSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* TOP BAR */}
      <div className="topbar">
        <div>B2B JEWELLERY • KUNDAN • MEENA • DIAMOND</div>
        <a href={whatsapp} target="_blank" rel="noreferrer">
          WHATSAPP ENQUIRY →
        </a>
      </div>

      {/* HEADER */}
      <header className="header">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">L</span>
          <span className="brand-name">
            LAKSHYAM
            <small>JEWELLERY</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#collections" onClick={closeMenu}>Collections</a>
          <a href="#featured" onClick={closeMenu}>Featured</a>
          <a href="#about" onClick={closeMenu}>Our Story</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <a
            className="header-whatsapp"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Enquire on WhatsApp
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      {/* CATEGORY STRIP */}
      <div className="category-strip">
        <a href="#collections">Jadau Jewellery</a>
        <a href="#collections">Kundan Jewellery</a>
        <a href="#collections">Meena Jewellery</a>
        <a href="#collections">Diamond Jewellery</a>
        <a href="#collections">Bridal Jewellery</a>
      </div>

      {/* HERO */}
      <main id="home">
        <section className="hero">
          <div className="hero-image">
            <img src={slides[slide].image} alt={slides[slide].title} />
            <div className="hero-shade"></div>

            <div className="hero-content">
              <div className="eyebrow">{slides[slide].small}</div>
              <h1>{slides[slide].title}</h1>
              <p>{slides[slide].text}</p>

              <div className="hero-buttons">
                <a href="#collections" className="gold-button">
                  EXPLORE COLLECTION
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button"
                >
                  B2B ENQUIRY
                </a>
              </div>
            </div>

            <button className="slider-arrow left" onClick={previousSlide}>
              ←
            </button>

            <button className="slider-arrow right" onClick={nextSlide}>
              →
            </button>

            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={index === slide ? "active" : ""}
                  onClick={() => setSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro section">
          <div className="intro-small">LAKSHYAM JEWELLERY</div>
          <h2>Crafted with tradition.<br />Presented with distinction.</h2>
          <p>
            Lakshyam Jewellery brings together the richness of Indian jewellery
            traditions with a clean and refined catalogue experience.
            Explore our Kundan, Meena, Jadau and Diamond collections.
          </p>
        </section>

        {/* COLLECTIONS */}
        <section id="collections" className="section collections-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow dark">OUR COLLECTIONS</span>
              <h2>Discover the collection.</h2>
            </div>
            <p>
              A curated selection created for jewellery lovers,
              retailers and trade partners.
            </p>
          </div>

          <div className="collection-grid">
            {categories.map((item) => (
              <a href={whatsapp} target="_blank" rel="noreferrer" className="collection-card" key={item.title}>
                <div className="collection-image">
                  <img src={item.image} alt={item.title} />
                  <div className="collection-overlay"></div>
                  <span>EXPLORE →</span>
                </div>
                <div className="collection-info">
                  <small>{item.subtitle}</small>
                  <h3>{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* B2B */}
        <section className="b2b">
          <div className="b2b-inner">
            <span className="eyebrow">FOR JEWELLERY BUSINESSES</span>
            <h2>Built for the<br />trade.</h2>
            <p>
              Looking for distinctive jewellery collections for your business?
              Connect with Lakshyam Jewellery for B2B and wholesale enquiries.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="gold-button"
            >
              TALK TO US ON WHATSAPP →
            </a>
          </div>
        </section>

        {/* FEATURED */}
        <section id="featured" className="section featured-section">
          <div className="center-heading">
            <span className="eyebrow dark">CURATED FOR YOU</span>
            <h2>Featured Jewellery</h2>
            <p>
              Explore a selection of our signature jewellery styles.
            </p>
          </div>

          <div className="featured-grid">
            {featured.map((item) => (
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="featured-card"
                key={item.title}
              >
                <div className="featured-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="featured-info">
                  <small>{item.category}</small>
                  <h3>{item.title}</h3>
                  <span>ENQUIRE →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* STORY */}
        <section id="about" className="story">
          <div className="story-image">
            <img src="/Hero2.svg" alt="Lakshyam Jewellery craftsmanship" />
          </div>

          <div className="story-content">
            <span className="eyebrow dark">OUR STORY</span>
            <h2>Tradition with a modern touch.</h2>
            <p>
              Jewellery is more than an ornament. It carries culture,
              craftsmanship and stories from one generation to another.
            </p>
            <p>
              Lakshyam Jewellery is built around this idea — bringing
              traditional Indian jewellery into a refined, easy-to-explore
              catalogue for today's customers and jewellery businesses.
            </p>

            <div className="story-points">
              <div>
                <strong>01</strong>
                <span>Curated Designs</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Easy Enquiry</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Personal Service</span>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="section values">
          <div className="center-heading">
            <span className="eyebrow dark">WHY LAKSHYAM</span>
            <h2>Made for lasting relationships.</h2>
          </div>

          <div className="values-grid">
            <div className="value">
              <span>01</span>
              <h3>Craftsmanship</h3>
              <p>Traditional Indian jewellery aesthetics with attention to detail.</p>
            </div>

            <div className="value">
              <span>02</span>
              <h3>Curated Collections</h3>
              <p>Kundan, Meena, Jadau and Diamond styles brought together.</p>
            </div>

            <div className="value">
              <span>03</span>
              <h3>B2B Focus</h3>
              <p>A simple way for jewellery businesses to enquire and connect.</p>
            </div>

            <div className="value">
              <span>04</span>
              <h3>Personal Service</h3>
              <p>Direct communication for genuine product and business enquiries.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div>
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>Looking for something<br />special?</h2>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="light-button"
          >
            WHATSAPP ENQUIRY →
          </a>
        </section>

        {/* FAQ */}
        <section className="section faq">
          <div className="center-heading">
            <span className="eyebrow dark">NEED HELP?</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            <details>
              <summary>How can I enquire about a design?</summary>
              <p>
                Use the WhatsApp enquiry button and connect directly with
                Lakshyam Jewellery.
              </p>
            </details>

            <details>
              <summary>Can I request product photos?</summary>
              <p>
                Yes. Send your enquiry on WhatsApp and discuss the required
                designs directly.
              </p>
            </details>

            <details>
              <summary>Do you handle B2B / wholesale enquiries?</summary>
              <p>
                Yes. Lakshyam Jewellery is focused on jewellery trade and
                wholesale enquiries.
              </p>
            </details>

            <details>
              <summary>Can I enquire about Kundan and Meena jewellery?</summary>
              <p>
                Yes. You can enquire about Kundan, Meena, Jadau and Diamond
                jewellery through WhatsApp.
              </p>
            </details>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="contact-inner">
            <div>
              <span className="eyebrow">LAKSHYAM JEWELLERY</span>
              <h2>Let's talk jewellery.</h2>
              <p>
                For collections, product enquiries and B2B opportunities,
                connect with us directly.
              </p>
            </div>

            <div className="contact-box">
              <small>WHATSAPP</small>
              <strong>+91 63775 62064</strong>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                START ENQUIRY →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>L</span>
              <div>
                LAKSHYAM
                <small>JEWELLERY</small>
              </div>
            </div>

            <p>KUNDAN • MEENA • DIAMOND</p>
            <span>Premium Indian Jewellery • B2B & Wholesale</span>
          </div>

          <div className="footer-column">
            <h4>Collections</h4>
            <a href="#collections">Jadau Jewellery</a>
            <a href="#collections">Kundan Jewellery</a>
            <a href="#collections">Meena Jewellery</a>
            <a href="#collections">Diamond Jewellery</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">Our Story</a>
            <a href="#featured">Featured</a>
            <a href="#contact">Contact</a>
            <a href="#home">Back to top ↑</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <span>WhatsApp</span>
            <strong>+91 63775 62064</strong>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              Start Enquiry →
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Lakshyam Jewellery. All rights reserved.</span>
          <span>KUNDAN • MEENA • DIAMOND</span>
        </div>
      </footer>

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="WhatsApp"
      >
        WA
      </a>
    </div>
  );
}

export default App;
