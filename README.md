# codeChallenge App
## Project description
In this project we're setting up an express server application that works with a students database in JSON format, the app will have three endpoints, 
each endpoint will bring different informarion, one for all the students in the DB, one for all the emails of students with certifications (certification = true) 
and the last one for all the students who have more that 500 credits (credits > 500).

## Dependencies used
The dependencies used for this app are:
- Jest: @26.0.0
- Eslint: @8.14.0
- Express: @4.18.1

## Structure overview
This is the structure overview of the App
- Students.json
  - This is the file with all the students information
- Reader.js
  - This auxiliary class is for reading the file   
- StudentController.js
  - This is the class that interacts with the server and imports from StudentService to apply the logic
- StudentService.js
  - This class does all the logic to filter and obtain the info needed
- Server.js
  - App server made with express
- API
  - Interface to connect with the users
 
![Screenshot 2022-05-06 123445 (Medium)](https://user-images.githubusercontent.com/73442279/167192969-b913ea9b-dfe0-4498-8a90-f81bc391e85b.png)

## App building steps
1. For this application I followed the following steps
2. Start the project with `npm init` and `git init` to start the local repo
3. Create the basic structure of directories in the project  
![Screenshot 2022-05-06 130334 (Phone)](https://user-images.githubusercontent.com/73442279/167192676-ec563361-9baf-43f6-861e-2a3c3eda3b83.png)
4. Install all the dependencies used
5. Copy the students.json file to the project
6. Write Reader.js script to read and export the students.json file  
![Screenshot 2022-05-06 134724 (Phone)](https://user-images.githubusercontent.com/73442279/167199632-763c3486-e492-4cf8-86a9-b5e4a47cc2a5.png)
7. Write the StudentService.js script to do all the logic  
![Screenshot 2022-05-06 131351 (Small)](https://user-images.githubusercontent.com/73442279/167195159-f6dc5f98-14ea-46d2-a8dd-b97222251fb1.png)
8. Test the StudentService.js script using Jest (forcing a failure to make sure is working)  
![Screenshot 2022-05-06 133640 (Small)](https://user-images.githubusercontent.com/73442279/167198216-c5cc4740-9d20-4e2a-819a-4206f4828163.png)  
![Screenshot 2022-05-05 203441 (Small)](https://user-images.githubusercontent.com/73442279/167198793-4a8ace90-2b9c-4628-8d56-49c8dcd64f0c.png)  
9. Added GitHub actions to run all the test on each push  
![Screenshot 2022-05-06 134306 (Phone)](https://user-images.githubusercontent.com/73442279/167199132-ee4f50e7-9be5-468b-8276-b320a2d61c9f.png)
![Screenshot 2022-05-06 134500 (Small)](https://user-images.githubusercontent.com/73442279/167199835-dfb318c2-afba-4645-b715-4525938926c5.png)
10. Write StudentController.js to import the StudentService class and interact with the server
![Screenshot 2022-05-06 135045 (Phone)](https://user-images.githubusercontent.com/73442279/167200066-de82693e-ceb3-4c83-96e1-3ca7bedc8d73.png)
11. Write the server.js script using express to run the server  
![Screenshot 2022-05-06 135221 (Small)](https://user-images.githubusercontent.com/73442279/167200343-44e275fa-b88d-4445-aad7-a8edb2e78898.png)
12. Applied Eslint to the project to give structure and format
![esLint](https://user-images.githubusercontent.com/73442279/167202133-65b2b5a4-37a6-4716-b1d9-1dc6d169955e.gif)

## Example of app running
![server](https://user-images.githubusercontent.com/73442279/167203340-6acae15d-dcb4-4bbf-835f-cf00ba5e8091.gif)