const kelime = "_elmek";
const dogruHarf = "k";

document.getElementById("guess-button").addEventListener("click", () => {
  const tahmin = document.getElementById("guess-input").value.toLowerCase();
  const sonuc = document.getElementById("result-text");

  if (tahmin === dogruHarf) {
    sonuc.textContent = "Tebrikler! Doğru tahmin!";
    sonuc.style.color = "lightgreen";
    new Audio("correct.mp3").play();
  } else {
    sonuc.textContent = "Üzgünüm, yanlış harf.";
    sonuc.style.color = "red";
    new Audio("wrong.mp3").play();
  }

  document.getElementById("guess-input").value = "";
});
