const kelimeler = ["ekmek", "kalem", "bardak", "çorap", "kitap"];
let secilen = kelimeler[Math.floor(Math.random() * kelimeler.length)];
let gorunen = secilen.replace(/[a-zçğıöşü]/gi, "_").split("");

const dogruSes = new Audio("dogru.mp3");
const yanlisSes = new Audio("yanlis.mp3");

document.getElementById("kelimeKutusu").innerText = gorunen.join(" ");

function tahminEt() {
  const harf = document.getElementById("tahminInput").value.toLowerCase();
  let bulundu = false;

  for (let i = 0; i < secilen.length; i++) {
    if (secilen[i] === harf) {
      gorunen[i] = harf;
      bulundu = true;
    }
  }

  document.getElementById("kelimeKutusu").innerText = gorunen.join(" ");
  document.getElementById("tahminInput").value = "";

  if (bulundu) {
    dogruSes.play();
    document.getElementById("mesaj").innerText = "Doğru tahmin!";
  } else {
    yanlisSes.play();
    document.getElementById("mesaj").innerText = "Yanlış tahmin!";
  }

  if (!gorunen.includes("_")) {
    document.getElementById("mesaj").innerText = "Tebrikler! Kelime: " + secilen;
  }
}
