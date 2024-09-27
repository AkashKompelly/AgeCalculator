var CalculateBtn = document.getElementById("btn");
var dateInput = document.getElementById("dob");
dateInput.max = new Date().toISOString().split("T")[0];
var years = document.getElementById("years");
var months = document.getElementById("months");
var days = document.getElementById("days");

function calculateAge() {
  let inputDate = document.getElementById("dob").value;

  var DateOfBirth = new Date(inputDate);
  let y1 = DateOfBirth.getFullYear();
  let m1 = DateOfBirth.getMonth() + 1;
  let d1 = DateOfBirth.getDate();

  let toToday = new Date();

  let y2 = toToday.getFullYear();
  let m2 = toToday.getMonth() + 1;
  let d2 = toToday.getDate();

  let y3, m3, d3;

  //   years diff
  y3 = y2 - y1;

  //   months diff
  if (m1 <= m2) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  // days diff
  if (d1 <= d2) {
    d3 = d2 = d1;
  } else {
    m3--;
    d3 = new Date(y1, m1, 0).getDate() + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  // upating in html
  if (y3 > 10) {
    years.innerHTML = `${y3}`;
  } else {
    years.innerHTML = `0${y3}`;
  }
  if (m3 > 10) {
    months.innerHTML = `${m3}`;
  } else {
    months.innerHTML = `0${m3}`;
  }
  if (d3 > 10) {
    days.innerHTML = `${d3}`;
  } else {
    days.innerHTML = `0${d3}`;
  }
}
