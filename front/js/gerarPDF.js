//instalar biblioteca jsPDF através de npm install jspdf --save no prompt'
//guia em https://www.npmjs.com/package/jspdf ou 
// https://medium.com/profdiegopinho/gerando-arquivos-pdf-com-javascript-23e8b19fde99

//Running in Node.js
const { jsPDF } = require("jspdf"); // will automatically load the node version

const doc = new jsPDF();
doc.text("Hello world!", 10, 10);
doc.save("a4.pdf"); // will save the file in the current working directory
