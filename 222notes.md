```js
Failai ir direktorijos:

- failai:
    - perskaityti turini
    - istrinti faila
    - sukurti faila su turiniu
    - atnaujinti turini

- folders/katalogai:
    - sukurti
    - nustaityti jame esancius failu/folder'iu pavadinimus
    - istrinti

Visa json esanti info yra teksto formatu (ne objektas)

data.js failas - cia susikuriame funkcijas ir nurodome kelia is kur paiimti faila, ji perskaityti
petras.json (js object notation) - failo tipas, tekstas (ne objektas). Talpiausias is visu failu tipu.
Tinkamai apdorojus teksta gausime objekta. Is teksto issifruoti ir gauti js objekta reikes atvaizduoti terminale
issaugoti - sutekstinti json.stringify

// Failu sistemos CRUDS
// Iskvieciam globalu moduli. Pav = modulio pav. Terminale rasome:  node ./lib/data.js
// unlink = istrinti
// write file = irasyti faila
const fs = require('fs');

// Galeti padaryti esamos direktorijos ir reletyvaus kelio apjungima. Skirtingom operacinem sisitemom skiriasi folderiai
// join funkcija - sukonstruoja absoliutu kelia: nuo pradzios iki pabaigos. Suzinoti kur musu failas serveryje.
const path = require('path');

// Reikia butinai kad galetu veikti funkcija. Objektas- g.b bet koks pavadinimas. Eksportuosime is saves objekta
const lib = {};

// Pirmas parametras kur randasi data.js. Cia visada dirbame su failais. Apsoliuti kelio nuoroda iki folderio kuriame bus talpinami visi failai
// Kurioje vietoje dirbsime su duomenu failais
// base Direktore :)
lib.baseDir = path.join(__dirname, '../data/'); // apsoliutu sujungia su reletyviu keliu (kur esu).

console.log(__dirname); //direktorijos pavadinimas is kurios vietos paleidziam faila.

// Pilno kelio sukonstravimas - nuo kietojo disko pav iki failo su kuriuo norime dirbti
function fullPath(dir, file) {
  return `${lib.baseDir}${dir}/${file}.json`;
}

// Sukurti faila
sukurtiFaila('users', 'petras') //i koki folderi ir i koki faila kreiptis (fullPath apjungs)
sukurtiFaila('cars', 'audi')

// Sukurti funkcija kuri skaito failo turini "callback" - iskviesti funkcija ir perduos info
// Funkcija, kuri skaito failo turini
// utf-8 kokiu formatu skaitysime faila
// callback - kai baigs skaityti info, duosime komanda iskviesk funkcija kuriai perduos informacija
// return- pirmiausiai grazina kokia klaida buvo + duomenys
// jei klaidos nebuvo, grazinam false + duomenis
lib.read = (dir, file, callback) => {
  fs.readFile(fullPath(dir, file), 'utf-8', (err, data) => {
    if (err || !data) {
      return callback(err, data);
    }

    return callback(false, data);
  });
};

const petras = fullPath('users', 'petras');
```

module.exports = lib; //eksportuojame lib
