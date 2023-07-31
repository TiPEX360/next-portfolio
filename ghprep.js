var fs = require('fs');
var path = require('path');
function find(dir) {
    fs.readdir(dir, function (_, files) {
        files = files.filter(function (file) { return file != 'index.html' || file != 'index.txt'; });
        files.forEach(function (file) {
            if (file.endsWith('.html')) {
                if (!fs.existsSync(path.join(dir, file.slice(0, -5))))
                    fs.mkdirSync(path.join(dir, file.slice(0, -5)));
                fs.copyFile(path.join(dir, file), path.join(dir, file.slice(0, -5), 'index.html'), function () { });
                if (fs.existsSync(path.join(dir, file.slice(0, -5).concat('.txt')))) {
                    fs.copyFile(path.join(dir, file.slice(0, -5).concat('.txt')), path.join(dir, file.slice(0, -5), 'index.txt'), function () { });
                }
                return;
            }
            if (fs.lstatSync(path.join(dir, file)).isDirectory()) {
                find(path.join(dir, file));
            }
        });
    });
}
find('./out');
