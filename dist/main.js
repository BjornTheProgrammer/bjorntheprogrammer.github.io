// src/main.ts
var observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const animatedContent = entry.target;
    if (entry.isIntersecting) {
      animatedContent.classList.add("fade-in");
      return;
    }
  });
});
document.querySelectorAll(".into-content").forEach((item) => {
  console.log("item:", item);
  observer.observe(item);
});
