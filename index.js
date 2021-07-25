const _data = require('./lib/data');

_data.read('users', 'petras', (err, data) => {
    if (err || !data) {
        console.log('Nepavyko perskaityti failo...');
        return false;
    }

    const obj = JSON.parse(data); // JSON.parse()paverciam objektu // JSON.stringify() paverciam tekstu
    // console.log(obj);
    // console.log(obj.name);
    // console.log(obj.age);
    // console.log(obj.car);
})

// funkcija callback priima err, data
_data.read('users', 'petras', (err, data) => {
    if (err || !data) {
        console.log('Nepavyko perskaityti failo...');
        return false;
    }

    console.log(`Stai mano duomenys is failo: petras`);
    console.log(data);
})

_data.read('users', 'maryte', (err, data) => {
    if (err || !data) {
        console.log('Nepavyko perskaityti failo...');
        return false;
    }
    console.log(`Stai mano duomenys is failo: maryte`);
    console.log(data);
})

_data.read('users', 'jonas', (err, data) => {
    if (err || !data) {
        console.log('Nepavyko perskaityti failo...');
        return false;
    }
    console.log(`Stai mano duomenys is failo: maryte`);
    console.log(data);
})
_data.read('users', 'niekas', (err, data) => {
    if (err || !data) {
        console.log('Nepavyko perskaityti failo...');
        console.log(err);
        return false;
    }
    console.log(data);
})

_data.read('users2', 'niekas', (err, data) => {
    if (err || !data) {
        console.log('Nepavyko perskaityti failo...');
        console.log(err);
        return false;
    }
    console.log(data);
})
