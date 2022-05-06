const StudentService = require("../services/StudentService");
const Reader = require("../utils/reader");

class StudentController {
    
    static getAllStudentsCtrl() {
        const studentsArray = Reader.readDataFile("students.json");
        return StudentService.getAllStudents(studentsArray);
    }

    static getEmailWithCertificationCtrl(){
        const studentsArray = Reader.readDataFile("students.json");
        return StudentService.getEmailWithCertification(studentsArray);
    }

    static getStudentsTopCreditsCtrl(){
        const studentsArray = Reader.readDataFile("students.json");
        return StudentService.getStudentsTopCredits(studentsArray);
    }

}

module.exports = StudentController;

