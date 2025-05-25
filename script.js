function markProgress() {
  const progressBar = document.getElementById("progress-bar");
  let width = parseInt(progressBar.style.width);
  if (width < 100) {
    width += 20;
    progressBar.style.width = width + "%";
    document.querySelector("p").textContent = width + "% completed";
  } else {
    alert("Course already completed!");
  }
}