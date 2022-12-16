//saya menggunakan fungsi filter() untuk mencari data di dalam array yang memiliki nilai di antara nilaiAwal dan nilaiAkhir.
    // kemudian saya menggunakan fungsi sort() untuk mengurutkan hasil pencarian tersebut.

    function searchAndSortData(nilaiAwal, nilaiAkhir, dataArray) {
  // Validasi input
  if (nilaiAwal >= nilaiAkhir || dataArray.length <= 5) {
    return "Input tidak valid";
  }

  // Mencari data di dalam array yang memiliki nilai di antara nilaiAwal dan nilaiAkhir
  const filteredData = dataArray.filter(data => data >= nilaiAwal && data <= nilaiAkhir);

  // Menampilkan hasil pencarian ke layar/console
  console.log(filteredData);

  // Mengurutkan hasil pencarian
  const sortedData = filteredData.sort((a, b) => a - b);

  // Menampilkan hasil pengurutan ke layar/console
  console.log(sortedData);
}
searchAndSortData(5, 10, [1, 2, 5, 7, 8, 9, 10]);
// Output: [5, 7, 8, 9, 10]
//         [5, 7, 8, 9, 10]

// Di sini, fungsi akan mencari data di dalam array yang memiliki nilai di antara 5 dan 10,
// kemudian menampilkan hasil pencarian dan hasil pengurutan ke layar/console.