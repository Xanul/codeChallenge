const fs = require('fs');

class Reader {
    static readDataFile(path) {
        const rawdata = fs.readFileSync(path, 'utf-8');
        return JSON.parse(rawdata)
    }
}

module.exports = Reader