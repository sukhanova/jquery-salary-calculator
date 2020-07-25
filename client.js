$(document).ready(readyNow);

let employeesList = [];
let monthlyTotal = 0;

function readyNow(){
    console.log('jquery is running');

    //set up click listener
    $('#submitBtn').on('click', addEmployee);
    $('#displayEmployeeInfo').on('click', '.deleteBtn', deleteEmployee);
}

function addEmployee(){
    //console.log('click in addEmployee');
    let employee ={
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
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

       monthlyTotal += (eachEmployee.annualSalary/12);
       $('#employeeMonthlyTotal').html(`$${monthlyTotal.toFixed(2)}`);
        
       //console.log(typeof monthlyTotal);
   //console.log(`employees monthly salary total:$ ${monthlyTotal}`);
  }
  
}

function deleteEmployee(){
    //console.log('click in deleteEmployee!');
    $(this).closest('tr').toggle('#displayEmployeeInfo');
}



/*

JavaScript:
- [x] link jQuery
- [x] create variable to hold all employees array
- [x] create variable to hold each employee monthly salary (annual / 12)
- [x] create variable to hold monthly total
- [x] create employee object(firstName, lastName, ID, title, annualSalary)
- [x] push employee to an array (function)

Display on DOM
- [x] add to table (function)
- update total (function)
- [x] delete employee/row (function)
- update total
- if total monthly cost > 20000 - add red background color to the total monthly cost
*/