function populateFaculty() {
  var department = document.getElementById("department");
  var faculty = document.getElementById("faculty");
  var dept = department.value;

  // Clear faculty dropdown
  faculty.innerHTML = "";

  // Set faculty options based on selected department
  if (dept === "scis") {
    var facultyOptions = ["Dr. Atul Negi", "Dr. N.Naveen", "Dr. Vineet Nair"];
  } else if (dept === "sls") {
    var facultyOptions = ["Faculty 2A", "Faculty 2B", "Faculty 2C"];
  } else if (dept === "maths") {
    var facultyOptions = ["Faculty 3A", "Faculty 3B", "Faculty 3C"];
  }

  // Add faculty options to dropdown
  for (var i = 0; i < facultyOptions.length; i++) {
    var option = document.createElement("option");
    option.text = facultyOptions[i];
    option.value = facultyOptions[i];
    faculty.add(option);
  }
}
function submitForm() {
  var department = document.getElementById("department").value;
  var faculty = document.getElementById("faculty").value;
  var message = document.getElementById("message");
  var content = "";

  if (department === "" || faculty === "") {
    message.innerHTML = "Please select both department and faculty";
  } else {
    if (department === "scis") {
      if (faculty === "Dr. Atul Negi") {
        content = '<table style="border: 1px solid black;">' +
          '<tr>' +
          '<td style="valign: top; padding: 6px;">' +
          
          '</td>' +
          '</tr>' +
          '</table>';
      } else if (faculty === "Dr. N.Naveen") {
        content = '<table style="border: 1px solid black;">' +
          '<tr>' +
          '<td style="valign: top; padding: 6px;">' +
          '<?php include \'url_for_faculty2.php\'; ?>' +
          '</td>' +
          '</tr>' +
          '</table>';
      } else if (faculty === "Dr. Vineet Nair") {
        content = '<table style="border: 1px solid black;">' +
          '<tr>' +
          '<td style="valign: top; padding: 6px;">' +
          '<?php include \'url_for_faculty3.php\'; ?>' +
          '</td>' +
          '</tr>' +
          '</table>';
      }
    } else if (department === "sls") {
      // Add conditions for faculty in the "sls" department
    } else if (department === "maths") {
      // Add conditions for faculty in the "maths" department
    }

    message.innerHTML = "You have selected " + faculty + " from " + department + " department" + content;
  }
}
