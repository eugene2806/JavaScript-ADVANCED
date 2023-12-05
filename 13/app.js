"use strict";

const wrapper = document.querySelector('.wrapper');
let counter = 0;

wrapper.addEventListener('click', (e) => {
  
  if(e.target.classList.contains('button')) {
    renameButton(e.target); 
    counter ++;
    wrapper.querySelector('.count').innerHTML = `Click: ${counter}`;
  }
})

function renameButton(e) {
      const el = e;
      if (!el.classList.contains("button_active")) {
        const [...elementList] = wrapper.children;
        elementList.forEach((element) => {
          element.classList.remove("button_active");
          element.innerHTML = "Нажми меня";
        });
        el.classList.add("button_active");
        el.innerHTML = "Нажато";
      }
}