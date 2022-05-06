const StudentController = require("../../lib/controllers/StudentController");




describe("Testing StudentController.js", () => {

    test("Testing getAllStudents method", () => {

        const allStudents = StudentController.getAllStudentsCtrl();
        expect(allStudents.length).toBe(51);
        expect(allStudents[0]).toBeDefined();

    });

    test("Testing getEmailWithCertification method", () => {

        const certifiedStudentsEmails = StudentController.getEmailWithCertificationCtrl();
        expect(certifiedStudentsEmails.length).toBe(29);
        
        certifiedStudentsEmails.forEach((student) => {
            expect(student).toContain("@");
            expect(student).toMatch(/.xyz/);
        });

    });

    test("Testing getStudentsTopCredits", () => {
        const topScoreStudents = StudentController.getStudentsTopCreditsCtrl();
        topScoreStudents.forEach((student)=> {
            expect(student).toBeDefined();
            expect(student.credits).toBeGreaterThan(500);
        });
    });

});