var nav_item_container = document.querySelector('.nav-item-container');
var nav_item = document.querySelector('.nav-item');
var menu = document.querySelector('.menu');
let open_menu = false;

menu.addEventListener('click',(e)=>{
    open_menu=!open_menu;
    console.log(open_menu)
    if(open_menu===true){
        nav_item_container.classList.add('block','w-full')
        nav_item.classList.add('block','w-full')
    }else{
        nav_item_container.classList.remove('block')
        nav_item.classList.remove('block')
    }
})


