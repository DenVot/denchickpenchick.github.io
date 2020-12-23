//Войтенко Денис 9А
//Данный скрипт отвечает за анимацию полей ввода
let inputsAnim = document.getElementsByTagName('input');

for(let input of inputsAnim) {
  let val = input.value;
  let data = '';
  input.onfocus = function() {      
    input.style.borderColor = '#feca30';
    input.style.transition = 'all 0.5s';    
  }

  input.onblur = function() {        
    input.style.borderColor = 'white';
    input.style.transition = 'all 0.5s';
  }
}