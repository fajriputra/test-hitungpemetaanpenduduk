const result = {
  Lansia: 0,
  Produktif: 0,
  Remaja: 0,
  Balita: 0,
  Perempuan: 0,
  Pria: 0,
};

function hitungPemetaanPenduduk(datas) {
  datas.forEach((data) => {
    // 6 Digit kedua tanggal lahir (HHBBTT)
    let tanggal = data.slice(6, 8);
    const bulan = data.slice(8, 10);
    let tahun = data.slice(10, 12);
    const tahunIni = `${new Date().getFullYear()}`;
    if (parseInt(tahun) <= parseInt(tahunIni.slice(2, 4))) {
      tahun = `20${tahun}`;
    } else {
      tahun = `19${tahun}`;
    }
    // cek jenis kelamin
    if (tanggal > 40) {
      result.Perempuan += 1;
      tanggal -= 40;
    } else {
      result.Pria += 1;
    }
    // hitung umur
    const today = new Date();
    const birthday = new Date(`${tahun}-${bulan}-${tanggal}`);
    let year = 0;
    if (today.getMonth() < birthday.getMonth()) {
      year = 1;
    } else if (
      today.getMonth() == birthday.getMonth() &&
      today.getDate() < birthday.getDate()
    ) {
      year = 1;
    }
    const umur = today.getFullYear() - birthday.getFullYear() - year;
    // cek umur
    if (umur >= 65) {
      result.Lansia += 1;
    } else if (umur >= 18 && umur < 65) {
      result.Produktif += 1;
    } else if (umur > 5 && umur < 18) {
      result.Remaja += 1;
    } else if (umur < 5) {
      result.Balita += 1;
    }
  });
  return result;
}

console.log(
  hitungPemetaanPenduduk([
    "3233075311050003",
    "3233071111030002",
    "3233071111110001",
    "3233071111900001",
    "3233071111450001",
    "3233071111180001",
  ])
);
