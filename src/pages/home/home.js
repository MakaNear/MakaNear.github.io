import loadComponent from "../../helpers/loadComponent.js";
import { smoothScroll } from "../../helpers/smoothScroll.js";
import { navbar } from "../../components/navbar/navbar.js";
import { url } from "../../helpers/urlConfig.js";
import slide from "./partner/slide.js";

export async function main() {
  const promises = [
    loadComponent("header.navbar", url.components.navbar + "navbar.html"),
    loadComponent(".home .hero", url.pages.home + "hero/hero.html"),
    loadComponent(".home .benefit", url.pages.home + "benefit/benefit.html"),
    loadComponent(".home .partner", url.pages.home + "partner/partner.html"),
    loadComponent(".home .kontak", url.pages.home + "kontak/kontak.html"),
    loadComponent("footer.footer", url.components.footer + "footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      navbar();
      slide();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
