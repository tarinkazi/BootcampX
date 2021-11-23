SELECT students.name as student, AVG(assignment_submissions.duration) as avg_assignment_duration, AVG(assignments.duration) as avg_estimated_duration
FROM students JOIN assignment_submissions
ON students.id = student_id
JOIN assignments ON assignment_id = assignments.id
WHERE students.end_date IS  NULL
GROUP BY students.name
HAVING avg(assignment_submissions.duration) < avg(assignments.duration)
ORDER BY AVG(assignment_submissions.duration) asec;
