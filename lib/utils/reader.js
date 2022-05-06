const fs = require('fs');

class Reader {
    static readDataFile(path) {
        
        try {
            const rawdata = fs.readFileSync(path, 'utf-8');
            return JSON.parse(rawdata)
        } catch (err) {
            return `Error reading the file, check file path or file name ${path}`
        }

    }
}

module.exports = Reader

