var debugVal;
var debugVal;

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
    $('.tabs').tabs();
    $(".collapsible").collapsible();
    $(".collapsible.expandable").collapsible({
        accordion: false,
        onCloseStart: function (e) {
            e.firstElementChild.firstElementChild.classList = 'fa fa-angle-left';
        },
        onOpenStart(e) {
            e.firstElementChild.firstElementChild.classList = 'fa fa-angle-down';
        }
    });

    $(document).ready(function () {
        $('.modal').modal({
            preventScrolling: true
        });
    });
});
/** END OF COMPONENT INITIALIZATION */
// FIXME: dropdown - overlay effect
/** Dropdown Overlay */
window.onclick = function (e) {
    var displayVal = 'nothing!';
    if (!e.target.classList.contains('account-dropdown')) {
        displayVal = 22;
        // document.querySelector(".overlay").style.display = "none";
    }
}

$(".account-dropdown").click(function () {
    $('.overlay').fadeToggle();
});

// FIXME: Category menu - overlay effect
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
        responsive: [{
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
            }
        ]
    });
});

/** End Products Slider for Gategories, best selling*/
$(".adding-to-cart-btn").click(function (e) {
    if ($(this).children('.btn').text() === 'إضافة لعربة التسوق') {
        $(this).children('.btn').html(' <i class="fa fa-check"></i> تمت الإضافة');
    } else {
        $(this).children('.btn').html('إضافة لعربة التسوق');
    }
});
/** Single product image slider desktop view*/
$('.single-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    rtl: true,
    asNavFor: '.single-product-nav'
});
$('.single-product-nav').each(function () {
    $numberOfSlider = parseInt($(this).next('.numbers_of_slider').text());
    $(this).slick({
        slidesToShow: $numberOfSlider,
        slidesToScroll: 1,
        asNavFor: '.single-product-slider',
        dots: false,
        vartical: true,
        arrows: false,
        rtl: true,
        vertical: true,
        focusOnSelect: true
    })
});
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
/** STYLE TOP MENU SEARCH */
function addMobileSearch() {
    $('.main-menu .search .input-field').addClass('mobile-search-input');
    $('#search-back').style.display = "block";
}

function removeMobileSearch() {
    $('.main-menu .search .input-field').removeClass('mobile-search-input');
}
$("#search-icon").click(addMobileSearch);
$("#search").focusout(removeMobileSearch);
/** END OF STYLING TOP MENU SEARCH */

/** Category filters for desktop and tablet view */
$('.dropdown-trigger').dropdown({
    coverTrigger: false
});
$('.datepicker').datepicker({
    isRTL: true
});
$('input:radio[name="group1"]').change(
    function () {
        if ($(this).is(':checked')) {
            var $text = $(this).next('span').text();
            $(this).parents('.dropdown-conten-filter').prev('a').html(`<i class="material-icons">arrow_drop_down</i>${$text}`);
        }
    });

/** End Category filters for desktop and tablet view */
/** image zoom */
var zoomOptions = {
    zoomType: "inner"
};
$(".single-product-slider .slick-current img").elevateZoom(zoomOptions);
$(".single-product-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $.removeData(currentSlide, "elevateZoom");
    $(".zoomContainer").remove();
});
$(".single-product-slider").on("afterChange", function () {
    $(".single-product-slider .slick-current img").elevateZoom(zoomOptions);
});
/** End image zoom */
/** Payment page*/    
$('.payment-options .credit-card,.switch-payment-method').click(function(){
    $('.payment-options .credit-card').addClass( 'selected' );
        $('.payment-options .cash-on-delivery').removeClass( 'selected' );
        $('.payment-method-wrapper .form-container').show();
        $('.payment-method-wrapper .cash-on-dilvery-container').hide();
        $('.cod-price').hide();

});
$('.payment-options .cash-on-delivery').click(function(){
        $(this).addClass( 'selected' );
        $('.payment-options .credit-card').removeClass( 'selected' );
        $('.payment-method-wrapper .form-container').hide();
        $('.payment-method-wrapper .cash-on-dilvery-container').show();
        $('.cod-price').show();
});
$('.shipment-text-container input').click(function(){
   if($('.shipment-text-container .filled-in').is(':checked')){
       $('.shipment-text-container span').text('لتوصيل المنتجات بمجرد الانتهاء من تحضيرها، يمكنك إلغاء تحديد المربع.').css('font-weight','bold');
   }
   else{
       $('.shipment-text-container span').text('توصيل المنتجات في أقل عدد ممكن من الشحنات.').css('font-weight','normal');;
   }

});
/**End payment page*/