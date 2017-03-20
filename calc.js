/*
szerokość całkowita              długość                             grubość                  gęstość =>                                                 waga rolki / Waga Netto - bez gilzy!

folii po obwodzie  (M)            nawój na rolce (M)            folii (mm)                 => to stała do przeliczeń -  0.92)                              KG

np.

4m                                        50m                                    0,110mm                0,92                                                             20.24KG

wzór: szerokość x długość x grubość x gęstość

wyliczenie:  4 x 50 x 0,110 x 0,92 = 20,24kg
*/

var szerCalkowita;
var dlugosc;
var grubosc;
var zakladki;
const gestosc = 0.92;

function calcPolRekawTasma(a,b,c) {
   var waga = a * b * c * gestosc;
   return waga.toFixed(3);
}

function calcRekaw(a,b,c) {
   var waga = a * b * c * gestosc * 2;
   return waga.toFixed(3);
}

function calcWorkiPlasko(a,b,c) {
   var waga = a * b * c * gestosc * 2;
   return waga.toFixed(3);
}

function calcWorKapZakladki(a,b,c,d) {
   var waga = (a + d) * b * c * gestosc * 2;
   return waga.toFixed(3);
}



szerCalkowita = 4;
dlugosc = 50;
grubosc = 0.110;
zakladki = 0.85

console.log(calcPolRekawTasma(szerCalkowita, dlugosc, grubosc));

szerCalkowita = 0.5;
dlugosc = 150;
grubosc = 0.150;

console.log(calcRekaw(szerCalkowita, dlugosc, grubosc));

szerCalkowita = 0.7;
dlugosc = 1.1;
grubosc = 0.095;

console.log(calcWorkiPlasko(szerCalkowita, dlugosc, grubosc));

szerCalkowita = 1.25;
dlugosc = 2.1;
grubosc = 0.125;

console.log(calcWorKapZakladki(szerCalkowita, dlugosc, grubosc, zakladki));
