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
  `Connected to the employees database!`);

// const app = express();
// const PORT = process.env.PORT || 3001;

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
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'View All Employees By Department': {
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Add Employee': {
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Add Role': {
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Add Department': {
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Remove Employee': {
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Remove Role': {
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Remove Department': {
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Update Employee Role': {
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'Update Employee Manager': {
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        case 'View Total Utilized Budget By Department': {
          db.query('SELECT * FROM department', (err, result) => {
            console.table(result);
            init();
          });
          break;
        }
        default: return process.exit()

      }
    });
};

init();