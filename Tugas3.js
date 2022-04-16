const filterByLimits = (arr, awal, akhir) => {
  let res = [];

  if (awal >= akhir) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  } else if (arr.length < 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  } else {
      res = arr.filter((element) => {
          return element >= awal && element <= akhir;
    });
    res.sort();
  }
  // if (!res.length) {
  //   return "data tidak ada";
  // }
  return !res.length ? "data tidak ada" : res;
  // return res;
};
console.log(filterByLimits([18, 23, 22, 12, 56, 34,  53], 5, 30));
