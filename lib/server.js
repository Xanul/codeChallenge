const express = require('express');
const StudentController = require('./controllers/StudentController');


const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.json({message: 'Welcome to the Students Database'})
})

app.get('/students', (req, res) => {
    const studentsList = StudentController.getAllStudentsCtrl();
    res.json(studentsList)
})

app.get('/students/emails', (req, res) => {
    const studentsEmails = StudentController.getEmailWithCertificationCtrl();
    res.json(studentsEmails)
})

app.get('/students/top', (req, res)=> {
    const topStudents = StudentController.getStudentsTopCreditsCtrl();
    res.json(topStudents)
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})