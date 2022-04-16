const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const seacrh = (keyword, angka, data) => {
keyword.toLocalLowerCase();
  result = name.filter((element) => {
    return element.includes(keyword);
  });
  result.length = angka;

  result = result.filter((item) => item !== undefined);
  result.length ?  data(result) : console.log("data tidak ada");
 
};

seacrh("ae", 20, (data2) => {
    console.log(data2);
})