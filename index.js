const employee = {
    name: "Andrews",
    streetAddress:  "someadress"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newEmployee = {};
    newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    var newEmployee = {};
    newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
