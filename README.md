# **Employee Tracker**

***

## Table of Contents
- [Description](#description)  
- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)  
- [Visuals](#visuals)
- [Questions](#questions)

***

## Description
**Employee Tracker** is a command-line application that accepts user input to manage a company's employee database, using Node.js, Inquirer, and MySQL.

When the application is started, the user is presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role. When they choose to view all departments then they are pareresented with a formatted table showing department names and department ids. When they choose to view all roles then they are presented with the job title, role id, the department that role belongs to, and the salary for that role. When they choose to view all employees then they are presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to. When they choose to add a department then they are prompted to enter the name of the department and that department is added to the database. When they choose to add a role then they are prompted to enter the name, salary, and department for the role and that role is added to the database. When they choose to add an employee then they are prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database. When they choose to update an employee role then they are prompted to select an employee to update and their new role and this information is updated in the database. 

***

## Installation
Begin by running `mysql -u root` to open mysql within the terminal. 

Then run `source db/schema.sql` while in the root directory. 

Then seed the database by running `source db/seeds.sql` & `exit;`. 

To install, run this command: `npm install`.

***

## Usage
In the terminal, run the `node server.js` command to be guided through a series of prompts to achieve desired results.

***

## Links
[Link to GitHub](https://github.com/mattholtmoore/employee-tracker-project)  

[Link to Walkthrough Capture](https://watch.screencastify.com/v/y27YIQH7H2sbGWk2S9D9)

***

## Visuals
![employee-tracker-project](assets/employee-tracker.gif "employee-tracker-project")

***

## Questions
If you have any questions at all, please email me at: mattholtmoore@gmail.com

You can also find me on GitHub at: https://www.github.com/mattholtmoore


 