const {Pool} = require('pg');

const pool = new Pool({
  user:'vagrant',
  password:'123',
  host: 'localhost',
  database: 'bootcampx'
});
const comm = `SELECT students.id, students.name AS name, cohorts.name as cohort
FROM students JOIN cohorts 
ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`
pool.query(comm)
.then(result =>{ 
  result.rows.forEach(user =>{
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
 
}).catch(err => {
  console.error("query error", err.stack);
})