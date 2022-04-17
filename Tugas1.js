let str = " HAI APA KABAR GAES"
console.log(str.toLowerCase());
console.log("\n");

//Metode ini menghapus (pops) elemen terakhir dari array.pop()
const kegiatan = ["bola", "tidur", "ngoding", "swimming"];
kegiatan.pop();
console.log(kegiatan);
console.log("\n");


//Metode ini menambahkan item baru ke akhir array.push()
const hobby = ["bola", "tidur", "ngoding", "swimming"]
hobby.push("sepak bola", "takraw")
console.log(hobby);
console.log("\n");

//Metode mengembalikan satu nilai: hasil akumulasi fungsi.reduce()
const numbers = [90, 43, 12]
function result(total,number) {
    return total-number
}
console.log(numbers.reduce(result));
console.log("\n");

// Map
numbers.map((item) => {
    console.log(item + 2);
    
});
console.log("\n");


// math max dan min
console.log(Math.max(1, 6, 3, 9, 10, 4, 12, 11, 15));
console.log(Math.min(6, 3, 9, 10, 4, 12, 11, 7));
console.log("\n");

// Date
const date = new Date();
console.log(date);
const date2 = new Date(2022, 10, 10, 20);
console.log(date2);
console.log("\n");

// shift
let name = ["fred","verane","sanco","shaw"]
console.log(`hapus nama : ${name.shift()}`);
console.log('====================================');
name.unshift("telles", "do");
console.log(`tambah nama: ${name}`);
console.log("\n");



// slice => mengambil nilai array dengan target index awal hingga akhir
let nama = ["doni", "budi", "modric", "dwi", "adi","fat"]
console.log(`panggil : ${nama.slice(1, 3)}`);
console.log("\n");

// sort => urutkan
let angka = [9, 6, 4, 8, 2, 3]
angka.sort((a,b) => {
    return a - b
})
console.log(angka);
console.log("\n");

// random
let num = Math.random()
console.log(num);