const words = [
  "masa", "kalem", "araba", "elma", "kitap", 
  "telefon", "bulut", "kedi", "bilgi", "zeka",
  "deniz", "güneş", "yıldız", "orman", "şehir"
];

let score = 0;
let selectedWord = words[Math.floor(Math.random() * words.length)];

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");

guessBtn.addEventListener("click", () => {
  const guess = guessInput.value.trim().toLowerCase();
  if (!guess) {
    message.textContent = "Boş tahmin olmaz, yaz bir şey!";
    message.style.color = "#f39c12"; // turuncu
    return;
  }

  if (guess === selectedWord) {
    score++;
    message.textContent = `Tebrikler! Doğru bildin: ${selectedWord}`;
    message.style.color = "#2ecc71"; // yeşil
    scoreDisplay.textContent = `Skor: ${score}`;

    // Yeni kelime seç
    selectedWord = words[Math.floor(Math.random() * words.length)];
  } else {
    message.textContent = "Yanlış tahmin, tekrar dene!";
    message.style.color = "#e74c3c"; // kırmızı
  }
  guessInput.value = "";
  guessInput.focus();
});
