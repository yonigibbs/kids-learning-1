function generateSum() {
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);

  document.getElementById("first").innerText = Math.max(x, y);
  document.getElementById("second").innerText = Math.min(x, y);
}
