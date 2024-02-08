let myDiv = document.querySelector("#myForm");

let form = document.createElement("form");

let employeeIdIF = createInput("text", "empId", "Employee ID: ");
let employeeNameIF = createInput("text", "empName", "Employee Name: ");
let employeeSalaryIF = createInput("text", "empSalary", "Employee Salary: ");

let submit = document.createElement("button");
submit.type = "button";
submit.textContent = "Submit";

function createInput(type, id, label) {
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

let table = document.createElement("table");
table.border = '1';

const onSubmit = () => {
    let empId = document.querySelector("#empId").value;
    let empSalary = document.querySelector("#empSalary").value;
    let empName = document.querySelector("#empName").value

    let row = table.insertRow(-1);
    
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    let col3 = row.insertCell(2);

    col1.innerText = empId;
    col2.innerText = empName;
    col3.innerText = empSalary;

    document.querySelector("#empId").value = "";
    document.querySelector("#empName").value = "";
    document.querySelector("#empSalary").value = "";
}
submit.addEventListener('click', onSubmit);
submit.after(table);