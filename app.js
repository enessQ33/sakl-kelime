const gizliKelime = "ekmek"; // Bu kısmı dinamik yapabiliriz
let denemeSayisi = 0;

function tahminEt() {
  const tahmin = document.getElementById("tahmin").value.toLowerCase();
  const sonuc = document.getElementById("sonuc");
  denemeSayisi++;

  if (tahmin === gizliKelime) {
    sonuc.innerText = `Tebrikler! ${denemeSayisi} denemede doğru bildin.`;
    sonuc.style.color = "green";
    // doğru ses
    new Audio("dogru.mp3").play();
  } else {
    sonuc.innerText = `Yanlış tahmin! Tekrar dene.`;
    sonuc.style.color = "red";
    // yanlış ses
    new Audio("yanlis.mp3").play();
  }
}
