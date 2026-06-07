const books = [
  {
    title: "Where We Began",
    series: "His Golden Heart Series — Book One",
    cover: "assets/covers/where-we-began.jpg",
    blurb: "Julian Reid understands the laws of physics. But there is no scientific formula for the free-fall of a first crush. It starts with a slip in the pouring rain, one fall, one catch, and suddenly Julian's world is thrown off its axis.",
    links: [
      { label: "Amazon", href: "https://www.amazon.com/Where-began-Golden-Heart-Book-ebook/dp/B0GWYJG9LJ", style: "button-primary" },
      { label: "Goodreads", href: "https://www.goodreads.com/author/show/70124219.Alicia_J_Veru", style: "button-secondary" },
      { label: "Review on Amazon", href: "https://www.amazon.com/review/create-review?asin=B0GWYJG9LJ", style: "button-ghost" }
    ]
  },
  {
    title: "What We Built",
    series: "His Golden Heart Series — Book Two",
    cover: "assets/covers/book-two.jpg",
    blurb: "Julian Reid said yes. Yes to Cas. Yes to falling, properly this time, into the kind of love he was never raised to expect. Kissing the billionaire was the easy part; now, Julian actually has to figure out how to date him.",
    links: [
      { label: "Amazon", href: "https://www.amazon.com/What-Built-Golden-Heart-Book-ebook/dp/B0H196WQ74", style: "button-primary" },
      { label: "Goodreads", href: "https://www.goodreads.com/author/show/70124219.Alicia_J_Veru", style: "button-secondary" },
      { label: "Review on Amazon", href: "#", style: "button-ghost" }
    ]
  },
  {
    title: "Why We Braved",
    series: "His Golden Heart Series — Book Three",
    cover: "assets/covers/why-we-braved.png",
    status: "Coming Soon",
    featured: true,
    blurb: "Add the official blurb for Why We Braved here. This is the upcoming third book in the His Golden Heart Series.",
    links: [
      { label: "Notify Me When It’s Available", href: "#book-three-interest", style: "button-primary" },
      { label: "Goodreads", href: "https://www.goodreads.com/author/show/70124219.Alicia_J_Veru", style: "button-secondary" }
    ]
  }
];

function createBookCard(book) {
  const card = document.createElement("article");
  card.className = `book-card${book.featured ? " featured" : ""}`;

  const coverFrame = document.createElement("div");
  coverFrame.className = "cover-frame";

  const img = document.createElement("img");
  img.src = book.cover;
  img.alt = `${book.title} book cover`;
  img.loading = "lazy";

  const fallback = document.createElement("div");
  fallback.className = "cover-placeholder";
  fallback.hidden = true;
  fallback.textContent = book.title;

  img.addEventListener("error", () => {
    img.hidden = true;
    fallback.hidden = false;
  });

  coverFrame.append(img, fallback);

  const series = document.createElement("p");
  series.className = "series-label";
  series.textContent = book.series;

  const title = document.createElement("h3");
  title.textContent = book.title;

  const blurb = document.createElement("p");
  blurb.textContent = book.blurb;

  const links = document.createElement("div");
  links.className = "book-links";

  if (book.status) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = book.status;
    links.append(badge);
  }

  book.links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = `button ${link.style}`;
    anchor.href = link.href;
    anchor.textContent = link.label;
    links.append(anchor);
  });

  card.append(coverFrame, series, title, blurb, links);
  return card;
}

const bookGrid = document.querySelector("#book-grid");
if (bookGrid) {
  books.forEach((book) => bookGrid.append(createBookCard(book)));
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll(".signup-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    const action = form.getAttribute("action") || "";
    const placeholderAction = form.getAttribute("data-placeholder-action") || "";

    if (!action || action === "#" || action === placeholderAction || action.includes("YOUR_")) {
      event.preventDefault();
      alert("Connect this form to an email or form provider before collecting signups or counting reader interest.");
    }
  });
});
