//code for change image srouce
const mediaTablet = window.matchMedia(`(max-width : 1024px)`);
const faqContainers = document.querySelectorAll(".faq-container");

//Update source image base on media queries
function updateImageHero() {
  if (mediaTablet.matches) {
    svg1.src = `./assets/images/illustration-woman-online-mobile.svg`;
  } else if (!mediaTablet.matches) {
    svg1.src = ` ./assets/images/illustration-woman-online-desktop.svg`;
  }
}

window.addEventListener("resize", updateImageHero, false);
window.addEventListener("load", updateImageHero, false);

//Update faq item
function activateElement(array, classe, target) {
  array.forEach((element) => {
    if (element.classList.contains(classe)) {
      element.classList.remove(classe);
      target.classList.add(classe);
    }
  });
}

window.addEventListener("click", (e) => {
  if (e.target.localName === "h3") {
    let container = e.target.offsetParent;
    activateElement(faqContainers, "active", container);
  }
});
