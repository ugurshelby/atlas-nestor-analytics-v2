// Simple Navigation - No Active States
document.addEventListener('DOMContentLoaded', function() {
    // Navigation is now purely hover-based
    // No active states or click animations
    console.log('Navigation loaded - hover effects only');
    
    // PDF Download Functionality
    const downloadPdfBtn = document.getElementById('downloadPdfBtn');
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', generatePDF);
    }
});

// PDF Generation Function
async function generatePDF() {
    const btn = document.getElementById('downloadPdfBtn');
    const originalContent = btn.innerHTML;
    
    try {
        // Show loading state
        btn.classList.add('loading');
        btn.innerHTML = '<i class="fas fa-spinner"></i><span>PDF Oluşturuluyor...</span>';
        
        // Get the main content area
        const element = document.querySelector('.main');
        if (!element) {
            throw new Error('İçerik bulunamadı');
        }
        
        // Create canvas from HTML
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#0f0f0f',
            width: element.scrollWidth,
            height: element.scrollHeight,
            scrollX: 0,
            scrollY: 0
        });
        
        // Create PDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        // Calculate dimensions
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        
        // Add image to PDF
        let position = 0;
        const imgData = canvas.toDataURL('image/png');
        
        // Add first page
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        // Add additional pages if needed
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        // Generate filename with current date
        const now = new Date();
        const dateStr = now.toLocaleDateString('tr-TR').replace(/\./g, '-');
        const filename = `Atlas-Nestor-Genel-Analiz-Raporu-${dateStr}.pdf`;
        
        // Download PDF
        pdf.save(filename);
        
        // Show success message
        btn.innerHTML = '<i class="fas fa-check"></i><span>PDF İndirildi!</span>';
        btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            btn.classList.remove('loading');
            btn.innerHTML = originalContent;
            btn.style.background = '';
        }, 2000);
        
    } catch (error) {
        console.error('PDF oluşturma hatası:', error);
        
        // Show error message
        btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>Hata Oluştu</span>';
        btn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        
        // Reset button after 3 seconds
        setTimeout(() => {
            btn.classList.remove('loading');
            btn.innerHTML = originalContent;
            btn.style.background = '';
        }, 3000);
    }
}