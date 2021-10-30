let si = document.getElementById("si");

function redirection() {
  document.location.href =
    "./../Ver felicitacion de cumpleaños personalizada.html";
}

si.addEventListener("click", function (e) {
  alert("Jeje, obvio que no bb");
});

let no = document.getElementById("no");
no.addEventListener("mousemove", function (e) {
  let x = Math.round(Math.random() * 93);
  let y = Math.round(Math.random() * 93);
  no.style.left = x + "%";
  no.style.top = y + "%";
});
