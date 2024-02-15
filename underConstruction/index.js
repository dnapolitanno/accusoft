let MainUnderConstruction = function () {
  let html = "";

  html +=
    "<div id='underConstructionContent' class='d-flex align-items-center justify-content-center m-2 text-center'>";
  html += `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cone-striped txtPink" viewBox="0 0 16 16">
    <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9s-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4s1.2-.036 1.725-.098m4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257z"/>
  </svg>`;
  html += "<h4 class'text-white' >Page under construction...</h4>";
  html += "</div>";

  $("#mainContent").html(html);
};
