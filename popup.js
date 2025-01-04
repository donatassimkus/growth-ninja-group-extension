// Add event listeners to all copy buttons
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const textToCopy = button.getAttribute('data-copy');
    navigator.clipboard.writeText(textToCopy).then(() => {
      showNotification('Copied!');
    }).catch(err => {
      console.error('Error copying text: ', err);
    });
  });
});

// Show "Copied!" notification
function showNotification(message) {
  const notification = document.getElementById('copy-notification');
  notification.textContent = message;
  notification.classList.add('visible');

  setTimeout(() => {
    notification.classList.remove('visible');
  }, 2000); // Hide after 2 seconds
}
