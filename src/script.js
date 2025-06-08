const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', () => {
  downloadBtn.style.display = 'none';

  // Scroll to the top to capture the full content
  window.scrollTo(0, 0);

  html2pdf(document.body, {
    filename: 'Mohamed_Idris_Resume.pdf',
    margin: 1,
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  });

  downloadBtn.style.display = 'block';
});
