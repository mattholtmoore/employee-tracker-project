const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees'
  },
  `Connected to the employees database!`
);

const init = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'action',
      choices: [
        'View All Employees',
        'View All Roles',
        'View All Departments',
        'View All Employees By Manager',
        'View All Employees By Department',
        'Add Employee',
        'Add Role',
        'Add Department',
        'Remove Employee',
        'Remove Role',
        'Remove Department',
        'Update Employee Role',
        'Update Employee Manager',
        'View Total Utilized Budget By Department',
        'Exit'
      ]
    }
  ])
    .then(answer => {
      switch (answer.action) {
        case 'View All Employees': {
          db.query('SELECT * FROM employee', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'View All Roles': {
          db.query('SELECT * FROM role', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'View All Departments': {
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'View All Employees By Manager': {
          db.query('SELECT manager FROM employee', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'View All Employees By Department': {
          db.query('SELECT department FROM employee', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Add Employee': {
         addEmployee();
          break;
        }
        case 'Add Role': {
          addRole();
          break;
        }
        case 'Add Department': {
          addDepartment();
          break;
        }
        case 'Remove Employee': {
          db.query('DELETE', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Remove Role': {
          db.query('DELETE', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Remove Department': {
          db.query('DELETE', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Update Employee Role': {
          db.query('UPDATE', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Update Employee Manager': {
          db.query('UPDATE', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'View Total Utilized Budget By Department': {
          db.query('SUM', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        default: return process.exit()
      }
    });
  };
  
  const addDepartment = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the name of the department?',
          name: 'name',
        },
       
      ])
      .then((answers) => {
        const { name } = answers;
  
        db.query(`INSERT INTO department (name) VALUES ("${name}");`)
  
        init();
      })
  };

const addRole = () => {
  inquirer
    .prompt([
      {
        message: 'What is the title of the role?',
        name: 'title',
      },
      {
        message: 'What is the salary of the role?',
        name: 'salary',
      },
      {
        message: 'Which department does the role belong to?',
        name: 'department_id',
      },
    ])
    .then((answers) => {
      const { title, salary, department_id } = answers;

      db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${title}", ${salary}, ${department_id});`)

      init();
    })
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the employee\'s first name?',
        name: 'first_name',
      },
      {
        type: 'input',
        message: 'What is the employee\'s last name?',
        name: 'last_name',
      },
      {
        type: 'input',
        message: 'What is the employee\'s role?',
        name: 'role_id',
      },
      {
        type: 'input',
        message: 'Who is the employee\'s manager?',
        name: 'manager_id',
      },
    ])
    .then((answers) => {
      const { first_name, last_name, role_id, manager_id } = answers;

      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${first_name}", "${last_name}", ${role_id}, ${manager_id} );`)

      init();
    })
};



init();