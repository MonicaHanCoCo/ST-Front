<template>
    <div>
        <pdf-viewer :src="pdfUrl" :worker-src="workerUrl"></pdf-viewer>
    </div>
</template>
<script>
import pdfjsLib from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/web/pdf_viewer.css';
console.log(pdfjsLib);
pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js';
export default {
  data() {
    return {
      pdfUrl: '../assets/IntegrateTesting.pdf',
      workerUrl: 'pdfjs-dist/build/pdf.worker.js'
    };
  }
};
</script>