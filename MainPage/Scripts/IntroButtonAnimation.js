//Войтенко Денис 9А
let introButton = document.querySelector('.get-tour-button');
let img = introButton.querySelector('.intro-arrow');

introButton.onmouseleave = function() {    
    introButton.style.transition = 'all 0.5s';
    introButton.style.background = '#feca30';    
    introButton.style.boxShadow = 'none';
}

introButton.onmouseenter = function() {    
    introButton.style.transition = 'all 0.5s';
    introButton.style.backgroundColor = 'white';        
    introButton.style.boxShadow = '0 0 10px rgb(255, 255, 255)';
}

introButton.onmouseup = function() {
    introButton.style.transition = 'all 0.5s';
    introButton.style.backgroundColor = 'white';       
    introButton.style.boxShadow = '0 0 10px rgb(255, 255, 255)';
}

introButton.onmousedown = function() {
    introButton.style.transition = 'all 0.5s';
    introButton.style.boxShadow = '0 0 20px rgb(255, 255, 255)';
}