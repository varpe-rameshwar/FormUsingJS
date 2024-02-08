const employees = [];

function initUI(table) {
let rowCount = table.rows.length;
    setTimeout(() => {
        for (let i = rowCount - 1; i > 0; i--) {
            table.deleteRow(i);
        }
    },1000);
    
    setTimeout(()=> {
        for (let i in employees) {
            let empId = employees[i].empId;
            let empName = employees[i].empName;
            let empSalary = employees[i].empSalary;
            createTable(table, empId, empName, empSalary);
            table.border = '2';
        }
    },2000);
}

let myDiv = document.querySelector("#myForm");

let form = document.createElement("form");
myDiv.append(form);
let employeeIdIF = createInput("number", "empId", "Employee ID: ");
let employeeNameIF = createInput("text", "empName", "Employee Name: ");
let employeeSalaryIF = createInput("number", "empSalary", "Employee Salary: ");

function createInput(type, id, label) {
    let sDiv = document.createElement("div");
    var input = document.createElement("input");
    input.type = type;
    input.id = id;
    var labelElement = document.createElement("label");
    labelElement.textContent = label;
    labelElement.appendChild(input);
    var br = document.createElement("br");
    sDiv.appendChild(br);
    sDiv.appendChild(labelElement);
    return sDiv;
}

let submit = document.createElement("button");
submit.type = "button";
submit.textContent = "Submit";

let br = document.createElement("br");
form.appendChild(employeeIdIF);
form.appendChild(employeeNameIF);
form.appendChild(employeeSalaryIF);
form.appendChild(br);
form.appendChild(submit);

submit.addEventListener('click', onSubmit);

let table = document.createElement("table");
table.border = '1';
let headerRow = table.createTHead().insertRow(0);
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
th1.innerText = "Employee ID";
th2.innerText = "Employee Name";
th3.innerText = "Employee Salary";
headerRow.appendChild(th1);
headerRow.appendChild(th2);
headerRow.appendChild(th3);
submit.after(table);

function onSubmit() {
    let empId = document.querySelector("#empId").value;
    let empSalary = document.querySelector("#empSalary").value;
    let empName = document.querySelector("#empName").value;

    if (empId.length > 0 && empName.length > 0 && empSalary.length > 0) {
        createTable(table, empId, empName, empSalary);

        let employee = {
            empId: empId,
            empName: empName,
            empSalary: empSalary
        };
        employees.push(employee);
        console.log(employees);

        initUI(table);

        document.querySelector("#empId").value = "";
        document.querySelector("#empName").value = "";
        document.querySelector("#empSalary").value = "";
    }
}

function createTable(table, empId, empName, empSalary) {
    let row = table.insertRow(-1);
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    let col3 = row.insertCell(2);

    col1.innerText = empId;
    col2.innerText = empName;
    col3.innerText = empSalary;
}