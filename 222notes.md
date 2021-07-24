```js
petras.json (js object notation) - failo tipas, tekstas (ne objektas).
Tinkamai apdorojus teksta gausime objekta. Is teksto issifruoti ir gauti js objekta reikes atvaizduoti terminale
issaugoti - sutekstinti json.stringify

// Failu sistemos CRUDS
// Iskvieciam globalu moduli. Pav = modulio pav. Terminale rasome:  node ./lib/data.js
const fs = require('fs');

// Galeti padaryti esamos direktorijos ir reletyvaus kelio apjungima. Skirtingom operacinem sisitemom skiriasi folderiai
const path = require('path');

// Reikia butinai kad galetu veikti funkcija
const lib = {};

// Pirmas parametras kur randasi data.js. Cia visada dirbame su failais. Apsoliuti kelio nuoroda iki folderio kuriame bus talpinami visi failai
// Kurioje vietoje dirbsime su duomenu failais
lib.baseDir = path.join(__dirname, '../data/');

console.log(__dirname);

// Pilno kelio sukonstravimas - nuo kietojo disko pav iki failo su kuriuo norime dirbti
function fullPath(dir, file) {
  return `${lib.baseDir}${dir}/${file}.json`;
}

// Sukurti funkcija kuri skaito failo turini "callback" - iskviesti funkcija ir perduos info
// Funkcija, kuri skaito failo turini
// utf-8 kokiu formatu skaitysime faila
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

module.exports = lib;
