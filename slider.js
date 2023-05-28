let textsSlider = ['text1', 'text2', 'text3'];
  let leftSlider = document.querySelector('#left');
  let rightSlider = document.querySelector('#right');
  let slider = document.querySelector('#slider');
  
  //смена по времени
  let l = 0;
  let timerIds = setInterval(function() {
    slider.textContent = textsSlider[l++];
    if(l > 2){
      l = 0;
    }
  }, 1000);
  
  // смена по стрелочкам
  let o = 0;
  
  left.addEventListener('click', function(e) {
    e.preventDefault();
    slider.textContent = textsSlider[o--];
  
    // По кругу
    if(o < 0){
      o = 2;
    }
    
    if(o <= 0){
      o = 0;
    }
  });
  
  right.addEventListener('click', function(e) {
    e.preventDefault();
    slider.textContent = textsSlider[o++];
    
    // По кругу
    if(o > 2){
      o = 0;
    }
  
    if(o >= 2){
      o = 2;
    }
  });