const fs = require('fs');
const path = require('path');
const Folder = 'Folder'

fs.readdir(Folder, (err, files) => {
    files.forEach(file => {
        console.log(`${file}`);
    });
});

fs.watch(Folder, (event, file) => {
    const date = new Date();
    if (event === 'rename') {
        fs.stat(`${Folder}/${file}`, (err, stats) => {
            if (err) {
                console.log(`${file} has been deleted ${date.toISOString()}`);
            } else if (stats.isFile()) {
                console.log(`${file} has been created ${date.toISOString()}`);
            }
        });
    } else if (event === 'change') {
        console.log(`${file} has been changed ${date.toISOString()}`);
    }
});
