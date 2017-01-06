var myApp = new Framework7();
var $$ = Dom7;
var token = 0;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

$$('.vz-rotate-90').on('click', function (e) {
    myApp.closePanel();
});

$$(".vz-goto-home").click(function(){
    mainView.router.load('index');
})

$$(document).on('deviceready', function() {
    if (token === 0) {
        mainView.router.load({
            url: 'login.html',
            ignoreCache: false,
        });
    } else {
        mainView.router.load({
            url: 'home.html',
            ignoreCache: false,
        });
    }
    $$(".preloader-img").hide();
});

// $(document).ready(function(){
//     if (token == 0) {
//         mainView.router.load({
//             url: 'login.html',
//             ignoreCache: false,
//         });
//     } else {
//         mainView.router.load({
//             url: 'home.html',
//             ignoreCache: false,
//         });
//     }
// })

$$(".about1").click(function(){
    mainView.router.load({
        url: 'about.html',
        ignoreCache: false,
    });
})

myApp.onPageInit('index', function (page) {

})

myApp.onPageInit('about', function (page) {
    mainView.showNavbar();
})

myApp.onPageInit('ourstory', function (page) {
    mainView.showNavbar();
})

myApp.onPageInit('login', function (page) {
    mainView.hideNavbar();
})

myApp.onPageInit('home', function (page) {
    mainView.showNavbar();
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })

    $$(".about1").click(function(){
        mainView.router.load({
            url: 'about.html',
            ignoreCache: false,
        });
    })

    $$(".about2").click(function(){
        mainView.router.load({
            url: 'ourstory.html',
            ignoreCache: false,
        });
    })
})

// $$(document).on('pageInit', function (e) {
//     var page = e.detail.page;
//     if (page.name === 'about') {
//         myApp.alert('Here comes About page');
//     }
// })

// $$(document).on('pageInit', '.page[data-page="about"]', function (e) {
//     myApp.alert('Here comes About page');
// })