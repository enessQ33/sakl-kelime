function yeniOyun() {
  secilenKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
  harfler = secilenKelime.split('').map(harf => Math.random() > 0.5 ? '_' : harf);
  guncelleGosterge();
  document.getElementById('cevap').innerText = '';
  document.getElementById('tahmin').value = '';
}

function harfKontrol() {
  const tahmin = document.getElementById('tahmin').value.toLowerCase();
  let bulundu = false;

  secilenKelime.split('').forEach((harf, i) => {
    if (harf === tahmin && harfler[i] === '_') {
      harfler[i] = harf;
      bulundu = true;
    }
  });

  if (bulundu) {
    oynatSes('dogru');
    if (!harfler.includes('_')) {
      document.getElementById('cevap').innerText = 'Tebrikler! Kelimeyi bildin.';
      oynatSes('kazandin');
    }
  } else {
    oynatSes('yanlis');
  }

  guncelleGosterge();
  document.getElementById('tahmin').value = '';
}

function oynatSes(tip) {
  let ses = new Audio();
  if (tip === 'dogru') ses.src = 'dogru.mp3';
  else if (tip === 'yanlis') ses.src = 'yanlis.mp3';
  else if (tip === 'kazandin') ses.src = 'kazandin.mp3';
  ses.play();
}

window.onload = yeniOyun;
