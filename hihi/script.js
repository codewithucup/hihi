function tampilkanGombalan() {
  var namaAyang = document.getElementById('nama').value;
  var gombalan = generateGombalan(namaAyang);
  document.getElementById('gombalan').innerText = gombalan;
}

function generateGombalan(nama) {
  var gombalanList = [
    `Hai ${nama}, kamu tahu gak? Ada hal yang ingin aku sampaikan sekian lama aku telah memandam rasa, "bolehkah mas yusuf pinjam 100 ribu?".`,
    `Hai ${nama}, bersyukur banget ketemu orang hebat kek kamu.`,
    `Alo ${nama} Apakabar kamu? sehat sehat terus ya jangan lupa makan es teh, minum ayam geprek ok? awkwkk.`,
    `Setiap kali mas melihat ${nama}, jadi ingin melihat masa depan.`,
    `"Dek manis ${nama}, mas ini seperti kamera. Setiap kali bersamamu, mas selalu ingin 'capture' momen indah bersamamu :)."`,
    `"Cie si manis ${nama}, ada kegiatan ipm fair semangat yah, cemungut kiyowo :)"`,
    `Hai ${nama} , hati hati di jalan ya, jalan jalan dihati`,
    `Hai ${nama} , mo nanya nih, "Mengapa jalan dikota  besar selalu macet? Karena aku selalu terjebak dalam senyumanmu"`,
    // Tambahkan gombalan lainnya sesuai keinginan.
  ];

  // Pilih gombalan secara acak dari daftar gombalan.
  var randomIndex = Math.floor(Math.random() * gombalanList.length);
  return gombalanList[randomIndex];
}
