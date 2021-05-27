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
      this.contact_number.value = Math.random() * 100000 | 0;
      let flag=true;
      for(let i=1;i<=3;i++){
        if(document.querySelectorAll("input")[i].value==""){
          flag=false
        }
       }
       if(flag){
          emailjs.sendForm('service_uo7jezw', 'template_y6wogrx', '#contact-form')
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            for(let i=1;i<=3;i++){
             document.querySelectorAll("input")[i].value="";
            }
            alert("Thanks for contacting me !")
     
         }, function(error) {
            console.log('FAILED...', error);
         });
       }else{
         alert("Plz fill out all the fields !");
       }
      
    

  });
}

