let page = "Dashboard";

const navbarContainer = $("#navbarButtonsContainer");

navbarContent.forEach((item, index) => {
  var title = item.title;
  const button = $("<button></button>")
    .text(item.title)
    .addClass(
      `p-2 mb-2 w-100 text-start border-0 bg-transparent text-white color-white ${title}Button`
    )
    .attr("type", "button")
    .click(function () {
      console.log(item.title);
      page = item.title;
      navbarContainer
        .find("button")
        .removeClass("rounded-start-pill bg-white txtPink")
        .addClass("bg-transparent text-white color-white");
      $(this)
        .addClass(" rounded-start-pill bg-white txtPink")
        .removeClass("bg-transparent text-white color-white");

      MainContent();
    });
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

  function updateHeaderTitle(title) {
    $("header h3").text(title);
  }

  $("#navbarButtonsContainer button").click(function () {
    var title = $(this).text();
    updateHeaderTitle(title);
  });

  if (title === "Dashboard") {
    button
      .addClass("rounded-start-pill bg-white txtPink")
      .removeClass("bg-transparent text-white color-white");
  }
});

function MainContent() {
  let html = "";

  switch (page) {
    case "Dashboard":
      html = MainDashboard();
      break;
    case "Customers":
      html = MainUnderConstruction();
      break;
    case "Projects":
      html = MainUnderConstruction();
      break;
    case "Orders":
      html = MainUnderConstruction();
      break;
    case "Inventory":
      html = MainUnderConstruction();
      break;
    case "Accounts":
      html = MainUnderConstruction();
      break;
    case "Tasks":
      html = MainUnderConstruction();
      break;

    default:
      html = "<h1>Page not found!</h1>";
  }

  $("#mainContent").html(html);

  if (page === "Dashboard") {
    initializeCharts();
  }
}

MainContent();
