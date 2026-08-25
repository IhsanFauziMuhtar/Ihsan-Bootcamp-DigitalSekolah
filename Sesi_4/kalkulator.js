// kalkulator.js

// Export function yang menerima 3 parameter
export function hitungMatematika(angka1, angka2, operator) {
  // Menggunakan Switch Case untuk menentukan operasi matematika
  switch (operator) {
    case "+":
      return angka1 + angka2;
    case "-":
      return angka1 - angka2;
    case "*":
      return angka1 * angka2;
    case "/":
      // Validasi pembagian dengan nol
      if (angka2 === 0) {
        return "Error: Tidak bisa membagi dengan nol!";
      }
      return angka1 / angka2;
    default:
      return "Operator tidak valid!";
  }
}