const btnHitungLuas = document.getElementById("hitung-luas");
const btnResetLuas = document.getElementById("reset-luas");
const btnHitungKeliling = document.getElementById("hitung-keliling");
const btnResetKeliling = document.getElementById("reset-keliling");
let inputLuas = document.getElementById("sisi-luas");
let outputLuas = document.querySelector(".output_luas");
let inputKeliling = document.getElementById("sisi-keliling");
let outputKeliling = document.querySelector(".output_keliling");

btnHitungLuas.addEventListener("click", (e) => {
  e.preventDefault();

  let luasValue = inputLuas.value;
  let resLuas;

  resLuas = luasValue * luasValue;

  if (luasValue) {
    outputLuas.innerHTML = `
  <li>L = S X S</li>
  <li>L = ${luasValue} X ${luasValue}</li>
  <li>L = ${resLuas}</li>
  `;
  }
});

btnResetLuas.addEventListener("click", (e) => {
  e.preventDefault();

  inputLuas.value = " ";

  outputLuas.innerHTML = "";
});

btnHitungKeliling.addEventListener("click", (e) => {
  e.preventDefault();

  let kelilingValue = inputKeliling.value;
  let resKeliling;

  resKeliling = 4 * kelilingValue;

  // membuat logika jika terdapat input maka ditampilkan
  if (kelilingValue) {
    outputKeliling.innerHTML = `
    <li>L = 4 X S</li>
    <li>L = 4 X ${kelilingValue}</li>
    <li>L = ${resKeliling}</li>
    `;
  }
});

btnResetKeliling.addEventListener("click", (e) => {
  e.preventDefault();

  inputKeliling.value = " ";

  outputKeliling.innerHTML = "";
});
