// main.js

// Import function dari kalkulator.js
import { hitungMatematika } from "./kalkulator.js";

// Memanggil function minimal 4 kali menggunakan operator yang berbeda
// Menggunakan angka 24 dan 6 (berbeda dengan contoh materi)
let hasilTambah = hitungMatematika(24, 6, "+");
let hasilKurang = hitungMatematika(24, 6, "-");
let hasilKali = hitungMatematika(24, 6, "*");
let hasilBagi = hitungMatematika(24, 6, "/");

// Menampilkan output ke console
console.log("=== Hasil Kalkulator ===");
console.log("24 + 6 =", hasilTambah);
console.log("24 - 6 =", hasilKurang);
console.log("24 * 6 =", hasilKali);
console.log("24 / 6 =", hasilBagi);