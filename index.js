const Reader = require("./lib/utils/reader");

const fileData = Reader.readDataFile('./lib/data/students.json')
console.log(fileData[0])