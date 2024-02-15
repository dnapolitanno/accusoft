const notas = [
  {
    nomePagador: "Maria da Silva",
    identificacaoNota: "987654321",
    dataEmissao: "2024-02-05",
    dataCobranca: null,
    dataPagamento: null,
    valorNota: 150.0,
    documentoNotaFiscal: "NF987654",
    documentoBoletoBancario: "BB012345",
    statusNota: "Emitida",
  },
  {
    nomePagador: "Juliana Lima",
    identificacaoNota: "456789123",
    dataEmissao: "2023-09-20",
    dataCobranca: "2024-01-05",
    dataPagamento: null,
    valorNota: 180.0,
    documentoNotaFiscal: "NF456789",
    documentoBoletoBancario: "BB678901",
    statusNota: "Pagamento em atraso",
  },
  {
    nomePagador: "Lucas Silva",
    identificacaoNota: "135792468",
    dataEmissao: "2024-07-10",
    dataCobranca: "2024-07-25",
    dataPagamento: null,
    valorNota: 150.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Pagamento em atraso",
  },
  {
    nomePagador: "Carla Santos",
    identificacaoNota: "246813579",
    dataEmissao: "2024-01-15",
    dataCobranca: "2024-01-30",
    dataPagamento: "2024-02-10",
    valorNota: 150.0,
    documentoNotaFiscal: "NF246813",
    documentoBoletoBancario: "BB345678",
    statusNota: "Pagamento em atraso",
  },
  {
    nomePagador: "Fernanda Oliveira",
    identificacaoNota: "456789123",
    dataEmissao: "2024-01-30",
    dataCobranca: "2024-02-14",
    dataPagamento: null,
    valorNota: 180.0,
    documentoNotaFiscal: "NF456789",
    documentoBoletoBancario: "BB678901",
    statusNota: "Cobrança realizada",
  },
  {
    nomePagador: "Luiz Souza",
    identificacaoNota: "135792468",
    dataEmissao: "2024-02-05",
    dataCobranca: "2024-02-20",
    dataPagamento: "2024-04-25",
    valorNota: 300.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Pagamento realizado",
  },
  {
    nomePagador: "Pedro Santos",
    identificacaoNota: "246813579",
    dataEmissao: "2024-04-05",
    dataCobranca: "2024-04-20",
    dataPagamento: null,
    valorNota: 250.0,
    documentoNotaFiscal: "NF246813",
    documentoBoletoBancario: "BB345678",
    statusNota: "Pagamento em atraso",
  },
  {
    nomePagador: "Ana Oliveira",
    identificacaoNota: "135792468",
    dataEmissao: "2024-02-01",
    dataCobranca: "2024-02-15",
    dataPagamento: "2024-07-20",
    valorNota: 120.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Pagamento realizado",
  },
  {
    nomePagador: "Carlos Souza",
    identificacaoNota: "456789123",
    dataEmissao: "2024-01-25",
    dataCobranca: "2024-02-15",
    dataPagamento: null,
    valorNota: 200.0,
    documentoNotaFiscal: "NF456789",
    documentoBoletoBancario: "BB678901",
    statusNota: "Cobrança realizada",
  },
  {
    nomePagador: "Luiza Souza",
    identificacaoNota: "135792468",
    dataEmissao: "2024-02-05",
    dataCobranca: "2024-02-20",
    dataPagamento: "2024-01-25",
    valorNota: 290.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Pagamento realizado",
  },
  {
    nomePagador: "Pedro Santos",
    identificacaoNota: "246813579",
    dataEmissao: "2024-01-20",
    dataCobranca: "2024-02-05",
    dataPagamento: "2024-02-25",
    valorNota: 180.0,
    documentoNotaFiscal: "NF246813",
    documentoBoletoBancario: "BB345678",
    statusNota: "Pagamento em atraso",
  },
  {
    nomePagador: "Beatriz Oliveira",
    identificacaoNota: "135489490",
    dataEmissao: "2024-02-01",
    dataCobranca: "2024-02-15",
    dataPagamento: "2024-09-20",
    valorNota: 250.0,
    documentoNotaFiscal: "NF134703",
    documentoBoletoBancario: "BB234900",
    statusNota: "Pagamento realizado",
  },
  {
    nomePagador: "Ricardo Oliveira",
    identificacaoNota: "123456789",
    dataEmissao: "2024-01-10",
    dataCobranca: "2024-01-25",
    dataPagamento: null,
    valorNota: 200.0,
    documentoNotaFiscal: "NF123456",
    documentoBoletoBancario: "BB987654",
    statusNota: "Pagamento em atraso",
  },
  {
    nomePagador: "Amanda Costa",
    identificacaoNota: "987654321",
    dataEmissao: "2024-03-15",
    dataCobranca: "2024-04-30",
    dataPagamento: null,
    valorNota: 300.0,
    documentoNotaFiscal: "NF987654",
    documentoBoletoBancario: "BB012345",
    statusNota: "Pagamento em atraso",
  },
  {
    nomePagador: "Beatriz Oliveira",
    identificacaoNota: "135792490",
    dataEmissao: "2024-02-01",
    dataCobranca: "2024-02-15",
    dataPagamento: "2024-06-20",
    valorNota: 500.0,
    documentoNotaFiscal: "NF134793",
    documentoBoletoBancario: "BB234590",
    statusNota: "Pagamento realizado",
  },
  {
    nomePagador: "Luiz Souza",
    identificacaoNota: "135792468",
    dataEmissao: "2024-02-05",
    dataCobranca: "2024-02-20",
    dataPagamento: "2024-05-25",
    valorNota: 230.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Pagamento realizado",
  },
  {
    nomePagador: "Luiz Souza",
    identificacaoNota: "135792468",
    dataEmissao: "2024-02-05",
    dataCobranca: "2024-02-20",
    dataPagamento: "2024-03-25",
    valorNota: 170.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Pagamento realizado",
  },
  {
    nomePagador: "Luiz Souza",
    identificacaoNota: "135792468",
    dataEmissao: "2024-02-05",
    dataCobranca: "2024-02-20",
    dataPagamento: "2024-02-25",
    valorNota: 420.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Pagamento realizado",
  },
  {
    nomePagador: "Luiz Souza",
    identificacaoNota: "135792468",
    dataEmissao: "2024-02-05",
    dataCobranca: "2024-02-20",
    dataPagamento: "2024-11-25",
    valorNota: 220.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Pagamento realizado",
  },
  {
    nomePagador: "Luiz Souza",
    identificacaoNota: "135792468",
    dataEmissao: "2024-02-05",
    dataCobranca: "2024-02-20",
    dataPagamento: "2024-10-25",
    valorNota: 300.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Pagamento realizado",
  },
  {
    nomePagador: "Luiz Souza",
    identificacaoNota: "135792468",
    dataEmissao: "2024-02-05",
    dataCobranca: "2024-02-20",
    dataPagamento: "2024-08-25",
    valorNota: 140.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Pagamento realizado",
  },
  {
    nomePagador: "Armando Souza",
    identificacaoNota: "135792468",
    dataEmissao: "2024-02-05",
    dataCobranca: null,
    dataPagamento: null,
    valorNota: 30.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Emitida",
  },
  {
    nomePagador: "Luiz Souza",
    identificacaoNota: "135792468",
    dataEmissao: "2024-02-05",
    dataCobranca: "2024-02-20",
    dataPagamento: "2024-12-25",
    valorNota: 30.0,
    documentoNotaFiscal: "NF135792",
    documentoBoletoBancario: "BB234567",
    statusNota: "Pagamento realizado",
  },
];

const navbarContent = [
  {
    title: "Customers",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
      </svg>`,
  },
  {
    title: "Projects",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
        <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
      </svg>`,
  },
  {
    title: "Orders",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
      </svg>`,
  },
  {
    title: "Inventory",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
      </svg>`,
  },
  {
    title: "Accounts",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>`,
  },
  {
    title: "Tasks",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
      </svg>`,
  },
];

const navbarContainer = $("#navbarButtonsContainer");

navbarContent.forEach((item, index) => {
  var title = item.title;
  const button = $("<button></button>")
    .text(item.title)
    .addClass(
      `p-2 mb-2 w-100 text-start bg-transparent border-0 text-white color-white ${title}Button`
    )
    .attr("type", "button");
  if (item.icon) {
    const icon = $(item.icon)
      .attr("alt", item.title + " icon")
      .addClass("m-1");

    button.prepend(icon);
  }

  navbarContainer.append(button);

  function adjustHeaderMargin() {
    var offcanvas = $(".offcanvas");
    var header = $("header");
    var main = $("main");
    if (offcanvas.hasClass("show")) {
      header.css("margin-left", "0");
      main.css("margin-left", "0");
    } else {
      header.css("margin-left", "400px").addClass("trsMenu");
      main.css("margin-left", "400px").addClass("trsMenu");
    }
  }

  $(".offcanvas").on(
    "hide.bs.offcanvas show.bs.offcanvas ",
    adjustHeaderMargin
  );
});

const totalEmitidas = notas.reduce((total, nota) => total + nota.valorNota, 0);

const totalSemCobranca = notas.reduce((total, nota) => {
  if (!nota.dataCobranca) {
    return total + nota.valorNota;
  }
  return total;
}, 0);

const dataAtual = new Date();
const totalVencidas = notas.reduce((total, nota) => {
  const dataCobranca = new Date(nota.dataCobranca);
  if (dataCobranca < dataAtual && !nota.dataPagamento) {
    return total + nota.valorNota;
  }
  return total;
}, 0);

const totalAVencer = notas.reduce((total, nota) => {
  const dataCobranca = new Date(nota.dataCobranca);
  if (dataCobranca >= dataAtual && !nota.dataPagamento) {
    return total + nota.valorNota;
  }
  return total;
}, 0);

const totalPagas = notas.reduce((total, nota) => {
  if (nota.dataPagamento) {
    return total + nota.valorNota;
  }
  return total;
}, 0);

let htmlTotalTable = "";

htmlTotalTable += "<tr>";
htmlTotalTable += "<td>Notas Emitidas</td>";
htmlTotalTable += `<td>${totalEmitidas.toFixed(2)}</td>`;
htmlTotalTable += "</tr>";
htmlTotalTable += "<tr>";
htmlTotalTable += "<td>Notas Emitidas sem Cobrança</td>";
htmlTotalTable += `<td>${totalSemCobranca.toFixed(2)}</td>`;
htmlTotalTable += "</tr>";
htmlTotalTable += "<tr>";
htmlTotalTable += "<td>Notas Vencidas (Inadimplência)</td>";
htmlTotalTable += `<td>${totalVencidas.toFixed(2)}</td>`;
htmlTotalTable += "</tr>";
htmlTotalTable += "<tr>";
htmlTotalTable += "<td>Notas a Vencer</td>";
htmlTotalTable += `<td>${totalAVencer.toFixed(2)}</td>`;
htmlTotalTable += "</tr>";
htmlTotalTable += "<tr>";
htmlTotalTable += "<td>Notas Pagas</td>";
htmlTotalTable += `<td>${totalPagas.toFixed(2)}</td>`;
htmlTotalTable += "</tr>";

$("#total-table").html(htmlTotalTable);

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const inadimplenciaPorMes = Array(12).fill(0);
let receitaPorMes = {};

meses.forEach((mes) => {
  receitaPorMes[mes] = 0;
});

notas.forEach((nota) => {
  const dataCobranca = new Date(nota.dataCobranca);
  const mesCobranca = meses[dataCobranca.getMonth()];
  if (nota.statusNota === "Pagamento em atraso") {
    inadimplenciaPorMes[dataCobranca.getMonth()]++;
  }
  if (nota.dataPagamento && nota.statusNota == "Pagamento realizado") {
    const dataPagamento = new Date(nota.dataPagamento);
    const mesPagamento = meses[dataPagamento.getMonth()];

    receitaPorMes[mesPagamento] += nota.valorNota;
  }
});

const inadimplenciaCtx = $("#inadimplenciaChart")[0].getContext("2d");
const inadimplenciaChart = new Chart(inadimplenciaCtx, {
  type: "bar",
  data: {
    labels: meses,
    datasets: [
      {
        label: "Inadimplência por Mês",
        data: inadimplenciaPorMes,
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

const receitaCtx = $("#receitaChart")[0].getContext("2d");
const receitaChart = new Chart(receitaCtx, {
  type: "bar",
  data: {
    labels: meses,
    datasets: [
      {
        label: "Receita Recebida por Mês",
        data: Object.values(receitaPorMes),
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

let html = "";
notas.forEach((nota) => {
  html += "<tr>";
  html += `<td>${nota.nomePagador}</td>`;
  html += `<td>${nota.identificacaoNota}</td>`;
  html += `<td>${nota.dataEmissao}</td>`;
  html += `<td>${nota.dataCobranca || "-"}</td>`;
  html += `<td>${nota.dataPagamento || "-"}</td>`;
  html += `<td>${nota.valorNota.toFixed(2)}</td>`;
  html += `<td>${nota.documentoNotaFiscal}</td>`;
  html += `<td>${nota.documentoBoletoBancario}</td>`;
  html += `<td>${nota.statusNota}</td>`;
  html += "</tr>";
});
$("#table-notas").html(html);

$("#dtBasicExample").DataTable();
$(".dataTables_length").addClass("bs-select");
