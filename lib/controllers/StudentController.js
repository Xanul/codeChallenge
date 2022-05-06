const StudentService = require("../services/StudentService");
const Reader = require("../utils/reader");

const allStudentsFile = Reader.readDataFile('../data/students.json')

class StudentController {

    static getAllStudentsCtrl() {
        return StudentService.getAllStudents(allStudentsFile)
    }

    static getEmailWithCertificationCtrl(){
        return StudentService.getEmailWithCertification(allStudentsFile)
    }
    
    static getStudentsTopCreditsCtrl(){
        return StudentService.getStudentsTopCredits(allStudentsFile)
    }

}

const test = StudentController.getStudentsTopCreditsCtrl();

console.log(test)