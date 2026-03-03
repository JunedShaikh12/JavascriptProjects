// let finalBlob = null;

// async function generatePdf() {

//     const existingPdfBytes = await fetch("template.pdf")
//         .then(res => res.arrayBuffer());

//     const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

//     const pages = pdfDoc.getPages();
//     const firstPage = pages[0];

//     const name = document.getElementById("name").value;
//     const address = document.getElementById("address").value;
//     const phone = document.getElementById("phone").value;

//     firstPage.drawText(name, { x: 150, y: 500, size: 12 });
//     firstPage.drawText(address, { x: 150, y: 470, size: 12 });
//     firstPage.drawText(phone, { x: 150, y: 440, size: 12 });

//     const pdfBytes = await pdfDoc.save();

//     finalBlob = new Blob([pdfBytes], { type: "application/pdf" });

//     const url = URL.createObjectURL(finalBlob);
//     document.getElementById("pdfViewer").src = url;
// }

// function downloadPdf() {

//     if (!finalBlob) {
//         alert("Please generate PDF first");
//         return;
//     }

//     const url = URL.createObjectURL(finalBlob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "BG_Form_Final.pdf";
//     a.click();
// }



