const reasons = [
  "Your face. (Respectfully.) 😌",
  "You make me laugh even when I’m trying to be mad 🙄😂",
  "Your hugs have permanent-residence status 🤗",
  "The way you say things like you invented language 🗣️✨",
  "You’re hot. I’m brave for saying it. 🔥",
  "You’re my favorite notification 📱💘",
  "You’re weird in the exact compatible way 🤝😈",
  "You make boring errands feel like a side quest 🧺🧙",
  "You hype me up like I’m the main character 🎬💅",
  "You’re kind, even when nobody’s watching 🫶",
  "Your laugh is my favorite sound effect 😂🔊",
  "You make me feel safe… AND feral. (Both.) 🐒💕",
  "Because I love you. Unfortunately for you, this is lifelong. 😘"
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
