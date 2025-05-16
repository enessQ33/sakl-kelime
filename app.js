const kelimeler = ["ekmek", "kalem", "bardak", "çorap", "kitap"];
let secilen = kelimeler[Math.floor(Math.random() * kelimeler.length)];
let gorunen = secilen.replace(/[a-zçğıöşü]/gi, "_").split("");

const kutu = document.getElementById("kelimeKutusu");
const mesaj = document.getElementById("mesaj");
const dogruSes = document.getElementById("dogruSes");
const yanlisSes = document.getElementById("yanlisSes");

function guncelleKutular() {
  kutu.innerHTML = "";
  gorunen.forEach(harf => {
    const div = document.createElement("div");
    div.className = "hex";
    div.textContent = harf;
    kutu.appendChild(div);
  });
}

guncelleKutular();

function tahminEt() {
  const harfInput = document.getElementById("tahminInput");
  const harf = harfInput.value.toLowerCase();
  harfInput.value = "";
  
  let bulundu = false;
  for (let i = 0; i < secilen.length; i++) {
    if (secilen[i] === harf) {
      gorunen[i] = harf;
      bulundu = true;
    }
  }

  guncelleKutular();

  if (bulundu) {
    dogruSes.play();
    mesaj.textContent = "Doğru tahmin!";
  } else {
    yanlisSes.play();
    mesaj.textContent = "Yanlış tahmin!";
  }

  if (!gorunen.includes("_")) {
    mesaj.textContent = "Tebrikler! Kelime: " + secilen;
  }
}
