import { galleryItems } from "./gallery-items.js";
// Change code below this line

let lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});
const gallery = document.querySelector("ul.gallery");
const galleryImages = galleryItems
  .map(
    (image) =>
      `<li><a class="gallery__item" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a></li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryImages);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") instance.close();
  };
  const instance = basicLightbox.create(`<img src="${e.target.src.source}">`, {
    onShow: () => {
      document.addEventListener("keydown", handleEscapeKey);
    },
    onClose: () => {
      document.removeEventListener("keydown", handleEscapeKey);
    },
  });
  instance.show();
});

console.log(galleryItems);
