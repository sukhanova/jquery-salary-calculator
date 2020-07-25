$(document).ready(readyNow);

let employeesList = [];

function readyNow(){
    console.log('jquery is running');

    //set up click listener
    $('#submitBtn').on('click', addEmployee);
}

function addEmployee(){
    //console.log('click in addEmployee');
    let employee ={
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: Number($('#annualSalaryInput').val())
    }
    // add employee to employeeList array:

    employeesList.push(employee);
    console.log(employee);

    // add each employee in employeeList array to the DOM Employees table
    appendEmployeesToDOM();

    //  clear user inputs in DOM
        $('#firstNameInput').val(''),
        $('#lastNameInput').val(''),
        $('#idInput').val(''),
        $('#titleInput').val(''),
        $('#annualSalaryInput').val('')
    
}

function appendEmployeesToDOM(){
   // console.log('appendEmployeesToDOM call!');

   // clear the dom old employee info
   $('#displayEmployeeInfo').empty();

   // add each employee 
   for (let eachEmployee of employeesList){
       $('#displayEmployeeInfo').append(`
       <tr>
        <td>${eachEmployee.firstName}</td>
        <td>${eachEmployee.lastName}</td>
        <td>${eachEmployee.id}</td>
        <td>${eachEmployee.title}</td>
        <td>${eachEmployee.annualSalary}</td>
        <td><button class="deleteBtn">Delete</button></td>
       <tr>
       `);
   }
   
}

/*

JavaScript:
- [x] link jQuery
- [x] create variable to hold all employees array
- create variable to hold each employee monthly salary (annual / 12)
- create variable to hold monthly total
- [x] create employee object(firstName, lastName, ID, title, annualSalary)
- [x] push employee to an array (function)

Display on DOM
- [x] add to table (function)
- update total (function)
- delete employee/row (function)
- update total
- if total monthly cost > 20000 - add red background color to the total monthly cost
*/