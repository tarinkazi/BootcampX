const {Pool} = require('pg');

const pool = new Pool({
  user:'vagrant',
  password:'123',
  host: 'localhost',
  database: 'bootcampx'
});
const comm = `SELECT  DISTINCT cohorts.name as cohort,teachers.name as teacher
FROM teachers
JOIN assistance_requests
ON teachers.id = teacher_id
JOIN students
ON students.id = student_id
JOIN cohorts
ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
ORDER BY teacher
 LIMIT ${process.argv[3] || 5};
`
pool.query(comm)
.then(result =>{ 
  result.rows.forEach(user =>{
    console.log(`${user.cohort}:  ${user.teacher} and was in the cohort`);
  })
 
}).catch(err => {
  console.error("query error", err.stack);
})