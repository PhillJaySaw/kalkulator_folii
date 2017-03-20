;01 ,)(esrap;)01 ,(esrap;01 ,)(tnIesrapvar szerCalkowita;
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

document.getElementById('calcButton').addEventListener("click", function() {
   szerokosc = parseInt(document.getElementById('szerokosc').value, 10);
   dlugosc = parseInt(document.getElementById('dlugosc').value, 10);
   grubosc = parseInt(document.getElementById('grubosc').value, 10);
   /*zakladki = document.getElementById('zakladki').value;*/

   console.log(calcPolRekawTasma(szerCalkowita, dlugosc, grubosc));

});

/*********************TEST*********************
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
*/
