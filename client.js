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

    // clear user inputs in DOM
        // $('#lastNameInput').val('');
        // $('#idInput').val('');
        // $('#titleInput').val('');
        // $('#annualSalaryInput').val('');
    
}

function appendEmployeesToDOM(){
   // console.log('appendEmployeesToDOM call!');

   // clear the dom old employee info
   $('#displayEmployeeInfo').empty();

   // add each employee 
   for (let eachEmployee of employeesList){
       $('tbody').append(`
       <tr>
        <td>${eachEmployee.firstName}</td>
        <td>${eachEmployee.lastName}</td>
        <td>${eachEmployee.id}</td>
        <td>${eachEmployee.title}</td>
        <td>${eachEmployee.annualSalary}</td>
        <td><button class="deleteBtn">Delete</button></td>
       <tr>
       `);

       monthlyTotal += eachEmployee.annualSalary / 12;
       // displays Monthly Total on DOM
       $('#employeeMonthlyTotal').html(`$${monthlyTotal.toFixed(2)}`);
        
       //console.log(typeof monthlyTotal);
   //console.log(`employees monthly salary total:$ ${monthlyTotal}`);
  }

  if (monthlyTotal > 20000){
      $('#employeeMonthlyTotal').addClass('red');
  }
 // clear user inputs in DOM
    
    $('input').val('');
    
}

function deleteEmployee(){
    //console.log('click in deleteEmployee!');
    $(this).closest('tr').toggle('#displayEmployeeInfo');
}
