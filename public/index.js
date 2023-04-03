const menu = document.querySelector('#menu');
const list = document.querySelector('#list');

menu.addEventListener('click', () =>{
    if (list.classList.contains('hidden')){
        list.classList.remove('hidden');
    }  
    else{
        list.classList.add('hidden');
    }
});