// API: Retrieve Students Above Threshold
// ---------------------------------------
// Task:
// Implement an API to fetch students whose total marks exceed a given threshold.
//
// Endpoint:
// POST /students/above-threshold
//
// Request Body:
// {
//   "threshold": <number>
// }
//
// Response:
// Success: List of students with their names and total marks who meet the criteria.
// Example:
// {
//   "count": 2,
//   "students": [
//     { "name": "Alice Johnson", "total": 433 },
//     { "name": "Bob Smith", "total": 410 }
//   ]
// }
//
// No Matches:
// {
//   "count": 0,
//   "students": []
// }
//
// Purpose:
// Help teachers retrieve and analyze student performance efficiently.


const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use (express.json())

const students =[
  {student_id: '1',name: 'John',marks:{math:90,science:70,english:100,history:50,geography:100},total:410}
  ,
  {student_id: '2',name: 'Alice',marks:{math:80,science:90,english:85,history:80,geography:95},total:433}
  ,
  {student_id: '3',name: 'Bob',marks:{math:70,science:80,english:90,history:70,geography:84},total:399}
  ,
  {student_id: '4',name: 'Charlie',marks:{math:95,science:95,english:95,history:95,geography:95},total:490}
  ,
  {student_id: '5',name: 'David',marks:{math:85,science:85,english:95,history:85,geography:90},total:420}
  ,
  {student_id: '6',name: 'Eve',marks:{math:75,science:85,english:90,history:75,geography:50},total:385}
 ,

]

app.post('/students/above-threshold', (req, res) => {
  const {threshold}= req.body
  
  if (typeof threshold!== 'number' || threshold < 0 ){
    return res.status(400).json({ error: 'Invalid threshold value' });
    }

    const filteredStudents = students.filter(student => student.total > threshold)

    const response = {
      count: filteredStudents.length,
      students: filteredStudents.map(student => ({name: student.name,total: student.total}))
    }
    res.json(response);

})

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


