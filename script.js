document.addEventListener('DOMContentLoaded', function () {
    // --- Existing Interactive Text Section ---
    const realTimeInput = document.getElementById('realtime-input');
    const realTimeOutput = document.getElementById('realtime-output');

    if (realTimeInput && realTimeOutput) {
        realTimeInput.addEventListener('input', function() {
            realTimeOutput.textContent = realTimeInput.value;
        });
    }

    // --- Enhanced Animation on Scroll ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.getAttribute('data-delay') || '0');
                
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);

                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- Existing PDF Export ---
    const exportButton = document.getElementById('export-pdf');
    if (exportButton) {
        exportButton.addEventListener('click', function() {
            const element = document.querySelector('.container');
            const opt = {
                margin:       0.5,
                filename:     'Muhammad_Omar_Berliansyah_Portfolio.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(opt).from(element).save();
        });
    }
});