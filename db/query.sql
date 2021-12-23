USE employees;

SELECT 
CONCAT(e.first_name, " ", e.last_name) AS employee_name,
CONCAT(m.first_name, " ", m.last_name) AS manager_name 
r.title AS role
FROM employee m
RIGHT JOIN employee e
ON m.id = e.manager_id
INNER JOIN role r
ON r.id = e.role_id;

-- DELETE FROM role WHERE id = 2;

SELECT * FROM employee;
