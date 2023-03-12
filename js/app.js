// start Global Variables
const fragment = document.createDocumentFragment();
const list = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
// End Global Variables

// build the Navigation bar
function nav(){
   sections.forEach(section => {
      const li = document.createElement('li');     //creat list
      const secId = section.getAttribute('id');    //get id section
      const secTitle = section.getAttribute('data-nav');     //get title section
      //add anchor to items list to represent sections 
      li.innerHTML= `<a href= "#${secId}" class = "menu__link" >${secTitle}</a>`;      
      //add the items list to document fragment to improve performance
      fragment.appendChild(li);      
      //add event to make smooth scroll when click on any section
      li.addEventListener('click' , ev =>{
         ev.preventDefault();
         section.scrollIntoView({
            behavior: "smooth"
         });
      })
   });
   list.appendChild(fragment);
}
nav();

/****Set sections as active****/
const items = document.querySelectorAll('a.menu__link');

window.addEventListener('scroll', func => {
   sections.forEach(section =>{
      const secTop = section.getBoundingClientRect().top;    // get top of section
      const secTitle = section.getAttribute('data-nav');     //get title section

      if (secTop >= 0 && secTop < 200 ){
         section.classList.add('your-active-class');  // add class 'your-active-class' to section
         items.forEach(item =>{
            if (item.textContent === secTitle){
               item.classList.add('active');   // Add class 'active' to items
            }else{
               item.classList.remove('active');
            }
         })
      }else{
         section.classList.remove('your-active-class');
      }
   });
});
