const StudentService = require("./lib/services/StudentService");
const Reader = require("./lib/utils/reader");

const testArray = Reader.readDataFile('./test/data/studentsTest.json');

const test2 = StudentService.getAllStudents(testArray);

console.log(test2.length)



