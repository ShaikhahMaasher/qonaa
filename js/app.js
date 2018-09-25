 $(document).ready(function () {
     $('.sidenav').sidenav({
         edge: 'right',
         closeOnClick: true,
         draggable: true
     });

     $(".account-dropdown").dropdown({
         coverTrigger: false,
         closeOnClick: false,
         constrainWidth: false
     });

     $(".fashion-dropdown, .elctronic-dropdown, .mobiles-dropdown, .home-and-kitchen-dropdown").dropdown({
         hover: true,
         constrainWidth: false,
         alignment: 'left',
         coverTrigger: false
     });

     $(".collapsible").collapsible();
     $('.tabs').tabs();
 });

 // Dropdown Overlay
 window.onclick = function (e) {
     if (!e.target.classList.contains('account-dropdown')) {
         document.querySelector(".overlay").style.display = "none";
     }
 }

 // Dropdown Overlay
 // window.onhover = function (e) {
 //     if (e.target.classList.contains('fashion-dropdown')) {
 //         document.querySelector(".overlay").style.display = "block";
 //     }
 // }

 window.onmouseout = function (e) {
     if (!e.target.classList.contains('mega-menu')) {
         document.querySelector(".overlay").style.display = "none";
     }
 }

 $(".account-dropdown").click(function () {
     $('.overlay').fadeToggle();
 });

 //
 // var eIs;
 //var parentElm;
 // $(".mega-menu").hover(function (e) {
 //     eIs = e;
 //     document.querySelector(".overlay").style.display = "block";
 //     parentElm = e.target.parentElement;
 //     if(parentElm.classList.contains('mega-menu') || parentElm.parentElement.classList.contains('mega-menu')) {
 //              document.querySelector(".overlay").style.display = "block";
 //     }
 // });


 // Rating stars
 const starTotal = 5;
 var ratingStars = document.querySelectorAll('.stars-outer');
 ratingStars.forEach(function (star) {
     let starVal = star.nextElementSibling.innerText;
     let starPercentage = `${(starVal / starTotal) * 100}%`;
     star.firstElementChild.style.width = starPercentage;
 });
