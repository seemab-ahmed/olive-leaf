// Show success message after form submission
if (window.location.hash === '#success') {
    var successMsg = document.getElementById('success');
    if (successMsg) {
        successMsg.style.display = 'block';
        // Scroll to success message smoothly
        setTimeout(function() {
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}
