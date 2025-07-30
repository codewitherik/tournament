// EmailJS initialisieren
emailjs.init("DEIN_PUBLIC_KEY"); 

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    // Sendeformular an EmailJS
    emailjs.sendForm('DEIN_SERVICE_ID', 'DEIN_TEMPLATE_ID', this)
      .then(function () {
        alert('Nachricht erfolgreich gesendet!');
        form.reset();
      }, function (error) {
        alert('Fehler beim Senden der Nachricht: ' + JSON.stringify(error));
      });
  });
});

