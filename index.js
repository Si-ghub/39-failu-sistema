const _data = require('./lib/data');

_data.read('users', 'petras', (err, data) => {
    if (err || !data) {
        console.log('Nepavyko perskaityti failo...');
        return false;
    }

    const obj = JSON.parse(data);
    console.log(obj);
})


const pazymiai = [10, 2, 8, 4, 6];
_data.create('marks', 'aau', pazymiai, (err) => {
    if (err) {
        console.log(err);
        return false;
    }

    console.log('Failas sekmingai sukurtas!');

    _data.read('marks', 'aau', (err, data) => {
        if (err || !data) {
            console.log('Nepavyko perskaityti Kazio failo...');
            return false;
        }

        const obj = JSON.parse(data);
        console.log(obj);
    })
});
