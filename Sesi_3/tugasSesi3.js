// Menentukan tinggi segitiga
let tinggi = 5;

// Loop statement untuk baris
for (let i = 1; i <= tinggi; i++) {
  let pola = "";
  
  // Loop statement untuk mencetak bintang di setiap baris
  for (let j = 1; j <= i; j++) {
    pola += "* ";
  }
  
  // Menampilkan hasil per baris
  console.log(pola);
}