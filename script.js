// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = [];
const collectEmployees = function () {
  let continueAdding = true;

  while (continueAdding) {
    let firstName = window.prompt("What is the employee's first name?");
    let lastName = window.prompt("What is the employee's last name?");
    let salary = window.prompt("What is the employee's salary?");

    //Convert salary to a number and check if it's Not A Number (NaN)
    salary = isNaN(salary) ? 0 : Number(salary);

    //create new employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    }
    //Add employee to the array
    employeesArray.push(employee);

    //ask user if they want to continue adding employees
    continueAdding = window.confirm("Would you like to add another employee?");
    if (!continueAdding) {

    }
  }
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const numberOfEmployees = employeesArray.length;
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);  // Reduce method sums up all salaries
  const averageSalary = totalSalary / numberOfEmployees; // Divide by number of employees
  const averageSalaryWithTwoDecimals = averageSalary.toFixed(2);
  
console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalaryWithTwoDecimals}`)// Print out average salary

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`"Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!"`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
