class StudentService {
    
    static getAllStudents(studentsArray){
        return studentsArray
    }

    static getEmailWithCertification(studentsArray){
        const filterCertificaton = studentsArray.filter((item) => {
            return item.haveCertification === true
        })
        const certifiedEmails = filterCertificaton.map((item) => {
            return item.email
        }) 
        return certifiedEmails
    }

    static getStudentsTopCredits(studentsArray){
        const highCreditStudents = studentsArray.filter((item)=> {
            return item.credits > 500
        })
        return highCreditStudents
    }

}

module.exports = StudentService