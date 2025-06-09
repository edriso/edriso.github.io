const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', async () => {
  const scrollPosition = window.scrollY;

  window.scrollTo(0, 0);
  downloadBtn.style.display = 'none';

  await html2pdf(document.body, {
    filename: 'Mohamed_Idris_Resume.pdf',
    margin: 2,
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  });

  window.scrollTo(0, scrollPosition);
  downloadBtn.style.display = 'block';
});
