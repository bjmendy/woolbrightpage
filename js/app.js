const heading = document.querySelector('h1');
const audio = document.querySelector('audio');

heading.addEventListener('mouseover',()=> {
  document.body.style.animationPlayState = 'running';
});
heading.addEventListener('mouseout',()=> {
  document.body.style.animationPlayState = 'paused';
});