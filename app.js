const kelimeler = [
  "EKMEK",
  "KARPUZ",
  "ARABA",
  "ÇİÇEK",
  "BİSİKLET",
  "KİTAP",
  "KAPİ",
  "YILDIZ"
];

// Şu anki kelime ve gizli hali
let secilenKelime = "";
let gizliKelime = [];

// Ses elementleri
const dogruSes = document.getElementById("dogru-ses");
const yanlisSes = document.getElementById("yanlis-ses");

const wordBox = document.getElementById("word-box");
const sonuc = document.getElementById("sonuc");
const input = document.getElementById("harf-input");
const btn = document.getElementById("tahmin-btn");

function kelimeHazirla() {
  // Rastgele kelime seç
  secilenKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
  // Her harfi _ yap, aralarda boşluk bırak
  gizliKelime = secilenKelime.split("").map(() => "_");
  // İlk harfi gösterelim, hadi biraz ipucu olsun
  gizliKelime[0] = secilenKelime[0];
  gizliKelime[gizliKelime.length - 1] = secilenKelime[secilenKelime.length - 1];
  guncelleGosterim();
  sonuc.innerText = "";
}

function guncelleGosterim() {
  wordBox.innerText = gizliKelime.join(" ");
}

function tahminEt() {
  const tahmin = input.value.toUpperCase();
  if (!tahmin || tahmin.length !== 1 || !/[A-ZÇĞİÖŞÜ]/.test(tahmin)) {
    sonuc.innerText = "Lütfen geçerli bir harf gir.";
    return;
  }
  let dogruTahmin = false;
  for (let i = 1; i < secilenKelime.length - 1; i++) {
    if (secilenKelime[i] === tahmin && gizliKelime[i] === "_") {
      gizliKelime[i] = tahmin;
      dogruTahmin = true;
    }
  }
  if (dogruTahmin) {
    dogruSes.play();
    sonuc.innerText
