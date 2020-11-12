const fs = require('fs');
const locales = require('../src/config/locales.json');
const formatter = require('../src/js/utils/formatter');
const promises = [];
const index = [];

locales.forEach((locale) => {
    promises.push(new Promise((res, rej) => {
        fs.readFile(`./site/data/game/${locale}/character_table.json`, 'utf8', function (err, in_data) {
            if (err) rej(err);

            in_data = JSON.parse(in_data);
            Object.keys(in_data).filter((key) => !['TRAP', 'TOKEN'].includes(in_data[key].profession)).forEach((key) => index.push({
                name: in_data[key].name,
                searchable_name: formatter.slugifyStrict(in_data[key].name),
                profession: in_data[key].profession,
                key: key,
                url: `/${formatter.slugify(in_data[key].name)}`,
            }));
            res();
        });
    }));
});

Promise.all(promises).then(() => {
    fs.writeFile(`./src/build/file_index.json`, JSON.stringify(index), function(err) {
        if(err) return console.log(err);
        console.log(`file_index.json built`);
    });
})