let count = 0;
const btn = document.getElementById("counterBtn");
if (btn) {
  btn.addEventListener("click", () => {
    count++;
    btn.textContent = `Bấm thử: ${count}`;
    console.log("Counter updated:", count);
  });
}