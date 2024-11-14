import loadComponent from "/src/helpers/loadComponent.js";
import { smoothScroll } from "/src/helpers/smoothScroll.js";
import { navbar } from "/src/components/navbar/navbar.js";
import { url } from "/src/helpers/urlConfig.js";

export async function main() {
  const promises = [
    loadComponent("header.navbar", url.components.navbar + "navbar.html"),
    loadComponent(".home .map", url.pages.home + "map/map.html"),
    loadComponent("footer.footer", url.components.footer + "footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      navbar();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
