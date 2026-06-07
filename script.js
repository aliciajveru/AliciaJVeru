const books = [
  {
    title: "Where We Began",
    series: "Book One",
    cover: "assets/covers/his-golden-heart/book-1.jpg",
    blurb: [
      "Julian Reid understands the laws of physics. But there is no scientific formula for the free-fall of a first crush.",
      "Chronically anxious and thousands of miles from his tight-knit family, Julian's first semester at college in Atlanta is supposed to be about focusing on his coursework and embracing this thrilling new chapter in his life alongside Theron and Anya, the two people who quickly become his closest friends.",
      "He certainly didn't plan for Cas.",
      "It starts with a slip in the pouring rain—one fall, one catch—and suddenly Julian's world is thrown off its axis.",
      "Tall, hazel-eyed, and effortlessly charming, Cas is dangerously easy to like. With him, everything just feels... simple. Perhaps it's his down-to-earth and laid-back nature. Maybe it's his remarkable patience, or the confidence he so naturally exudes. Whatever it is, Cas somehow manages to cut right through Julian's constant anxiety without even needing to try too hard.",
      { text: "— What if the person who catches you when you fall becomes the one you can't stop falling for?", italic: true }
    ],
    links: [
      { label: "Amazon", href: "https://www.amazon.com/Where-began-Golden-Heart-Book-ebook/dp/B0GWYJG9LJ", style: "button-primary" },
      { label: "Goodreads", href: "https://www.goodreads.com/author/show/70124219.Alicia_J_Veru", style: "button-secondary" }
    ]
  },
  {
    title: "What We Built",
    series: "Book Two",
    cover: "assets/covers/his-golden-heart/book-2.jpg",
    blurb: [
      "Julian Reid said yes.",
      "Yes to Cas. Yes to falling, properly this time, into the kind of love he was never raised to expect. Kissing the billionaire was the easy part—now, Julian actually has to figure out how to date him.",
      "Going from pining to a real partnership means Julian can’t just hide behind his physics textbooks anymore. He has to come to terms with the culture shock of Cas's bank account, a grueling spring semester, and his own stubborn imposter syndrome. Luckily, he still has his fiercely chaotic best friends, Theron and Anya, to bully him into making good life choices.",
      "But there are still parts of himself Julian has kept locked away, the habit of silence he learned young and never broke. Cas has a way of waiting at those doors without ever pushing them open, and Julian is starting to realize that some things only happen when you stop being afraid of your own voice. Or your own body.",
      "A weekend away. A cabin in the snow. A question Julian has been circling for months, and an answer he is finally ready to give out loud.",
      { text: "— Shedding his armor means trusting Cas with everything underneath.", italic: true }
    ],
    links: [
      { label: "Amazon", href: "https://www.amazon.com/What-Built-Golden-Heart-Book-ebook/dp/B0H196WQ74", style: "button-primary" },
      { label: "Goodreads", href: "https://www.goodreads.com/author/show/70124219.Alicia_J_Veru", style: "button-secondary" }
    ]
  },
  {
    title: "Why We Braved",
    series: "Book Three",
    cover: "assets/covers/his-golden-heart/book-3.png",
    status: "Coming Soon",
    featured: true,
    blurb: [
      "Julian Reid is happy.",
      "He has everything he could have asked for: a golden-hearted boyfriend who loves him, two best friends who feel like family, a place at Shadwell he can finally call home, and a bright future ahead of him.",
      "After months of firsts — first dates, first kisses, first love, first everything — Julian finally believes in the life he has made.",
      "But May keeps creeping closer.",
      "Cas is graduating, and his future is already calling. Offers, expectations, capstone pressure, and decisions too big to avoid begin pulling him toward a life Julian may not be able to follow. Week by week, day by day, Julian’s fear grows harder to hide.",
      "And he is not the only one afraid.",
      "Cas is carrying more pressure than he admits. Theron’s bright smile is hiding academic trouble. Anya is tired of being strong for everyone. The friendship that once felt effortless now needs care, attention, and honesty — the very things Julian forgets to give when panic makes his world shrink down to Cas.",
      "Julian will have to become braver than he has ever been.",
      "Brave enough to speak. Brave enough to listen. Brave enough to let love change shape without calling it loss.",
      "As May approaches, Julian must learn that love is not measured by how tightly he holds on. Friendship is not measured by who is closest. And bravery is not the absence of fear.",
      "It is choosing to stay soft, honest, and open-hearted, even when the future refuses to promise it will be gentle.",
      { text: "— Some goodbyes are not endings. Some are the beginning of forever.", italic: true }
    ],
    links: [
      { label: "Notify Me When It’s Available", href: "#newsletter", style: "button-primary" },
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

  const blurb = document.createElement("div");
  blurb.className = "book-blurb is-collapsed";
  blurb.id = `blurb-${book.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  const blurbParts = Array.isArray(book.blurb) ? book.blurb : [book.blurb];
  blurbParts.forEach((part) => {
    const paragraph = document.createElement("p");
    if (typeof part === "object" && part.italic) {
      const emphasis = document.createElement("em");
      emphasis.textContent = part.text;
      paragraph.append(emphasis);
    } else {
      paragraph.textContent = part;
    }
    blurb.append(paragraph);
  });

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

  const toggle = document.createElement("button");
  toggle.className = "blurb-toggle";
  toggle.type = "button";
  toggle.textContent = "Show More";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", blurb.id);
  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggle.textContent = isExpanded ? "Show More" : "Show Less";
    blurb.classList.toggle("is-collapsed", isExpanded);
  });

  card.append(series, title, coverFrame, blurb, toggle, links);
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
