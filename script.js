ScrollReveal({ reset: true, 
distance:'60px',
duration:2500,
});
ScrollReveal().reveal('.content', { origin:'bottom' });
ScrollReveal().reveal('.illistrator', { origin:'bottom' });
ScrollReveal().reveal('.image', {origin:'bottom' });
ScrollReveal().reveal('.content2', { origin:'right' });
ScrollReveal().reveal('.card1', { origin:'bottom' });
ScrollReveal().reveal('.cord2', {origin:'bottom' });
ScrollReveal().reveal('.card3', { origin:'bottom' });


// -----------------------------------form vaidation------------------------------------
function clearerrors(){
  errors=document.getElementsByClassName('formerror');
  for(let items of errors){
    items.innerHTML="";
  }
}
function seterror(id, error){
    // set error inside tag of id
    element=document.getElementById(id);
   element.getElementsByClassName('formerror')[0].innerHTML=error;
}

function validateForm(){
    var returnval=true;
    clearerrors();
    var name=document.forms['myForm']['fname'].value;
   if(name.length<5){
    seterror("name","name is too short");
    returnval=false;
   }
   var email=document.forms['myForm']['fmail'].value;
   if(email.length>15){
    seterror("email","Email length is too long");
    returnval=false;
   }
   var phone=document.forms['myForm']['fphone'].value;
   if(phone.length!=10){
    seterror("phone","phone number should be of ten digit");
    returnval=false;
   }
   return returnval;
}
// ------------------------------------swiper js---------------------------
var swiper = new Swiper(".card_slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, breakpoints: {
        0:
        {
            slidesPreview:1,
           
        },
        512: {
          slidesPerView: 2,
         
        },
        768: {
          slidesPerView: 3,
          
        },
        1060: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });

  // -----------------------------------------loader-----------------------------
  // var loader=document.getElementById("loader");
  // window.addEventListener("load", function(){
  //   loader.style.display="none";
  // })

  