document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('#nav-tabs button');
    const sections = document.querySelectorAll('.tab-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and sections
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked tab and corresponding section
            tab.classList.add('active');
            document.getElementById(tab.dataset.section).classList.add('active');
        });
    });

    // Optional: Basic contact form handler
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you for contacting us!');
            form.reset();
        });
    }
});