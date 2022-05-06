const StudentService = require("../../lib/services/StudentService");
const Reader = require("../../lib/utils/reader");


const allStudentsFile = Reader.readDataFile('./test/data/studentsTest.json');


describe('Testing StudentService.js', () => {
    
    test('Testing getAllStudents method', () => {
        const allStudents = StudentService.getAllStudents(allStudentsFile);
        expect(allStudents.length).toBe(51);
        expect(allStudents[0]).toBeDefined()
    })

    test('Testing getEmailWithCertification method', () => {        
        const certifiedStudentsEmails = StudentService.getEmailWithCertification(allStudentsFile);
        expect(certifiedStudentsEmails.length).toBe(29);
        
        certifiedStudentsEmails.forEach((student) => {
            expect(student).toContain('@')
            expect(student).toMatch(/.xyz/)
        })
    })

    test('Testing getStudentsTopCredits method', () => {        
        const topScoreStudents = StudentService.getStudentsTopCredits(allStudentsFile);
        topScoreStudents.forEach((student)=> {
            expect(student).toBeDefined()
            expect(student.credits).toBeGreaterThan(500);
        })
    })
})