let selectedRow = null;
function onFormSubmit() {
  var formData = readFormData();

  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  //To reset the form with empty  space
  resetForm();
}

function readFormData() {
  const formData = {};

  formData["firstname"] = document.getElementById("firstname").value;
  formData["lastname"] = document.getElementById("lastname").value;
  formData["address"] = document.getElementById("address").value;
  formData["pincode"] = document.getElementById("pincode").value;
  formData["gender"] = document.getElementById("gender").value;
  formData["food"] = document.getElementById("food").value;
  formData["state"] = document.getElementById("state").value;
  formData["country"] = document.getElementById("country").value;
  return formData;
  //console.log(formData);
}

function insertNewRecord(data) {
  let table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];

  //insert row
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.address;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.pincode;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.gender;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.food;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.state;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.country;
  cell8 = newRow.insertCell(8);
  cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                   <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("food").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
  selectedRow = null;
}
//using this we are bringing the data in form if user click on edit button
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("address").value = selectedRow.cells[2].innerHTML;
  document.getElementById("pincode").value = selectedRow.cells[3].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[4].innerHTML;
  document.getElementById("food").value = selectedRow.cells[5].innerHTML;
  document.getElementById("state").value = selectedRow.cells[6].innerHTML;
  document.getElementById("country").value = selectedRow.cells[7].innerHTML;
}

//Updating data after edit populate your data in form

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.firstname;
  selectedRow.cells[1].innerHTML = formData.lastname;
  selectedRow.cells[2].innerHTML = formData.address;
  selectedRow.cells[3].innerHTML = formData.pincode;
  selectedRow.cells[4].innerHTML = formData.gender;
  selectedRow.cells[5].innerHTML = formData.food;
  selectedRow.cells[6].innerHTML = formData.state;
  selectedRow.cells[7].innerHTML = formData.country;
}

function onDelete(td) {
  if (confirm("Do you want to Delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
