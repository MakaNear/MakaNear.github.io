export default function Faq() {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and ready to go!");
  
    const faqItems = document.querySelectorAll(".faq-item");
    console.log("Found FAQ items:", faqItems);
  
    if (!faqItems.length) {
      console.error("FAQ items not found in the DOM.");
      return;
    }
  
    faqItems.forEach((item) => {
      const toggleButton = item.querySelector(".faq-toggle");
      const answer = item.querySelector(".faq-answer");
  
      if (!toggleButton || !answer) {
        console.error("Toggle button or answer element missing in one FAQ item:", item);
        return;
      }
  
      toggleButton.addEventListener("click", () => {
        console.log("FAQ toggle clicked:", item);
        console.log("Answer element being toggled:", answer);
  
        const isActive = item.classList.contains("active");
  
        faqItems.forEach((faq) => {
          faq.classList.remove("active");
          faq.querySelector(".faq-toggle").textContent = "+";
          faq.querySelector(".faq-answer").style.maxHeight = "0px";
          console.log("All FAQs reset.");
        });
  
        if (!isActive) {
          item.classList.add("active");
          toggleButton.textContent = "×";
          answer.style.maxHeight = `${answer.scrollHeight}px`;
          console.log("Class 'active' added to FAQ item:", item);
          console.log("Answer expanded, max-height set to:", answer.style.maxHeight);
        } else {
          item.classList.remove("active");
          toggleButton.textContent = "+";
          answer.style.maxHeight = "0px";
          console.log("Class 'active' removed from FAQ item:", item);
          console.log("Answer collapsed, max-height set to:", answer.style.maxHeight);
        }
      });
    });
  
    const faqSearchInput = document.getElementById("faq-search");
    faqSearchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      console.log("Search query:", query);
  
      faqItems.forEach((item) => {
        const questionText = item.querySelector(".faq-question").textContent.toLowerCase();
        if (questionText.includes(query)) {
          item.style.display = "block"; 
          console.log("Item matches search query:", item);
        } else {
          item.style.display = "none";
          console.log("Item does not match search query:", item);
        }
      });
    });
  });
  
}
