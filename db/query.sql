SELECT
  employee.manager_id AS manager, 
  role.department_id AS department
FROM employee
JOIN role ON employee.manager_id = role_id;