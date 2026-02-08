document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    let output = "<h3>Введённые данные:</h3>";

    for (const [name, value] of formData.entries()) {
      output += `<p><b>${name}</b>: ${value}</p>`;
    }

    if (!formData.has("trainer")) {
      output += "<p><b>trainer</b>: нет</p>";
    }

    document.getElementById("result").innerHTML = output;
  });
});
