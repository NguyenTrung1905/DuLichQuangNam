//Owl Carousel Section

$('#owl-slideQC').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    animateOut: 'fadeOut',
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#owl-slideMainEvent').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    animateOut: 'fadeOut',
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#owl-slideSubEvent').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    dots:false,
    animateOut: 'fadeOut',
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1400:{
            items:4
        }
    }
})

//Time Section
// Function to format 1 in 01
const zeroFill = n => {
    return ('0' + n).slice(-2);
}
// Creates interval
const interval = setInterval(() => {
    // Get current time
    const now = new Date();
    // Format date as in mm/dd/aaaa hh:ii:ss
    const dateTime = zeroFill(now.getUTCDate()) + ' - ' + zeroFill((now.getMonth() + 1)) + ' - ' + now.getFullYear() + ', ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
    // Display the date and time on the screen using div#date-time
    document.getElementById('time-date').innerHTML = dateTime;
}, 1000);

//Data Countdown Section
$('[data-countdown]').each(function () {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
        $this.html(event.strftime(''
            + '<div class="tdDate" ><p class="pDate" id="days">%D</p><span id="lblDays" class="ptDate">Ngày</span></div> '
            + '<div class="tdDate" ><p class="pDate" id="hours">%H</p><span id="lblHours" class="ptDate">Giờ</span></div> '
            + '<div class="tdDate" ><p class="pDate" id="minutes">%M</p><span id="lblMins" class="ptDate">Phút</span></div> '
            + '<div class="tdDate" ><p class="pDate" id="seconds">%S</p><span id="lblSeconds" class="ptDate">Giây</span></div> '));
    });
});

//Re-size Section
function resizeItemsHot() {
    var itemsHotWidth = $('.utilities-list ul li').width();
    var heightItemsHot = $(".utilities-list ul li");
    var heightsItemsHot = itemsHotWidth/0.68;
    for(var i=0;i<heightItemsHot.length;i++){
        heightItemsHot[i].style.height = heightsItemsHot + "px";
    }

    heightMenuItemsHot.innerHeight(heightsItemsHot);
}

$(document).ready(function () {
    window.addEventListener("resizeItemsHot", resizeItemsHot);
    window.onresize = function () {
        resizeItemsHot();
    };
        resizeItemsHot();
});

function resizeNews() {
    var imgNewsWidth = $('.section-news .main-news-container .main-news-group .img-main-news').width();
    var heightImgNews = $(".section-news .main-news-container .main-news-group .img-main-news");
    var heightsImgNews = imgNewsWidth/1.888;
    for(var i=0;i<heightImgNews.length;i++){
        heightImgNews[i].style.height = heightsImgNews + "px";
    }
}

function resizeRightNews() {
    var imgRightNewsWidth = $('.section-news .sub-news-container .sub-news-group .img-sub-news').width();
    var heightImgRightNews = $(".section-news .sub-news-container .sub-news-group .img-sub-news");
    var heightsImgRightNews = imgRightNewsWidth/1.571428571428571;
    for(var i=0;i<heightImgRightNews.length;i++){
        heightImgRightNews[i].style.height = heightsImgRightNews + "px";
    }
}

$(document).ready(function () {
    window.addEventListener("resizeNews", resizeNews);
    window.addEventListener("resizeRightNews", resizeRightNews);
    window.onresize = function () {
        resizeNews();
        resizeRightNews();
    };
        resizeNews();
        resizeRightNews();
});

//Fancy Box Section
