var app = document.getElementById('app');
 
var customNodeCreator = function(character) {
  return document.createTextNode(character);
}
 
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
  onCreateTextNode: customNodeCreator,
});
 
typewriter
  .typeString('Hi!! 👋')
  .changeDelay(50)
  .pauseFor(1500)
  .changeDeleteSpeed(5)
  .deleteChars(7)
  .typeString('I am Dhairya Taneja!')
  .pauseFor(875)
  .deleteChars(20)
  .typeString('a B.E CSE Student..')
  .pauseFor(1500)
  .deleteChars(19)
  .start();


// if(window.innerWidth > 440){
//   document.getElementsByClassName('hamburger')[0].style.display = 'none';
// }else{
//   document.getElementsByClassName('hamburger')[0].style.display = 'unset';
// }

document.getElementsByClassName('hamburger')[0].addEventListener('click', (e) => {
  console.log(true)
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