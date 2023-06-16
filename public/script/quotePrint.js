const quote = document.querySelector('#quote');
const printbt = document.querySelector('#pbtn');

const opt = {
    margin:       1,
  filename:     'quote.pdf',
  image:        { type: 'png' },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
}

printbt.addEventListener('click', () => {
    html2pdf().set(opt).from(quote).save();
})