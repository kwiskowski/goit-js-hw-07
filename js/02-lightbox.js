import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("ul.gallery");
const galleryImages = galleryItems
  .map(
    (image) =>
      `<li><a class="gallery__item" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" title="${image.description}" alt="${image.description}" />
    </a></li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryImages);

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "img") return;
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") instance.close();
  };
  const instance = simpleLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", handleEscapeKey);
      },
      onClose: () => {
        document.removeEventListener("keydown", handleEscapeKey);
      },
    }
  );
  instance.show();
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  overlayOpacity: 0.5,
});
