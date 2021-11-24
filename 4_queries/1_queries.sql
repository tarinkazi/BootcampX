SELECT COUNT(assistance_requests.*) as total_assistance, teachers.name 
FROM teachers
JOIN assistance_requests
  ON teachers.id = assistance_requests.teacher_id
  WHERE name ='Waylon Boehm'
  GROUP BY teachers.name;
 