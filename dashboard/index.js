const issuedTotal = faxSummary.reduce((total, fax) => total + fax.taxValue, 0);

const totalWithoutCharge = faxSummary.reduce((total, fax) => {
  if (!fax.billingDate) {
    return total + fax.taxValue;
  }
  return total;
}, 0);

const currentDate = new Date();
const totalDue = faxSummary.reduce((total, fax) => {
  const billingDate = new Date(fax.billingDate);
  if (billingDate < currentDate && !fax.paymentDate) {
    return total + fax.taxValue;
  }
  return total;
}, 0);

const totalWillDue = faxSummary.reduce((total, fax) => {
  const billingDate = new Date(fax.billingDate);
  if (billingDate >= currentDate && !fax.paymentDate) {
    return total + fax.taxValue;
  }
  return total;
}, 0);

const totalPaid = faxSummary.reduce((total, fax) => {
  if (fax.paymentDate) {
    return total + fax.taxValue;
  }
  return total;
}, 0);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "Novembrer",
  "December",
];
const defaultPerMonth = Array(12).fill(0);
let revenuePerMonth = {};

months.forEach((mes) => {
  revenuePerMonth[mes] = 0;
});

faxSummary.forEach((fax) => {
  const billingDate = new Date(fax.billingDate);
  if (fax.taxStatus === "Delayed") {
    defaultPerMonth[billingDate.getMonth()]++;
  }
  if (fax.paymentDate && fax.taxStatus == "Paid") {
    const paymentDate = new Date(fax.paymentDate);
    const paymentMonth = months[paymentDate.getMonth()];

    revenuePerMonth[paymentMonth] += fax.taxValue;
  }
});

let MainDashboard = function () {
  let html = "";

  html += '<div id="dashboardContent">';
  html += '  <h4 class="bkgrGradTitle p-2 text-white">Tax Summary</h4>';

  html += '  <table class="table table-borderless table-hover">';
  html += "    <thead>";
  html += "      <tr>";
  html += '        <th scope="col">Type</th>';
  html += '        <th scope="col">Total value</th>';
  html += "      </tr>";
  html += "    </thead>";
  html += '    <tbody id="total-table">';
  html += "<tr>";
  html += "<td>Issued</td>";
  html += `<td>${issuedTotal.toFixed(2)}</td>`;
  html += "</tr>";
  html += "<tr>";
  html += "<td> Issued without charge</td>";
  html += `<td>${totalWithoutCharge.toFixed(2)}</td>`;
  html += "</tr>";
  html += "<tr>";
  html += "<td>Overdue</td>";
  html += `<td>${totalDue.toFixed(2)}</td>`;
  html += "</tr>";
  html += "<tr>";
  html += "<td>Will due</td>";
  html += `<td>${totalWillDue.toFixed(2)}</td>`;
  html += "</tr>";
  html += "<tr>";
  html += "<td>Paid</td>";
  html += `<td>${totalPaid.toFixed(2)}</td>`;
  html += "</tr>";
  $("#total-table").html(html);
  html += "</tbody>";
  html += "  </table>";
  html += '  <div class="row my-3">';
  html += '    <div class="col-6">';
  html += '      <h4 class="bkgrGradTitle p-2 text-white">';
  html += "        Default evolution graph";
  html += "      </h4>";
  html += '      <canvas id="deafultChart"></canvas>';
  html += "    </div>";
  html += '    <div class="col-6">';
  html += '      <h4 class="bkgrGradTitle p-2 text-white">';
  html += "        Revenue evolution graph";
  html += "      </h4>";
  html += '      <canvas id="revenueChart"></canvas>';
  html += "    </div>";
  html += "  </div>";
  html += '  <h4 class="bkgrGradTitle p-2 text-white">Issued</h4>';
  html +=
    '  <table id="issuedTable" class="table table-borderless table-hover">';
  html += "    <thead>";
  html += "      <tr>";
  html += '        <th scope="col">Name</th>';
  html += '        <th scope="col">Number</th>';
  html += '        <th scope="col">Date of issue</th>';
  html += '        <th scope="col">Billing date</th>';
  html += '        <th scope="col">Date of Payment</th>';
  html += '        <th scope="col">Value</th>';
  html += '        <th scope="col">Invoice document</th>';
  html += '        <th scope="col">Doc of bank payment slip</th>';
  html += '        <th scope="col">Status</th>';
  html += "      </tr>";
  html += "    </thead>";
  html += '    <tbody id="faxRable" class="table-group-divider">';
  faxSummary.forEach((fax) => {
    html += "<tr>";
    html += `<td>${fax.payerName}</td>`;
    html += `<td>${fax.numberTax}</td>`;
    html += `<td>${fax.dateIssue}</td>`;
    html += `<td>${fax.billingDate || "-"}</td>`;
    html += `<td>${fax.paymentDate || "-"}</td>`;
    html += `<td>${fax.taxValue.toFixed(2)}</td>`;
    html += `<td>${fax.invoiceDoc}</td>`;
    html += `<td>${fax.docBankSlip}</td>`;
    html += `<td>${fax.taxStatus}</td>`;
    html += "</tr>";
  });
  $("#faxRable").html(html);
  html += "</tbody>";
  html += "  </table>";
  html += "</div>";

  $("#mainContent").html(html);

  $("#issuedTable").DataTable();
  $(".dataTables_length").addClass("bs-select");
};

function initializeCharts() {
  let defaultCtx = $("#deafultChart").get(0).getContext("2d");
  let revenueCtx = $("#revenueChart").get(0).getContext("2d");

  let deafultChart = new Chart(defaultCtx, { type: "bar" });
  let revenueChart = new Chart(revenueCtx, { type: "bar" });

  deafultChart.destroy();
  revenueChart.destroy();

  deafultChart = new Chart(defaultCtx, {
    type: "bar",
    data: {
      labels: months,
      datasets: [
        {
          label: "Default per month",
          data: defaultPerMonth,
          backgroundColor: "rgba(219,48,130,1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  revenueChart = new Chart(revenueCtx, {
    type: "bar",
    data: {
      labels: months,
      datasets: [
        {
          label: "Revenue per month",
          data: Object.values(revenuePerMonth),
          backgroundColor: "rgba(219,48,130,1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
