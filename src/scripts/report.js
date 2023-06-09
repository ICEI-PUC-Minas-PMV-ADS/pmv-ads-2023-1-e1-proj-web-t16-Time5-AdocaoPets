"use strict";

document.querySelector(".report-btn").addEventListener("click", function () {
  let display = document.querySelector(".report-toggle").style.display;

  if (display === "") {
    document.querySelector(".report-toggle").style.display = "block";
  } else document.querySelector(".report-toggle").style.display = "";
});

document.querySelector(".report-send").addEventListener("click", function () {
  let report = document.getElementById("report-desc").value;

  localStorage.setItem("reports", report);
  alert(
    "A seguinte denúncia foi enviada para análise : \n" +
      localStorage.getItem("reports")
  );

  document.querySelector(".report-toggle").style.display = "";
});
