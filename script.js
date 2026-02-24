// ===== Typing demo =====
const typingEl = document.getElementById("typingDemo");
const demoText =
  "Hi — absolutely. I’ll send the revised proposal by tomorrow afternoon. " +
  "For rollout, I suggest we align on milestones and owners; I can share a quick plan and we can confirm next steps on a short call. " +
  "Does 2:30pm work?";

let i = 0;
function type() {
  if (!typingEl) return;
  typingEl.textContent = demoText.slice(0, i);
  i++;
  if (i <= demoText.length) requestAnimationFrame(type);
}
setTimeout(type, 450);

// ===== Reveal on scroll =====
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);
reveals.forEach((el) => io.observe(el));

// ===== Cursor glow =====
const glow = document.getElementById("cursorGlow");
let glowVisible = false;
window.addEventListener("mousemove", (e) => {
  if (!glow) return;
  if (!glowVisible) {
    glow.style.opacity = "1";
    glowVisible = true;
  }
  glow.style.left = `${e.clientX - 280}px`;
  glow.style.top = `${e.clientY - 280}px`;
});

// ===== Magnetic buttons =====
const magnets = document.querySelectorAll(".magnetic");
magnets.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.08}px, ${y * 0.10}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});

// ===== FAQ accordion =====
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const open = item.classList.contains("open");
    faqItems.forEach((x) => x.classList.remove("open"));
    if (!open) item.classList.add("open");
  });
});

// ===== Footer year =====
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// ===== Download button placeholder =====
// Later: set downloadBtn.href to your Chrome Web Store listing URL
const downloadBtn = document.getElementById("downloadBtn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", (e) => {
    // Stop "#" jumping if you haven't set a real link yet
    if (downloadBtn.getAttribute("href") === "#") {
      e.preventDefault();
      alert("Download link not set yet. Add your Chrome Web Store URL into the button href.");
    }
  });
}