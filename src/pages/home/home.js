import loadComponent from "../../helpers/loadComponent.js";
import { smoothScroll } from "../../helpers/smoothScroll.js";
import { navbar } from "../../components/navbar/navbar.js";
import { url } from "../../helpers/urlConfig.js";
import slide from "./partner/slide.js";
import Faq from "./faq/faq.js";

export async function main() {
  const promises = [
    loadComponent("header.navbar", url.components.navbar + "navbar.html"),
    loadComponent(".home .hero", url.pages.home + "hero/hero.html"),
    loadComponent(".home .benefit", url.pages.home + "benefit/benefit.html"),
    loadComponent(".home .partner", url.pages.home + "partner/partner.html"),
    loadComponent(".home .tim", url.pages.home + "tim/tim.html"),
    loadComponent(".home .information", url.pages.home + "information/information.html"),
    loadComponent(".home .faq", url.pages.home + "faq/faq.html"),
    loadComponent("footer.footer", url.components.footer + "footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      navbar();
      slide();
      Faq();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
