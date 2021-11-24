SELECT teachers.name, students.name,assignments.name, (completed_at - started_at) AS duration
FROM teachers JOIN
assistance_requests ON
teachers.id = teacher_id
JOIN students ON
students.id = student_id
JOIN assignments
ON assignments.id = assignment_id
ORDER BY duration
;