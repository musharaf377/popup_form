
let modalBtn = document.querySelector('.modal_btn');
let modalBg = document.querySelector('.modal_bg');
let modalClose = document.querySelector('.modal_close');

modalBtn.addEventListener('click',function(){
  modalBg.classList.add('bg_active');
});

modalClose.addEventListener('click',function(){
  modalBg.classList.remove('bg_active');
})