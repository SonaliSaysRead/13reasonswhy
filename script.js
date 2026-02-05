const reasons = [
  "Your face. It is excellent to look at. And that hot bod. 😌",
  "You made me like vegetables.",
  "You hit yourself in the head with a bottle when I wanted to off myself.",
  "You are truly the kindest person I know (although this is also a reason I hate you, Mr. double-handed-handshake).",
  "You are patient with me even when I'm not patient with myself.",
  "You leave bed in the morning to go do yoga. NOOOO I HATE YOU FOR THIS. But I love and respect how you commit to things.",
  "You always remind me of what really matters.",
  "You really really care about doing the right thing. Without you, I'd still be using plastic bags.",
  "You are really fucking smart. And you're never tired of learning new things.",
  "You have limitless energy and your vibe is contagious.",
  "You can find the funny side in everything. My days are lighter and brighter because of you.",
  "You stuck by me through shitty things, and big moves, and awards, and grants, and imaginary heart attacks. You are resilient in every sense and shared that resilience with me when I needed it the most.",
  "THAT'S WHAT SHE SAID!!!!"
];

const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

function startExperience() {
  const cover = document.getElementById("cover");
  const main = document.getElementById("main");
  cover.style.display = "none";
  main.classList.remove("hidden");
}

function showReason(index) {
  modalText.textContent = reasons[index];
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

// Optional: close modal when clicking outside the card
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
