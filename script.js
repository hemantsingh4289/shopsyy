// Smooth scroll to "Browse Gifts"
document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#products');
  target.scrollIntoView({ behavior: 'smooth' });
});

// Back to Top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fade-in animation for gift cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.cat-card').forEach(card => {
  observer.observe(card);
});
