// ==============================================
// LA CHANCHITA
// FUTURISTIC EXPERIENCE
// ==============================================

// ==============================================
// WHATSAPP
// ==============================================

const WHATSAPP_NUMBER = "51931329862";

function openWhatsApp(message = "Hola 👋 quiero participar en La Chanchita") {

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

}

// ==============================================
// BUTTONS ACTIONS
// ==============================================

document.querySelectorAll(".btn-primary").forEach((button) => {

  button.addEventListener("click", () => {

    openWhatsApp(
      "Hola 👋 quiero participar en los sorteos de La Chanchita"
    );

  });

});

document.querySelectorAll(".btn-secondary").forEach((button) => {

  button.addEventListener("click", () => {

    document
      .querySelector(".floating-rewards")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

});

document.querySelector(".btn-login")?.addEventListener("click", () => {

  openWhatsApp(
    "Hola 👋 quiero ingresar a La Chanchita"
  );

});

// ==============================================
// REWARDS DATABASE
// ==============================================

const premios = [

  {
    titulo: "Alexa Echo Dot",
    descripcion: "Controla tu casa con comandos de voz.",
    puntos: 360,
    imagen: "img/premios/alexa.png",
    glow: "#4DA3FF"
  },

  {
    titulo: "Pelota de futbol pro",
    descripcion: "Juega y disfruta.",
    puntos: 180,
    imagen: "img/premios/balon-futbol.png",
    glow: "#F26B63"
  },

  {
    titulo: "Licuadora Oster",
    descripcion: "Licuadora pro",
    puntos: 260,
    imagen: "img/premios/licuadora.png",
    glow: "#FFFFFF"
  },

  {
    titulo: "Airpods Pro",
    descripcion: "Audio premium para tu día.",
    puntos: 1400,
    imagen: "img/premios/airpods.png",
    glow: "#ff914d"
  },

  {
    titulo: "Gift Card de 100 soles",
    descripcion: "Canjea saldo para tus compras.",
    puntos: 150,
    imagen: "img/premios/giftcard.png",
    glow: "#00FFA3"
  }

];

// ==============================================
// REFERENCES
// ==============================================

const carousel = document.getElementById("carousel");

// ==============================================
// CREATE REWARD CARDS
// ==============================================

function renderPremios() {

  carousel.innerHTML = "";

  premios.forEach((premio, index) => {

    const card = document.createElement("div");

    card.classList.add("premio-card");

    card.style.animationDelay = `${index * 0.12}s`;

    card.innerHTML = `

      <div 
        class="card-glow"
        style="
          background:${premio.glow};
        "
      ></div>

      <div class="premio-image">

        <img 
          src="${premio.imagen}" 
          alt="${premio.titulo}"
        >

      </div>

      <div class="premio-content">

        <h3>
          ${premio.titulo}
        </h3>

        <p>
          ${premio.descripcion}
        </p>

        <div class="card-bottom">

          <span class="points">
            ${premio.puntos} pts
          </span>

          <button class="claim-btn">
            Canjear
          </button>

        </div>

      </div>

    `;

    // WhatsApp reward button

    card.querySelector(".claim-btn")
      .addEventListener("click", () => {

        openWhatsApp(
          `Hola 👋 quiero canjear el premio: ${premio.titulo}`
        );

      });

    // 3D hover effect

    card.addEventListener("mousemove", (e) => {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / 18) * -1;
      const rotateY = ((x - centerX) / 18);

      card.style.transform =
        `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave", () => {

      card.style.transform =
        `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          translateY(0px)
        `;

    });

    carousel.appendChild(card);

  });

}

renderPremios();

// ==============================================
// CAROUSEL
// ==============================================

const next = document.getElementById("next");
const prev = document.getElementById("prev");

next?.addEventListener("click", () => {

  carousel.scrollBy({
    left: 420,
    behavior: "smooth"
  });

});

prev?.addEventListener("click", () => {

  carousel.scrollBy({
    left: -420,
    behavior: "smooth"
  });

});

// ==============================================
// AUTO SCROLL CAROUSEL
// ==============================================

let autoScroll = setInterval(() => {

  if (
    carousel.scrollLeft +
    carousel.clientWidth >=
    carousel.scrollWidth - 5
  ) {

    carousel.scrollTo({
      left: 0,
      behavior: "smooth"
    });

  } else {

    carousel.scrollBy({
      left: 1,
      behavior: "smooth"
    });

  }

}, 25);

carousel.addEventListener("mouseenter", () => {

  clearInterval(autoScroll);

});

carousel.addEventListener("mouseleave", () => {

  autoScroll = setInterval(() => {

    if (
      carousel.scrollLeft +
      carousel.clientWidth >=
      carousel.scrollWidth - 5
    ) {

      carousel.scrollTo({
        left: 0,
        behavior: "smooth"
      });

    } else {

      carousel.scrollBy({
        left: 1,
        behavior: "smooth"
      });

    }

  }, 25);

});

// ==============================================
// COUNTDOWN
// ==============================================

const countdownElement =
  document.getElementById("countdown");

const targetDate =
  new Date();

targetDate.setDate(targetDate.getDate() + 7);

function updateCountdown() {

  const now = new Date();

  const distance =
    targetDate - now;

  const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours =
    Math.floor(
      (distance % (1000 * 60 * 60 * 24))
      /
      (1000 * 60 * 60)
    );

  const minutes =
    Math.floor(
      (distance % (1000 * 60 * 60))
      /
      (1000 * 60)
    );

  const seconds =
    Math.floor(
      (distance % (1000 * 60))
      /
      1000
    );

  countdownElement.innerHTML =
    `
      ${String(days).padStart(2, "0")}
      :
      ${String(hours).padStart(2, "0")}
      :
      ${String(minutes).padStart(2, "0")}
      :
      ${String(seconds).padStart(2, "0")}
    `;

}

setInterval(updateCountdown, 1000);

updateCountdown();

// ==============================================
// PARALLAX HERO
// ==============================================

const hero = document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {

  const x =
    (window.innerWidth / 2 - e.clientX) / 90;

  const y =
    (window.innerHeight / 2 - e.clientY) / 90;

  hero.style.backgroundPosition =
    `${x}px ${y}px`;

});

// ==============================================
// SCROLL REVEAL
// ==============================================

const revealElements =
  document.querySelectorAll(
    ".premio-card, .step-card, .stat-card, .draw-card, .cta-card"
  );

const revealOnScroll = () => {

  revealElements.forEach((element) => {

    const windowHeight =
      window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {

      element.classList.add("active-reveal");

    }

  });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==============================================
// FLOATING PARTICLES
// ==============================================

const particlesContainer =
  document.createElement("div");

particlesContainer.classList.add("particles");

document.body.appendChild(
  particlesContainer
);

for (let i = 0; i < 35; i++) {

  const particle =
    document.createElement("span");

  particle.classList.add("particle");

  particle.style.left =
    Math.random() * 100 + "vw";

  particle.style.animationDuration =
    8 + Math.random() * 10 + "s";

  particle.style.animationDelay =
    Math.random() * 5 + "s";

  particle.style.opacity =
    Math.random();

  particle.style.width =
    particle.style.height =
    Math.random() * 6 + 2 + "px";

  particlesContainer.appendChild(
    particle
  );

}

// ==============================================
// GLOW CURSOR
// ==============================================

const glowCursor =
  document.createElement("div");

glowCursor.classList.add("glow-cursor");

document.body.appendChild(glowCursor);

window.addEventListener("mousemove", (e) => {

  glowCursor.style.left =
    e.clientX + "px";

  glowCursor.style.top =
    e.clientY + "px";

});

// ==============================================
// TILT HERO STATS
// ==============================================

document.querySelectorAll(".stat-card")
  .forEach((card) => {

    card.addEventListener("mousemove", (e) => {

      const rect =
        card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        ((y - centerY) / 20) * -1;

      const rotateY =
        ((x - centerX) / 20);

      card.style.transform =
        `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave", () => {

      card.style.transform =
        `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
        `;

    });

});

// ==============================================
// CONSOLE SIGNATURE 😎
// ==============================================

console.log(
  "%c🐷 LA CHANCHITA",
  `
    color:#F26B63;
    font-size:28px;
    font-weight:bold;
  `
);

console.log(
  "%cHoy por ti, mañana por mí 🚀",
  `
    color:white;
    font-size:14px;
  `
);