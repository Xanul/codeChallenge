const StudentService = require("../../lib/services/StudentService");
const Reader = require("../../lib/utils/reader");

describe("Testing StudentService.js", () => {
    
    const studentsArrayTest = Reader.readDataFile("students.json");

    test("Testing getAllStudents method", () => {
        const allStudents = StudentService.getAllStudents(studentsArrayTest);
        expect(allStudents.length).toBe(51);
        expect(allStudents[0]).toBeDefined();
    });

    test("Testing getEmailWithCertification method", () => {        
        const certifiedStudentsEmails = StudentService.getEmailWithCertification(studentsArrayTest);
        expect(certifiedStudentsEmails.length).toBe(29);
        
        certifiedStudentsEmails.forEach((student) => {
            expect(student).toContain("@");
            expect(student).toMatch(/.xyz/);
        });
    });

    test("Testing getStudentsTopCredits method", () => {        
        const topScoreStudents = StudentService.getStudentsTopCredits(studentsArrayTest);
        topScoreStudents.forEach((student)=> {
            expect(student).toBeDefined();
            expect(student.credits).toBeGreaterThan(500);
        });
    });
});