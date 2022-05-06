const Reader = require("../utils/reader");

const allStudents = Reader.readDataFile('./lib/data/students.json')


class StudentService {
    
    static getAllStudents(){
        return allStudents
    }

    static getEmailWithCertification(){
        const filterCertificaton = allStudents.filter((item) => {
            return item.haveCertification === true
        })
        const certifiedEmails = filterCertificaton.map((item) => {
            return item.email
        }) 
        return certifiedEmails
    }

    static getStudentsTopCredits(){
        const highCreditStudents = allStudents.filter((item)=> {
            return item.credits > 500
        })
        return highCreditStudents
    }

}

module.exports = StudentService