// Fungsi Kalkulator Menggunakan Switch-Case
function kalkulator(angka1, angka2, operator) {
    switch (operator) {
        case 'penjumlahan':
            return angka1 + angka2;
        case 'pengurangan':
            return angka1 - angka2;
        default:
            return 'Operator tidak valid';
    }
}

// Contoh Penggunaan
const angka1 = 50;
const angka2 = 5;

console.log(`Hasil Penjumlahan: ${kalkulator(angka1, angka2, 'penjumlahan')}`);
console.log(`Hasil Pengurangan: ${kalkulator(angka1, angka2, 'pengurangan')}`);