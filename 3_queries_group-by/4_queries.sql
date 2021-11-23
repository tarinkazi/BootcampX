SELECT cohorts.name as cohort, count(assignment_id) AS total_submissions
FROM cohorts JOIN students
ON students.cohort_id = cohorts.id
JOIN assignment_submissions
ON assignment_submissions.student_id = students.id
GROUP BY cohort
ORDER BY COUNT(assignment_id) DESC;