document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect data from the form
    const formData = {
      fullName: document.getElementById('fullName').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      partnerName: document.getElementById('partnerName').value.trim(),
      weddingDate: document.getElementById('weddingDate').value,
      venue: document.getElementById('venue').value.trim(),
      guestCount: document.getElementById('guestCount').value,
      budget: document.getElementById('budget').value,
      message: document.getElementById('message').value.trim()
    };

    // Basic validation
    if (!formData.fullName || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Construct the WhatsApp message
    const whatsappNumber = '919112267092'; // Replace with your WhatsApp number (with country code)
    let whatsappMessage = `Hello! I'd like to inquire about wedding photography.\n\n`;
    whatsappMessage += `👤 Name: ${formData.fullName}\n`;
    if (formData.phone) whatsappMessage += `📞 Phone: ${formData.phone}\n`;
    if (formData.partnerName) whatsappMessage += `💑 Partner's Name: ${formData.partnerName}\n`;
    if (formData.weddingDate) whatsappMessage += `📅 Wedding Date: ${formData.weddingDate}\n`;
    if (formData.venue) whatsappMessage += `📍 Venue: ${formData.venue}\n`;
    if (formData.guestCount) whatsappMessage += `👥 Guest Count: ${formData.guestCount}\n`;
    if (formData.budget) whatsappMessage += `💰 Budget: ${formData.budget}\n\n`;
    whatsappMessage += `💌 Message: ${formData.message}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect the user to WhatsApp
    window.open(whatsappURL, '_blank');
  });
});


const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
