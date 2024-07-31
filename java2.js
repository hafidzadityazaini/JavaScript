const umur = 6;

if (umur > 5) {
  console.log("Pembeli harus membayar tiket penuh");
} else if (umur >= 2 && umur <= 5) {
  console.log("Pembeli harus membayar tiket setengah harga");
} else if (umur < 2) {
  console.log("Pembeli tidak boleh masuk");
}



const usia = 28;

if (usia >= 17) {
  
  console.log("Anda sudah memenuhi usia untuk mendapatkan sim");
} else {
  console.log("Anda belum memenuhi usia untuk mendapatkan sim");
}



const bilangan = 0;

if (bilangan > 0) {
  console.log("Positif");
} else if (bilangan < 0) {
  console.log("Negatif");
} else {
  console.log("Netral");
}




const x = -6;
const y = 5;

if (x > 0 && y > 0) {
  console.log("Kanan atas");
} else if (x < 0 && y < 0) {
  console.log("Kiri bawah");
} else if (x > 0 && y < 0) {
  console.log("Kanan bawah");
} else if (x < 0 && y > 0) {
  console.log("Kiri atas");
}

//soal 4 Selesai



const totalBelanja = 100;

let diskon = 0;

if (totalBelanja >= 200) {
  diskon = 0.15; 
} else if (totalBelanja >= 100 && totalBelanja <= 199) {
  diskon = 0.1; 
}

const totalBayar = totalBelanja - totalBelanja * diskon;

console.log(`Total yang wajib dibayar adalah Rp ${totalBayar}.`);



const age = 20;

if (age >= 18) {
  console.log("Registrasi Sukses");
} else {
  console.log("Registrasi Tidak Berhasil");
}

console.log(age);