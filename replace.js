document.addEventListener("keydown", function (event) {
  if (event.code === "KeyZ") {
    var elements = document.getElementsByClassName("aalink");
    for (var i = 0; i < elements.length; i++) {
      elements[i].href = elements[i].href.replace("view", "edit");
      elements[i].target = "_blank";
    }

    var shortname = document.getElementById("id_shortname");
    if (shortname) {
      shortname.value = "MP_SQ_" + shortname.value;
    }

    var feedback = document.createElement("div");
    feedback.style.position = "fixed";
    feedback.style.bottom = "10px";
    feedback.style.right = "10px";
    feedback.style.backgroundColor = "orange";
    feedback.style.padding = "10px";
    feedback.innerHTML = "Changements appliqués";
    document.body.appendChild(feedback);
    setTimeout(function () {
      feedback.style.display = "none";
    }, 3000);
  }
});