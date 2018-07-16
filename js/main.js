
var body = document.querySelector('body');
var lightSwitch = body.querySelector('button');
var text = body.querySelector('.status');

lightSwitch.addEventListener('click', function(event){
  lightSwitch.classList.toggle('on');
  lightSwitch.classList.toggle('off');

  if (lightSwitch.classList.contains('off')) {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    text.innerHTML = 'Who turned off the light???';
  } else {
    body.style.backgroundColor = 'yellow';
    body.style.color = 'grey';
    text.innerHTML = 'Its so bright here!!';
  }
});
