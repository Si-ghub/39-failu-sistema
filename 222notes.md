```js
// Failu sistemos CRUDS

const fs = require('fs');
const path = require('path'); // galeti padaryti esamos direktorijos ir reletyvaus kelio apjungima. Skirtingom operacinem sisitemom skiriasi folderiai

const lib = {}; // reikia butinai kad galetu veikti funkcija

//pirmas parametras kur randasi data.js. cia visada dirbame su failais. absoliuti kelio nuoroda iki folderio kuriame bus talpinami fisi failai
lib.baseDir = path.join(__dirname, '../data/'); // kurioje vietoje dirbsime su duomenu failais

console.log(__dirname);

//pilno kelio sukonstravimas - nuo kietojo disko pav iki failo su kuriuo norime dirbti
function fullPath(dir, file) {
  return `${lib.baseDir}${dir}/${file}.json`;
}

//sukurti funkcija kuri skaito failo turini "callback" - iskviesti funkcija ir perduos info
lib.read = (dir, file, callback) => {
  fs.readFile(fullPath(dir, file), 'utf-8', (err, data) => {});
};

const petras = fullPath('users', 'petras');
```

module.exports = lib;
