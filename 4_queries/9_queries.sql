SELECT AVG(total_duration)  FROM(

SELECT sum(completed_at - started_at)
as total_duration, cohorts.name as cohort
FROM cohorts
JOIN students
ON cohorts.id = cohort_id
JOIN assistance_requests
ON students.id = student_id
GROUP BY cohorts.name
ORDER BY total_duration) AS total_duration;