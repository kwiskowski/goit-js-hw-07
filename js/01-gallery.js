import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("ul.gallery");
const galleryImages = galleryItems
  .map(
    (image) =>
      `<div class = "gallery__item">
            <a class = "gallery__link" href = "${image.original}">
                <img class = "gallery__image" data-source = "${image.original}" src = "${image.preview}" alt = "${image.description}" />
            </a>
        </div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryImages);
