let myDiv = document.querySelector("#myForm");

let form = document.createElement("form");

let employeeIdIF = createInput("text","empId","Employee ID: ");
let employeeNameIF = createInput("text","empName","Employee Name: ");
let employeeSalaryIF = createInput("text","empSalary", "Employee Salary: ");

let submit = document.createElement("button");
submit.type = "button";
submit.textContent = "Submit";

function createInput(type,id,label){
    let sDiv = document.createElement("div");
    var input = document.createElement("input");
    input.type = type;
    input.id = id;
    // input.prepend(lable);
    
    var labelElement = document.createElement("label");
    labelElement.textContent = label;
    labelElement.appendChild(input);
    var br = document.createElement("br");
    sDiv.appendChild(br);
    sDiv.appendChild(labelElement)
    return sDiv;

}

let br = document.createElement("br");

form.appendChild(employeeIdIF);
// employeeIdIF.append(employeeNameIF)
form.appendChild(employeeNameIF);
form.appendChild(employeeSalaryIF);
form.appendChild(br);
form.appendChild(submit);

myDiv.append(form);

const updateEmployee = () => {
    let empId = document.querySelector("#empId").value;
    let empSalary = document.querySelector("#empSalary").value;
    let empName = document.querySelector("#empName").value

    console.log(empId);
    console.log(empName);
    console.log(empSalary);
}
submit.addEventListener('click',updateEmployee);