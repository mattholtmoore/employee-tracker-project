INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES  
("Ross", "Geller", null, 1),
("Rachel", "Green", 1, 2),
("Chandler", "Bing", null, 3),
("Joey", "Tribbiani", 2, 4),
("Monica", "Geller", null, 5),
("Phoebe", "Buffay", 3, 6),
("Richard", "Burke", null, 7),
("Janice", "Hosenstein", 4, 8);

INSERT INTO role (title, salary, department_id)
VALUES  
("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Account Manager", 160000, 3),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

-- Sales 1, Engineering 2, Finance 3, Legal 4

INSERT INTO department (name)
VALUES  
("Engineering"),
("Finance"),
("Legal"),
("Sales");