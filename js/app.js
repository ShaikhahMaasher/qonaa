/** COMPONENT INITIALIZATION */
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
/** END OF COMPONENT INITIALIZATION */

/** Dropdown Overlay */
window.onclick = function (e) {
    if (!e.target.classList.contains('account-dropdown')) {
        document.querySelector(".overlay").style.display = "none";
    }
}

$(".account-dropdown").click(function () {
    $('.overlay').fadeToggle();
});

// window.onhover = function (e) {
//     if (e.target.classList.contains('fashion-dropdown')) {
//         document.querySelector(".overlay").style.display = "block";
//     }
// }
/** END OF Dropdown Overlay */

/** OVERLAY EFFECT ON CATEGORIES MENU */
window.onmouseout = function (e) {
    if (!e.target.classList.contains('mega-menu')) {
        document.querySelector(".overlay").style.display = "none";
    }
}

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
/** END OVERLAY EFFECT ON CATEGORIES MENU */

/** RATING STARS */
const starTotal = 5;
var ratingStars = document.querySelectorAll('.stars-outer');
ratingStars.forEach(function (star) {
    let starVal = star.nextElementSibling.innerText;
    let starPercentage = `${(starVal / starTotal) * 100}%`;
    star.firstElementChild.style.width = starPercentage;
});
/** END OF RATING STARS */

/** HERO SLIDER FOR LAND PAGE */
$('.hero-slider').slick({
    dots: true,
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    rtl: true,
});
/** End HERO SLIDER FOR LAND PAGE */

/** Catalog of products */
$(".wish-shape").click(function (e) {
    e.preventDefault();
    if ($(this).text() === 'favorite_border') {
        $(this).text('favorite');
        // $('.wish-shape').addClass('red-text');
    } else {
        $(this).text('favorite_border');
        // $('.wish-shape').removeClass('red-text');
    }
});
$(".add-to-cart").click(function (e) {
    if ($(this).children('.cart-shop').text() === 'add_shopping_cart') {
        $(this).html('<i class="material-icons cart-shop">check</i>تمت الإضافة');
        // $('.wish-shape').addClass('red-text');
    } else {
        $(this).html('إضافة لعربة التسوق<i class="material-icons cart-shop">add_shopping_cart</i>');
        // $('.wish-shape').removeClass('red-text');
    }
});
/** End Catalog of products */

/** Products Slider for Gategories, best selling */
$('.your-class').each(function () {
    $this = $(this).parent();
    $(this).slick({
        dots: false,
        infinite: false,
        prevArrow: $this.children('.prev'),
        nextArrow: $this.children('.next'),
        speed: 300,
        rtl: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: false,
                    dots: false
                }
             },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4.1,
                    slidesToScroll: 4
                }
             },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3.1,
                    slidesToScroll: 3
                }
             },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    prevArrow: " ",
                    nextArrow: " ",
                    slidesToShow: 2.1,
                    slidesToScroll: 2
                }
             }]
    });
});

/** Remove contatiner when small device */
$(window).resize(function () {
    if ($(window).width() <= 767) {
        $('.products-slider').removeClass('categories-wrapper');
    } else {
        $('.products-slider').addClass('categories-wrapper');
    }
});
/** End Products Slider for Gategories, best selling*/
/** Single product image slider desktop view*/
$('.single-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    rtl: true,
    asNavFor: '.single-product-nav'
});
$('.single-product-nav').each(function (){
    $numberOfSlider=parseInt($(this).next('.numbers_of_slider').text());
$(this).slick({
    slidesToShow:$numberOfSlider,
    slidesToScroll: 1,
    asNavFor: '.single-product-slider',
    dots: false,
    vartical:true,
    arrows:false,
    rtl: true,
    vertical:true,
    focusOnSelect: true
})
})
;
/** End Single product image slider desktop view*/
/** Single product image slider mobile view*/
$('.single-product-slider-mobile').slick({
dots: true,
infinite: true,
autoplay: true,
autoplaySpeed: 6000,
arrows: false,
rtl: true,
});
/** End Single product image slider mobile view*/
/** Category filters for desktop and tablet view */
$('.dropdown-trigger').dropdown({coverTrigger:false});
$('.datepicker').datepicker({isRTL:true});
$('input:radio[name="group1"]').change(
function(){
    if ($(this).is(':checked')) {
        var $text=$(this).next('span').text();
    $(this).parents('.dropdown-conten-filter').prev('a').html(`<i class="material-icons">arrow_drop_down</i>${$text}`);
}
});
/** End Category filters for desktop and tablet view */