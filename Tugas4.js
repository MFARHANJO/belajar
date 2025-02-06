// Input Angka
const angka1 = 50;
const angka2 = 5;
let hasilPenjumlahan;
let hasilPengurangan;
const operator = 'pengurangan'; // Ubah sesuai kebutuhan

// Fungsi Kalkulator menggunakan switch-case
switch (operator) {
    case 'penjumlahan':
        hasilPenjumlahan = angka1 + angka2;
        console.log(`Hasil Penjumlahan: ${hasilPenjumlahan}`);
        break;
    case 'pengurangan':
        hasilPengurangan = angka1 - angka2;
        console.log(`Hasil Pengurangan: ${hasilPengurangan}`);
        break;
    default:
        console.log('Operator tidak valid');
        break;
}
