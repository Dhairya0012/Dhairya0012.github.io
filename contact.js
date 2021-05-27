document.getElementsByClassName('hamburger')[0].addEventListener('click', (e) => {
      const nav = document.getElementById('mobile-nav');
      const icon = document.getElementsByClassName('hamburger')[0];
      const img = document.getElementById('img-mobile');
      const root = document.getElementById('root');
      if(nav.style.display !== 'flex'){
        nav.style.display = 'flex';
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        img.style.display = 'none';
        root.style.backgroundImage = 'none';
      }else{
        nav.style.transform = 'scale(0)';
        setTimeout(() => {nav.style.display = 'none'; nav.style.transform = null}, 500)
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        img.style.display = 'unset';
        root.style.backgroundImage = null;
    }
  });

  (function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_mT6S1fDpjw8CoVHSLClH0');
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_uo7jezw', 'template_y6wogrx', '#contact-form')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Mail Sent!")
    }, function(error) {
       console.log('FAILED...', error);
    });
  });
}