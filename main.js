

new Swiper('.swiper',{


    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    slidesPerView: 'auto',
  
    spaceBetween:16,
  
  });
  
  
  // let text = document.querySelector('.show-all');
  // let one = document.querySelector('.second-half');
  // let two = document.querySelector('.desctop-content');
  // let show = document.querySelector('.show-all__text');
  
  // let hide = document.createElement('div');
  // hide.innerHTML = 'скрыть';
  
  
  
  
  // if (document.documentElement.clientWidth > 800 && document.documentElement.clientWidth < 1000 ) {
  //   text.addEventListener('click',function(){
  //     one.classList.toggle('second-half--click');
  //     two.classList.toggle('desctop-content--click');
      
  //     let txt = show.textContent;
  //     show.textContent = (txt == 'Показать все' && 'Скрыть все') || 'Показать все';
  
  //   })
  // }
  
  let text = document.querySelector('.show-all');
  let one = document.querySelector('.second-half');
  let two = document.querySelector('.desctop-content');
  let show = document.querySelector('.show-all__text');
  
  
    text.addEventListener('click',function(){
      one.classList.toggle('second-half--click');
      two.classList.toggle('desctop-content--click');
      
      let txt = show.textContent;
      show.textContent = (txt == 'Показать все' && 'Скрыть все') || 'Показать все';
  
    })
  
  
  
  
  
  
  
  
  
  