const StudentService = require("../../lib/services/StudentService");

describe('Testing StudentService.js', () => {
    test('Testing getAllStudents method', () => {

        const allStudents = StudentService.getAllStudents();
        expect(allStudents.length).toBe(51);
        expect(allStudents[0]).toBeDefined()

    })

    test('Testing getEmailWithCertification method', () => {

        const certifiedStudentsEmails = StudentService.getEmailWithCertification();
        expect(certifiedStudentsEmails.length).toBe(29);
        
        certifiedStudentsEmails.forEach((student) => {
            expect(student).toContain('@')
            expect(student).toMatch(/.xyz/)
        })

    })

    test('Testing getStudentsTopCredits method', () => {

        const topScoreStudents = StudentService.getStudentsTopCredits();
        topScoreStudents.forEach((student)=> {
            expect(student).toBeDefined()
            expect(student.credits).toBeGreaterThan(500);
        })
    })
})