let getCol = document.getElementById("rw-one");
let sectBottom = getCol.getBoundingClientRect().bottom;
let change = document.getElementById("colorchange");
let chng = document.getElementById("chng");
document.addEventListener("DOMContentLoaded", function() {
  let sy = sectBottom + window.scrollY;
  document.addEventListener("scroll", function() {
    if (window.scrollY > sy) {
      change.classList.remove("light-blue");
      change.classList.add("red");
      chng.innerHTML = "ОБ'ЄКТИ У JS";
    } else if (window.scrollY <= sy) {
      change.classList.remove("red");
      change.classList.add("light-blue");
      chng.innerHTML = "ОБ'ЄКТ";
    }
  });
});

$(document).ready(function() {
  $(".collapsible").collapsible();
  $(".materialboxed").materialbox();
});

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales"],
    ["2004", 1000],
    ["2005", 1170],
    ["2006", 660],
    ["2007", 1030]
  ]);

  var options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" }
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
