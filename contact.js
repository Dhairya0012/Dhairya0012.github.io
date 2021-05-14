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