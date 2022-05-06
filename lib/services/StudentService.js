
class StudentService {
    
    static getAllStudents(students){
        return students;
    }

    static getEmailWithCertification(students){
        
        const filterCertificaton = students.filter((student) => {
            return student.haveCertification === true;
        });
        const certifiedEmails = filterCertificaton.map((student) => {
            return student.email;
        }); 
        
        return certifiedEmails;
    }

    static getStudentsTopCredits(students){
        const highCreditStudents = students.filter((student)=> {
            return student.credits > 500;
        });
        return highCreditStudents;
    }
}

module.exports = StudentService;