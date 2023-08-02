// let items = document.querySelectorAll('.lang__nav_list-item');
// let selected = document.activeElement;
// for (let i = 0; i < items.length; i++) {
//     // items[i].addEventListener('click', () => {
//     //     items[i].style.background = '#FFF';
//     // })
//     if(document.location.li==activeElement[i].firstChild.li){
//         items[i].className += " lang__nav_list-item_color_active";
//     }
// }
// var items = document.querySelectorAll('.lang__nav_list-item');
// (function () {  
//     ('.lang__nav_list-item').each(function () { 
//         var location = window.location.href; 
//         var link = this.href;  
//         if(location == link) { 
//             (this).addClass('.lang__nav_list-item_color_active');
//         }
//     });
// });

    // var tags = document.querySelectorAll(".lang__nav_list-item");
    // for(i in tags){
    //   if(tags[i].className==".lang__nav_list-item"){
          
    //   }
    // }

	
// $(function () { 
//     $('.lang__nav_list a').each(function () {
//         var location = window.location.href;
//         var link = this.href; 
//         if(location == link) {
//             $('.lang__nav_list-item').addClass(' lang__nav_list-item_color_active');
//         }
//     });
// });
  
const navMenu = document.querySelectorAll('.lang__nav_list-item');
const links = navMenu.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
if (links[i].href === window.location.href) {
links[i].classList.add('lang__nav_list-item_color_active');
break;
}
}