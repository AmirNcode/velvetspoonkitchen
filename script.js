const track = document.querySelector(".gallery-track");
const previousButton = document.querySelector(".carousel-button-prev");
const nextButton = document.querySelector(".carousel-button-next");

function scrollGallery(direction) {
  if (!track) return;

  const card = track.querySelector(".post-card");
  const cardWidth = card ? card.getBoundingClientRect().width : 280;
  track.scrollBy({
    left: direction * (cardWidth + 22),
    behavior: "smooth",
  });
}

previousButton?.addEventListener("click", () => scrollGallery(-1));
nextButton?.addEventListener("click", () => scrollGallery(1));
