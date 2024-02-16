const faxSummary = [
  {
    payerName: "Maria da Silva",
    numberTax: "987654321",
    dateIssue: "2024-02-05",
    billingDate: null,
    paymentDate: null,
    taxValue: 150.0,
    invoiceDoc: "NF987654",
    docBankSlip: "BB012345",
    taxStatus: "Issued",
  },
  {
    payerName: "Juliana Lima",
    numberTax: "456789123",
    dateIssue: "2023-09-20",
    billingDate: "2024-01-05",
    paymentDate: null,
    taxValue: 180.0,
    invoiceDoc: "NF456789",
    docBankSlip: "BB678901",
    taxStatus: "Delayed",
  },
  {
    payerName: "Lucas Silva",
    numberTax: "135792468",
    dateIssue: "2024-07-10",
    billingDate: "2024-07-25",
    paymentDate: null,
    taxValue: 150.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Delayed",
  },
  {
    payerName: "Carla Santos",
    numberTax: "246813579",
    dateIssue: "2024-01-15",
    billingDate: "2024-01-30",
    paymentDate: "2024-02-10",
    taxValue: 150.0,
    invoiceDoc: "NF246813",
    docBankSlip: "BB345678",
    taxStatus: "Delayed",
  },
  {
    payerName: "Fernanda Oliveira",
    numberTax: "456789123",
    dateIssue: "2024-01-30",
    billingDate: "2024-02-14",
    paymentDate: null,
    taxValue: 180.0,
    invoiceDoc: "NF456789",
    docBankSlip: "BB678901",
    taxStatus: "Charged",
  },
  {
    payerName: "Luiz Souza",
    numberTax: "135792468",
    dateIssue: "2024-02-05",
    billingDate: "2024-02-20",
    paymentDate: "2024-04-25",
    taxValue: 300.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Paid",
  },
  {
    payerName: "Pedro Santos",
    numberTax: "246813579",
    dateIssue: "2024-04-05",
    billingDate: "2024-04-20",
    paymentDate: null,
    taxValue: 250.0,
    invoiceDoc: "NF246813",
    docBankSlip: "BB345678",
    taxStatus: "Delayed",
  },
  {
    payerName: "Ana Oliveira",
    numberTax: "135792468",
    dateIssue: "2024-02-01",
    billingDate: "2024-02-15",
    paymentDate: "2024-07-20",
    taxValue: 120.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Paid",
  },
  {
    payerName: "Carlos Souza",
    numberTax: "456789123",
    dateIssue: "2024-01-25",
    billingDate: "2024-02-15",
    paymentDate: null,
    taxValue: 200.0,
    invoiceDoc: "NF456789",
    docBankSlip: "BB678901",
    taxStatus: "Charged",
  },
  {
    payerName: "Luiza Souza",
    numberTax: "135792468",
    dateIssue: "2024-02-05",
    billingDate: "2024-02-20",
    paymentDate: "2024-01-25",
    taxValue: 290.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Paid",
  },
  {
    payerName: "Pedro Henrique Silva",
    numberTax: "246813579",
    dateIssue: "2024-01-20",
    billingDate: "2024-02-05",
    paymentDate: "2024-02-25",
    taxValue: 180.0,
    invoiceDoc: "NF246813",
    docBankSlip: "BB345678",
    taxStatus: "Paid",
  },
  {
    payerName: "Breno Alvarenga",
    numberTax: "135489490",
    dateIssue: "2024-02-01",
    billingDate: "2024-02-15",
    paymentDate: "2024-09-20",
    taxValue: 250.0,
    invoiceDoc: "NF134703",
    docBankSlip: "BB234900",
    taxStatus: "Paid",
  },
  {
    payerName: "Ricardo Oliveira",
    numberTax: "123456789",
    dateIssue: "2024-01-10",
    billingDate: "2024-01-25",
    paymentDate: null,
    taxValue: 200.0,
    invoiceDoc: "NF123456",
    docBankSlip: "BB987654",
    taxStatus: "Delayed",
  },
  {
    payerName: "Amanda Costa",
    numberTax: "987654321",
    dateIssue: "2024-03-15",
    billingDate: "2024-04-30",
    paymentDate: null,
    taxValue: 300.0,
    invoiceDoc: "NF987654",
    docBankSlip: "BB012345",
    taxStatus: "Delayed",
  },
  {
    payerName: "Beatriz Oliveira",
    numberTax: "135792490",
    dateIssue: "2024-02-01",
    billingDate: "2024-02-15",
    paymentDate: "2024-06-20",
    taxValue: 500.0,
    invoiceDoc: "NF134793",
    docBankSlip: "BB234590",
    taxStatus: "Paid",
  },
  {
    payerName: "Mara Ribeiro",
    numberTax: "135792468",
    dateIssue: "2024-02-05",
    billingDate: "2024-02-20",
    paymentDate: "2024-05-25",
    taxValue: 230.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Paid",
  },
  {
    payerName: "Luisa Meira",
    numberTax: "135792468",
    dateIssue: "2024-02-05",
    billingDate: "2024-02-20",
    paymentDate: "2024-03-25",
    taxValue: 170.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Paid",
  },
  {
    payerName: "Ricardo Souza",
    numberTax: "135792468",
    dateIssue: "2024-02-05",
    billingDate: "2024-02-20",
    paymentDate: "2024-02-25",
    taxValue: 420.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Paid",
  },
  {
    payerName: "Pietra Souza",
    numberTax: "135792468",
    dateIssue: "2024-02-05",
    billingDate: "2024-02-20",
    paymentDate: "2024-11-25",
    taxValue: 220.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Paid",
  },
  {
    payerName: "Larissa Vieira",
    numberTax: "135792468",
    dateIssue: "2024-02-05",
    billingDate: "2024-02-20",
    paymentDate: "2024-10-25",
    taxValue: 300.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Paid",
  },
  {
    payerName: "Isadora Viegas",
    numberTax: "135792468",
    dateIssue: "2024-02-05",
    billingDate: "2024-02-20",
    paymentDate: "2024-08-25",
    taxValue: 140.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Paid",
  },
  {
    payerName: "Armando Sampaio",
    numberTax: "135792468",
    dateIssue: "2024-02-05",
    billingDate: null,
    paymentDate: null,
    taxValue: 30.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Issued",
  },
  {
    payerName: "Lui Oliveira",
    numberTax: "135792468",
    dateIssue: "2024-02-05",
    billingDate: "2024-02-20",
    paymentDate: "2024-12-25",
    taxValue: 30.0,
    invoiceDoc: "NF135792",
    docBankSlip: "BB234567",
    taxStatus: "Paid",
  },
];

const navbarContent = [
  {
    title: "Dashboard",
    icon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-easel-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M8.473.337a.5.5 0 0 0-.946 0L6.954 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.85l-1.323 3.837a.5.5 0 1 0 .946.326L4.908 11H7.5v2.5a.5.5 0 0 0 1 0V11h2.592l1.435 4.163a.5.5 0 0 0 .946-.326L12.15 11H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.046z"
    />
  </svg>`,
  },
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
