
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
    event.preventDefault();$(document).ready(function () {

// ✅ Initialize EmailJS
emailjs.init("D89W0YTeK_FwfiToR");

// Handle form submit
$("#contact-form").on("submit", function (e) {
e.preventDefault();


emailjs.sendForm(
  "service_3n2ajrn",
  "template_70ilc8d",
  this
)
.then(function () {
  alert("Message sent successfully!");
  $("#contact-form")[0].reset();
})
.catch(function (error) {
  console.log("ERROR:", error);
  alert("Failed to send message");
});


});

});


    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        alert(" Message sent successfully!");
        this.reset();
      }, (error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Failed to send message. Please try again later.");
      });
  });
});
