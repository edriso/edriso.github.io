const downloadBtn = document.getElementById('download-btn');
const bodyElm = document.body;

downloadBtn.addEventListener('click', async () => {
  const scrollPosition = window.scrollY;

  window.scrollTo(0, 0);
  bodyElm.classList.add('printing');

  await html2pdf(bodyElm, {
    filename: 'Mohamed_Idris_Resume.pdf',
    margin: 2,
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  });

  window.scrollTo(0, scrollPosition);
  bodyElm.classList.remove('printing');
});
