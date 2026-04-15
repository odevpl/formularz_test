let wynik = 0;
let inputA = document.querySelector("#liczbaA");
let inputB = document.querySelector("#liczbaB");
let przyciskDodaj = document.querySelector("button.dodaj");
let wynikElement = document.querySelector(".wynik");

let dodaj = function () {
  let liczbaA = inputA.value;
  let liczbaB = inputB.value;

  wynik = Number(liczbaA) + Number(liczbaB);
  console.log(wynik);
  console.log("test");
  console.log(liczbaA, liczbaB);

  wynikElement.innerHTML = wynik;
};

przyciskDodaj.addEventListener("click", dodaj);
