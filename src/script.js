const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
  window.print();
});
