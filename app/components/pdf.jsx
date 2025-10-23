import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const handleDownloadPDF = () => {
  if (!pages || pages.length === 0) {
    alert("No pages found.");
    return;
  }

  const pdf = new jsPDF("p", "mm", "a4");
  const margin = 15;
  const pageWidth = pdf.internal.pageSize.getWidth() - margin * 2;
  let firstPage = true;

  pages.forEach((p, index) => {
    if (!firstPage) pdf.addPage();
    firstPage = false;

    let y = margin;

    // ----------------- Logo + Brand -----------------
    const logoWidth = 25;
    const logoHeight = 25;
    const logoPath = "logo.png"; 
    try {
      pdf.addImage(logoPath, "PNG", margin, y, logoWidth, logoHeight);
    } catch (err) {
      console.warn("Logo not found:", err);
    }

    // Brand Name next to logo
    pdf.setFontSize(20);
    pdf.setTextColor(220, 0, 0); // red
    pdf.setFont("helvetica", "bold");
    pdf.text("GENWIN", margin + logoWidth + 5, y + 15);

    y += logoHeight + 5;

    // ----------------- Intro Paragraph -----------------
    const intro = "GENWIN is committed to providing innovative adhesive solutions that meet the diverse needs of customers across industries. Every tape we produce is engineered to deliver exceptional performance, durability, and ease of use. From personal DIY projects to complex industrial applications, our double-sided tapes are designed to ensure seamless bonding and outstanding results.";
    const introLines = pdf.splitTextToSize(intro, pageWidth);
    pdf.setFontSize(11);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "normal");
    pdf.text(introLines, margin, y);
    y += introLines.length * 7 + 5;

    // ----------------- Product Details -----------------
    const productText = `
${index + 1}. Product Name: ${p.name}
Product Size: ${p.size}
Product Code: ${p.code}
Product Price: ₹ ${p.price}
Packing: ${p.packing}
`;
    const productLines = pdf.splitTextToSize(productText, pageWidth);
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text(productLines, margin, y);
    y += productLines.length * 7 + 5;

    // ----------------- Contact Info -----------------
    const contactText = `
Contact Us
Address:
National auto suppliers 761/7A Chabi Ganj, Kashmere Gate, Delhi -110006

Email: contact@genwin-auto.com
Phone: +91-9717121626
`;
    const contactLines = pdf.splitTextToSize(contactText, pageWidth);
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    pdf.text(contactLines, margin, y);
    y += contactLines.length * 7 + 5;

    // ----------------- Clickable Links -----------------
    pdf.setTextColor(0, 102, 204); // blue
    pdf.textWithLink("Instagram", margin, y, {
      url: "https://www.instagram.com/genwin.official?igsh=bTRnOHAwOXV6dm9s",
    });
    pdf.textWithLink("Website", margin + 40, y, {
      url: "https://www.genwinauto.com/",
    });

    // ----------------- Page Number -----------------
    pdf.setTextColor(100);
    pdf.setFontSize(9);
    pdf.text(`Page ${index + 1} of ${pages.length}`, pdf.internal.pageSize.getWidth() - margin - 20, pdf.internal.pageSize.getHeight() - 10);
  });

  pdf.save("Genwin_Catalog.pdf");
};
export default handleDownloadPDF;