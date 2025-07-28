
$(document).ready(function () {
  // Smooth scroll for navbar links
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 60,
        },
        800
      );
    }
  });

  // Handle contact form submission with EmailJS
  $("#contact-form").on("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        this.reset();
      }, (error) => {
        console.error("❌ EmailJS Error:", error);
        alert("Oops! Failed to send message. Please try again later.");
      });
  });
});
